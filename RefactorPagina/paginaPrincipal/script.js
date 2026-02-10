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