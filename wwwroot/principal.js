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
    ponVal("resultado", sumar(operando1, operando2));
}
function pulseRestar() {
    var operando1 = tomaVal("operando1");
    var operando2 = tomaVal("operando2");
    ponVal("resultado", restar(operando1, operando2));
}
function pulseMult() {
    var operando1 = tomaVal("operando1");
    var operando2 = tomaVal("operando2");
    ponVal("resultado", multiplicar(operando1, operando2));
}
var boton = document.getElementById("sumar");
var boton1 = document.getElementById("restar");
var boton2 = document.getElementById("multiplicar");
boton.addEventListener("click", pulseSumar);
boton1.addEventListener("click", pulseRestar);
boton2.addEventListener("click", pulseMult);
//# sourceMappingURL=principal.js.map