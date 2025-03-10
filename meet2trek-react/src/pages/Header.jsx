import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({toggleRegisterPopup, toggleLoginPopup, login, setLoginFalse, setLoginTrue}) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/img/logo4.png" alt="Image" className="img-logo" style={{ marginLeft: 0 }} />
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            {login ? (
                // Show "Mi Perfil" and "Log out" if login equals 2
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/users/1">
                      Mi Perfil
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/routes" onClick={setLoginTrue}>
                      Buscar Rutas
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={setLoginFalse}>
                      Cerrar Sesión
                    </Link>
                  </li>
                </>
              ) : (
                // Show "Regístrate" and "Iniciar Sesión" if login equals 1
                <>
                <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={setLoginFalse}>
                      Home
                    </Link>
                  </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/routes">
                      Buscar Rutas
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={toggleRegisterPopup}>
                      Regístrate
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={toggleLoginPopup}>
                      Iniciar Sesión
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
