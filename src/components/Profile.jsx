import React from "react";
const Profile = () => {
  return (
    <>
      <div className=" container alineacion">
        <div className="contenido-descripcion">
          <div className="">
          {/* <p className="text-center mt-4">José Antonio Coreño</p> */}
            <div className="imgcenter">
              <br />
              <img
                src="./img/tony.jpg"
                alt="jose"
                className="img text-center animate__animated animate__zoomInDown"
              />
            </div>

            <h1 className="titulo animate__animated animate__fadeInRight">
              <span>Software</span>
              <span>Tester</span>
            </h1>
            <div className="row ml-4 alto">
              <section id="contacto" class="btn-link ml-4">
                <div class="search">
                  <input
                    type="text"
                    className="search-text"
                    placeholder="antoniocoreno@outlook.com"
                    readOnly
                  />
                  <a className="" href="#">
                    <i class="fas fa-envelope search-icon"></i>
                  </a>
                </div>
              </section>
              <article className="descripcion mr-4">
                <p></p>
                <a href="https://github.com/tony-coreno" className="btn-link">
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/github.png"
                    alt="GIT"
                  />
                </a>
              </article>
              <article className="descripcion mr-4">
                <p></p>
                <a
                  href="https://www.linkedin.com/in/jose-antonio-core%C3%B1o-253681213/"
                  className="btn-link"
                >
                  <img
                    src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png"
                    alt="LinkedIn"
                  />
                </a>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Profile);
