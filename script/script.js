 //  Slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Föregående och nästa pilar
function plusSlides(n) {
  showSlides((slideIndex += n));

}
function currentSlide(n) {
  showSlides((slideIndex = n));

}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


//Hamburgare meny
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))


    // Dark och light mode
    function darkMode() {     
      var element = document.body;
      element.className = "dark-mode";
      const navElement = document.querySelector(".navbar");
      navElement.style.backgroundColor ="black";
      navElement.style.color="white";
      navElement.style.opacity =0.8;

      const wrapperElement = document.querySelector(".wrapper-home");
      wrapperElement.style.backgroundColor = "#65764f";

      const logoElement = document.querySelector(".navbar a");
      logoElement.style.color = "white";

      const navLinkElements = document.querySelectorAll(".nav-link");
      navLinkElements.forEach(navLinkElement => {
        
      });

      const footerElement = document.querySelector(".footer");
      footerElement.style.backgroundColor = "black";

    }
    function lightMode() {
      var element = document.body;
      element.className = "light-mode";
      
      const navElement = document.querySelector(".navbar");
      navElement.style.backgroundColor ="white";
      navElement.style.color="black";
      navElement.style.opacity =0.8;

      const logoElement = document.querySelector(".navbar a");
      logoElement.style.color = "black";

      const navLinkElements = document.querySelectorAll(".nav-link");
      navLinkElements.forEach(navLinkElement => {
        
      });

      const wrapperElement = document.querySelector(".wrapper");
      wrapperElement.style.backgroundColor = "#d7ddce";



    }