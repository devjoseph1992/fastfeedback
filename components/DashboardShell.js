import {
 Flex,
 Link,
 Stack,
 Avatar,
 Breadcrumb,
 BreadcrumbItem,
 BreadcrumbLink,
 Heading,
 Button,
} from "@chakra-ui/react";
import { Logo } from "@/styles/icon";
import DarkModeSwitch from "./DarkModeSwitch";
import { useAuth } from "@/lib/auth";

const DashboardShell = ({ children }) => {
 const { user } = useAuth();
 return (
  <Flex flexDirection="column">
   <Flex
    flexDirection="row"
    backgroundColor="white"
    justifyContent="space-between"
    alignItems="center"
    p={4}
   >
    <Stack spacing={4} isInline alignItems="center" pl={4}>
     <Logo boxSize={4} color="black" h={10} w={10} size="24px" />
     <Link>Feedback</Link>
     <Link>Site</Link>
    </Stack>
    <Flex justifyContent="flex-start" pr={4} alignItems="center">
     {user && (
      <Button variant="ghost" mr={2} onClick={() => signout()}>
       Log Out
      </Button>
     )}
     <Avatar size="sm" mr={4} src={user?.photoUrl} />
     <DarkModeSwitch />
    </Flex>
   </Flex>
   <Flex
    flexDirection="row"
    backgroundColor="gray.100"
    alignItems="center"
    justifyContent="center"
    p={8}
    height="100vh"
   >
    <Flex flexDirection="column" maxWidth={800} w="100%" ml="auto" mr="auto">
     <Breadcrumb>
      <BreadcrumbItem>
       <BreadcrumbLink>Lorem Ipsum</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
       <BreadcrumbLink>Lorem Ipsum</BreadcrumbLink>
      </BreadcrumbItem>
     </Breadcrumb>
     <Heading mb={4}>Heading title</Heading>
     {children}
    </Flex>
   </Flex>
  </Flex>
 );
};

export default DashboardShell;
