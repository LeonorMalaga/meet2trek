import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Header() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/img/logo4.png" alt="Image" className="img-logo" style={{ marginLeft: 0 }} />
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Perfil
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/meets">
                      Quedadas
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link btn btn-link" onClick={logout}>
                      Cerrar Sesión
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Regístrate
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Iniciar Sesión
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="video-container">
        <video loop autoPlay muted id="hero-video" style={{ width: '100vw' }}>
          <source src="/video/hero.mp4" type="video/mp4" />
          No se puede reproducir el video
        </video>
        <div id="overlay-text" className="overlay-text">
          Mucho más que senderismo...
        </div>
      </div>
    </header>
  );
}
