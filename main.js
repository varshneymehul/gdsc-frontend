window.addEventListener("scroll", function (e) {
  if (window.scrollY > 500) {
    document.getElementById("navbarLater").style.display = "flex";
  } else {
    document.getElementById("navbarLater").style.display = "none";
  }
});
