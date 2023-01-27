const burgerMenu = document.querySelector(".burger-menu");
const blackScreen= document.querySelector(".black-screen")
const close = document.querySelector(".close");
const nav  = document.querySelector(".nav");

burgerMenu.addEventListener("click", (eo) => {

  burgerMenu.style.display="none"
  blackScreen.style.display="block";
  close.style.display="block";

})


close.addEventListener("click", (eo) => {


  blackScreen.style.display="none";
  burgerMenu.style.display="block"

  
})