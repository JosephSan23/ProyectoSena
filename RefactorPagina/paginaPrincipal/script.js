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

window.addEventListener('scroll', function() {
    const header = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');

    if (window.scrollY > (hero.offsetHeight - 80)) {
        header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
});