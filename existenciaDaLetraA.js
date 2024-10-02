function countLetterA(str) {
    // Converte a string para minúsculas para facilitar a contagem
    let count = 0;
    let lowerStr = str.toLowerCase();

    // Percorre a string e conta quantas vezes a letra 'a' aparece
    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === 'a') {
            count++;
        }
    }

    return count;
}

// Pega a string do usuário
let userString = prompt("Informe uma string:");

// Chama a função e armazena o número de ocorrências de 'a'
let occurrences = countLetterA(userString);

// Verifica se a letra 'a' aparece na string e exibe o resultado
if (occurrences > 0) {
    console.log(`A letra 'a' aparece ${occurrences} vezes na string.`);
} else {
    console.log("A letra 'a' não aparece na string.");
}
