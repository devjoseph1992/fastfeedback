import {
 ChakraProvider,
 CSSReset,
 ColorModeProvider,
 useColorMode,
} from "@chakra-ui/react";
import { AuthProvider } from "@/lib/auth";
import theme from "@/styles/theme";
import { Global, css } from "@emotion/react";

const GlobalStyle = ({ children }) => {
 return (
  <>
   <Global
    styles={css`
     html {
      min-width: 360px;
      scroll-behavior: smooth;
     }
     #__next {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
     }
    `}
   />
  </>
 );
};

function MyApp({ Component, pageProps }) {
 return (
  <ChakraProvider resetCSS theme={theme}>
   <AuthProvider>
    <GlobalStyle />
    <ColorModeProvider
     options={{ initialColorMode: "light", useColorMode: true }}
    >
     <Component {...pageProps} />
    </ColorModeProvider>
   </AuthProvider>
  </ChakraProvider>
 );
}

export default MyApp;
