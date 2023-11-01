const menuToggle = document.getElementById('hamburgerMenu');
const nav = document.querySelector('.nav2');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});