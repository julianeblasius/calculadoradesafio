document.addEventListener('keydown', function (a) {
    switch (a.keyCode) {
        case 48:
        case 49:
        case 50:
        case 52:
        case 51:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 189:
        case 13:
        case 187:
        case 191:
        case 8:
        case 96:
        case 110:
        case 190:
        case 97:
        let resultado = document.getElementById("resultado").innerHTML + a;
        document.getElementById("resultado").innerHTML = resultado;
        break;

    }
    
})