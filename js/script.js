const navbar = document.querySelector('.navbar');
const menuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
    navbar.classList.remove('transparent');
  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.add('transparent');
  }
});

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

AOS.init({
  duration: 1000,
  once: true
});


const acc = document.querySelectorAll(".accordion");
  acc.forEach(btn => {
    btn.addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });
