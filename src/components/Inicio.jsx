const Inicio = () => {
  return (
    <>
      <section className="inicio">
        <div className="imagen">
          <img
            src="./img/tony.jpg"
            alt="Antonio"
            className="img animate__animated animate__zoomInDown"
          />
        </div>
        <div className="info">
          <div className="title">
            <h2>SOFTWARE</h2>
            <h1>TESTER</h1>
          </div>

          <div className="contene">
            <a href="" className="correo">
              <img src="https://img.icons8.com/color/48/000000/new-post.png" />
            </a>
            <a href="https://github.com/tony-coreno" className="correo">
            <img src="https://img.icons8.com/ios/50/FAB005/github--v1.png"/>
            </a>
            <a
              href="https://www.linkedin.com/in/jos%C3%A9-antonio-core%C3%B1o-253681213/"
              className="correo"
            >
              <img
                src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inicio;
