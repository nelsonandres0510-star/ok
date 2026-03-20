window.addEventListener("load", () => {

    document.querySelectorAll(".linea").forEach(el => {
        const texto = el.textContent;

        el.innerHTML = texto
            .split("")
            .map(letra => {
                if (letra === " ") {
                    return `<span style="width:20px;"></span>`;
                }
                return `<span>${letra}</span>`;
            })
            .join("");
    });

    let current = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slidesContainer = document.querySelector('.slides');

    // Navbar
    const nav = document.getElementById('main-nav');

    // Botones
    const btnNext = document.querySelector('.next');
    const btnPrev = document.querySelector('.prev');

    function showSlide(index) {
        if (index >= totalSlides) current = 0;
        else if (index < 0) current = totalSlides - 1;
        else current = index;

        slidesContainer.style.transform = `translateX(-${current * 100}%)`;

        updateNavbar(current); 
    }

    function updateNavbar(index) {
        if (
            slides[index].classList.contains('servicios') ||
            slides[index].classList.contains('portafolio')
        ) {
            nav.classList.add('is-on-dark'); // blanco
        } else {
            nav.classList.remove('is-on-dark'); // negro
        }
    }

    // Eventos botones
    btnNext.addEventListener('click', () => {
        showSlide(current + 1);
    });

    btnPrev.addEventListener('click', () => {
        showSlide(current - 1);
    });

    // Inicial
    window.addEventListener('load', () => {
        showSlide(0);
    });
    let startX = 0;

    slidesContainer.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    slidesContainer.addEventListener("touchend", e => {
        let endX = e.changedTouches[0].clientX;

        if (startX - endX > 50) showSlide(current + 1);
        if (endX - startX > 50) showSlide(current - 1);
    });
    
});
