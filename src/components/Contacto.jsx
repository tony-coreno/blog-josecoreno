
const Contacto = () => {
  return (
    <div className="container mt-4">
      <form>
        <div className="mb-3">
          <label for="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="email"
            className="form-control"
            autoFocus
            id="nombre"
            placeholder="Ej. Juan Pérez"
            required
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            autoFocus
            id="email"
            placeholder="ejemplo@mail.com"
            required
          />
        </div>
        <div className="mb-3">
          <label for="comentario" className="form-label">
            Comentario
          </label>
          <textarea
            className="form-control"
            id="comentario"
            placeholder="Envíame tu mensaje o comentario..."
            rows="5"
            required
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
