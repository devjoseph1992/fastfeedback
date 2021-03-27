import Head from "next/head";
import { useAuth } from "@/lib/auth";
import { Button, Code, Heading, Text } from "@chakra-ui/react";

export default function Home() {
 const auth = useAuth();

 return (
  <div>
   <Head>
    <title>Fast Feedback</title>
   </Head>
   <main>
    <Heading>fast feedback</Heading>

    <Text>
     Current user:<Code>{auth.user ? auth.user.email : "None"}</Code>
    </Text>
    {auth.user ? (
     <Button onClick={(e) => auth.signout()}>Sign out</Button>
    ) : (
     <Button onClick={(e) => auth.signinWithGitHub()}>Sign in</Button>
    )}
   </main>
  </div>
 );
}
