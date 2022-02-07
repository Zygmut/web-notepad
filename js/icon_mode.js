// Store icon mode
let iconMode = localStorage.getItem("icon_mode");
const iconToggle = document.getElementById("ico-btn");
let icoItems = ["open-btn", "save-btn", "menu-btn", "dark-btn", "ico-btn"]

// Apply icon mode
const enableIco = () => {
  localStorage.setItem("icon_mode", "enabled");
  for (let i = 0; i < icoItems.length; i++) {
      const element = array[i];
      
  }
};

// Disable icon mode
const disableIco = () => {
    localStorage.setItem("icon_mode", null);

};

// Toggle ico
if (iconMode == "enabled") {
  // Temporarily disable transitions when changing theme on startup
  document.body.classList.add("notransition");
  enableIco();
  document.body.offsetHeight; // Trigger reflow to flush CSS changes
  document.body.classList.remove("notransition");
} else {
  disableIco();
}
