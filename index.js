const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
console.log(hamburger, nav);
hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
})