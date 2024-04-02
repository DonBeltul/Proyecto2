function sumar(operando1: number, operando2: number) {
    return operando1 + operando2;
}

function restar(operando1: number, operando2: number) {
    return operando1 - operando2;
}
function multiplicar(operando1: number, operando2: number) {
    return operando1 * operando2;
}

function tomaVal(nombreOperando: string) {
    return Number((<HTMLInputElement>document.getElementById(nombreOperando)).value);
}
function ponVal(elemento: string, valor: number) {
    (<HTMLInputElement>document.getElementById(elemento)).value = valor.toString();
}
function pulseSumar() {
    let operando1 = tomaVal("operando1");
    let operando2 = tomaVal("operando2");
    ponVal("resultado", sumar(operando1, operando2));
}
function pulseRestar() {
    let operando1 = tomaVal("operando1");
    let operando2 = tomaVal("operando2");
    ponVal("resultado", restar(operando1, operando2));
}
function pulseMult() {
    let operando1 = tomaVal("operando1");
    let operando2 = tomaVal("operando2");
    ponVal("resultado", multiplicar(operando1, operando2));
}


let boton = document.getElementById("sumar");
let boton1 = document.getElementById("restar");
let boton2 = document.getElementById("multiplicar");
boton.addEventListener("click", pulseSumar);
boton1.addEventListener("click", pulseRestar);
boton2.addEventListener("click", pulseMult);