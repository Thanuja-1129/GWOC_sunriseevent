function toggleMenu() {
    const nav = document.querySelector('.nav');
    const menuIcon = document.querySelector('.menu-icon');
    const isExpanded = nav.classList.toggle('active');
    menuIcon.setAttribute('aria-expanded', isExpanded);
}