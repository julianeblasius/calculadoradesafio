function digitar(a) {
    let resultado = document.getElementById("resultado").innerHTML + a;
    document.getElementById("resultado").innerHTML = resultado;
}

let limpar = document.querySelector("#limpa");
limpar.addEventListener("click", function() {
    resultado = ""
    document.getElementById("resultado").innerHTML = resultado;
})

let igual = document.querySelector("#igual");
igual.addEventListener("click", function() {
    let resultado = document.getElementById("resultado").innerHTML;
    resultado = resultado.replace("^", "**").replace("%", "/100")
    console.log(resultado)
    resultado = eval(resultado);
    document.getElementById("resultado").innerHTML = resultado;
})

let sin = document.querySelector("#seno");
sin.addEventListener("click", function() {
    let resultado = document.getElementById("resultado").innerHTML; 
    resultado = `Math.sin(${resultado})`
    resultado = eval(resultado);
    document.getElementById("resultado").innerHTML = resultado;
})

let cos = document.querySelector("#cos");
cos.addEventListener("click", function() {
    let resultado = document.getElementById("resultado").innerHTML; 
    resultado = `Math.cos(${resultado})`
    resultado = eval(resultado);
    document.getElementById("resultado").innerHTML = resultado;
})

let tan = document.querySelector("#tan");
tan.addEventListener("click", function() {
    let resultado = document.getElementById("resultado").innerHTML; 
    resultado = `Math.tan(${resultado})`
    resultado = eval(resultado);
    document.getElementById("resultado").innerHTML = resultado;
})