const multiplicacao = (n1, n2) => {
    return n1 * n2;
}
console.log("Resultado da primeira arrow function: " + multiplicacao(3, 2));

// ou ainda mais simples


const multiplicacao2 = (n1, n2) => n1 * n2;
console.log("Resultado da segunda arrow function: " + multiplicacao2(3, 5));