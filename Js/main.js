// JavaScript para el slider de fondo en el hero
const hero = document.getElementById('hero');
const backgroundImages = [
    '../Img/hero-background1.png',
    '../Img/hero-background2.png',
    '../Img/hero-background3.png',
    '../Img/hero-background4.png',
    '../Img/hero-background5.png'
];
let currentImageIndex = 0;

function changeBackgroundImage() {
    hero.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
    hero.classList.add('fade-in');
    setTimeout(() => hero.classList.remove('fade-in'), 1000);
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
}

setInterval(changeBackgroundImage, 5000);
changeBackgroundImage();

const slideIndexes = {};

function toggleSlider(sliderId) {
    const container = document.getElementById(`${sliderId}-slider-container`);
    if (!container) {
        console.error(`No se encontró el contenedor con id ${sliderId}-slider-container`);
        return;
    }
    
    // Eliminar la demora para probar la transición sin problemas
    if (container.classList.contains('visible')) {
        container.classList.remove('visible');
    } else {
        document.querySelectorAll('.slider-container').forEach(slider => slider.classList.remove('visible'));
        container.classList.add('visible');
        if (!(sliderId in slideIndexes)) {
            slideIndexes[sliderId] = 0;
        }
        updateSlider(sliderId);
    }
}

function nextSlide(sliderId) {
    const sliderElement = document.getElementById(`${sliderId}-slider`);
    if (!sliderElement) {
        console.error(`No se encontró el slider con id ${sliderId}-slider`);
        return;
    }
    
    slideIndexes[sliderId] = (slideIndexes[sliderId] + 1) % sliderElement.children.length;
    updateSlider(sliderId);
}

function prevSlide(sliderId) {
    const sliderElement = document.getElementById(`${sliderId}-slider`);
    if (!sliderElement) {
        console.error(`No se encontró el slider con id ${sliderId}-slider`);
        return;
    }

    slideIndexes[sliderId] = (slideIndexes[sliderId] - 1 + sliderElement.children.length) % sliderElement.children.length;
    updateSlider(sliderId);
}

function updateSlider(sliderId) {
    const sliderElement = document.getElementById(`${sliderId}-slider`);
    if (!sliderElement) {
        console.error(`No se encontró el slider con id ${sliderId}-slider`);
        return;
    }
    
    // Obtiene el índice actual y las diapositivas
    const slides = sliderElement.getElementsByClassName('slide');
    const currentIndex = slideIndexes[sliderId] || 0;
    
    // Oculta todas las diapositivas
    Array.from(slides).forEach(slide => slide.classList.remove('active'));

    // Muestra la diapositiva actual
    slides[currentIndex].classList.add('active');
}


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.slider-container').forEach(sliderContainer => {
        const sliderId = sliderContainer.querySelector('.slider').id.replace('-slider', '');
        sliderContainer.querySelector('.right-arrow').addEventListener('click', () => nextSlide(sliderId));
        sliderContainer.querySelector('.left-arrow').addEventListener('click', () => prevSlide(sliderId));
    });
});
