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



// contact me
function validateForm() {
  // Get the values from the form
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
 
  // Validate the values
  if (name == '' || email == '' || message == '') {
    alert('Please fill out all fields.');
    return false;
  }
 
  // Submit the form
  return true;
}



