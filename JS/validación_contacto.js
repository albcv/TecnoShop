document.addEventListener('DOMContentLoaded', function(){

   // Validación del formulario de contacto
        document.getElementById('contact-btn').addEventListener('click', function() {
            let isValid = true;
            
            // Validar nombre
            const name = document.getElementById('name');
            if (!name.value.trim()) {
                document.getElementById('name-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('name-error').style.display = 'none';
            }
            
            // Validar email
            const email = document.getElementById('email');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                document.getElementById('email-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('email-error').style.display = 'none';
            }
            
            // Validar mensaje
            const message = document.getElementById('message');
            if (!message.value.trim()) {
                document.getElementById('message-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('message-error').style.display = 'none';
            }
            
            if (isValid) {
                alert('Formulario enviado con éxito');
                name.value = '';
                email.value = '';
                message.value = '';
            }
        });
        


});