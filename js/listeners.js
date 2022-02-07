addEvent(window, 'unload', save_settings);

addEvent(document.getElementById("edit-box"), 'input', save_settings);

addEvent(document.getElementById("open-btn"), 'click', function () {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    open_dilg.click();
  } else {
    alert('The File APIs are not fully supported in this browser.');
  }
  return false;
});

addEvent(save_btn, 'click', function () {
  var filename = file_name.value;
  if (filename == '') {
    filename = 'untitled.txt';
  }
  save_btn.download = filename;
  save_btn.href = 'data:text/octet-stream,' + escape(edit_box.value);
});
