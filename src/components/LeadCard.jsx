import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

const LeadCard = ({ name, phone, email }) => {
  return (
    <Box
      bg="#f0f0f0"
      borderRadius="16px"
      p="20px"
      boxShadow="8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.5)"
      className="neumorphic-glass"
    >
      <Box textAlign="center" mb="10px">
        <Heading as="h3" size="lg" color="#333">
          Lead Overview
        </Heading>
      </Box>
      <Box display="flex" flexDirection="column">
        <Box mb="10px">
          <Text as="span" fontWeight="bold" color="#555">
            Lead Name:
          </Text>
          <Text as="span" color="#666" ml="2">
            {name}
          </Text>
        </Box>
        <Box mb="10px">
          <Text as="span" fontWeight="bold" color="#555">
            Phone:
          </Text>
          <Text as="span" color="#666" ml="2">
            {phone}
          </Text>
        </Box>
        <Box mb="10px">
          <Text as="span" fontWeight="bold" color="#555">
            Email:
          </Text>
          <Text as="span" color="#666" ml="2">
            {email}
          </Text>
        </Box>
        <Flex mt="20px" justifyContent="space-around">
          <Button
            bg="#ff9900"
            color="#fff"
            borderRadius="8px"
            fontWeight="bold"
            _hover={{ bg: "#ffaa33" }}
          >
            View Details
          </Button>
          <Button
            bg="#00cc66"
            color="#fff"
            borderRadius="8px"
            fontWeight="bold"
            _hover={{ bg: "#00e673" }}
          >
            Contact Lead
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default LeadCard;