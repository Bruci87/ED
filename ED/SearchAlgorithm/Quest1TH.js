class TabelaHashSimples {
  constructor(tamanho = 11) {
    this.tamanho = tamanho;
    // Cria um array de tamanho 11 preenchido com null
    this.tabela = new Array(this.tamanho).fill(null);
  }

  // A nossa função matemática de resto da divisão
  funcaoHash(chave) {
    return chave % this.tamanho;
  }

  inserir(chave, valor) {
    const indiceIdeal = this.funcaoHash(chave);
    let indiceAtual = indiceIdeal;

    // Sondagem Linear: Enquanto a vaga estiver ocupada por outra chave...
    while (this.tabela[indiceAtual] !== null) {
      // Se a chave já existir, atualiza o registro e encerra
      if (this.tabela[indiceAtual].chave === chave) {
        this.tabela[indiceAtual].valor = valor;
        return;
      }

      // Anda para a próxima gaveta. O operador % garante que volte pro índice 0 se estourar o fim
      indiceAtual = (indiceAtual + 1) % this.tamanho;

      // Proteção contra loops se a tabela estiver 100% cheia
      if (indiceAtual === indiceIdeal) {
        throw new Error("A tabela hash está cheia!");
      }
    }

    // Encontrou uma vaga nula? Guarda o objeto com a chave e o registro lá dentro
    this.tabela[indiceAtual] = { chave, valor };
  }

  buscar(chave) {
    const indiceIdeal = this.funcaoHash(chave);
    let indiceAtual = indiceIdeal;

    // Percorre enquanto houver registros guardados
    while (this.tabela[indiceAtual] !== null) {
      if (this.tabela[indiceAtual].chave === chave) {
        return this.tabela[indiceAtual].valor; // Achou!
      }

      indiceAtual = (indiceAtual + 1) % this.tamanho;

      if (indiceAtual === indiceIdeal) {
        break; // Voltou ao início, então não existe
      }
    }

    return null; // Não encontrou nada
  }

  exibirTabela() {
    console.table(
      this.tabela.map((slot, index) => ({
        Índice: index,
        Chave: slot ? slot.chave : "Vazio",
        Registro: slot ? slot.valor : "Vazio"
      }))
    );
  }
}