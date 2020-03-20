import React from "react";
import { createGlobalStyle } from "styled-components";
import MyExTempleate from "./components/MyExTempleate";
import MyExHead from "./components/MyExHead";
import MyExList from "./components/MyExList";
import MyExCreate from "./components/MyExCreate";
import { ExProvider } from "./MyExContext";

const GlobalStyle = createGlobalStyle`
  body{
    background : #e9ecef;
  }
`;

function App() {
  return (
    <>
      <ExProvider>
        <GlobalStyle />
        <MyExTempleate>
          <MyExHead></MyExHead>
          <MyExList></MyExList>
          <MyExCreate></MyExCreate>
        </MyExTempleate>
      </ExProvider>
    </>
  );
}

export default App;
