import NavBar from "./components/NavBar";
import { createGlobalStyle } from "styled-components";

export default function App() {

  return (
    <div>
      <GlobalStyle/>
      <NavBar />
      <h1>
        Testando o negocio
      </h1>
    </div>
  )

}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: #f8f8f8; /* ou a cor que quiser */
    font-family: sans-serif;
  }
`;
