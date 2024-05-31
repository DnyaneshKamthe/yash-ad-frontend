import { useState, useEffect } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
  Text,
  Flex,
  Image,
  Select,
  Checkbox,
  CheckboxGroup,
  Divider,
  Center,
  Textarea,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import PopUpModal from "./PopUpModal"
function ViewForm() {
  const location = useLocation();
  const useData = location.state;




  console.log("userData", useData);
  console.log(useData?.adImage)

  const { userData } = useUser();

  const isAdmin = userData?.userRole === "Admin";
  const isUser = userData?.userRole === "User";
  // console.log("isAdmin", isAdmin, "isSales", isSales);

  ;



  var customerId = useData._id;
  // console.log("customer id ", customerId);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  // console.log("_id:", _id);
  // reset form function
  function resetForm(data) {
    Object.keys(data).forEach((fieldName) => {
      setValue(fieldName, "");
    });
  }

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };






  const apiUrl = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    // Set initial form values
    setValue("adName", useData.adName);
    setValue("adCompanyName", useData.adCompanyName);
    setValue("adType", useData.adType);
    setValue("adSize", useData.adSize);
    setValue("adImage", `${apiUrl}/uploads/${useData?.adImage}`);
    console.log(`${apiUrl}${useData?.adImage}`)
  }, [useData, setValue]);

  const imageStyle = {
    transition: 'transform 0.2s', // Animation
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.5)'; // Zoom in
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)'; // Zoom out
  };



  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        mt="4"
      >
        {/* name and referred */}
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          mx="1rem"
        >
          <Box>
            <FormControl isRequired>
              <FormLabel>Ad. Name</FormLabel>
              <Input
                marginTop={"0.5rem"}
                isRequired
                type="text"
                width={{ base: "100%", md: "400px" }}
                height={"50px"}
                backgroundColor="gray.100"
                // border={"1px solid #707070"}
                contentEditable
                name="adName"
                id="adName"
                isDisabled={isAdmin ? false : true}
                color="dark"
                value={userData?.adName}
                // onChange={(e) => setadName(e.target.value)}
                {...register("adName", {
                  required: "Ad. Name is required",
                  message: "invalid input",
                })}
              />
              {errors.adName && (
                <Text color="red.500">{errors.adName.message}</Text>
              )}
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Ad. Company Name</FormLabel>
              <Input
                marginTop={"0.5rem"}
                type="email"
                width={{ base: "100%", md: "400px" }}
                height={"50px"}
                border={"1px solid #707070"}
                // value = {data.email}
                backgroundColor="gray.100"
                name="adCompanyName"
                id="adCompanyName"
                isDisabled={isAdmin ? false : true}
                {...register("adCompanyName", {
                  // required: "adCompanyName is required",
                  message: "invalid adCompanyName",
                })}
              />
              {errors.adCompanyName && (
                <Text color="red.500">{errors.adCompanyName.message}</Text>
              )}
            </FormControl>
          </Box>
        </Stack>

        {/* emain and mobile */}
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          mx="1rem"
          mt="1rem"
        >
          <Box>
            <FormControl>
              <FormLabel>Ad. Type</FormLabel>
              <Input
                marginTop={"0.5rem"}
                type="email"
                width={{ base: "100%", md: "400px" }}
                height={"50px"}
                border={"1px solid #707070"}
                // value = {data.email}
                backgroundColor="gray.100"
                name="adType"
                id="adType"
                isDisabled={isAdmin ? false : true}
                {...register("adType", {

                  message: "invalid adType",
                })}
              />
              {errors.adType && (
                <Text color="red.500">{errors.adType.message}</Text>
              )}
            </FormControl>
          </Box>

          <Box>
            <FormControl>
              <FormLabel>Ad. Size</FormLabel>
              <Input
                marginTop={"0.5rem"}

                type="text"
                width={{ base: "100%", md: "400px" }}
                height={"50px"}
                backgroundColor="gray.100"
                border={"1px solid #707070"}
                // value = {data.number}
                name="adSize"
                id="adSize"
                isDisabled={isAdmin ? false : true}
                {...register("adSize", {
                  message: "invalid adSize",
                })}
              />
              {errors.adSize && (
                <Text color="red.500">{errors.adSize.message}</Text>
              )}
            </FormControl>
          </Box>
        </Stack>

        {/* Client type  & requirement */}
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          mx="1rem"
          mt="1rem"
        >
          {/* {userData?.adImage && ( */}
          <Box marginTop="1rem">
            {/* <Image src={`apiUrl/uploads/${useData.adImage}`} alt="Ad Image" maxWidth="100%" /> */}
            <Image
              src={`${apiUrl}${useData.adImage}`}
              alt="Ad Image"
              maxWidth="400px"
              maxHeight="250px"
            // onError={() => setImgError(true)}
            style={imageStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
            />
          </Box>

          {/* )} */}

        </Stack>

      </Flex>

    </>
  );
}

export default ViewForm;
