import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  List,
  ListItem,
  Box,
  Flex,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button,
} from "@chakra-ui/react";
import {
  Dashboard as DashboardIcon,
  GroupAdd as GroupAddIcon,
  // ContactMail as ContactMailIcon,
  // ArrowForward as MovingIcon,
  // MultilineChart as MultilineChartIcon,
  ExitToApp as ExitToAppIcon,
  // Menu as MenuIcon,
} from "@mui/icons-material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import ShopOutlinedIcon from '@mui/icons-material/ShopOutlined';
import PeopleIcon from "@mui/icons-material/People";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import TimelineIcon from "@mui/icons-material/Timeline";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

import { useAuth } from "../context/AuthContext";
import { useUser } from "../context/UserContext";
import { useWorkForm } from "../context/WorkOrderFormContext";




const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1000);
  const auth = useAuth();
  const { userData } = useUser();
  const { clearFormData } = useWorkForm();

  const isAdmin = userData?.userRole === "Admin";
  const isSales = userData?.userRole === "User";

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that this effect runs only once (on mount)

  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("clicked");
    auth.logout();
    navigate("/login");
    clearFormData();
  };

  return (
    <>
      {/* Hamburger menu button for mobile */}
      {isMobileView && (
        <Box
          as={MenuRoundedIcon}
          onClick={onOpen}
          position="fixed"
          top="6.5rem"
          left="1.2rem"
          zIndex={10}
          cursor="pointer"
          // bg="red.100"
        />
      )}

      {/* Sidebar for desktop */}
      {!isMobileView && (
        <List p="10px" mt="1rem" ml="0.5rem">
          <ListItem className="listItem" p="10px" borderRadius="10px">
            <Flex alignItems="center" justify="start">
              <DashboardOutlinedIcon style={{ marginTop: "0rem" }} />
              <NavLink
                to=""
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Text
                  as={"span"}
                  color="#595c5f"
                  fontSize={{ base: "0.5rem", md: "1.2rem" }}
                  marginLeft="8px"
                  _hover={{ textDecoration: "underline" }}
                >
                  Dashboard
                </Text>
              </NavLink>
            </Flex>
          </ListItem>

          {isAdmin && (
            <ListItem className="listItem" p="10px" borderRadius="10px">
              <Flex alignItems="center" justify="start">
                <BadgeOutlinedIcon />
                <NavLink to="newEmpoyee">
                  <Text
                    as="span"
                    color="#595c5f"
                    fontSize={{ base: "0.5rem", md: "1.2rem" }}
                    marginLeft="8px"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Employee
                  </Text>
                </NavLink>
              </Flex>
            </ListItem>
          )}

          {isSales && (
            <>
              <ListItem className="listItem" p="8px" borderRadius="10px">
                <Flex alignItems="center" justify="start">
                  <GroupOutlinedIcon />
                  <NavLink to="totalAds">
                    <Text
                      as="span"
                      color="#595c5f"
                      fontSize={{ base: "0.5rem", md: "1.2rem" }}
                      marginLeft="8px"
                      _hover={{ textDecoration: "underline" }}
                    >
                      My Ads
                    </Text>
                  </NavLink>
                </Flex>
              </ListItem>


              <ListItem className="listItem" p="8px" borderRadius="10px">
                <Flex alignItems="center" justify="start">
                  <ShopOutlinedIcon />
                  <NavLink to="adds/form">
                    <Text
                      as="span"
                      color="#595c5f"
                      fontSize={{ base: "0.5rem", md: "1.2rem" }}
                      marginLeft="8px"
                      _hover={{ textDecoration: "underline" }}
                    >
                      Add Ads
                    </Text>
                  </NavLink>
                </Flex>
              </ListItem>
            </>

          )}

        

         

        
          {/* Rest of your desktop sidebar items */}
        </List>
      )}

      {/* Drawer for mobile */}
      {isMobileView && (
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay marginTop={"50rem"}>
            <DrawerContent bg={"white"} marginTop="7rem" width={"20%"}>
              <DrawerBody>
                <List p="10px">
                  <ListItem className="listItem" p="10px" borderRadius="10px">
                    <Flex alignItems="center">
                      <DashboardOutlinedIcon style={{ marginTop: "0rem" }} />
                      <NavLink
                        to=""
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          as={"span"}
                          color="black"
                          fontSize={"1.5rem"}
                          marginLeft="8px"
                          _hover={{ textDecoration: "underline" }}
                          onClick={onClose}
                        >
                          Dashboard
                        </Text>
                      </NavLink>
                    </Flex>
                  </ListItem>

                  {isAdmin && (
                    <ListItem className="listItem" p="10px" borderRadius="10px">
                       <Flex alignItems="center">
                      <BadgeOutlinedIcon />
                      <NavLink to="newEmpoyee">
                        <Text
                          as="span"
                          color="black"
                          fontSize="rem"
                          marginLeft="8px"
                          _hover={{ textDecoration: "underline" }}
                          onClick={onClose}
                        >
                          Employee
                        </Text>
                      </NavLink>
                      </Flex>
                    </ListItem>
                  )}

                  {isSales && (
                    <>
                      <ListItem className="listItem" p="10px" borderRadius="10px">
                        <Flex alignItems="center">
                          <GroupOutlinedIcon />
                          <NavLink to="totalAds">
                            <Text
                              as="span"
                              color="black"
                              fontSize="rem"
                              marginLeft="8px"
                              _hover={{ textDecoration: "underline" }}
                              onClick={onClose}
                            >
                              My Ads
                            </Text>
                          </NavLink>
                        </Flex>
                      </ListItem>

                      <ListItem className="listItem" p="8px" borderRadius="10px">
                        <Flex alignItems="center">
                          <ShopOutlinedIcon />
                          <NavLink to="adds/form">
                            <Text
                              as="span"
                              color="black"
                              // fontSize={{ base: "0.5rem", md: "1.2rem" }}
                              marginLeft="8px"
                              _hover={{ textDecoration: "underline" }}
                              onClick={onClose}
                            >
                              Add Leads
                            </Text>
                          </NavLink>
                        </Flex>
                      </ListItem>
                    </>
                  )}


                 
                 

                 
                </List>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      )}
    </>
  );
};

export default SideBar;
