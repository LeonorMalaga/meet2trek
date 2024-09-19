import { Home } from "./page/Home"

function App() {

  return (
    <>
  <header>
    {/*
  <div id="loader-wrapper">
    <div id="loader"></div>
    <div className="loader-section section-left"></div>
    <div className="loader-section section-right"></div>
  </div> */}


  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <div className="navbar-brand" href="#">
        <img src="img/logo4.png" alt="Image" className="img-logo" style={{marginLeft: 0}} />
      </div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mb- mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" id="openPopupNav" style={{cursor: "pointer"}}>Regístrate</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" id="openLoginPopupNav" style={{cursor: "pointer"}}>Iniciar Sesión</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="video-container">
    <video loop autoPlay muted id="hero-video" style={{width: "100vw"}}>
      <source src="video/hero.mp4" type="video/mp4" />
      No se puede reproducir el video
    </video>
    <div id="overlay-text" className="overlay-text">
      Mucho más que senderismo...
    </div>
  </div>
</header>
    <Home />

  <footer>
    <div className="foot">
      <div className="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
        <div className="px-5">
          <h3 className="tm-text-primary mb-4 tm-footer-title">
            Política de privacidad
          </h3>
          <p>
            La política de privacidad contiene las normas acerca de qué datos personales se van a recoger en el sitio web, cuáles ser guardarán y
            qué uso se les va a dar. Asimismo, se informará a los usuarios de la posibilidad de acceder, modificar o cancelar dichos datos, y el
            procedimiento para hacerlo. Este documento contiene las normas relativas al tratamiento (recogida, gestión y retención) de datos de
            carácter personal. Por tanto, su elaboración es obligatoria para todos aquellos sitios webs que recolecten datos personales de sus
            usuarios. También comprende los derechos de los usuarios y las obligaciones del titular del sitio web en relación con el tratamiento de los datos personales. Se consideran datos personales
            toda aquella información que haga referencia a una persona identificada o identificable (ej. nombre, dirección postal, correo electrónico, teléfono).
          </p>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default App
