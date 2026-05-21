function buscaSequencial(array, elementoAlvo) {
  // Percorre o array do índice 0 até o último elemento
  for (let i = 0; i < array.length; i++) {
    // Se encontrou o elemento que queria, retorna o índice (a posição) dele
    if (array[i] === elementoAlvo) {
      return i; 
    }
  }
  
  // Se o laço acabar e não encontrar nada, retorna -1 (indica que não existe)
  return -1;
}

// --- Testando o Código ---
const lista = [10, 50, 30, 20, 40];
const alvo = 30;

const resultado = buscaSequencial(lista, alvo);

if (resultado !== -1) {
  console.log(`Elemento ${alvo} encontrado na posição: ${resultado}`);
} else {
  console.log(`Elemento ${alvo} não foi encontrado na lista.`);
}