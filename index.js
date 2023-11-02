let navMenu = document.querySelector(".nav-menu");
let menuBtn = document.querySelector(".nav-toggle-div");
let menuBtnIcon = document.querySelector(".nav-toggle-div i");

menuBtn.addEventListener("click", function () {
  //
  if (menuBtnIcon.classList.contains("fa-bars")) {
    navMenu.style.left = "0";
    menuBtnIcon.classList = "fa fa-times bigger-icon";
  } else {
    navMenu.style.left = "-195.2px";
    menuBtnIcon.classList = "fa-solid fa-bars bigger-icon";
  }
});
