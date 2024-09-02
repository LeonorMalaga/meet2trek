// popup.js

// Mostrar el popup
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
