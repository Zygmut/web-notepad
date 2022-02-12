function zen_mode() {
  localStorage.setItem("zen_mode", CONFIG.zen_mode);

  if (CONFIG.zen_mode === "true") {
    document.getElementById("menu_btn").innerHTML = "";
  }
}
