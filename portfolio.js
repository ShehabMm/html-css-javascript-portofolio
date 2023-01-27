const burgerMenu = document.querySelector(".burger-menu");
const blackScreen= document.querySelector(".black-screen")
const close = document.querySelector(".close");


burgerMenu.addEventListener("click", (eo) => {

  burgerMenu.style.display="none"
  blackScreen.style.display="block";
  close.style.display="block";
  close.style.transform="rotate(450deg)" ;
  eo.target.style.transition = "all 2s ease";
  

})


close.addEventListener("click", (eo) => {


  blackScreen.style.display="none";
  burgerMenu.style.display="block"

  
})