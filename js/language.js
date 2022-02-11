// icons https://www.flaticon.com/packs/flags-18?style_id=15&family_id=3&group_id=1

const lang_es = new Map([
  ["open_btn", "Abrir"],
  ["save_btn", "Guardar"],
  ["menu_btn", "Menu"],
  ["dark_btn", "Oscuro"],
  ["light_btn", "Brillante"],
  ["ico_btn", "Iconos"],
  ["lan_btn", "Español"]
]);

const lang_en = new Map([
  ["open_btn", "Open"],
  ["save_btn", "Save"],
  ["menu_btn", "Menu"],
  ["dark_btn", "Dark"],
  ["light_btn", "Light"],
  ["ico_btn", "Icons"],
  ["lan_btn", "English"]
]);

const lang_cat = new Map([
  ["open_btn", "Obre"],
  ["save_btn", "Salva"],
  ["menu_btn", "Menu"],
  ["dark_btn", "Oscur"],
  ["light_btn", "Shiny"], // Gracias Alberto "el chino"
  ["ico_btn", "Icones"],
  ["lan_btn", "Català"]
]);

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
