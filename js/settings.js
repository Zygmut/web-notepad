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

function load_config(){
    Object.keys(CONFIG).forEach(function(key){
        console.log(CONFIG[key]);
    })
    document.documentElement.style.setProperty('--animation_speed', CONFIG.animation_speed);
}

if (window.localStorage) {
    load_config();
    load_settings();
}