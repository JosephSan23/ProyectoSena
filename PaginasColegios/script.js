// Elementos del modal:
const modal = document.getElementById('modal-inscripcion');
const abrirModal = document.querySelector('.btn-inscribirse');
const cerrarModal = document.querySelector('.modal-cerrar');

abrirModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
});

cerrarModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});