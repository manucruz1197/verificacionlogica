document.getElementById('contactForm').addEventListener('submit', function(event) {
    const cif = document.getElementById('cif').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;

    const cifRegex = /^[A-Za-z]\d{8}$/;
    const telefonoRegex = /^\d{9}$/;
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    if (!cifRegex.test(cif)) {
        alert('El CIF debe comenzar con una letra seguida de 8 dígitos.');
        isValid = false;
    }

    if (!telefonoRegex.test(telefono)) {
        alert('El teléfono debe tener exactamente 9 dígitos.');
        isValid = false;
    }

    if (!correoRegex.test(correo)) {
        alert('El correo electrónico debe ser válido y contener un "@"');
        isValid = false;
    }

    if (isValid) {
        alert('Todos los datos son válidos. Formulario enviado con éxito.');
    } else {
        event.preventDefault();
    }
});
