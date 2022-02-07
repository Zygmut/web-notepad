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
    document.getElementById("edit-box").value = '';
    var reader = new FileReader();
    reader.file = file[0]
    reader.onload = function (e) {
        lines = e.target.result.split("\n");

        document.getElementById("file-name").value = lines[0];  // Name
        
        // I hate to iterate line by line to copy all the file. I could do something
        // better, but I don't whant to use centinels to give the user max freedom
        for (let i = 1; i < lines.length; i++) {
            document.getElementById("edit-box").value += lines[i]; // File contents 
        }
    };
    
    reader.readAsText(file[0]);
}