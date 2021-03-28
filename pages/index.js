import Head from "next/head";
import { useAuth } from "@/lib/auth";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { Logo } from "@/styles/icon";
import LoginButtons from "@/components/LoginButtons";

const Home = () => {
 const auth = useAuth();
 return (
  <div>
   <Head>
    <title>Fast Feedback</title>
   </Head>
   <Flex as="main" direction="column" align="center" justify="center" h="100vh">
    <Heading>fast feedback{auth.email}</Heading>
    <Logo color="black" w={6} h={6} />
    {auth.user ? (
     <Button
      as="a"
      href="/sites"
      backgroundColor="gray.900"
      color="white"
      fontWeight="medium"
      mt={4}
      maxW="200px"
      _hover={{ bg: "gray.700" }}
      _active={{
       bg: "gray.800",
       transform: "scale(0.95)",
      }}
     >
      View Dashboard{auth.email}
     </Button>
    ) : (
     <LoginButtons />
    )}
   </Flex>
  </div>
 );
};
export default Home;
