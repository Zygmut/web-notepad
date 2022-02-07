function addEvent(elem, type, eventHandle) {
    if (elem == null || typeof (elem) == 'undefined') return
    if (elem.addEventListener) {
        elem.addEventListener(type, eventHandle, false)
    } else if (elem.attachEvent) {
        elem.attachEvent("on" + type, eventHandle)
    } else {
        elem["on" + type] = eventHandle
    }
}

function open_file(e) {
    var file = e.target.files;
    var reader = new FileReader();
    reader.file = file[0]

    reader.onload = function (e) {
        document.getElementById("file-name").value = this.file.name.split(".")[0];  // Name | remove .txt
        document.getElementById("edit-box").value = e.target.result; // File contents 
    };

    reader.readAsText(file[0]);
}