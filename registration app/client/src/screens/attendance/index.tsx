import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
  useToast,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useFormik } from "formik";
import { RootState, useAppDispatch, useAppSelector } from "../../store/store";
import { Loader } from "../../components";
import { REGISTER } from "../../routes";
import { Departments } from "../../data";
import { markAttendance } from "../../store/auth/authslice";
import { getDepartmentName } from "../../utils";

type Inputs = {
  userNumber: string;
  departmentNumber: string;
};

export const Attendance = () => {
  const toast = useToast();
  const dispatch = useAppDispatch();

  const { isLoading } = useAppSelector((state: RootState) => state.auth);

  const bgColorFlex = useColorModeValue("gray.50", "gray.800");
  const bgColorBox = useColorModeValue("white", "gray.700");

  const handleSubmit = async (values: Inputs) => {
    const payload = {
      userNumber: Number(values.userNumber),
      departmentNumber: Number(values.departmentNumber),
      departmentName: getDepartmentName(Number(values.departmentNumber)),
      attendance: true,
    };

    const response = await dispatch(markAttendance(payload));
    if (response.meta.requestStatus === "fulfilled") {
      formik.resetForm();
      toast({
        title: "Attendance submitted!",
        status: "success",
        isClosable: true,
        position: "top-right",
        duration: 5000,
      });
    }
    if (response.meta.requestStatus === "rejected") {
      toast({
        title: response.payload,
        status: "error",
        isClosable: true,
        position: "top-right",
        duration: 5000,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      userNumber: "",
      departmentNumber: "",
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  if (isLoading) return <Loader />;

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={bgColorFlex}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>User Attendance</Heading>
        </Stack>
        <Box rounded={"lg"} bg={bgColorBox} boxShadow={"lg"} p={8}>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="department">
                <FormLabel>Department</FormLabel>
                <Select
                  placeholder="Select department"
                  name={"departmentNumber"}
                  value={formik.values.departmentNumber}
                  onChange={formik.handleChange}
                >
                  {Departments.map((department) => (
                    <option
                      key={department.departmentNumber}
                      value={department.departmentNumber}
                    >
                      {department.departmentName}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl id="usernumber">
                <FormLabel>Number</FormLabel>
                <Input
                  type="text"
                  name="userNumber"
                  onChange={formik.handleChange}
                  value={formik.values.userNumber}
                />
              </FormControl>

              <Stack spacing={5}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                ></Stack>
                <Button
                  type="submit"
                  bg={"facebook.400"}
                  color={"white"}
                  _hover={{
                    bg: "facebook.500",
                  }}
                >
                  Submitted
                </Button>
              </Stack>

              <Stack pt={6}>
                <Text align={"center"}>
                  <Link as={RouterLink} to={REGISTER} color={"facebook.400"}>
                    to Register Page
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};
