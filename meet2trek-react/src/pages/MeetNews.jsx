import React from 'react';
import { useEffect } from 'react';

export default function MeetNews () {
   
    useEffect(() => {  
      // Scripts del componente
      const eliminarFila = (id) => {
        const fila = document.getElementById(id).parentNode;
        fila.remove();
      };
  
      document.getElementById('eliminar1')?.addEventListener('click', function () {
        eliminarFila('eliminar1');
      });
  
      // Limpia eventos al desmontar el componente
      return () => {
        document.getElementById('eliminar1')?.removeEventListener('click', () => {});
      };
    }, []);
  
    return (
      <div>
            <img src="img/img-14.jpg" alt="Fondo" style={{width: '100vw', height: '35vh', marginBottom:"5vh", objectFit: 'cover' }} />
          
        {/* Main Content */}
        <main>
          <div className="cont-rutas" style={{ height: '80vh' }}>
            <h1 className="rutas-titular">Quedadas Sendero río Chillar</h1>
            <div className="tabla">
              <table className="tg">
                <thead>
                  <tr>
                    <th>Fecha y hora</th>
                    <th>Punto de encuentro</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tg-0pky">22/09/2024 a la 09h.</td>
                    <td className="tg-0pky">Plaza vieja. Nerja</td>
                    <td className="tg-0pky" id="eliminar1" style={{ textAlign: 'center', color: 'red', cursor: 'pointer' }}>
                      <u>Eliminar</u>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            {/* People Section */}
            <div className="row tm-mb-74 tm-people-row" style={{ marginTop: '20px' }}>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-5">
                <img src="img/people-1.jpg" alt="Person" className="mb-4 img-fluid" />
                <h2 className="tm-text-primary" style={{ marginBottom: '1.5rem' }}>Ryan Smith</h2>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-5">
                <img src="img/people-2.jpg" alt="Person" className="mb-4 img-fluid" />
                <h2 className="tm-text-primary" style={{ marginBottom: '1.5rem' }}>Sonia Parrado</h2>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-5">
                <img src="img/people-4.jpg" alt="Person" className="mb-4 img-fluid" />
                <h2 className="tm-text-primary" style={{ marginBottom: '1.5rem' }}>Antonio Rubio</h2>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-5">
                <img src="img/people-5.jpg" alt="Person" className="mb-4 img-fluid" />
                <h2 className="tm-text-primary" style={{ marginBottom: '1.5rem' }}>Inma Morales</h2>
              </div>
            </div>
          </div>
        </main>
  
        {/* Footer */}
        <footer>
          <div className="foot">
            <div className="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
              <div className="px-5">
                <h3 className="tm-text-primary mb-4 tm-footer-title">Política de privacidad</h3>
                <p>
                  La política de privacidad contiene las normas acerca de qué datos personales se van a recoger en el sitio web...
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  };