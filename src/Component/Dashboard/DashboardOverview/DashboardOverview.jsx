import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Img,
  Button,
  Spinner,
  Stack
} from "@chakra-ui/react";
import { useUser } from "../../context/UserContext";
import TodaysLeads from "./TodaysLeads";
import { Link } from "react-router-dom";
import TotalCumstmer from "../../../../public/totalCust.svg";
import TodaysFollowup from "../../../../public/todays.svg";
import AssignedLeads from "../../../../public/assigned.svg";
import Missed from "../../../../public/missed.svg";
import Transfer from "../../../../public/transfer.svg";
import nextDay from "../../../../public/nextDay.svg"
import filter from  "../../../../public/filter.svg" ;
import upcomingImage from "../../../../public/upcoming.svg"
import lostLeadsIcon from "../../../../public/lostLeads.svg";
import {  AddIcon } from '@chakra-ui/icons'



const DashboardOverview = () => {
  const [users, setUsers] = useState([]);
  const [assigned, setAssigned] = useState([]);
  const [transfered, setTransfered] = useState([]);
  const [ads, setAds] = useState([]);
  const { userData } = useUser();
  const [loading, setLoading] = useState("false");
  const [upcoming, setUpcoming] = useState([]);
  const [missed, setMissed] = useState([]);
  const [todaysFollowups, setTodaysFollowups] = useState([])
  const [nextDaysleads, setNextDaysleads] = useState([])
  const [workOrders, setWorkOrders] = useState([])
  const [lostLeads, setLostLeads] = useState([])
  // console.log("leads", leads);
  console.log("users", users);

  const isSales = userData?.userRole === "Sales";

  const apiUrl = import.meta.env.VITE_APP_API_URL;


  //   const token = localStorage.getItem("token");

  //   const getTodaysLeads = async () => {
  //     try {
  //       const response = await fetch(`${apiUrl}/sales/get_todays_leads`, {
  //         method: "GET",
  //         "Content-Type": "application/json",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       const data = await response.json();
  //       console.log("data", data?.todaysLeads?.length);

  //       if (data) {
  //         setLeads(data.todaysLeads?.length);
  //       }
  //     } catch (error) {
  //       alert(error);
  //     }
  //   };

  //   // Check if the user role is "Admin" or "Sales" before calling getTodaysLeads
  //   if (userData?.userRole === "Admin" || userData?.userRole === "Sales") {
  //     getTodaysLeads();
  //   }
  // }, [userData?.userRole]);

  useEffect(() => {
    setLoading(false);
    const token = localStorage.getItem("token");
    const getAllAdvertisements = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${apiUrl}/advertise/getAllAdvertisements`, {
          method: "GET",
          "Content-Type": "application/json",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setLoading(false);
        console.log("all data", data);
        if (data) {
          setUsers(data.customers);
          setAds(data)
          // setAssigned(data.assignedLeads);
          // setTransfered(data.transferredLeads);
          // setMissed(data.missedFollowUps);
          // setTodaysFollowups(data.todaysFollowUps);
          // setNextDaysleads(data.nextDaysFollowUps);
          // setWorkOrders(data.activeWorkOrders);
          // setUpcoming(data.upcomingFollowUps);
          // setLostLeads(data.lostLeads);
        }
      } catch (error) {
        setLoading(false);
        alert(error);
      }
    };
    getAllAdvertisements();
  }, []);

  return (
    <>
      {loading ? (
        <Box position="absolute"
        top="50%"
        left="50%">
      <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='red.500'
      size='xl'
      
    />
    <h3>loading...</h3></Box>
      ) : (
        <>
        
          <Flex direction={{ base: "column", md: "row" }} gap="35px" justifyContent="center">
            {/* Total Customers and Total Leads*/}
            <Flex
              direction={{ md: "row" }}
              gap="25px"
              justifyContent="center"
              marginTop="30px"
              align="center"
            >
            
  
              <Link to="/totalAds">
                <Card
                  as="flex"
                  width={{ base: "100%", md: "350px" }}
                  height={{ base: "100%", md: "100px" }}
                  minW="200px"
                  maxH="100px"
                  borderLeft="4px solid red"
                  borderBottom="4px solid red"
                  borderRadius="12px"
                  boxShadow="md" // Add a shadow for a card-like appearance
                  p="4" // Adjust padding as needed
                  display="flex"
                  direction={{ base: "column", md: "row", lg: "row" }}
                  justifyContent={{ base: "center", md: "space-around" }}
                  alignItems="center"
                  gap="20px"
                >
                  <img src={filter} alt="Total FollowUp" />
                  <Text fontSize={{ base: "0.7rem", md: "1.2rem" }} fontWeight="bold">
                    Total Ads
                  </Text>
                  {ads && (
                    <Heading size="lg" color="black">
                      {ads.length}
                    </Heading>
                  )}
                </Card>
              </Link>
            </Flex>
            {/* Today and Next day followups*/}
            {/* <Flex
              direction={{ md: "row" }}
              gap="25px"
              justifyContent="center"
              marginTop="30px"
              align="center"
            >
              <Link to="/todayAds">
                <Card
                  as="flex"
                  width={{ base: "100%", md: "350px" }}
                  height={{ base: "100%", md: "100px" }}
                  minW="200px"
                  maxH="100px"
                  borderLeft="4px solid lightBlue"
                  borderBottom="4px solid lightBlue"
                  borderRadius="12px"
                  boxShadow="md" // Add a shadow for a card-like appearance
                  p="4" // Adjust padding as needed
                  display="flex"
                  direction={{ base: "column", md: "row", lg: "row" }}
                  justifyContent={{ base: "center", md: "space-around" }}
                  alignItems="center"
                  gap="20px"
                >
                  <img src={TodaysFollowup} alt="Total FollowUp" />
                  <Text fontSize={{ base: "0.7rem", md: "1.2rem" }} fontWeight="bold">
                    Todays Ads
                  </Text>
                  {todaysFollowups && (
                    <Heading size="lg" color="black">
                      {todaysFollowups.length}
                    </Heading>
                  )}
                </Card>
              </Link>
              
            </Flex> */}
          </Flex>
  
        
          
        </>
      )}
    </>
  );
  
};

export default DashboardOverview;
