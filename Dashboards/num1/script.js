document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const dropdowns = document.querySelectorAll('.dropdown-trigger');

    dropdowns.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const parent = trigger.parentElement;

            document.querySelectorAll('.nav-group').forEach(group => {
                if (group !== parent) group.classList.remove('active');
            });

            parent.classList.toggle('active');
        })
    })
})