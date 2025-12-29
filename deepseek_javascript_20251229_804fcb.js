// actividades.js
class SistemaActividades {
    constructor() {
        this.alumnoActual = null;
        this.init();
    }
    
    init() {
        this.cargarAlumno();
        this.configurarEventos();
    }
    
    cargarAlumno() {
        const alumnoGuardado = localStorage.getItem('alumnoActual');
        if (alumnoGuardado) {
            this.alumnoActual = JSON.parse(alumnoGuardado);
            this.actualizarUI();
        }
    }
    
    actualizarUI() {
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn && this.alumnoActual) {
            loginBtn.innerHTML = `<i class="fas fa-user"></i> ${this.alumnoActual.nombre}`;
            loginBtn.classList.add('btn-primary');
        }
    }
    
    configurarEventos() {
        // Configurar eventos para botones
    }
    
    // Más funciones...
}