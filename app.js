const navToggle = document.querySelector(".header__toggle-btn");
const navbar = document.querySelector(".navbar");
const header = document.querySelector("header");

navToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
    navToggle.classList.toggle("active");
});


// Scroll Event
document.addEventListener("scroll",()=>{
let scrollPos = window.scrollY;
if(scrollPos > 300)
    header.classList.add("scrolled");
else header.classList.remove("scrolled");
});

//Window Resize

window.addEventListener('resize', ()=>{
    navbar.classList.remove("active");
});