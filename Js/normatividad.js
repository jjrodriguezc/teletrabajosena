// Archivo: script.js

// Desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Simulador de contrato de teletrabajo
const simulatorForm = document.querySelector("#contract-simulator form");
simulatorForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    const hours = document.querySelector("#hours").value;
    const type = document.querySelector("#type").value;
    const equipment = document.querySelector("#equipment").value;

    const contractPreview = `
        <h3>Resumen del Contrato</h3>
        <p><strong>Horas de Trabajo:</strong> ${hours} horas semanales</p>
        <p><strong>Tipo de Teletrabajo:</strong> ${type}</p>
        <p><strong>Equipos Utilizados:</strong> ${equipment}</p>
    `;

    const resultDiv = document.createElement("div");
    resultDiv.innerHTML = contractPreview;
    document.querySelector("#contract-simulator").appendChild(resultDiv);
});

// Calculadora de beneficios de teletrabajo
const calculatorForm = document.querySelector("#benefits-calculator form");
calculatorForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    const distance = document.querySelector("#distance").value;
    const days = document.querySelector("#days").value;

    if (distance && days) {
        const fuelSavings = (distance * 2 * days * 4 * 0.25).toFixed(2); // Ejemplo: 0.25 USD/km
        const timeSavings = (distance * 2 * days * 4 / 50).toFixed(1); // Ejemplo: 50 km/h promedio
        const savingsMessage = `
            <h3>Ahorros Estimados</h3>
            <p><strong>Combustible:</strong> $${fuelSavings} USD al mes</p>
            <p><strong>Tiempo:</strong> ${timeSavings} horas al mes</p>
        `;

        const resultDiv = document.createElement("div");
        resultDiv.innerHTML = savingsMessage;
        document.querySelector("#benefits-calculator").appendChild(resultDiv);
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

// Foro de discusión: agregar comentarios dinámicos
const forumForm = document.querySelector("#discussion-forum form");
forumForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    const commentText = document.querySelector("#comment").value;

    if (commentText) {
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = `<p><strong>Usuario:</strong> ${commentText}</p>`;
        document.querySelector("#comments").appendChild(newComment);

        // Limpiar el formulario después de enviar
        document.querySelector("#comment").value = "";
    } else {
        alert("Por favor, escribe un comentario.");
    }
});

// Animación de entrada para las secciones
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.2, // Detectar cuando el 20% de la sección es visible
    }
);

sections.forEach(section => {
    section.classList.add("hidden"); // Ocultar inicialmente
    observer.observe(section);
});

function toggleMenu() {
  var nav = document.querySelector('.nav2');
  nav.classList.toggle('active'); // Agregar o quitar la clase 'active' al menú
}

