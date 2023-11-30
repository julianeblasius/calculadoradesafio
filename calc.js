function digitar(a) {
    let resultado = document.getElementById("resultado").innerHTML + a;
    document.getElementById("resultado").innerHTML = resultado;
}

let limpar = document.querySelector("#limpa");
limpar.addEventListener("click", function() {
    resultado = ""
    document.getElementById("resultado").innerHTML = resultado;
})