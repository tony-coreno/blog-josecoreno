import { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import "./contacto.css";
const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");

  const guardar = async (e) => {
    e.preventDefault();
    const contacto = {
      comentario,
      nombre,
      email,
    };
    const respuesta = await Axios.post(
      "https://server-tony.herokuapp.com/blog/enviar",
      contacto
    );
    const mensaje = respuesta.data.comentario;
    console.log(mensaje);
    Swal.fire({
      icon: "success",
      title: "Mensaje enviado",
      showConfirmButton: false,
      timer: 2500,
    });
    setTimeout(() => {
      window.location.href = "/contacto";
    }, 1000);
  };

  return (
    <div className="container mt-4 contact">
      <form className="anchodiv" onSubmit={guardar}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            autoFocus
            id="nombre"
            placeholder="Ej. Juan Pérez"
            required
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            autoFocus
            id="email"
            placeholder="ejemplo@mail.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comentario" className="form-label">
            Comentario
          </label>
          <textarea
            className="form-control"
            id="comentario"
            placeholder="Envíame tu mensaje o comentario..."
            rows="5"
            required
            onChange={(e) => setComentario(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button className="btn btn-dark">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Contacto;
