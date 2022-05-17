import "./proyectos.css";

import styled from "styled-components";
const Proyectos = () => {
  return (
    <Contenedorapp className="contenedor">
      <div>
        <div className="slider">
          <div id="slide1">
            <Imagen src="https://res.cloudinary.com/mundo-sistemas-tv/image/upload/v1651164580/clima_tksrg1.jpg" />
          </div>
          <div id="slide2">
            <Imagen src="https://res.cloudinary.com/mundo-sistemas-tv/image/upload/v1651165341/heroes-react_cvsohp.jpg" />
          </div>
          <div id="slide3">
            <Imagen src="https://res.cloudinary.com/mundo-sistemas-tv/image/upload/v1651174407/pos-pord_sy3noo.jpg" />
          </div>
        </div>
        <ul className="menu">
          <li>
            <a href="#slide1">1</a>
          </li>
          <li>
            <a href="#slide2">2</a>
          </li>
          <li>
            <a href="#slide3">3</a>
          </li>
        </ul>
      </div>
      <aside>
        <b>Sistema POS</b>
        </aside>
    </Contenedorapp>
  );
};

const Imagen = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left top;
`;

const Contenedorapp = styled.div`
  //max-width: 1400px;
  padding: 5px;
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: 4fr 2fr;
  background: #282c34;
  margin: 5px 0;
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
export default Proyectos;
