const inputCantidad = document.getElementById("cantidad");
const selectMoneda = document.getElementById("moneda");
const buttonCalcular = document.getElementById("calcular");
const outputResultado = document.getElementById("resultado");
const selectCategoria = document.getElementById("categoria");
const cambioUSD = 3.75; // Tipo de cambio de USD a PEN
const cambioEUR = 4.05; // Tipo de cambio de EUR a PEN

buttonCalcular.addEventListener("click", () => {
    const monto = Number(inputCantidad.value);
    if (monto <= 0) {
        outputResultado.textContent = "Ingrese un monto válido mayor a cero.";
        return;
    }
    else if (isNaN(monto)) {
        outputResultado.textContent = "Ingrese un monto válido.";
        return;
    }
    else if (monto < 1) {
        outputResultado.textContent = "El monto no puede ser menor a 1.";
        return;
    }

    const categoria = selectCategoria.value;

    const moneda = selectMoneda.value;

    let montoEnSoles = 0;
    if (moneda === "dolares") {
        montoEnSoles = monto * cambioUSD;
    }
    else if (moneda === "euros") {
        montoEnSoles = monto * cambioEUR;
    }
    else {
        montoEnSoles = monto;
    }

    let solesPorPunto = 0;
    if (categoria === "viajes") {
        solesPorPunto = 2;
    }
    else if (categoria === "restaurantes") {
        solesPorPunto = 3;
    }
    else {
        solesPorPunto = 5;
    }

    const puntos = Math.floor(montoEnSoles / solesPorPunto);

    outputResultado.textContent = `${puntos} puntos obtenidos.`;
});