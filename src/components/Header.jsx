import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../App.css";
const Header = () => {
  return (
    <>
      <ContenedorHeader className="container">
        <Menu>
          <NavLink className="" to="/">
            Inicio
          </NavLink>
          <NavLink to="/acerca-de">Sobre mi</NavLink>
          {/* <NavLink to="/proyectos">Proyectos</NavLink> */}
          <NavLink to="/contacto">Contacto</NavLink>
        </Menu>
      </ContenedorHeader>
    </>
  );
};

const ContenedorHeader = styled.header`
    text-align: center;
    margin-bottom: 60px;
`;

const Menu = styled.nav`
    a{
        text-decoration: none;
        color: #3992FF;
        //color: #052C48;
        margin: 0 20px;
        
    }
    a:hover {
        color: #FFF;
    }
    a.active{
        border-bottom: 2px solid #165168;
        padding-bottom: 3px;
    }
`;

export default Header;
