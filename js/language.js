// icons https://www.flaticon.com/packs/flags-18?style_id=15&family_id=3&group_id=1
function get_lang_index() {
  actual = localStorage.getItem("language");
  for (let i = 0; i < language_list.length; i++) {
    if (language_list[i] == actual) {
      return i;
    }
  }
}

function next_lang() {
  localStorage.setItem(
    "language",
    language_list[(get_lang_index() + 1) % language_list.length]
  );
}

function get_name(button) {
  switch (localStorage.getItem("language")) {
    case "es":
      return lang_es.get(button);
    case "en":
      return lang_en.get(button);
    case "cat":
    default:
      return lang_cat.get(button);
  }
}

function set_names() {
  // Set names for edit_box and file_name
  if (localStorage.getItem("icon_mode") === "false") {
    for (let i = 0; i < icoItems.length; i++) {
      inner = document.getElementById(icoItems[i]).innerHTML.split("</svg>")[0] +
        "</svg>";
      if(icoItems[i] === "dark_btn"){
        if(localStorage.getItem("dark_mode") === 'true'){
          inner += get_name("light_btn");
        }else{
          inner += get_name("dark_btn");
        }
      }else{
        inner += get_name(icoItems[i]);
      }
      document.getElementById(icoItems[i]).innerHTML = inner
    }
    document.getElementById("lan_btn").innerHTML =
      `<img class="icon" src="` +
      get_name("image_path") +
      `">` +
      get_name("lan_btn");
  } else {
    document.getElementById("lan_btn").innerHTML =
      `<img class="icon" src="` + get_name("image_path") + `"> `;
  }
  document.getElementById("file_name").placeholder = get_name("file_name");
  document.getElementById("edit_box").placeholder = get_name("edit_box");
}
