import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Badge,
  useToast,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import { AGREEMENT } from "../../routes";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  const toast = useToast();

  const handleCopyLink = (title: string) => {
    const textToCopy = `http://localhost:3000${AGREEMENT}?link=${title}`;

    const inputElement = document.createElement("input");
    inputElement.value = textToCopy;
    document.body.appendChild(inputElement);

    inputElement.select();
    inputElement.setSelectionRange(0, 99999);

    document.execCommand("copy");
    document.body.removeChild(inputElement);

    toast({
      title: `${title} copied to the clipboard`,
      status: "info",
      isClosable: true,
      position: "top-right",
      duration: 5000,
    });
  };

  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontSize="md" fontWeight="bold">
        {title}
        <Badge
          ml="8"
          fontSize="0.8em"
          colorScheme="purple"
          cursor="pointer"
          onClick={() => {
            handleCopyLink(title);
          }}
        >
          copy
        </Badge>
      </Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export const Dashboard = () => {
  return (
    <Box p={20}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"Link 01"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"Link 02"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"Link 03"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
      </SimpleGrid>
    </Box>
  );
};
