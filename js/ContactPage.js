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

function validateForm(event) {
    event.preventDefault();
    
    var fullName = document.getElementById("fullName").value;
    if (fullName.trim() === "") {
      alert("Please enter your full name");
      return;
    }
    
    var email = document.getElementById("email").value;
    if (email.trim() === "") {
      alert("Please enter your email address");
      return;
    }
    
    var country = document.getElementById("country").value;
    if (country.trim() === "") {
      alert("Please enter your country/region");
      return;
    }
    
    var message = document.getElementById("message").value;
    if (message.trim() === "") {
      alert("Please enter your message");
      return;
    }
    
    var agreement = document.getElementById("agreement").checked;
    if (!agreement) {
      alert("Please agree to receive a copy of your message");
      return;
    }
    
    document.getElementById("contactForm").submit();
  }
