import NavBar from "./components/NavBar";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import backgroundImage from "./assets/background.png";
import AppButton from "./components/AppButton";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Background>
        <ContBack>
          <Texto>
          Descubra, avalie e compartilhe o que está em alta no mundo do cinema.
        </Texto>
        <Buttons>
        <AppButton text="Fazer avaliação"/>
        <AppButton text="Conferir titulos em alta" secundary={true}/>
        </Buttons>

        </ContBack>
      </Background>
    </div>
  );
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
    font-family: sans-serif;
  }
`;

const ContBack = styled.div`
  display: flex;
  padding: 3em;
  flex-direction: column;
  gap: 1em;
  align-items: self-start;
`

const Buttons = styled.div`
display: flex;
  flex-direction: row;
  gap: 1em;
  align-items: self-start;
`

const Background = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center; 
  padding-bottom: 8em;
  padding-left: 6em;    
  background-image: url(${backgroundImage});
  background-size: cover;     
  background-position: center;
  background-repeat: no-repeat;
`;

const Texto = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 3.5rem;
  max-width: 700px;
  line-height: 1.2;
`;
