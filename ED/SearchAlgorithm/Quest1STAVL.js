class NoAVL {
  constructor(valor) {
    this.valor = valor;
    this.esquerda = null;
    this.direita = null;
    this.altura = 0; // Nova propriedade necessária
  }
}

class ArvoreAVL {
  constructor() {
    this.raiz = null;
  }

  // Funções auxiliares de controle de tamanho
  _getAltura(no) {
    return no === null ? -1 : no.altura;
  }

  _getFatorBalanceamento(no) {
    return no === null ? 0 : this._getAltura(no.esquerda) - this._getAltura(no.direita);
  }

  _atualizarAltura(no) {
    no.altura = Math.max(this._getAltura(no.esquerda), this._getAltura(no.direita)) + 1;
  }

  // --- AS MANOBRAS DE ROTAÇÃO ---
  _rotacionarDireita(y) {
    let x = y.esquerda;
    let T2 = x.direita;

    // Executa a rotação no papel
    x.direita = y;
    y.esquerda = T2;

    // Atualiza as alturas de quem mudou de lugar
    this._atualizarAltura(y);
    this._atualizarAltura(x);
    return x; // O filho (x) vira a nova raiz daquela parte
  }

  _rotacionarEsquerda(x) {
    let y = x.direita;
    let T2 = y.esquerda;

    // Executa a rotação no papel
    y.esquerda = x;
    x.direita = T2;

    // Atualiza as alturas
    this._atualizarAltura(x);
    this._atualizarAltura(y);
    return y; // O filho (y) vira a nova raiz daquela parte
  }

  // --- INSERÇÃO AVL ---
  inserir(valor) {
    this.raiz = this._inserirRecursivo(this.raiz, valor);
  }

  _inserirRecursivo(no, valor) {
    // 1. Inserção normal igual à árvore de busca
    if (no === null) return new NoAVL(valor);

    if (valor < no.valor) {
      no.esquerda = this._inserirRecursivo(no.esquerda, valor);
    } else if (valor > no.valor) {
      no.direita = this._inserirRecursivo(no.direita, valor);
    } else {
      return no; // Não aceita valores duplicados
    }

    // 2. Atualiza a altura deste nó ancestral
    this._atualizarAltura(no);

    // 3. Pega o termômetro de equilíbrio
    let fator = this._getFatorBalanceamento(no);

    // 4. Aplica as regras de sinais que vimos no papel
    
    // Caso Esquerda-Esquerda (+2 e +1)
    if (fator > 1 && valor < no.esquerda.valor) {
      return this._rotacionarDireita(no);
    }
    // Caso Direita-Direita (-2 e -1)
    if (fator < -1 && valor > no.direita.valor) {
      return this._rotacionarEsquerda(no);
    }
    // Caso Esquerda-Direita (+2 e -1)
    if (fator > 1 && valor > no.esquerda.valor) {
      no.esquerda = this._rotacionarEsquerda(no.esquerda);
      return this._rotacionarDireita(no);
    }
    // Caso Direita-Esquerda (-2 e +1)
    if (fator < -1 && valor < no.direita.valor) {
      no.direita = this._rotacionarDireita(no.direita);
      return this._rotacionarEsquerda(no);
    }

    return no;
  }

  // --- REMOÇÃO AVL ---
  remover(valor) {
    this.raiz = this._removerRecursivo(this.raiz, valor);
  }

  _removerRecursivo(no, valor) {
    // 1. Remoção padrão de árvore de busca
    if (no === null) return null;

    if (valor < no.valor) {
      no.esquerda = this._removerRecursivo(no.esquerda, valor);
    } else if (valor > no.valor) {
      no.direita = this._removerRecursivo(no.direita, valor);
    } else {
      if (no.esquerda === null) return no.direita;
      if (no.direita === null) return no.esquerda;

      // Remoção do "Avô" (Caso de 2 filhos)
      let tempMin = no.direita;
      while (tempMin.esquerda !== null) tempMin = tempMin.esquerda;
      
      no.valor = tempMin.valor;
      no.direita = this._removerRecursivo(no.direita, tempMin.valor);
    }

    if (no === null) return null;

    // 2. Atualiza altura
    this._atualizarAltura(no);

    // 3. Checa o balanceamento subindo
    let fator = this._getFatorBalanceamento(no);

    // 4. Regras de rotação na remoção (usando o fator do filho)
    if (fator > 1) {
      if (this._getFatorBalanceamento(no.esquerda) >= 0) {
        return this._rotacionarDireita(no); // Caso 0 ou +1
      } else {
        no.esquerda = this._rotacionarEsquerda(no.esquerda);
        return this._rotacionarDireita(no); // Caso -1
      }
    }

    if (fator < -1) {
      if (this._getFatorBalanceamento(no.direita) <= 0) {
        return this._rotacionarEsquerda(no); // Caso 0 ou -1
      } else {
        no.direita = this._rotacionarDireita(no.direita);
        return this._rotacionarEsquerda(no); // Caso +1
      }
    }

    return no;
  }
}s