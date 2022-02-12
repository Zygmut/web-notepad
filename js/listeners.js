addEvent(window, "unload", save_settings);

addEvent(document.getElementById("edit_box"), "input", function () {
  localStorage.setItem("edit_box", document.getElementById("edit_box").value);
});

addEvent(document.getElementById("file_name"), "input", function () {
  localStorage.setItem("file_name", document.getElementById("file_name").value);
});

addEvent(document.getElementById("open_btn"), "click", function () {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById("open-dilg").click();
  } else {
    alert("The File APIs are not fully supported in this browser.");
  }
  return false;
});

addEvent(document.getElementById("save_btn"), "click", function () {
  var filename = document.getElementById("file_name").value;
  if (filename == "") {
    filename = "untitled";
  }
  document.getElementById("save_btn").download = filename + ".txt";
  document.getElementById("save_btn").href =
    "data:text/octet-stream," +
    escape(document.getElementById("edit_box").value);
});

addEvent(document.getElementById("open-dilg"), "change", open_file);

addEvent(document.getElementById("dark_btn"), "click", function () {
  darkTheme = localStorage.getItem("dark_mode");
  if (darkTheme === "true") {
    disableDark();
  } else {
    enableDark();
  }
});

addEvent(document.getElementById("ico_btn"), "click", function () {
  iconMode = localStorage.getItem("icon_mode");
  if (iconMode === "true") {
    disableIco();
  } else {
    enableIco();
  }
});

addEvent(document.getElementById("lan_btn"), "click", function () {
  next_lang();
  set_names();
});

/* Enable shortucts. It doesn't work to enable/disable?
addEvent(document, "keydown", function (e) {
  if (e.ctrlKey) {
    if (e.keyCode === 83) {
      document.getElementById("save_btn").click();
      e.preventDefault();
    } else if (e.keyCode === 79) {
      console.log(CONFIG.enable_shortcuts);
      document.getElementById("open_btn").click();
      e.preventDefault();
    }
  }
}); */
