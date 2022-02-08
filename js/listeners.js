addEvent(window, "unload", save_settings);

addEvent(document.getElementById("edit-box"), "input", function () {
  localStorage.setItem("edit-box", document.getElementById("edit-box").value);
});

addEvent(document.getElementById("file-name"), "input", function(){
  localStorage.setItem("file-name", document.getElementById("file-name").value);
});

addEvent(document.getElementById("open-btn"), "click", function () {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById("open-dilg").click();
  } else {
    alert("The File APIs are not fully supported in this browser.");
  }
  return false;
});

addEvent(document.getElementById("save-btn"), "click", function () {
  var filename = document.getElementById("file-name").value + ".txt";
  if (filename == "") {
    filename = "untitled.txt";
  }
  document.getElementById("save-btn").download = filename;
  document.getElementById("save-btn").href =
    "data:text/octet-stream," +
    escape(document.getElementById("edit-box").value);
});

addEvent(document.getElementById("open-dilg"), "change", open_file);

addEvent(document.getElementById("dark-btn"), "click", function () {
  darkTheme = localStorage.getItem("dark_theme");
  if (darkTheme === 'true') {
    disableDark();
  } else {
    enableDark();
  }
});

addEvent(document.getElementById("ico-btn"), "click", function () {
  iconMode = localStorage.getItem("icon_mode");
  if (iconMode === 'true') {
    disableIco();
  } else {
    enableIco();
  }
});
