//10. Múltiplos de 3 Enunciado: Contar cuántos números entre 1 y 50 son múltiplos de 3.//
let cont: number = 0;
for (let i = 1; i <= 50; i++) if (i % 3 === 0) cont++;
console.log(cont);