import React, { useState } from 'react';

const App = () => {
    const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);

    const toggleLoginPopup = () => setLoginPopupOpen(!isLoginPopupOpen);

    return (
        <div>

            <main>
            <img src="img/img-06.jpg" alt="Image" style={{width: '100vw', height: '35vh', marginBottom:"0vh", objectFit: 'cover' }} />
                <div className="main2">
            
                    <aside>
                        <div id="filter">
                            <h2 className="tm-text-primary">Filtros de búsqueda</h2>
                            <form id="contact-form" action="" method="POST">
                                <div className="form-group">
                                    <select className="form-control" id="contact-select" name="inquiry">
                                        <option>Destino</option>
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
                                <div className="tm-text-right" style={{ marginTop: '20px' }}>
                                    <button type="submit" className="btn btn-primary">Buscar rutas</button>
                                    <button type="button" className="btn btn-primary" onClick={toggleLoginPopup}>
                                        Guardar filtros
                                    </button>
                                </div>
                            </form>
                        </div>
                    </aside>

                    <section className="css-raul">
                        <div className="card-columns">
                            {Array(6).fill(null).map((_, index) => (
                                <div className="card" key={index}>
                                    <img src="https://via.placeholder.com/300x150" alt="Imagen" />
                                    <div className="card-content">
                                        <h3 className="card-title">Título {index + 1}</h3>
                                        <h4>Descripción {index + 1}</h4>
                                        <p className="card-features">Dificultad: Fácil<br />Distancia: 5km</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            {/* Popup de Inicio de Sesión */}
            {isLoginPopupOpen && (
                <div id="loginPopupForm" className="popup-overlay">
                    <div className="popup-content">
                        <span className="close-btn" onClick={toggleLoginPopup}>&times;</span>
                        <h2>Iniciar Sesión</h2>
                        <form id="loginForm" action="Editar-perfil.html" method="POST">
                            <div className="form-group">
                                <label htmlFor="loginUsername">Nombre de usuario:</label>
                                <input type="text" id="loginUsername" name="loginUsername" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="loginPassword">Contraseña:</label>
                                <input type="password" id="loginPassword" name="loginPassword" required />
                            </div>
                            <button type="submit" className="btn btn-primary">Ver</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
