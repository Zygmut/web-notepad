var save_elements = ['file-name', 'edit-box', ]


function save_settings(){

    for (let i=0; i < save_elements.length; i++) {
        localStorage.setItem(save_elements[i], document.getElementById(save_elements[i]).value)
    }
}

function load_settings(){
    
    for (let i=0; i < save_elements.length; i++) {
        document.getElementById(save_elements[i]).value = localStorage.getItem(save_elements[i])
    }
    
}

if (window.localStorage) {
    load_settings()
}