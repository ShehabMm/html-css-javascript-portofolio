// const burgerMenu = document.querySelector(".burger-menu");
// const blackScreen = document.querySelector(".black-screen")
// const close = document.querySelector(".close");
// const nav = document.querySelector(".nav");
// const change = document.querySelector(".change")
// const parent = document.querySelector(".parent")
const sidemenu = document.getElementById("sidemenu");
const ecommerce = document.getElementById("ecommerce");
const url = 'https://magical-mousse-e0a3f8.netlify.app/';
const url2= 'https://legendary-hotteok-86e2d4.netlify.app/';
const bridge =document.getElementById("bridge");
const url3 ='https://comfy-puffpuff-8aa42c.netlify.app/';
const comfy= document.getElementById("comfy");
const url4 = 'https://tubular-genie-8003f4.netlify.app/';
const todo = document.getElementById("todo")


function openmenu (){

  sidemenu.style.right="0";



}

function closemenu (){

  sidemenu.style.right="-400px";
  


}

ecommerce.addEventListener("click", () => {

  window.open(url, '_blank');  
})

bridge.addEventListener("click", () => {

  window.open(url2, '_blank');  

  
})


comfy.addEventListener("click", () => {

  window.open(url3, '_blank');  

  
})

todo.addEventListener("click", () => {

  window.open(url4, '_blank');  

  
})







// close.addEventListener("click", (eo) => {
 

//   blackScreen.style.display = "none";
//   parent.classList.remove("change");
//   burgerMenu.style.display = "block";

// })

// burgerMenu.addEventListener("click", (eo) => {

//   burgerMenu.style.display = "none";
//   close.style.display = "block";
//   parent.classList.add("change");
//   blackScreen.style.display="block";
// })



// // contact me
// function validateForm() {
//   // Get the values from the form
//   var name = document.getElementById('name').value;
//   var email = document.getElementById('email').value;
//   var message = document.getElementById('message').value;
 
//   // Validate the values
//   if (name == '' || email == '' || message == '') {
//     alert('Please fill out all fields.');
//     return false;
//   }
 
//   // Submit the form
//   return true;
// }



