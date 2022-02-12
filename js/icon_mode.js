// Store icon mode
const iconToggle = document.getElementById("ico_btn");

// Apply icon mode
const enableIco = () => {
  localStorage.setItem("icon_mode", true);
  for (let i = 0; i < icoItems.length; i++) {
    document.getElementById(icoItems[i]).innerHTML =
      document.getElementById(icoItems[i]).innerHTML.split("</svg>")[0] +
      "</svg> ";
  }
  // Change flag
  document.getElementById("lan_btn").innerHTML = `<img class="icon" src="` + get_name("image_path") + `"> `
};

// Disable icon mode
const disableIco = () => {
  localStorage.setItem("icon_mode", false);
  for (let i = 0; i < icoItems.length; i++) {
    document.getElementById(icoItems[i]).innerHTML =
      document.getElementById(icoItems[i]).innerHTML.split("</svg>")[0] +
      "</svg>" +
      get_name(icoItems[i]);
  }
  
  // Change flag
  document.getElementById("lan_btn").innerHTML = `<img class="icon" src="` + get_name("image_path") + `">` + get_name("lan_btn")
};

// Toggle ico
if (localStorage.getItem("icon_mode") === "true") {
  // Temporarily disable transitions when changing theme on startup
  document.body.classList.add("notransition");
  enableIco();
  document.body.offsetHeight; // Trigger reflow to flush CSS changes
  document.body.classList.remove("notransition");
} else {
  disableIco();
}
