// popup.js
document.getElementById('openPopup').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('popupForm').style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('popupForm').style.display = 'none';
});

// Cierra el popup si se hace clic fuera del contenido
window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('popupForm')) {
        document.getElementById('popupForm').style.display = 'none';
    }
});

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordPattern.test(password)) {
        event.preventDefault();
        alert('La contraseña debe tener al menos 8 caracteres, con letras y números.');
    }
});
