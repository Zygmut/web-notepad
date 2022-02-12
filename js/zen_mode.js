function zen_toggle() {
  localStorage.setItem("zen_mode", CONFIG.zen_mode);

  if (localStorage.getItem("zen_mode") === "true") {
    var elem = document.getElementById("menu_btn");
    elem.parentNode.removeChild(elem);
  }
}
