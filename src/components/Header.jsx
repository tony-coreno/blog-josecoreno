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
          <NavLink to="/acerca-de">Perfil</NavLink>
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
  //width:30%;
  display: flex;
  //flex-direction: flex-end;
  justify-content: center;
  a {
    text-decoration: none;

    color: #147551;
    font-size: 18px;
    font-weight: 700;
    //color: #3992ff;
    //color: #052C48;
    margin: 0 20px;
  }
  a:hover {
    color: #fff;
  }
  a.active {
    border-bottom: 2px solid #165168;
    padding-bottom: 3px;
  }
`;

export default Header;
