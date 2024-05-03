//tablas de multiplicar
let botonTablas = document.getElementById("mostrarTablas");
if (botonTablas) {
    botonTablas.addEventListener("click", () => {
        let resultado = "";
        for (let i = 2; i <= 10; i++) {
            resultado += `<h3>Tabla del ${i}</h3>`;
            for (let j = 1; j <= 10; j++) {
                resultado += `${i} x ${j} = ${i * j}<br>`;
            }
        }
        document.getElementById("tablas").innerHTML = resultado;
    });
}

//numero primo
document.getElementById('verificar').addEventListener('click', () => {
    const { value: numero } = document.getElementById('numero');
    const resultado = document.getElementById('resultado');

    if (!numero || isNaN(numero)) {
        resultado.innerText = "Por favor, ingresa un número válido.";
        return;
    }

    const num = parseInt(numero);
    resultado.innerText = `El número ${num} ${esPrimo(num) ? "es" : "no es"} primo.`;
});

const esPrimo = (numero) => {
    if (numero < 2) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
};

//fibonacci
let botonFibonacci = document.getElementById('generar');
if (botonFibonacci) {
    botonFibonacci.addEventListener('click', () => {
        const generarFibonacci = (n) => {
            let numeros = [0, 1];
            for (let i = 2; i < n; i++) {
                numeros.push(numeros[i - 1] + numeros[i - 2]);
            }
            return numeros;
        }

        document.getElementById('fibonacci').innerText = generarFibonacci(20).join(', ');
    });
}