import { BrowserRouter, Route, Routes } from "react-router-dom";
import AcercaDe from "./components/AcercaDe";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Header from "./components/Header";
import Home from "./components/Home";
import styled from "styled-components";
function App() {
  return (
    <BrowserRouter>
      <ContenedorPrincipal className="container">
      <Header />
      <Main>
        <Routes>
          <Route path="/" exact element={<Home />} />
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
  max-width: 800px;

`;
const Main = styled.main`
  background: #282c34;
  padding: 10px;
  border-radius: 10px;
  //box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
  z-index: 99;
  opacity: 0.85;

`;

export default App;
