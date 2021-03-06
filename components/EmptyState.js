import { Heading, Flex, Text, Button } from "@chakra-ui/react";

import AddSiteModal from "./Modal";

const EmptyState = () => {
 return (
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
   <Text mb={4}>Welcome let's get started</Text>
   <AddSiteModal>Add Your First Site</AddSiteModal>
  </Flex>
 );
};

export default EmptyState;
