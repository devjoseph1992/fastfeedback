import Head from "next/head";
import { useAuth } from "../lib/auth";

export default function Home() {
 const auth = useAuth();

 return (
  <div>
   <Head>
    <title>Fast Feedback</title>
   </Head>
   <main>
    <h1>fast feedback</h1>

    <p>
     Current user:<code>{auth.user ? auth.user.email : "None"}</code>
    </p>
    {auth.user ? (
     <button onClick={(e) => auth.signout()}>Sign out</button>
    ) : (
     <button onClick={(e) => auth.signinWithGitHub()}>Sign in</button>
    )}
   </main>
  </div>
 );
}
