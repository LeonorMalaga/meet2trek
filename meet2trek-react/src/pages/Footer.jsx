// src/pages/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="foot">
        <div className="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
          <div className="px-5">
            <h3 className="tm-text-primary mb-4 tm-footer-title">
              Política de privacidad
            </h3>
            <p>
              La política de privacidad contiene las normas acerca de qué datos personales se van a recoger en el sitio web, cuáles se guardarán y
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
  );
}
