window.addEventListener("scroll", function (e) {
  if (window.scrollY > 500) {
    document.getElementById("navbarLater").style.display = "flex";
  } else {
    document.getElementById("navbarLater").style.display = "none";
  }
});

function openNav() {
  document.getElementById("mySidenav").style.width = "100vw";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
