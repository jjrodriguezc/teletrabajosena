// Funci¨®n para cargar el CSS de header y footer
function loadHeaderFooterCSS() {
    if (!document.querySelector('link[href="../CSS/header-footer.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '../CSS/header-footer.css';
        document.head.appendChild(link);
    }
}

// Cargar el CSS y el header
document.addEventListener("DOMContentLoaded", function () {
    loadHeaderFooterCSS();

    // HTML del header
    const headerHTML = `
        <header class="main-header">
            <div class="logo">
                <img src="../Img/logo.png" alt="SENA Logo">
                <h1>Teletrabajo SENA  </h1>
                <img src="../Img/ciberpaz-logo.png" alt="WaH Logo" class="secondary-logo">
            </div>
            <button class="menu-toggle" aria-label="Abrir Men¨²">&#9776;</button>
            <nav class="main-nav">
                <a href="../index.html">Inicio</a>
                <a href="../View/beneficios.html">Beneficios</a>
                <a href="../View/teletrabajo.html">Teletrabajo</a>
                <a href="../View/chatbot.html" onclick="openChatbot()">Chatbot</a>
                <a href="../View/normativa.html">Normativa</a>
                <a href="../View/casosExito.html">Casos de Exito</a>
                <a href="../View/faq.html">FAQ</a>
            </nav>
        </header>
    `;

    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    // L¨®gica para el men¨² hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('open'); // Alterna la clase "open" en el men¨²
    });
});
