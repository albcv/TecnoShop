document.addEventListener('DOMContentLoaded', function(){

        // Validación del formulario de registro
        document.getElementById('register-btn').addEventListener('click', function() {
            let isValid = true;
            
            // Validar nombre
            const name = document.getElementById('register-name');
            if (!name.value.trim()) {
                document.getElementById('register-name-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('register-name-error').style.display = 'none';
            }
            
            // Validar email
            const email = document.getElementById('register-email');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                document.getElementById('register-email-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('register-email-error').style.display = 'none';
            }
            
            // Validar contraseña
            const password = document.getElementById('register-password');
            if (password.value.length < 6) {
                document.getElementById('register-password-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('register-password-error').style.display = 'none';
            }
            
            // Validar confirmación de contraseña
            const confirm = document.getElementById('register-confirm');
            if (password.value !== confirm.value) {
                document.getElementById('register-confirm-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('register-confirm-error').style.display = 'none';
            }
            
            if (isValid) {
                alert('Registro exitoso. Bienvenido a TecnoShop');
                name.value = '';
                email.value = '';
                password.value = '';
                confirm.value = '';
              
                window.location.href='inicio.html';
            }
        });


});