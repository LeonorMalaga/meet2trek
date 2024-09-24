import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Header({toggleRegisterPopup, toggleLoginPopup}) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/img/logo4.png" alt="Image" className="img-logo" style={{ marginLeft: 0 }} />
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <>
                <li className="nav-item">
                    <Link className="nav-link" to="/profile_user">
                      Mi Perfil
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Log out
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
            </ul>
          </div>
        </div>
      </nav>

    </header>
  );
}
