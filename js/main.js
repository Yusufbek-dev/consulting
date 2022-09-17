let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".list");
let close = document.querySelector(".bg-close");

hamburger.addEventListener("click", ()=> {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  close.classList.toggle("active");
});

document.querySelectorAll(".list a").forEach(item => {
  item.addEventListener("click", ()=> {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    close.classList.remove("active");
  });
});

close.addEventListener("click", ()=> {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    close.classList.remove("active");
})