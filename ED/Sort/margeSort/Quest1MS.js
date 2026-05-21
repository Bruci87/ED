function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    // Math.floor faz o papel do '//' (divisão inteira) do Python
    const meio = Math.floor(array.length / 2);
    
    // .slice() faz o fatiamento de arrays em JS
    const esquerda = array.slice(0, meio);
    const direita = array.slice(meio);

    return merge(mergeSort(esquerda), mergeSort(direita));
}

function merge(esquerda, direita) {
    const resultado = [];
    let i = 0;
    let j = 0;

    // Junta os elementos em ordem enquanto houver itens em ambos os arrays
    while (i < esquerda.length && j < direita.length) {
        if (esquerda[i] <= direita[j]) {
            resultado.push(esquerda[i]);
            i++;
        } else {
            resultado.push(direita[j]);
            j++;
        }
    }

    // Adiciona o que sobrou no array da esquerda (se houver)
    while (i < esquerda.length) {
        resultado.push(esquerda[i]);
        i++;
    }

    // Adiciona o que sobrou no array da direita (se houver)
    while (j < direita.length) {
        resultado.push(direita[j]);
        j++;
    }

    return resultado;
}

// Exemplo de uso:
const lista = [34, 7, 23, 32, 5, 62];
console.log(mergeSort(lista)); // Saída: [5, 7, 23, 32, 34, 62]