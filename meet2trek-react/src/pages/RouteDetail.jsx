import React, { useState, useEffect } from 'react';

export default function RouteDetail() {
    const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
    const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.id === 'loginPopupForm') {
                setLoginPopupOpen(false);
            }
            if (event.target.id === 'popupForm') {
                setRegisterPopupOpen(false);
            }
        };
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <main>
                <div className="container-fluid tm-container-content tm-mt-60">
                    <div className="row mb-4">
                        <h2 className="col-12 tm-text-primary" style={{ textAlign: 'center', marginTop: '20px' }}>
                            Caminito del Rey. Ardales (Málaga)
                        </h2>
                    </div>
                    <div className="row tm-mb-90">
                        <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12">
                            <iframe id="vid" width="743" height="418" src="https://www.youtube.com/embed/cjcZGvytKaU" title="Historia del Caminito del Rey" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" controls referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <div>
                                <img src="img/caminito1.jpg" alt="Image" style={{ marginTop: '30px' }} width="100%" />
                                <h2 style={{ margin: '20px 0', color: '#437571' }}>Mapa de la ruta</h2>
                                <div className="gmap-canvas">
                                    <iframe width="100%" height="520" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25518.26260063283!2d-4.804315953176561!3d36.91945662162786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCaminito%20del%20rey!5e0!3m2!1ses!2ses!4v1724408721315!5m2!1ses!2ses" style={{ border: 0 }} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                            <div className="tm-bg-gray tm-video-details">
                                <h2 className="col-12 tm-text-primary" style={{ paddingTop: '25px', marginTop: '0px' }}>Historia</h2>
                                <p>
                                    El Caminito del Rey es una pasarela colgante que se construyó entre 1901 y 1905 para unir
                                    dos presas que la compañía Sociedad Hidroeléctrica del Chorro usaba como saltos de agua...
                                </p>
                                <h2 className="col-12 tm-text-primary">Descripción de la ruta</h2>
                                <p>
                                    El recorrido del Caminito del Rey es lineal, no circular, por lo que debe asegurarse su regreso...
                                </p>
                                <div className="mr-4 mb-2">
                                    <span className="tm-text-gray-dark">Distancia: </span><span className="mb-5">8 Km</span>
                                </div>
                                <div className="mr-4 mb-2">
                                    <span className="tm-text-gray-dark">Dificultad: </span><span className="mb-5">Media</span>
                                </div>
                                <div className="text-center mb-5">
                                    <button className="btn btn-primary tm-btn-big" onClick={() => setLoginPopupOpen(true)} style={{ marginTop: '20px' }}>
                                        Guardar Ruta
                                    </button>
                                </div>
                                <div className="text-center mb-5">
                                    <button className="btn btn-primary tm-btn-big" onClick={() => setLoginPopupOpen(true)}>
                                        Ver quedadas
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {isLoginPopupOpen && (
                <div id="loginPopupForm" className="popup-overlay">
                    <div className="popup-content">
                        <span className="close-btn" onClick={() => setLoginPopupOpen(false)}>&times;</span>
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
                            <p style={{ color: 'black', marginTop: '10px' }}>
                                Si no estás registrado haz clic <a href="#" onClick={() => { setLoginPopupOpen(false); setRegisterPopupOpen(true); }}>aquí</a>.
                            </p>
                            <p style={{ color: 'black', marginTop: '10px' }}>
                                Has olvidado la contraseña? Haz clic <a href="#">aquí</a>.
                            </p>
                        </form>
                    </div>
                </div>
            )}

            {isRegisterPopupOpen && (
                <div id="popupForm" className="popup-overlay">
                    <div className="popup-content">
                        <span className="close-btn" onClick={() => setRegisterPopupOpen(false)}>&times;</span>
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
                                <input type="password" id="password" name="password" required />
                            </div>
                            <button type="submit" className="btn btn-primary">Registrar</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
