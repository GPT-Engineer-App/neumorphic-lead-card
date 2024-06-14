// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import { Container, Text, VStack } from "@chakra-ui/react";
import LeadCard from "../components/LeadCard";
import RecentLeadsList from "../components/RecentLeadsList";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
        <LeadCard name="John Doe" phone="555-123-4567" email="john.doe@example.com" />
        <RecentLeadsList />
      </VStack>
    </Container>
  );
};

export default Index;
