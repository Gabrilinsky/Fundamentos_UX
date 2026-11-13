const btnExplicacion = document.getElementById('btnExplicacion');
const modalExplicacion = document.getElementById('modalExplicacion');
const cerrarModal = document.getElementById('cerrarModal');

if (btnExplicacion) btnExplicacion.addEventListener('click', () => modalExplicacion.classList.add('active'));
if (cerrarModal) cerrarModal.addEventListener('click', () => modalExplicacion.classList.remove('active'));