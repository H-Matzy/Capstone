const hamburger =  document.getElementById('hamburger');
const nav = document.getElementById('navigation');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
})