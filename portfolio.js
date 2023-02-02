// const burgerMenu = document.querySelector(".burger-menu");
// const blackScreen = document.querySelector(".black-screen")
// const close = document.querySelector(".close");
// const nav = document.querySelector(".nav");
// const change = document.querySelector(".change")
// const parent = document.querySelector(".parent")
const sidemenu = document.getElementById("sidemenu");
const ecommerce = document.getElementById("ecommerce");
const url = "https://chipper-semolina-f8d6dd.netlify.app/";
const url2 = "https://legendary-hotteok-86e2d4.netlify.app/";
const bridge = document.getElementById("bridge");
const url3 = "https://comfy-puffpuff-8aa42c.netlify.app/";
const comfy = document.getElementById("comfy");
const url4 = "https://tubular-genie-8003f4.netlify.app/";
const todo = document.getElementById("todo");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-400px";
}

ecommerce.addEventListener("click", () => {
  window.open(url, "_blank");
});

bridge.addEventListener("click", () => {
  window.open(url2, "_blank");
});

comfy.addEventListener("click", () => {
  window.open(url3, "_blank");
});

todo.addEventListener("click", () => {
  window.open(url4, "_blank");
});

// autoWriting.......
let i = 1;
const auto = document.getElementsByTagName("h6")[0];

const autoWriting = () => {
  auto.innerText = "Hi, my name is".slice(0, i);
  i++;

  if (i > "Hi, my name is".length) {
    clearInterval(stop);
  }
};

const stop = setInterval(autoWriting, 300);

// toggle buttons

const article = document.getElementsByClassName("fun-facts")[0];

const allTabs = document.querySelectorAll(".hama");

const parents = document.querySelector(".mom");
const aa = document.getElementsByClassName("fun-facts")[0];
console.log(aa);

allTabs.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    article.parentElement
      .getElementsByClassName("actives")[0]
      .classList.remove("actives");
    article.parentElement
      .getElementsByClassName("fun-facts")
      [index].classList.add("actives");
  });
});
