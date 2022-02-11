// icons https://www.flaticon.com/packs/flags-18?style_id=15&family_id=3&group_id=1

var buttons = ["open_btn", "save_btn", "menu_btn", "dark_btn", "light_btn", "icon_btn"]

let hash_es = {
    
}

var lang_es = ["Abir",
               "Guardar",
               "Menu",
               "Oscuro",  
               "Brillante",
               "Iconos"]

var lang_en = ["Open",
               "Save",
               "Menu",
               "Dark", // Needs to versions 
               "Light",
               "Icons",
]

var lang_cat = ["Obre",
                "Salva",
                "Menu",
                "Oscur", // Needs to versions 
                "Shiny", // needs to change : Alberto "el chino"
                "Icones",
]

function get_lang() {
  switch (localStorage.getItem("language")) {
    case "es":
      lang = lang_es;
      break;
    case "en":
      lang = lang_en;
      break;
    case "cat":
    default:
      lang = lang_cat;
      break;
  }
  return lang
}

function get_name(button){
    lang = get_lang();
}