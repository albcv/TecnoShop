// Header y footer, se deben repetir en cada página

const header = `<header>
        <div class="container">
            <div class="header-top">
                <div class="logo">
                    <img src="img/logo.jpg" alt="Imagen del logo de TecnoShop">
                    <h1>TecnoShop</h1>
                    
                </div>
                <div class="search-bar">
                    <input type="text" placeholder="Buscar producto..." id="barra">
                    <button id="buscar">Buscar</button>
                </div>
                <div class="user-actions">
                    <div id="carrito"></div>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="inicio.html">Inicio</a></li>
                    <li><a href="productos.html">Productos</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
            </nav>
            <div class="header-description">
                <p>Tu tienda de confianza para los mejores productos tecnológicos al mejor precio</p>
            </div>
        </div>
    </header>`;


const footer = `<footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-about">
                    <div class="footer-logo">
                        <img src="img/logo.jpg" alt="Imagen del logo de TecnoShop">
                        <h2>TecnoShop</h2>
                    </div>
                    <p>Tu tienda de confianza para productos tecnológicos de última generación con los mejores precios del mercado.</p>
                    <div class="social-icons">
                        <button class="íconos" id="ícono-facebook" onclick="window.location.href='https://facebook.com'"></button>
                        <button class="íconos" id="ícono-instagram" onclick="window.location.href='https://instagram.com'"></button>
                        <button class="íconos" id="ícono-x" onclick="window.location.href='https://x.com'"></button>
                        <button class="íconos" id="ícono-youtube" onclick="window.location.href='https://youtube.com'"></button>
                    </div>
                </div>
                
                <div class="footer-links">
                    <h3>Enlaces rápidos</h3>
                    <ul>
                        <li><a href="inicio.html">Inicio</a></li>
                        <li><a href="productos.html">Productos</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="contacto.html">Contacto</a></li>
                    </ul>
                </div>
                
                <div class="footer-contact">
                    <h3>Contacto</h3>
                    <p>Calle Tecnología 123, Madrid</p>
                    <p>+34 912 345 678</p>
                    <p>info@tecnoshop.com</p>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2025 TecnoShop - Todos los derechos reservados</p>
                <p><a href="política_privacidad.html" id="pp">Política de privacidad</a></p>
            </div>
        </div>
    </footer>`;



document.addEventListener('DOMContentLoaded', function(){


cargarComponentes();



});



function cargarComponentes() {

    document.querySelectorAll('[archivo]').forEach(elemento => {
        const nombre = elemento.getAttribute('archivo');
        
        switch(nombre) {
            case 'header':
                elemento.innerHTML = header;
                break;
            case 'footer':
                elemento.innerHTML = footer;
                break;
            default:
                elemento.innerHTML = `<p>Componente ${nombre} no definido</p>`;
        }
    });
    
}