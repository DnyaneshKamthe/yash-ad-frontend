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
  Select,
  Switch,
  InputGroup,
  InputLeftAddon,
  Textarea,
  NumberInput,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


function NewLeadsform() {
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

  // reset form function
  function resetForm(data) {
    Object.keys(data).forEach((fieldName) => {
      setValue(fieldName, "");
    });
  }


  


 

  const handleSelectChange = (selectedValue) => {
    setValue("requirement", selectedValue);
  };

  // const clearRemarksField = () => {
  //   setValue('remarks', '');
  // };

  const onSubmit = async (data) => {
    console.log(data);
    const token = localStorage.getItem("token");
    let formData = new FormData();
    formData.append("adName", data.addName);
    formData.append("adType", data.addType);
    formData.append("adCompanyName", data.adCompanyName);
    formData.append("adSize", data.adSize);
    formData.append("adImage", data.adImage[0]); // This is how you append the file

    const apiUrl = import.meta.env.VITE_APP_API_URL;
    let response = await fetch(`${apiUrl}/advertise/addAdvertisements`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    let Resdata = await response.json();
    console.log(Resdata)
    if (Resdata.status === 'success') {
      toast({
        title: "Advertisement Registered.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "center",
      });
      resetForm(data);
      navigate("/totalAds");
    } else {
      toast({
        title: Resdata.message || "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "center",
      });
    }
  };

 


  return (
    <>
      <Flex
        direction={{ base: "column" }}
        justify="center"
        align="center"
        gap="5"
        mt="5"
      >

        {/* Name & Type */}
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          mx="1rem"
        >
          <Box>
            <FormControl isRequired>
              <FormLabel>Advertise Name</FormLabel>
              <Input
                marginTop={"0.5rem"}
                isRequired
                type="text"
                width={{ base: "100%", md: "400px" }}
                height={"50px"}
                backgroundColor="gray.100"
                placeholder="enter ad name"
                control={control}
                name="addName"
                id="addName"
                {...register("addName", {
                  required: "Advertise Name is required",
                  message: "invalid input",
                })}
              />
              {errors.addName && (
                <Text color="red.500">{errors.addName.message}</Text>
              )}
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Advertise Type</FormLabel>
              <Select
                placeholder="Select Advertise type"
                marginTop={"0.5rem"}
                isRequired
                type="text"
                width={{ base: "250px", md: "400px" }}
                height={"50px"}
                backgroundColor="gray.100"
                control={control}
                name="addType"
                id="addType"
                onChange={(e) => handleSelectChange(e.target.value)}
                value={watch("addType")}
                {...register("addType", {
                  message: "invalid input",
                })}
              >
                <option value="Banner">Banner</option>
                <option value="Newspaper Ad">Newspaper Ad</option>
                <option value="TV Channel Ad">TV Channel Ad</option>
                <option value="Sponsor Ad">Sponsor Ad</option>
                <option value="Commercial Ad">Commercial Ad</option>
              </Select>
              {errors.addType && (
                <Text color="red.500">{errors.addType.message}</Text>
              )}
            </FormControl>
          </Box>
        </Stack>

         {/* Company Name & Size */}
         <Stack
          direction={{ base: "column", md: "row" }}
          spacing={6}
          // alignItems="center"
          mx="1rem"
        >
         
         <Box>
            <FormControl isRequired>
              <FormLabel>Advertisement Company Name</FormLabel>
              <Input
                marginTop={"0.5rem"}
                isRequired
                type="text"
                width={{ base: "100%", md: "400px" }}
                height={"50px"}
                backgroundColor="gray.100"
                placeholder="enter ad company  name"
                control={control}
                name="adCompanyName"
                id="adCompanyName"
                {...register("adCompanyName", {
                  required: "Advertise Company Name is required",
                  message: "invalid input",
                })}
              />
              {errors.adCompanyName && (
                <Text color="red.500">{errors.adCompanyName.message}</Text>
              )}
            </FormControl>
          </Box>
          <Box>
            <FormControl isRequired>
              <FormLabel>Advertisement Size</FormLabel>
              <Input
                marginTop={"0.5rem"}
                isRequired
                type="text"
                width={{ base: "100%", md: "400px" }}
                height={"50px"}
                backgroundColor="gray.100"
                placeholder="enter ad size"
                control={control}
                name="adSize"
                id="adSize"
                {...register("adSize", {
                  required: "Advertise Size is required",
                  message: "invalid input",
                })}
              />
              {errors.adSize && (
                <Text color="red.500">{errors.adSize.message}</Text>
              )}
            </FormControl>
          </Box>
        </Stack>

        {/* Image  */}
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          mx="1rem"
          mt="1rem"
        >
          <Box>
            <FormControl isRequired>
              <FormLabel>Upload Advertise Image</FormLabel>
              <Input
                marginTop={"0.5rem"}
                paddingTop={"0.5rem"}
                isRequired
                type="file"
                accept="image/*"
                width={{ base: "100%", md: "400px" }}
                height={"50px"}
                backgroundColor="gray.100"
                placeholder="enter ad company  name"
                control={control}
                name="adImage"
                id="adImage"
                {...register("adImage", {
                  required: "Advertise Image required",
                  message: "invalid input",
                })}
              />
              {errors.adImage && (
                <Text color="red.500">{errors.adImage.message}</Text>
              )}
            </FormControl>
          </Box>
        </Stack>

       

       
        


       
     

      

        {/* FOllowup Date */}
       

        {/* Submit Buttons*/}
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          mx="1rem"
          mt="1rem"
        >
          <Button
            bg="orange"
            boxShadow="dark-lg"
            color="black"
            px="4"
            ms="2"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </Stack>

        
      </Flex>
    </>
  );
}

export default NewLeadsform;
