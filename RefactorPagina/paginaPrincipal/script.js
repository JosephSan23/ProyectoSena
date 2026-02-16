// Animacion al realizar scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('activo')
        }
    });
}, {
    threshold: 0.1
});

const elementosAanimar = document.querySelectorAll('.revelar, .revelar-izq');
elementosAanimar.forEach((el) => observer.observe(el));

// Header scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');

    if (window.scrollY > (hero.offsetHeight - 80)) {
        header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
});

// Expandir imagenes
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
document.body.appendChild(lightbox);

const imgContainer = document.querySelectorAll('.feature-image img');

imgContainer.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});