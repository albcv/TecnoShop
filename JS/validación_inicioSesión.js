document.addEventListener('DOMContentLoaded', function(){


   // Validación del formulario de login
        document.getElementById('login-btn').addEventListener('click', function() {
            let isValid = true;
            
            // Validar email
            const email = document.getElementById('login-email');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                document.getElementById('login-email-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('login-email-error').style.display = 'none';
            }
            
            // Validar contraseña
            const password = document.getElementById('login-password');
            if (password.value.length < 6) {
                document.getElementById('login-password-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('login-password-error').style.display = 'none';
            }
            
            if (isValid) {
                alert('Inicio de sesión exitoso');
                email.value = '';
                password.value = '';
                
                window.location.href='inicio.html';
            }
        });



});