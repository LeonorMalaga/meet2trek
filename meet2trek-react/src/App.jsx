import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
// import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Meets from './pages/Meets';
import ProfileUser from './pages/ProfileUser';
import RecommendedRoute from './pages/RecommendedRoute';
import RouteDetail from './pages/RouteDetail';
import RouteList from './pages/RouteList';
import './App.css';
import { useState } from 'react';
import RouteModel from './pages/RouteModel';

export default function App() {

  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [login, setLogin] =  useState(false);
  console.log(`-------------login=${login}-----------`);
  //const { login } = useAuth(); 
  const setLoginTrue=() => {
    setLogin(true)
  }
  const setLoginFalse=() => {
    setLogin(false)
  }
  const toggleRegisterPopup = () => {
    console.log('toggleRegisterPopup')
    setIsRegisterPopupOpen(!isRegisterPopupOpen)
    setLoginTrue()
  }

  const toggleLoginPopup = () => {
    console.log('toggleLoginPopup')
    setIsLoginPopupOpen(!isLoginPopupOpen)
    setLoginTrue()
  }
  const toggleLoginAndRegisterPopup = () => {
    console.log('toggleLoginAndRegisterPopup')
    setIsLoginPopupOpen(!isLoginPopupOpen)
    setIsRegisterPopupOpen(!isRegisterPopupOpen)
  }

  return (
    //<AuthProvider>
      <Router>
        <Header
          toggleLoginPopup={toggleLoginPopup}
          toggleRegisterPopup={toggleRegisterPopup}
          login={login}
          setLoginFalse={setLoginFalse}
        />
        {/* Popup de Registro */}
        <div className="popup-overlay" style={{display: isRegisterPopupOpen ? 'block': 'none'}}>
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
              <Link to="/profile_user" onClick={toggleRegisterPopup} className="btn btn-primary">Enviar</Link>
            </form>
          </div>
        </div>

        {/* Popup de Inicio de Sesión */}
        <div className="popup-overlay"  style={{display: isLoginPopupOpen ? 'block': 'none'}}>
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
              <Link to="/profile_user" onClick={toggleLoginPopup} className="btn btn-primary">Iniciar</Link>
              <p style={{ color: "black", marginTop: "10px" }}>
                Si no estás registrado haz clic <a href="#" onClick={toggleLoginAndRegisterPopup}><u>aquí</u></a>.
              </p>
            </form>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/meets" element={<Meets />} />
          <Route path="/profile_user" element={<ProfileUser />} />
          <Route path="/recommended-route" element={<RecommendedRoute />} />
          <Route path="/route-detail" element={<RouteDetail />} />
          <Route path="/route-list" element={<RouteList />} />
          <Route path="/routes/:id" element={<RouteModel />} />
        </Routes>
        <Footer /> 
     </Router>
    //</AuthProvider>
  );
}