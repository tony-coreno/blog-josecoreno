import React from 'react'
const Profile = () => {
  return (
    <>
      <div className="container">
        <div className="contenido-descripcion">
          <div>
            <div>
              <br />
              <img src="./img/tony.jpg" alt="jose" className="img" />
              <p>José Antonio Coreño</p>
            </div>
            <div className="container">
              <div class="row">
                <div class="col">
                  <h1 className="titulo">
                    <span>Software</span>
                    <span>Tester</span>
                  </h1>
                </div>
                <div class="col">
                  <div className="container"></div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col">
                  <article className="descripcion">
                    <p></p>
                    <a
                      href="https://github.com/tony-coreno"
                      className="btn-link"
                    >
                      <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GIT" />
                    </a>
                  </article>
                </div>
                <div class="col">
                  <article className="descripcion">
                    <p></p>
                    <a
                      href="https://www.linkedin.com/in/jose-antonio-core%C3%B1o-253681213/"
                      className="btn-link"
                    >
                      <img src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png" alt="LinkedIn"/>
                    </a>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Profile);
