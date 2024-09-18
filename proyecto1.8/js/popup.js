// popup.js

// Mostrar el popup desde nav de Index
document.getElementById('openPopupNav').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('popupForm').style.display = 'flex';
});

// Cerrar el popup al hacer clic en el botón de cerrar
document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('popupForm').style.display = 'none';
});

// Cerrar el popup al hacer clic fuera del contenido
window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('popupForm')) {
        document.getElementById('popupForm').style.display = 'none';
    }
});

// Validación del formulario al enviarse
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // Validación del patrón de la contraseña
    if (!passwordPattern.test(password)) {
        event.preventDefault();
        alert('La contraseña debe tener al menos 8 caracteres, con letras y números.');
        return;
    }

    // Validación de coincidencia de contraseñas
    if (password !== confirmPassword) {
        event.preventDefault();
        alert('Las contraseñas no coinciden.');
    }
});

// Validación en tiempo real para mostrar un mensaje si las contraseñas no coinciden
document.getElementById('confirmPassword').addEventListener('input', function () {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    if (password !== confirmPassword) {
        message.textContent = 'Las contraseñas no coinciden';
        this.setCustomValidity('Las contraseñas no coinciden');
    } else {
        message.textContent = '';
        this.setCustomValidity('');

        alert('Las contraseñas no coinciden.');
    }
});

/* Validación botones popup desabilita Editar perfil si no se ha enviado antes el registro */
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const editProfileBtn = document.getElementById("editProfileBtn");
    let isFormSubmitted = false;

    // Deshabilita inicialmente el botón "Editar perfil"
    editProfileBtn.addEventListener("click", function(event) {
        if (!isFormSubmitted) {
            event.preventDefault(); // Evita que el enlace funcione
            alert("Por favor, envía el registro antes de editar tu perfil.");
        }
    });

    // Escucha el evento de envío del formulario 
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Previene el envío del formulario por defecto

        // Simula el envío del formulario
        setTimeout(function() {
            // Aquí debería ir la lógica de envío real, como una llamada AJAX
            // Supongamos que el envío fue exitoso:
            isFormSubmitted = true;

            alert("El registro ha sido enviado con éxito");

            // Habilita el botón "Editar perfil" al cambiar el comportamiento del evento
            editProfileBtn.removeEventListener("click", preventEditProfile);
        }, 500); // Simula un retraso en el envío
    });

});


// Abrir el popup de inicio de sesión desde el botón del formulario Filtros de Index
document
.getElementById("openLoginPopupBtn")
.addEventListener("click", function () {
  console.log("Abrir popup de inicio de sesión");
  document.getElementById("loginPopupForm").style.display = "block";
});

// Abrir el popup de inicio de sesión desde el enlace en el nav
document.getElementById("openLoginPopupNav").addEventListener("click", function () {
  console.log("Cerrar popup de inicio de sesión");
  document.getElementById("loginPopupForm").style.display = "block";
});

// Cerrar el popup de inicio de sesión
document
.getElementById("closeLoginPopup")
.addEventListener("click", function () {
  document.getElementById("loginPopupForm").style.display = "none";
});

// Evento para el enlace "aquí" en el popup de inicio de sesión
document
.getElementById("openPopup")
.addEventListener("click", function (event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del enlace

  // Cerrar el popup de inicio de sesión
  document.getElementById("loginPopupForm").style.display = "none";

  // Abrir el popup de registro después de un breve retardo
  setTimeout(function () {
    document.getElementById("popupForm").style.display = "block";
  }, 300); // Retardo de 300ms para asegurarse de que el primer popup se cierre antes de abrir el siguiente
});

// Cerrar el popup de registro
document
.getElementById("closePopup")
.addEventListener("click", function () {
  document.getElementById("popupForm").style.display = "none";
});

// Cerrar los popups si se hace clic fuera de ellos
window.onclick = function (event) {
var popup = document.getElementById("popupForm");
var loginPopupForm = document.getElementById("loginPopupForm");

if (event.target == popup) {
  popup.style.display = "none";
}
if (event.target == loginPopupForm) {
  loginPopupForm.style.display = "none";
}
};

console.log(document.getElementById("loginPopupForm")); // Debería mostrar el elemento en la consola si existe
console.log(document.getElementById("popupForm")); // Lo mismo aquí
