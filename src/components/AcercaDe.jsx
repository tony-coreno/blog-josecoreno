import { bd } from "../config/bd";
import 'animate.css';

const AcercaDe = () => {
  return (
    <div className="container mt-2">
      <h2 className="text-center animate__animated animate__bounceInRight">José Antonio Coreño</h2>
      <div class="container mt-4">
        <div class="row">
          <div class="col">
            <article className="mt-4">
              <p>Soy egresado de Ingeniería en Sistemas computacionales</p>
              <p>
                Actualmente laboro como Software Tester en el área de QA,
                utilizando una metodología Ágil Scrum.
              </p>
              <p>
                Durante mis tiempos libres, me gusta aprender nuevas tecnologías
                relacionadas con desarrollo y el área de automatización de pruebas.
              </p>
              <span>Tales como:</span>
              <ul>
                  <li>Cypress</li>
                  <li>Jmeter</li>
                  <li>Katalon</li>
                  <li>Jest</li>
              </ul>
            </article>
          </div>
          <div class="col">
            <p className="text-center mt-4 animate__animated animate__fadeInRight">Las principales tecnologías en desarrollo qué he utilizado son:</p>
            {
                bd.map((element, i) => {
                    return(
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
                                class={element.color}
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
                    )
                })
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default AcercaDe;
