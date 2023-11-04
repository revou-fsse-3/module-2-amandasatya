const menuToggle = document.querySelector('.hamburger');
const nav = document.querySelector('.nav2');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

const body = document.body;
const changeModeButton = document.getElementById('change-mode');
const themeStyle = document.getElementById('themeStyle');

const isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
    themeStyle.setAttribute('href', './css/navbar.css');
    changeModeButton.textContent = 'Day Mode';
} else {
    themeStyle.setAttribute('href', './css/whitemode.css');
    changeModeButton.textContent = 'Dark Mode';
}

changeModeButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDarkMode = body.classList.contains('dark');

    if (isDarkMode) {
        themeStyle.setAttribute('href', './css/navbar.css');
        changeModeButton.textContent = 'Day Mode';
        localStorage.setItem('darkMode', 'true');
    } else {
        themeStyle.setAttribute('href', './css/whitemode.css');
        changeModeButton.textContent = 'Dark Mode';
        localStorage.setItem('darkMode', 'false');
    }
});

console.log('isDarkMode:', isDarkMode);