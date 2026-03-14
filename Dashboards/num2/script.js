document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const btnToggle = document.getElementById('btn-toggle');
    const hasSubmenu = document.querySelectorAll('.has-submenu');

    btnToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');

        if (sidebar.classList.contains('collapsed')) {
            sidebar.style.width = '85px';
            hasSubmenu.forEach(item => item.classList.remove('open'));
        } else {
            sidebar.style.width = '260px';
        }
    });

    hasSubmenu.forEach(item => {
        const header = item.querySelector('.submenu-header');
        header.addEventListener('click', (e) => {
            e.preventDefault();
            item.classList.toggle('open');

            hasSubmenu.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                }
            });
        });
    });
})

const trigger = document.getElementById('user-menu-trigger');
const dropdown = document.getElementById('user-dropdown');

trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
});

document.addEventListener('click', () => {
    dropdown.classList.remove('active');
})