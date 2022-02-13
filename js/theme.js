// Store the theme
const themeToggle = document.getElementById("dark_btn");

// Apply Dark theme
const enableDark = () => {
  document.body.classList.add("darktheme");
  localStorage.setItem("dark_mode", true);
  themeToggle.innerHTML = `
<svg class ="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4"></circle>
  <path d="M12 2v2"></path>
  <path d="M12 20v2"></path>
  <path d="M5 5l1.5 1.5"></path>
  <path d="M17.5 17.5L19 19"></path>
  <path d="M2 12h2"></path>
  <path d="M20 12h2"></path>
  <path d="M5 19l1.5-1.5"></path>
  <path d="M17.5 6.5L19 5"></path>
</svg>
  `;
  if (localStorage.getItem("icon_mode") === "true") {
    themeToggle.innerHTML += " ";
  } else {
    themeToggle.innerHTML += get_name("light_btn");
  }
};

// Remove Dark theme
const disableDark = () => {
  document.body.classList.remove("darktheme");
  localStorage.setItem("dark_mode", false);
  themeToggle.innerHTML = `
<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
</svg>
  `;
  if (localStorage.getItem("icon_mode") === "true") {
    themeToggle.innerHTML += " ";
  } else {
    themeToggle.innerHTML += get_name("dark_btn");
  }
};

//Toggle theme
if (localStorage.getItem("dark_mode") === "true") {
  enableDark();
} else {
  disableDark();
}
