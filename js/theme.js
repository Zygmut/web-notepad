// Store the theme
let darkTheme = localStorage.getItem("dark_theme");
const themeToggle = document.getElementById("dark-btn");
const bodyBackground = document.getElementById("#body");

// Apply Dark theme
const enableDark = () => {
  document.body.classList.add("darktheme");
  localStorage.setItem("dark_theme", "enabled");
  themeToggle.innerHTML = `<a class="buton" id="dark-btn"><i class="icon" id="dark" icon-name="sun"></i>Light mode</a>`;
  lucide.createIcons();
};

// Remove Dark theme
const disableDark = () => {
  document.body.classList.remove("darktheme");
  localStorage.setItem("dark_theme", null);
  themeToggle.innerHTML = `<a class="buton" id="dark-btn"><i class="icon" id="dark" icon-name="moon"></i>Dark mode</a>`;
  lucide.createIcons();
};

//Toggle theme
if (darkTheme === "enabled") {
  // Temporarily disable transitions when changing theme on startup
  document.body.classList.add("notransition");
  enableDark();
  document.body.offsetHeight; // Trigger reflow to flush CSS changes
  document.body.classList.remove("notransition");
} else {
  disableDark();
}
