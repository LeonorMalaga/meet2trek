
import { useState } from "react"

export function Home() {
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const toggleRegisterPopup = () => {
    setIsRegisterPopupOpen(!isRegisterPopupOpen);
  };

  const toggleLoginPopup = () => {
    setIsLoginPopupOpen(!isLoginPopupOpen);
  };
  return (  <>
    

  <main>
      {/* Popup de Registro */}
      {isRegisterPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-btn" onClick={toggleRegisterPopup}>&times;</span>
            <h2>Registro</h2>
            <form id="registrationForm" action="tu-url-de-base-de-datos" method="POST">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="username">Nombre de usuario:</label>
                <input type="text" id="usernSame" name="username" required />
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
                  style={{ fontSize: "1em" }} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Repetir contraseña:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required style={{ fontSize: "1em" }} />
                <span id="La contraseña no coincide" style={{ color: "red", fontSize: "0.9em" }}></span>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
        </div>
      )}

      {/* Popup de Inicio de Sesión */}
      {isLoginPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-btn" onClick={toggleLoginPopup}>&times;</span>
            <h2>Iniciar Sesión</h2>
            <form id="loginForm" action="url-base-de-datos" method="POST">
              <div className="form-group">
                <label htmlFor="loginUsername">Nombre de usuario:</label>
                <input type="text" id="loginUsername" name="loginUsername" required />
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">Contraseña:</label>
                <input type="password" id="loginPassword" name="loginPassword" required />
              </div>
              <button type="submit" className="btn btn-primary">Iniciar</button>
              <p style={{ color: "black", marginTop: "10px" }}>
                Si no estás registrado haz clic <a href="#" onClick={toggleRegisterPopup}><u>aquí</u></a>.
              </p>
              <p style={{ color: "black", marginTop: "10px" }}>
                Has olvidado la contraseña? Haz clic <a href="#"><u>aquí</u></a>.
              </p>
            </form>
          </div>
        </div>
      )}

      <div className="row" style={{ marginTop: "30px" }}>
        <div className="col-xl-3 mb-5">
          <img src="img/past2.jpg" alt="Image" className="img-fluid" style={{ maxWidth: "100%" }} />
        </div>
        <div className="col-xl-3 mb-5">
          <img src="img/past1.jpg" alt="Image" className="img-fluid" style={{ maxWidth: "100%" }} />
        </div>
        <div className="col-xl-3 mb-5">
          <img src="img/past3.jpg" alt="Image" className="img-fluid" style={{ maxWidth: "100%" }} />
        </div>
      </div>

      <div className="main-index">
        <aside>
          <div id="filter">
            <h2 className="tm-text-primary">Filtros de búsqueda</h2>
            <form id="contact-form" action="" method="POST">
              <div className="form-group">
                <select className="form-control" id="contact-select" name="inquiry">
                  <option>Provincia</option>
                  <option>Málaga</option>
                  <option disabled>Córdoba</option>
                  <option disabled>Sevilla</option>
                  <option disabled>Cádiz</option>
                  <option disabled>Huelva</option>
                  <option disabled>Almería</option>
                  <option disabled>Jaén</option>
                  <option disabled>Granada</option>
                </select>
              </div>
              <div className="form-group">
                <select className="form-control" id="contact-select" name="inquiry">
                  <option>Población</option>
                  <option>Málaga</option>
                  <option>Ronda</option>
                  <option>Antequera</option>
                  <option>Axarquía</option>
                  <option>Guadalhorce</option>
                  <option>Abdalajís</option>
                  <option>Costa del Sol</option>
                  <option>Almijara</option>
                </select>
              </div>
              <div className="form-group">
                <input 
                  type="number" 
                  name="dific" 
                  className="form-control" 
                  placeholder="Dificultad (del 1 al 10)" 
                  min="0" 
                  max="10" 
                />
              </div>
              <div className="form-group">
                <input 
                  type="number" 
                  name="distancia" 
                  className="form-control" 
                  placeholder="Distancia (de 1 a 30km)" 
                  min="0" 
                  max="30" 
                />
              </div>
              <div className="tm-text-right" style={{ marginTop: "20px" }}>
                <button type="submit" className="btn btn-primary">Buscar rutas</button>
                <button type="button" className="btn btn-primary" onClick={toggleLoginPopup}>Guardar filtros</button>
              </div>
            </form>
          </div>
        </aside>

        <section className="css-raul">
          <div className="card featured-card">
            <a href="ruta-recomend-detail.html">
              <h1 className="titular" style={{ textAlign: "center", padding: "15px", margin: "20px 20px 0 20px" }}>
                Ruta recomendada del mes
              </h1>
            </a>
            <img className="img-destacada" src="img/Chilla/rioChilla3.jpg" alt="Imagen destacada" />
            <div className="card-content">
              <a href="ruta-recomend-detail.html">
                <h2 className="tm-text-primary" style={{ marginBottom: "0px", textAlign: "center" }}>
                  Sendero acuático río Chillar
                </h2>
              </a>
              <h3 className="tm-text-primary" style={{ marginTop: "0px", textAlign: "center" }}>Nerja. Málaga</h3>
              <p className="article-title" style={{ fontSize: "15px", textAlign: "center", padding: "0px 60px", lineHeight: "1.3rem" }}>
                El camino del Río Chillar es una ruta muy conocida, pero el 99% de las personas se detienen en el Vado de
                Los Patos o incluso antes. No todo el mundo sabe que con un poco más de dificultad, esfuerzo y
                orientación,
                dos kilómetros más arriba, en medio de una naturaleza mucho más salvaje y exuberante, se esconde un
                pequeño
                paraíso natural de cascadas y piscinas naturales.
              </p>
              <p className="card-features">Dificultad: Alta<br />Distancia: 15km</p>
            </div>
          </div>
          <div className="card-columns">
            <div className="card">
              <img src="https://via.placeholder.com/300x150" alt="Imagen 1" />
              <div className="card-content">
                <h3 className="card-title">Título 1</h3>
                <h4>Descripción 1</h4>
                <p className="card-features">Dificultad: Fácil<br />Distancia: 5km</p>
              </div>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/300x150" alt="Imagen 1" />
              <div className="card-content">
                <h3 className="card-title">Título 1</h3>
                <h4>Descripción 1</h4>
                <p className="card-features">Dificultad: Fácil<br />Distancia: 5km</p>
              </div>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/300x150" alt="Imagen 1" />
              <div className="card-content">
                <h3 className="card-title">Título 1</h3>
                <h4>Descripción 1</h4>
                <p className="card-features">Dificultad: Fácil<br />Distancia: 5km</p>
              </div>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/300x150" alt="Imagen 1" />
              <div className="card-content">
                <h3 className="card-title">Título 1</h3>
                <h4>Descripción 1</h4>
                <p className="card-features">Dificultad: Fácil<br />Distancia: 5km</p>
              </div>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/300x150" alt="Imagen 1" />
              <div className="card-content">
                <h3 className="card-title">Título 1</h3>
                <h4>Descripción 1</h4>
                <p className="card-features">Dificultad: Fácil<br />Distancia: 5km</p>
              </div>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/300x150" alt="Imagen 1" />
              <div className="card-content">
                <h3 className="card-title">Título 1</h3>
                <h4>Descripción 1</h4>
                <p className="card-features">Dificultad: Fácil<br />Distancia: 5km</p>
              </div>
            </div>
          </div>
        </section>
      </div>
</main>
    </>
    )
}