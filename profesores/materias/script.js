 /* ── Cambio de tabs ── */
    function cambiarTab(tabEl, seccionId) {
        document.querySelectorAll('.tab').forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

        tabEl.classList.add('active');
        tabEl.setAttribute('aria-selected', 'true');
        document.getElementById(seccionId).classList.add('active');
    }

    /* ── Tablón: publicar aviso ── */
    function publicarAviso() {
        const input = document.getElementById('anuncio-input');
        const texto = input.value.trim();
        if (!texto) return;

        const lista = document.getElementById('aviso-list');
        const card = document.createElement('div');
        card.className = 'aviso-card';
        card.innerHTML = `
            <div class="aviso-avatar">CP</div>
            <div>
                <span class="aviso-author">Carlos Pérez
                    <span class="aviso-date">ahora mismo</span>
                </span>
                <p class="aviso-text">${texto}</p>
            </div>`;
        lista.insertBefore(card, lista.firstChild);
        input.value = '';
    }

    /* ── Trabajo en clase: abrir planilla de calificaciones ── */
    function verEntregas(nombreActividad) {
        // Cambiar a la tab de calificaciones
        const tabCalif = document.querySelector('[aria-controls="sec-calificaciones"]');
        cambiarTab(tabCalif, 'sec-calificaciones');

        // Mostrar planilla y ocultar estado vacío
        document.getElementById('calif-empty').style.display = 'none';
        const planilla = document.getElementById('calif-planilla');
        planilla.style.display = 'flex';

        // Actualizar título
        document.getElementById('calif-titulo').textContent = nombreActividad;
    }

    /* ── Calificaciones: cerrar planilla ── */
    function cerrarPlanilla() {
        document.getElementById('calif-planilla').style.display = 'none';
        document.getElementById('calif-empty').style.display = 'flex';
    }

    /* ── Modal nueva actividad ── */
    function abrirModal(id) {
        document.getElementById(id).showModal();
    }

    function cerrarModal(id) {
        document.getElementById(id).close();
    }

    function guardarActividad() {
        const nombre = document.getElementById('act-nombre').value.trim();
        const fecha  = document.getElementById('act-fecha').value;
        if (!nombre) { alert('El nombre de la actividad es obligatorio.'); return; }

        const lista = document.getElementById('actividades-list');
        const fechaTexto = fecha
            ? new Date(fecha + 'T00:00:00').toLocaleDateString('es-CO', { day: 'numeric', month: 'short', year: 'numeric' })
            : 'Sin fecha límite';

        const card = document.createElement('div');
        card.className = 'actividad-card';
        card.innerHTML = `
            <div class="actividad-left">
                <div class="actividad-icon"><i class="ti ti-file-text" aria-hidden="true"></i></div>
                <div>
                    <div class="actividad-name">${nombre}</div>
                    <div class="actividad-meta">
                        <i class="ti ti-calendar" aria-hidden="true"></i> Vence ${fechaTexto}
                    </div>
                </div>
            </div>
            <div class="actividad-right">
                <span class="pill warn">0 / 35 entregaron</span>
                <button class="btn btn--ghost" type="button"
                    onclick="verEntregas('${nombre}')">Ver entregas</button>
            </div>`;
        lista.appendChild(card);

        cerrarModal('modal-actividad');
        document.getElementById('act-nombre').value = '';
        document.getElementById('act-descripcion').value = '';
        document.getElementById('act-fecha').value = '';
        document.getElementById('act-valor').value = '';
    }

    /* ── Alumnos: buscador ── */
    function filtrarAlumnos(query) {
        const q = query.toLowerCase();
        const filas = document.querySelectorAll('#alumnos-tbody tr');
        let visibles = 0;
        filas.forEach(fila => {
            const nombre = fila.dataset.nombre.toLowerCase();
            const doc    = fila.dataset.doc.toLowerCase();
            const coincide = nombre.includes(q) || doc.includes(q);
            fila.style.display = coincide ? '' : 'none';
            if (coincide) visibles++;
        });
        document.getElementById('alumno-count').textContent =
            `${visibles} estudiante${visibles !== 1 ? 's' : ''}`;
    }

    /* ── Cerrar modal al hacer clic en el backdrop ── */
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', e => {
            if (e.target === modal) modal.close();
        });
    });