
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

// Form validation
function validateForm() {
  let x = document.forms["myForm"]["first-name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  else(x=="")
}