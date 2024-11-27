// Función para cargar el CSS de header y footer
function loadHeaderFooterCSS() {
    if (!document.querySelector('link[href="../CSS/header-footer.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '../CSS/header-footer.css';
        document.head.appendChild(link);
    }
}

// Cargar el CSS y el footer
document.addEventListener("DOMContentLoaded", function() {
    loadHeaderFooterCSS();
    const footerHTML = `

<footer class="pie-pagina">
    <div class="grupo-1">
        <div class="box">
            <h2>Teletrabajo SENA</h2>
            <p><strong>Dirección: Cra 30 # 17b -25 sur, Complejo Sur</strong> Bogotá, Colombia</p>
            <p><strong>Teléfono:</strong> +(57) 601 7366060 - Línea gratuita y resto del país 018000 910270</p>
            <p><strong>Teletrabajo MinTIC:</strong> www.teletrabajo.gov.co</p>
            <img src="../Img/WaH.png" alt="SENA Logo" class="small-logo">
        </div>

        <div class="box">
            <h2>¡Síguenos!</h2>
            <div class="red-social">
                <a href="https://www.facebook.com" target="_blank">
                    <img src="../Img/facebook-icon.png" alt="Facebook" class="social-icon">
                </a>
                <a href="https://www.instagram.com" target="_blank">
                    <img src="../Img/instagram-icon.png" alt="Instagram" class="social-icon">
                </a>
                <a href="https://www.twitter.com" target="_blank">
                    <img src="../Img/twitter-icon.png" alt="Twitter" class="social-icon">
                </a>
                <a href="https://www.whatsapp.com" target="_blank">
                    <img src="../Img/whatsapp-icon.png" alt="WhatsApp" class="social-icon">
                </a>
            </div>
        </div>

        <div class="box">
            <h2>Enlaces Útiles</h2>
            <div class="useful-links">
                <a href="https://www.sena.edu.co/" target="_blank" class="link-button">
                    <img src="../Img/logo.png" alt="Logo SENA" class="logo-icon"> SENA
                </a>
                <a href="https://www.mintic.gov.co/" target="_blank" class="link-button">
                    <img src="../Img/mintic-logo.png" alt="Logo MinTIC" class="logo-icon"> MinTIC
                </a>
                <a href="https://www.ciberpaz.gov.co/" target="_blank" class="link-button">
                    <img src="../Img/ciberpaz-logo.png" alt="Logo CiberPaz" class="logo-icon"> CiberPaz
                </a>
            </div>
        </div>

        <div class="box menu-desplegable">
            <h2 onclick="toggleFooterMenu()">
                <span id="menu-toggle">&#8250;</span> Menú
            </h2>
            <div id="footer-menu" class="footer-menu hidden">
                <a href="../View/beneficios.html">Beneficios</a>
                <a href="../View/chatbot.html">ChatBot</a>
                <a href="../View/normativa.html">Normativa</a>
                <a href="../View/casosExito.html">Casos de Éxito</a>
                <a href="../View/faq.html">FAQ</a>
                <a href="../View/contacto.html">Contactanos</a>
            </div>
        </div>
    </div>

    <div class="grupo-2">
        <small>&copy; 2024 <b>TeleTrabajo SENA</b> - Todos los Derechos Reservados</small>
    </div>
</footer>


    `;
    document.body.insertAdjacentHTML("beforeend", footerHTML);
});

function toggleFooterMenu() {
    const footerMenu = document.getElementById("footer-menu");
    const menuToggle = document.getElementById("menu-toggle");
    
    footerMenu.classList.toggle("visible");
    menuToggle.classList.toggle("rotated");
}
