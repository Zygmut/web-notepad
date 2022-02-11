// Store the theme
const themeToggle = document.getElementById("dark_btn");

// Apply Dark theme
const enableDark = () => {
  document.body.classList.add("darktheme");
  localStorage.setItem("dark_mode", true);
  themeToggle.innerHTML = `<i class="icon" id="dark" icon-name="sun"></i>`;
  if (localStorage.getItem("icon_mode") === 'true') {
    themeToggle.innerHTML += " ";
  } else {
    themeToggle.innerHTML += "Light";
  }
  lucide.createIcons();
};

// Remove Dark theme
const disableDark = () => {
  document.body.classList.remove("darktheme");
  localStorage.setItem("dark_mode", false);
  themeToggle.innerHTML = `<i class="icon" id="dark" icon-name="moon"></i>`;
  if (localStorage.getItem("icon_mode") === 'true') {
    themeToggle.innerHTML += " ";
  } else {
    themeToggle.innerHTML += "Dark";
  }
  lucide.createIcons();
};

//Toggle theme
if (localStorage.getItem("dark_mode") === 'true') {
  // Temporarily disable transitions when changing theme on startup
  document.body.classList.add("notransition");
  enableDark();
  document.body.offsetHeight; // Trigger reflow to flush CSS changes
  document.body.classList.remove("notransition");
} else {
  disableDark();
}
