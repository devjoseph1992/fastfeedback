import { Heading, Flex, Text, Button } from "@chakra-ui/react";
import DashboardShell from "./DashboardShell";

const FreePlanEmptyState = () => {
 return (
  <DashboardShell>
   <Flex
    width="100%"
    backgroundColor="whiteAlpha.700"
    borderRadius={8}
    p={16}
    justify="center"
    align="center"
    flexDirection="column"
   >
    <Heading size="md" mb={2}>
     You haven't added any sites.
    </Heading>
    <Text mb={4}>Free Plan Empty State</Text>
    <Button variant="solid" size="md" p={8} maxW="200px">
     Add your first site
    </Button>
   </Flex>
  </DashboardShell>
 );
};

export default FreePlanEmptyState;
