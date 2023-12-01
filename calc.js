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
    resultado = resultado.replace("^", "**").replace("%", "/100");
    console.log(resultado)
    resultado = eval(resultado);
    document.getElementById("resultado").innerHTML = resultado;
})

