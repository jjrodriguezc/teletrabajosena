// Resaltar elemento seleccionado en la línea de tiempo
const timelineItems = document.querySelectorAll(".timeline-item");

timelineItems.forEach(item => {
    item.addEventListener("click", () => {
        // Eliminar la clase activa de otros elementos
        timelineItems.forEach(i => i.classList.remove("active"));

        // Agregar la clase activa al elemento seleccionado
        item.classList.add("active");
    });
});
