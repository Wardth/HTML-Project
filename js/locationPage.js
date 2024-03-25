//Togle active 
const navbarNav = document.querySelector ('.navbar-main');

//Ketika hamburger menu di klik
document.querySelector ('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle ('active');
};


//klik ditempat asal agar menunya hilang
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})