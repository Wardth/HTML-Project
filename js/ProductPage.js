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

function filterByBrand(brand) {
    var galleryItems = document.getElementsByClassName('item');
    var buttons = document.getElementsByClassName('btn');
  
    for (var i = 0; i < galleryItems.length; i++) {
      var item = galleryItems[i];
      var itemName = item.getElementsByTagName('h3')[0].innerText.toLowerCase();
  
      if (brand === '') {
        item.style.display = 'block';
      } else if (itemName.includes(brand.toLowerCase())) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    }
  
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('active');
    }
  
    var activeButton = document.querySelector('.btn[data-brand="' + brand + '"]');
    activeButton.classList.add('active');
  }
