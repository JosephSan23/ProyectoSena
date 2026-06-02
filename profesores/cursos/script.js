function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    modal.showModal();
}

function cerrarModal(idModal) {
    const modal = document.getElementById(idModal);
    modal.close();
}

function irAPanel(curso, materia) {
    alert(`Entrando a: ${materia} de ${curso}`);
}