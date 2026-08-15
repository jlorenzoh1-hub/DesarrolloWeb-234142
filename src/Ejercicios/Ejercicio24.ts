//24. Suma de números pares hasta N Enunciado: Leer un número N y sumar todos los pares hasta N.//
let n: number = parseInt(prompt("Ingrese un número")!);
let suma: number = 0;
for (let i = 2; i <= n; i += 2) suma += i;
console.log(suma);