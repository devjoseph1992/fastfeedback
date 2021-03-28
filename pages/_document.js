import Document, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

class MyDocument extends Document {
 render() {
  return (
   <Html lang="en">
    <Head>
     <link rel="icon" href="/favicon.ico" />
     <link rel="preconnect" href="https://fonts.gstatic.com" />
     <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
      rel="stylesheet"
     />
    </Head>
    <body>
     <ColorModeScript />
     <Main />
     <NextScript />
    </body>
   </Html>
  );
 }
}

export default MyDocument;
