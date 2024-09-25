import React from 'react';

const Main = () => {
  return (
    <main>
      <div className="container-fluid tm-container-content tm-mt-60">
        <div className="row mb-4">
          <h2 className="col-12 tm-text-primary" style={{ marginTop: '20px', textAlign: 'center' }}>
            Sendero acuático Río Chillar - Los Cahorros – Parque Natural Sierra de Tejeda, Almijara y Alhama (Málaga)
          </h2>
        </div>
        <div className="row tm-mb-90">
          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12">
            <iframe
              id="vid"
              width="743"
              height="418"
              src="https://www.youtube.com/embed/psnjzi1KRR8"
              allowFullScreen
            ></iframe>

            <div>
              <img
                src="img/Chilla/RioChilla 2.jpg"
                alt="Image"
                style={{ marginTop: '10px' }}
                width="100%"
              />
              <h2 style={{ margin: '20px 0', color: '#437571' }}>Mapa de la ruta</h2>
              {/* Mapa */}
              <div className="gmap-canvas">
                <iframe
                  width="100%"
                  height="520"
                  id="gmap-canvas"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51127.236052198714!2d-3.9137327334654946!3d36.7837056962288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7225167826ddb3%3A0x53bbce5d36620e0f!2zUsOtbyBDaMOtbGxhcg!5e0!3m2!1ses!2ses!4v1724408557656!5m2!1ses!2ses"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
            <div className="tm-bg-gray tm-video-details">
              <h2 className="col-12 tm-text-primary" style={{ paddingTop: '25px', marginTop: '0px' }}>
                Descripción de la ruta
              </h2>
              <p>
                Después de llegar a las estribaciones de la Sierra Tejeda desde Nerja se llega al pueblo de Acebuchal,
                destruido después de que terminara la Guerra Civil. Afortunadamente, ha sido reconstruido.<br />
                Una caminata de 2 km en un lecho de río seco (rambla) da paso a un camino de tierra desde donde se
                asoma la desalentadora vista de Cisne como un monstruo prehistórico. Aunque no está entre los puntos
                más altos y es una escalada difícil. Tiene todos los ingredientes para una caminata clásica: la variedad,
                la necesidad de cuidados para la transición al barranco, la lucha y el sentido de llegada a una cumbre
                espectacular, refugio para almorzar y una corriente para lavar el sudor después del descenso. En la cima
                se encuentran las ruinas de un puesto avanzado de la Guardia Civil que data de la Guerra Civil Española.
                Los soldados de Franco pudieron observar movimientos de tropas republicanas desde esta posición a 1,779
                metros. Cuando vea las vistas, se dará cuenta de por qué lo construyeron.<br />
                El camino del Río Chillar es una ruta muy conocida, pero el 99% de las personas se detienen en el Vado de
                Los Patos o incluso antes. No todo el mundo sabe que con un poco más de dificultad, esfuerzo y
                orientación, dos kilómetros más arriba, en medio de una naturaleza mucho más salvaje y exuberante, se
                esconde un pequeño paraíso natural de cascadas y piscinas naturales.<br />
                No está indicado para ir con niños.
              </p>

              <div className="mr-4 mb-2">
                <span className="tm-text-gray-dark">Duración: </span>
                <span className="mb-5">8 horas (Ida y vuelta)</span>
              </div>
              <div className="mr-4 mb-2">
                <span className="tm-text-gray-dark">Distancia </span>
                <span className="mb-5">18 Km</span>
              </div>
              <div className="mr-4 mb-2">
                <span className="tm-text-gray-dark">Dificultad: </span>
                <span className="mb-5">Media</span>
              </div>
              <div className="text-center mb-5">
                <a className="btn btn-primary tm-btn-big" style={{ marginTop: '20px' }} id="openLoginPopupBtn3">
                  Guardar Ruta
                </a>
              </div>

              {/* Popup de Inicio de Sesión */}
              <LoginPopup />
              {/* Popup de Registro */}
              <RegistrationPopup />
            </div>
          </div>
        </div>
      </div>
      <UpcomingMeetings />
    </main>
  );
};

const LoginPopup = () => {
  return (
    <div id="loginPopupForm" className="popup-overlay">
      <div className="popup-content">
        <span className="close-btn" id="closeLoginPopup">&times;</span>
        <h2>Iniciar Sesión</h2>
        <form id="loginForm" action="quedadas.html" method="POST">
          <div className="form-group">
            <label htmlFor="loginUsername">Nombre de usuario:</label>
            <input type="text" id="loginUsername" name="loginUsername" required />
          </div>
          <div className="form-group">
            <label htmlFor="loginPassword">Contraseña:</label>
            <input type="password" id="loginPassword" name="loginPassword" required />
          </div>
          <button type="submit" className="btn btn-primary">Ver</button>
          <p style={{ color: 'black', marginTop: '10px' }}>
            Si no estás registrado haz clic <a href="#" id="openPopup"><u>aquí</u></a>.
          </p>
          <p style={{ color: 'black', marginTop: '10px' }}>
            Has olvidado la contraseña? Haz clic <a href="#" id="#"><u>aquí</u></a>.
          </p>
        </form>
      </div>
    </div>
  );
};

const RegistrationPopup = () => {
  return (
    <div id="popupForm" className="popup-overlay">
      <div className="popup-content">
        <span className="close-btn" id="closePopup">&times;</span>
        <h2>Registro</h2>
        <form id="registrationForm" action="tu-url-de-base-de-datos" method="POST">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="username">Nombre de usuario:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="8 caracteres entre letras y números"
              required
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
              title="La contraseña debe tener al menos 8 caracteres, con letras y números."
              style={{ fontSize: '1em' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Repetir contraseña:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              style={{ fontSize: '1em' }}
            />
            <span id="La contraseña no coincide" style={{ color: 'red', fontSize: '0.9em' }}></span>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  );
};

const UpcomingMeetings = () => {
  return (
    <div className="cont-rutas">
      <h1 className="rutas-titular">Próximas quedadas</h1>
      <div className="tabla">
        <div className="rutas-dias">
          <p className="ruta-item">1. Sendero del Río Chíllar (Dificultad: Media) - 12 de octubre</p>
          <p className="ruta-item">2. Senda de los Pinsapos (Dificultad: Alta) - 19 de octubre</p>
          <p className="ruta-item">3. Ruta de los Olivos (Dificultad: Baja) - 26 de octubre</p>
          <p className="ruta-item">4. Ruta por la Sierra de Alhamilla (Dificultad: Media) - 2 de noviembre</p>
        </div>
        <div className="join-ruta">
          <h2>¡Únete a una de nuestras rutas!</h2>
          <button className="btn btn-primary">Unirme</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
