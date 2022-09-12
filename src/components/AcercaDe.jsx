import { bd } from "../config/bd";
import "animate.css";

const AcercaDe = () => {
  return (
    <div className="container mt-2">
      <h2 className="text-center animate__animated animate__bounceInRight">
        José Antonio Coreño
      </h2>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <article className="mt-4">
              <p>Soy egresado de Ingeniería en Sistemas computacionales</p>
              <p>
                Actualmente laboro como Tester Analyst en el área de QA,
                utilizando una metodología Ágil Scrum.
              </p>
              <p>
                Durante mis tiempos libres, me gusta aprender nuevas tecnologías
                relacionadas con desarrollo y el área de automatización de
                pruebas.
              </p>
              <span>Tales como:</span>
              <ul>
                <li>Cypress</li>
                <li>Jmeter</li>
                <li>Postman</li>
              </ul>
              <img src="https://img.icons8.com/dusk/64/000000/postman-api.png" alt="Postman" />
              <img src="https://img.icons8.com/color/48/000000/settings-3--v1.png" alt="Settings" />
            </article>
          </div>
          <div className="col">
            <p className="text-center mt-4 animate__animated animate__fadeInRight">
              Las principales tecnologías en desarrollo qué he utilizado son:
            </p>
            {bd.map((element, i) => {
              return (
                <article key={i} className="mt-4">
                  <div className="row">
                    <div className="col">
                      <img
                        src={element.img}
                        alt="REACT"
                        className="animate__animated animate__fadeInRight"
                      />
                      <b>{`  ${element.title}`}</b>
                    </div>
                    <div className="col mt-3 animate__animated animate__flipInY">
                      <div className="progress">
                        <br />
                        <div
                          className={element.color}
                          role="progressbar"
                          style={{ width: element.width }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {element.progres}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcercaDe;
