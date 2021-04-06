function openNav() {
  document.getElementById("nav-bar").style.width = "50%";
  document.getElementById("nav-bar").style.padding = "2vh";
  document.getElementById("close-nav-icon").querySelector("i").style.fontSize =
    "2rem";
}

function closeNav() {
  document.getElementById("nav-bar").style.width = "0";
  document.getElementById("nav-bar").style.padding = "0";
  document.getElementById("close-nav-icon").querySelector("i").style.fontSize =
    "0";
}
