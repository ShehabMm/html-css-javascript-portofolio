const burgerMenu = document.querySelector(".burger-menu");
const blackScreen = document.querySelector(".black-screen")
const close = document.querySelector(".close");
const nav = document.querySelector(".nav");
const change = document.querySelector(".change")
const parent = document.querySelector(".parent")







burgerMenu.addEventListener("click", (eo) => {

  burgerMenu.style.display = "none"
  close.style.display = "block";
  parent.classList.add("change");
  blackScreen.style.display="block";
})


close.addEventListener("click", (eo) => {


  blackScreen.style.display = "none";
  burgerMenu.style.display = "block";
  parent.classList.remove("change");

})



// carousel

