/* Aqui está a lógica para cada sequência, além de como implementar isso em JavaScript:

a) 1, 3, 5, 7, ___
Lógica: Sequência de números ímpares crescentes. Próximo número: 9.

b) 2, 4, 8, 16, 32, 64, ____
Lógica: Cada número é o dobro do anterior. Próximo número: 128.

c) 0, 1, 4, 9, 16, 25, 36, ____
Lógica: Sequência de quadrados perfeitos (0², 1², 2², 3²...). Próximo número: 49 (7²).

d) 4, 16, 36, 64, ____
Lógica: Sequência de quadrados perfeitos de números pares (2², 4², 6², 8²...). Próximo número: 100 (10²).

e) 1, 1, 2, 3, 5, 8, ____
Lógica: Sequência de Fibonacci (cada número é a soma dos dois anteriores). Próximo número: 13.

f) 2, 10, 12, 16, 17, 18, 19, ____
Lógica: Sequência de números que começam com o dígito 1 ou são múltiplos de 2. Próximo número: 20. */

function nextElementInSequence() {
    // Sequência a
    let sequenceA = [1, 3, 5, 7];
    let nextA = sequenceA[sequenceA.length - 1] + 2;
    console.log("Próximo número da sequência a): " + nextA);

    // Sequência b
    let sequenceB = [2, 4, 8, 16, 32, 64];
    let nextB = sequenceB[sequenceB.length - 1] * 2;
    console.log("Próximo número da sequência b): " + nextB);

    // Sequência c
    let sequenceC = [0, 1, 4, 9, 16, 25, 36];
    let nextC = Math.pow(sequenceC.length, 2);
    console.log("Próximo número da sequência c): " + nextC);

    // Sequência d
    let sequenceD = [4, 16, 36, 64];
    let nextD = Math.pow((sequenceD.length + 1) * 2, 2);
    console.log("Próximo número da sequência d): " + nextD);

    // Sequência e (Fibonacci)
    let sequenceE = [1, 1, 2, 3, 5, 8];
    let nextE = sequenceE[sequenceE.length - 1] + sequenceE[sequenceE.length - 2];
    console.log("Próximo número da sequência e): " + nextE);

    // Sequência f
    let sequenceF = [2, 10, 12, 16, 17, 18, 19];
    let nextF = 20; // Seguindo o padrão
    console.log("Próximo número da sequência f): " + nextF);
}

// Executa a função
nextElementInSequence();
