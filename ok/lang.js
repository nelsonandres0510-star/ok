const translations = {
    es: {
        nav_home: "Home",
        nav_servicios: "Servicios",
        nav_portafolio: "Portafolio",
        nav_nosotros: "Nosotros",
        nav_contacto: "Contacto",

        frase_1: "LAS IDEAS",
        frase_2: "CON CAUSA",
        frase_3: "SIEMPRE",
        frase_4: "DEJAN",
        frase_5: "MARCA.",
        hero_desc: "OK NACIÓ PARA TRABAJAR CON MARCAS QUE TIENEN ALGO QUE DECIR Y UNA RAZÓN PARA EXISTIR.",

        servicios_titulo: "SERVICIOS",
        servicios_sub: "(Lo que hacemos, pero con onda)",
        card1_titulo: "BRANDING COMERCIAL",
        card1_desc: "Construimos marcas para negocios y personas que quieren crecer con propósito",
        card2_titulo: "BRANDING SOCIAL",
        card2_desc: "Acompañamos proyectos e iniciativas que busquen generar un impacto positivo en su entorno.",
        card3_titulo: "BRANDING POLÍTICO",
        card3_desc: "Desarrollamos narrativa, identidad y estratégia para el liderazgo de representantes y movilizadores de gente",
        servicios_footer: "SERVICIOS QUE PARTEN DE UNA IDEA PERO RESPONDEN A UNA CAUSA.",

        portafolio_titulo: "PORTAFOLIO",
        portafolio_sub: "Proyectos que reflejan ideas con propósito.",
        portafolio_footer: "CADA PROYECTO NOS CAMBIÓ UN POCO. CADA CLIENTE ENTENDIÓ ALGO MÁS DE SU PROPIA MARCA MIRA CÓMO RESOLVIMOS, CREAMOS, SACAMOS PECHO.",

        nosotros_titulo: "NOSOTROS",
        nosotros_sub: "(Creamos causas)",
        nosotros_p1: "En OK creemos que toda marca nace desde una idea. Pero no todas encuentran su causa...",
        nosotros_p2: "Cuando la idea encuentra su causa, deja de ser intención y se convierte en postura...",
        paso1_titulo: "1. Idea",
        paso1_desc: "Todo empieza como ruido, un glitch, algo que no encaja, pero persiste",
        paso2_titulo: "2. Causa",
        paso2_desc: "La idea encuentra su por qué. deja de ser ocurrencia y se vuelve postura",
        paso3_titulo: "3. Marca",
        paso3_desc: "La causa toma forma. se vuelve identidad, lenguaje y símbolo",
        paso4_titulo: "4. Transforma",
        paso4_desc: "Y ahí es cuando todo importa. Una marca no vive sola, vive con la gente",
        nosotros_footer: "OK NACIÓ PARA DARLE VOZ A LAS MARCAS QUE QUIEREN HACER, MÁS QUE VENDER.",

        btn_contacto: "CONTACTO",
        btn_prev: "ATRÁS",
        btn_next: "SIGUIENTE",

        port_titu: "OK",
        port_sub: "Branding",
        port_desc1: "Este proyecto nace desde una idea que buscaba generar impacto. Se trabajó en la construcción de marca, identidad visual y narrativa, alineando todos los elementos hacia una causa clara.",
        port_desc2: "El resultado es una marca sólida, coherente y con presencia, capaz de conectar con su audiencia y diferenciarse en su entorno."
    },
    en: {
        nav_home: "Home",
        nav_servicios: "Services",
        nav_portafolio: "Portfolio",
        nav_nosotros: "About us",
        nav_contacto: "Contact",
        
        frase_1: "IDEAS",
        frase_2: "WITH PURPOSE",
        frase_3: "ALWAYS",
        frase_4: "LEAVE",
        frase_5: "A MARK.",
        hero_desc: "OK WAS BORN TO WORK WITH BRANDS THAT HAVE SOMETHING TO SAY AND A REASON TO EXIST.",

        servicios_titulo: "SERVICES",
        servicios_sub: "(What we do, with style)",
        card1_titulo: "COMMERCIAL BRANDING",
        card1_desc: "We build brands for businesses and people who want to grow with purpose",
        card2_titulo: "SOCIAL BRANDING",
        card2_desc: "We support projects and initiatives that seek to generate a positive impact in their community.",
        card3_titulo: "POLITICAL BRANDING",
        card3_desc: "We develop narrative, identity and strategy for the leadership of representatives and community leaders",
        servicios_footer: "SERVICES BORN FROM AN IDEA BUT DRIVEN BY A CAUSE.",

        portafolio_titulo: "PORTFOLIO",
        portafolio_sub: "Projects that reflect ideas with purpose.",
        portafolio_footer: "EVERY PROJECT CHANGED US A LITTLE. EVERY CLIENT UNDERSTOOD MORE ABOUT THEIR OWN BRAND. SEE HOW WE SOLVED, CREATED, AND DELIVERED.",

        nosotros_titulo: "ABOUT US",
        nosotros_sub: "(We create causes)",
        nosotros_p1: "At OK we believe every brand is born from an idea. But not all of them find their cause...",
        nosotros_p2: "When the idea finds its cause, it stops being intention and becomes a stance...",
        paso1_titulo: "1. Idea",
        paso1_desc: "Everything starts as noise, a glitch, something that doesn't fit but persists",
        paso2_titulo: "2. Cause",
        paso2_desc: "The idea finds its why. It stops being a thought and becomes a stance",
        paso3_titulo: "3. Brand",
        paso3_desc: "The cause takes shape. It becomes identity, language and symbol",
        paso4_titulo: "4. Transform",
        paso4_desc: "That's when everything matters. A brand doesn't live alone, it lives with people",
        nosotros_footer: "OK WAS BORN TO GIVE VOICE TO BRANDS THAT WANT TO DO MORE THAN SELL.",

        btn_contacto: "CONTACT",
        btn_prev: "BACK",
        btn_next: "NEXT",

        port_titu: "OK",
        port_sub: "Branding",
        port_desc1: "This project was born from an idea aimed at creating impact. Work focused on brand building, visual identity, and storytelling, aligning all elements toward a clear purpose.",
        port_desc2: "The result is a strong, coherent brand with presence, capable of connecting with its audience and standing out in its environment."
    }
};

let currentLang = 'es';

function applyTranslations() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
    splitLineas();

    // Actualiza el botón para mostrar el idioma al que cambiará
    const btn = document.getElementById('lang-btn');
    if (btn) btn.textContent = currentLang === 'es' ? '🌐 EN' : '🌐 ES';
}

function toggleLang() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    applyTranslations();
}

// Inicializa cuando cargue todo
window.addEventListener('load', () => {
    const btn = document.getElementById('lang-btn');
    if (btn) {
        btn.addEventListener('click', toggleLang);
        btn.textContent = '🌐 EN'; // muestra el idioma al que cambiará
    }
});
function splitLineas() {
    document.querySelectorAll('.linea').forEach(el => {
        // Toma el texto del atributo, no del DOM (que ya tiene spans)
        const texto = el.getAttribute(`data-${currentLang}`);

        el.innerHTML = texto
            .split('')
            .map(letra => {
                if (letra === ' ') {
                    return `<span style="width:20px; display:inline-block;"></span>`;
                }
                return `<span>${letra}</span>`;
            })
            .join('');
    });
}