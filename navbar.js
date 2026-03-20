function loadNavbar() {
    const navbarHTML = `
    <style>
    .nav-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: all 0.3s ease;

    /* 🔥 efecto glass */
    backdrop-filter: blur(10px);
    background: rgba(255,255,255,0.7);
}

/* Cuando está sobre fondo oscuro */
.nav-container.is-on-dark {
    background: rgba(0,0,0,0.5);
}

/* Navbar */
.custom-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 6%;
}

/* Logo */
.nav-logo { 
    font-size: 1.6rem; 
    font-weight: 700; 
    color: #000;
    text-decoration: none; 
    letter-spacing: 1px;
}

/* Botón menú */
.menu-btn {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.menu-btn span { 
    display: block; 
    width: 26px; 
    height: 2px; 
    background-color: #000;
    transition: all 0.3s ease;
    border-radius: 2px;
}

#menu-check {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}

/* Animación hamburguesa */
#menu-check:checked + .menu-btn span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

#menu-check:checked + .menu-btn span:nth-child(2) {
    opacity: 0;
}

#menu-check:checked + .menu-btn span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
}

/* Estado oscuro */
.nav-container.is-on-dark .nav-logo { 
    color: #fff; 
}

.nav-container.is-on-dark .menu-btn span { 
    background-color: #fff; 
}

/* Menú */
.nav-menu {
    position: absolute;
    top: 70px;
    right: 6%;
    width: 260px;
    list-style: none;
    display: none;
    flex-direction: column;

    /* 🔥 glass oscuro */
    background: rgba(0,0,0,0.9);
    backdrop-filter: blur(10px);

    border-radius: 12px;
    overflow: hidden;
    padding: 10px 0;
}

#menu-check:checked ~ .nav-menu { 
    display: flex; 
}

/* Items */
.nav-menu li {
    border-bottom: 1px solid rgba(255,255,255,0.08);
}

.nav-menu li:last-child {
    border-bottom: none;
}

.nav-menu a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 22px;
    text-decoration: none;
    color: white;
    font-size: 14px;
    transition: 0.3s;
}

/* Hover elegante */
.nav-menu a:hover {
    background: rgba(255,255,255,0.08);
    padding-left: 28px;
}

/* Flecha */
.arrow-icon-nav {
    width: 28px;
    height: 28px;
    background: #00bcd4;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    transition: 0.3s;
}

/* Hover flecha */
.nav-menu a:hover .arrow-icon-nav {
    transform: translateX(5px);
}
    </style>

    <div class="nav-container" id="main-nav">
        <nav class="custom-navbar">
            <a href="index.html" class="nav-logo">OK</a>
            <input type="checkbox" id="menu-check">
            <label for="menu-check" class="menu-btn">
                <span></span><span></span><span></span>
            </label>
            
            <ul class="nav-menu">
                <li><a href="index.html">Home <span class="arrow-icon-nav">→</span></a></li>
                <li><a href="servicios.html">Servicios <span class="arrow-icon-nav">→</span></a></li>
                <li><a href="portafolio.html">Portafolio <span class="arrow-icon-nav">→</span></a></li>
                <li><a href="nosotros.html">Nosotros <span class="arrow-icon-nav">→</span></a></li>
                <li><a href="contacto.html">Contacto <span class="arrow-icon-nav">→</span></a></li>
            </ul>
        </nav>
    </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // --- SCRIPT DE DETECCIÓN MEJORADO ---
    const navContainer = document.getElementById('main-nav');
    if (darkSection) {
        // Configuramos el observador para que detecte con precisión
        const observerOptions = {
            root: null,
            // Ajustamos el margen para que cambie justo cuando la sección toca el nav
            rootMargin: "-10% 0px -80% 0px", 
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Si la sección servicios (negra) está visible en el área del nav
                if (entry.isIntersecting) {
                    navContainer.classList.add('is-on-dark');
                } else {
                    navContainer.classList.remove('is-on-dark');
                }
            });
        }, observerOptions);

        observer.observe(darkSection);
    }
}

window.onload = loadNavbar;