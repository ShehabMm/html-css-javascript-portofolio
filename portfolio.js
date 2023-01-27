const burgerMenu = document.querySelector(".burger-menu");
const blackScreen= document.querySelector(".black-screen")



burgerMenu.addEventListener("click", (eo) => {

  burgerMenu.classList.toggle("dark");

  blackScreen.style.display="block";



  
})