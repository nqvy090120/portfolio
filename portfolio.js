const navStack = document.querySelector('.nav-stack');
const navList = document.querySelector('.nav-bar');
navStack.addEventListener('click', () => {
    navList.classList.toggle('open');
    navStack.classList.toggle('active');
})