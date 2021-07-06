document.querySelector("#open-menu").onclick = function(){
  document.body.style.overflow="hidden";
  document.querySelector(".navbar").classList.add("navbar_opened");
}

document.querySelector("#navbar__close").onclick = function(){
  document.querySelector(".navbar").classList.remove("navbar_opened");
  document.body.removeAttribute("style");
}
