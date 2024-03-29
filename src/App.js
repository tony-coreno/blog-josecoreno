import { BrowserRouter, Route, Routes } from "react-router-dom";
import AcercaDe from "./components/AcercaDe";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Header from "./components/Header";
import Home from "./components/Home";
import styled from "styled-components";
import Inicio from "./components/Inicio";
function App() {
  return (
    <BrowserRouter>
      <ContenedorPrincipal className="container">
      <Header />
      <Main>
        <Routes>
          <Route path="/" exact element={<Inicio />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
}

const ContenedorPrincipal = styled.div`
  padding: 20px;
  width: 90%;
  max-width: 1400px;
  //background-color: #FFF;

`;
const Main = styled.main`
  display: flex;
  justify-content: center;
  background: #0a0a0a;
  //background: #282c34;
  padding: 10px;
  border-radius: 10px;
  //box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
  z-index: 99;
  opacity: 0.85;

`;

export default App;
