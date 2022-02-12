// icons https://www.flaticon.com/packs/flags-18?style_id=15&family_id=3&group_id=1
let language_list = ["es", "en", "cat"];

const lang_es = new Map([
  ["open_btn", "Abrir"],
  ["save_btn", "Guardar"],
  ["menu_btn", "Menu"],
  ["dark_btn", "Oscuro"],
  ["light_btn", "Brillante"],
  ["ico_btn", "Iconos"],
  ["lan_btn", "Español"],
  ["edit_box", "Escribe aqui..."],
  ["file_name", "Nombre del archivo"],
  ["image_path", "assets/icons/spain_flag.png"],
]);

const lang_en = new Map([
  ["open_btn", "Open"],
  ["save_btn", "Save"],
  ["menu_btn", "Menu"],
  ["dark_btn", "Dark"],
  ["light_btn", "Light"],
  ["ico_btn", "Icons"],
  ["lan_btn", "English"],
  ["edit_box", "Type here..."],
  ["file_name", "File name"],
  ["image_path", "assets/icons/united_kingdom_flag.png"],
]);

const lang_cat = new Map([
  ["open_btn", "Obre"],
  ["save_btn", "Salva"],
  ["menu_btn", "Menu"],
  ["dark_btn", "Oscur"],
  ["light_btn", "Shiny"], // Gracias Alberto "el chino"
  ["ico_btn", "Icones"],
  ["lan_btn", "Català"],
  ["edit_box", "Escriu aquí..."],
  ["file_name", "Nom del archiu"],
  ["image_path", "assets/icons/catalan_flag.png"],
]);

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
      document.getElementById(icoItems[i]).innerHTML =
        document.getElementById(icoItems[i]).innerHTML.split("</svg>")[0] +
        "</svg>" +
        get_name(icoItems[i]);
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
