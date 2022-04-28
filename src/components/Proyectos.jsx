import "./proyectos.css";

import styled from "styled-components";
const Proyectos = () => {
  return (
    <Contenedorapp className="contenedor">
      <div>
        <div class="slider">
          <div id="slide1">
            <Imagen src="https://res.cloudinary.com/mundo-sistemas-tv/image/upload/v1651087086/POS-_otgqoq.png" />
          </div>
          <div id="slide2">
            <img src="https://res.cloudinary.com/mundo-sistemas-tv/image/upload/v1649034757/sample.jpg" />
          </div>
        </div>
        <ul class="menu">
          <li>
            <a href="#slide1">1</a>
          </li>
          <li>
            <a href="#slide2">2</a>
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
  border-radius: 40px;
  width: 100%;
`;

const Contenedorapp = styled.div`
  max-width: 1400px;
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
