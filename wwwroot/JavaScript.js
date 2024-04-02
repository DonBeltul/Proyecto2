function sumar(operando1, operando2) {
    return operando1 + operando2;
}
function restar(operando1, operando2) {
    return operando1 - operando2;
}
function multiplicar(operando1, operando2) {
    return operando1 * operando2;
}
function tomaVal(nombreOperando) {
    return Number(document.getElementById(nombreOperando).value);
}
function ponVal(elemento, valor) {
    document.getElementById(elemento).value = valor.toString();
}
function pulseSumar() {
    var operando1 = tomaVal("operando1");
    var operando2 = tomaVal("operando2");
}
var boton = document.getElementById("sumar");
boton.addEventListener("click", pulseSumar);
//# sourceMappingURL=principal.js.map