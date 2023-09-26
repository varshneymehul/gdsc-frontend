window.addEventListener("scroll", function (e) {
  if (windows.scrollY > 1000) {
    this.document.getElementById(".navBarLater").style.display = "flex";
  } else {
    document.getElementById("logo").style.display = "none";
  }
});
