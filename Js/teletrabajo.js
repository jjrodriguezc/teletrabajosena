document.addEventListener("DOMContentLoaded", function () {
    // Slider automático para la sección de Herramientas
    const slides = document.querySelectorAll('.slider .slide');
    let currentSlide = 0;

    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(showNextSlide, 5000); // Cambia cada 5 segundos

    // Añadir clase activa a todas las slides por defecto
    slides.forEach(slide => {
        slide.classList.add('active');
    });
});

// Función para alternar el menú desplegable en cada sección de requisitos
function toggleDropdown(element) {
    const dropdown = element.querySelector('.dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// SECCION REQUISITOS PARA TELETRABAJAR - Vista previa
let linkUrl = "";

// Función para mostrar el modal de vista previa con descripción y enlace
function showPreview(imageSrc, url, description) {
    const modal = document.getElementById("preview-modal");
    const previewImage = document.getElementById("preview-image");
    const openLinkButton = document.getElementById("open-link");
    const descriptionText = document.getElementById("preview-description");

    previewImage.src = imageSrc;
    linkUrl = url;
    descriptionText.innerText = description;
    modal.style.display = "flex";
}

// Función para abrir el enlace en una nueva pestaña
function openLink() {
    if (linkUrl) {
        window.open(linkUrl, "_blank");
    }
}

// Función para cerrar el modal de vista previa
function closePreviewModal() {
    const modal = document.getElementById("preview-modal");
    modal.style.display = "none";
    linkUrl = ""; // Resetea la URL cuando se cierra el modal
}

// Función para abrir el modal de iframe con YouTube y otros enlaces embebidos
function openModal(url, title) {
    const modal = document.getElementById('iframe-modal');
    const iframe = document.getElementById('modal-iframe');
    const modalTitle = document.getElementById('modal-title');

    iframe.src = url;
    modalTitle.innerText = title;
    modal.style.display = 'flex';
}

// Cierra el modal de iframe y limpia la fuente para liberar recursos
function closeIframeModal() {
    const modal = document.getElementById('iframe-modal');
    const iframe = document.getElementById('modal-iframe');

    modal.style.display = 'none';
    iframe.src = ''; // Limpia la fuente del iframe
}

// SECCION HERRAMIENTAS - Toggle para mostrar/ocultar contenido
function showInfo(platform, infoType) {
    // Identifica el contenido a mostrar/ocultar
    const infoContent = document.getElementById(`${platform}-${infoType}`);

    // Si el contenido está visible, lo oculta; de lo contrario, lo muestra y oculta el resto
    if (infoContent.style.display === 'block') {
        infoContent.style.display = 'none';
    } else {
        // Oculta todos los contenidos visibles
        const allInfoContents = document.querySelectorAll('.info-content');
        allInfoContents.forEach(content => content.style.display = 'none');
        
        // Muestra el contenido seleccionado
        infoContent.style.display = 'block';
    }
}

// Evento para cerrar las secciones de información al hacer clic fuera
document.addEventListener('click', function(event) {
    const infoContents = document.querySelectorAll('.info-content');
    if (!event.target.closest('.button-group') && !event.target.closest('.info-content')) {
        infoContents.forEach(content => content.style.display = 'none');
    }
});

/* SLIDER FONDO DE PANTALLA */

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".background-slide");
    let currentSlide = 0;

    // Activa la primera imagen al cargar la página
    slides[currentSlide].classList.add("active");

    function showNextSlide() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    // Cambia de imagen cada 5 segundos
    setInterval(showNextSlide, 5000);
});
