//20. Suma de dígitos Enunciado: Leer un número y mostrar la suma de sus dígitos.//
let n: number = parseInt(prompt("Ingrese un número")!);
let suma: number = 0;
while (n > 0) { suma += n % 10; n = Math.floor(n / 10); }
console.log(suma);