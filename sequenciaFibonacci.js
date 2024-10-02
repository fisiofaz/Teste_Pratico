function isFibonacci(num) {
    // Função para calcular a sequência de Fibonacci até o número informado
    let a = 0;
    let b = 1;
    if (num === 0 || num === 1) {
        return true; // 0 e 1 estão na sequência
    }

    let fib = a + b;
    while (fib <= num) {
        if (fib === num) {
            return true; // O número faz parte da sequência
        }
        a = b;
        b = fib;
        fib = a + b;
    }

    return false; // O número não está na sequência
}

// Pega o número do usuário
let num = parseInt(prompt("Informe um número:"));

// Verifica se o número está na sequência de Fibonacci
if (isFibonacci(num)) {
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
}
