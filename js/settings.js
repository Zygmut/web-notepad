var save_elements = ['file-name', 'edit-box']

function save_settings() {
    for (let i = 0; i < save_elements.length; i++) {
        localStorage.setItem(save_elements[i], document.getElementById(save_elements[i]).value);
    }
}

/* Doesn't work. Don't know why */
function save_setting(setting) {
    if (save_elements.includes(setting)){
        localStorage.setItem(String(setting), document.getElementById(String(setting).value));
    }
}

function load_settings() {
    for (let i = 0; i < save_elements.length; i++) {
        document.getElementById(save_elements[i]).value = localStorage.getItem(save_elements[i]);
    }
}

/* Utility function to modify some value in css :root 
    - property: :root variable name e.g --font_size
    - set     : value that property will take
*/
function modify_css(property, set){
    document.documentElement.style.setProperty(property, set);
}

function load_config(){
    // Language
    localStorage.setItem("language", CONFIG.language);

    // Dark and icon mode
    localStorage.setItem("dark_mode", CONFIG.dark_mode);
    localStorage.setItem("icon_mode", CONFIG.icon_mode);

    /* CSS */
    // Default theme
    modify_css('--accent', CONFIG.accent);
    modify_css('--bg', CONFIG.bg);
    modify_css('--sbg', CONFIG.sbg);
    modify_css('--fg', CONFIG.fg);
    modify_css('--sfg', CONFIG.sfg);

    // Alt theme
    modify_css('--alt_accent', CONFIG.alt_accent);
    modify_css('--alt_bg', CONFIG.alt_bg);
    modify_css('--alt_sbg', CONFIG.alt_sbg);
    modify_css('--alt_fg', CONFIG.alt_fg);
    modify_css('--alt_sfg', CONFIG.alt_sfg);

    // Misc
    modify_css('--font_family', CONFIG.font_family);
    modify_css('--font_size', CONFIG.font_size);
    modify_css('--animation_speed', CONFIG.animation_speed);    
    modify_css('--icon_size', CONFIG.icon_size);
    modify_css('--navbar_height', CONFIG.navbar_height);
}

if (window.localStorage) {
    load_config();
    load_settings();
}