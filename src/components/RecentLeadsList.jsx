import { Box, Heading, List, ListItem, Text, Flex } from "@chakra-ui/react";

const RecentLeadsList = () => {
  const leads = [
    { name: "Jane Smith", date: "June 10, 2024" },
    { name: "Michael Johnson", date: "June 9, 2024" },
    { name: "Emily Brown", date: "June 8, 2024" },
  ];

  return (
    <Box
      bg="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(8px)"
      borderRadius="16px"
      p="20px"
      boxShadow="0 8px 16px rgba(0, 0, 0, 0.1)"
    >
      <Heading as="h3" size="md" color="white" textAlign="center" mb="10px">
        Recent Leads
      </Heading>
      <List spacing={3}>
        {leads.map((lead, index) => (
          <ListItem
            key={index}
            p="10px"
            mb="10px"
            bg="rgba(255, 255, 255, 0.2)"
            borderRadius="8px"
            display="flex"
            justifyContent="space-between"
          >
            <Text color="white" fontWeight="bold">
              {lead.name}
            </Text>
            <Text color="gray.300">{lead.date}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default RecentLeadsList;