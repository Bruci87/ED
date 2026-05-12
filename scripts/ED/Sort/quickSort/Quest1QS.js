class QuickSort {
   /* class QuickSort{
    constructor(){
        this.array = [5, 4, 8, 1, 2, 6, 7, 3];
    }
    sort(up, daw ){
        let pivot;
        if (up === undefined) up = 0;
        if (daw === undefined) daw = this.array.length - 1;
        if(up<daw){
            let p = this.array[up];
            let i, j;
            i = daw-1;
            for(j = daw; j <= up - 1; j++){
                if(this.array[j] <= p){
                    i++;
                    let ass = this.array[j];
                    this.array[i]=this.array[j];
                    this.array[j] = ass;
                }
            }
            let assi = this.array[up];
            this.array[i+1]=this.array[up];
            this.array[up] = assi;
            pivot = i+1;
        }
    }
}
const Sorting = new QuickSort();
console.log("Before: ", Sorting.array);
Sorting.sort();
console.log("After: ", Sorting.array);*/

    constructor() {
        // O array que você definiu
        this.array = [5, 4, 8, 1, 2, 6, 7, 3];
    }

    sort(up, daw) {
        // Inicializa os valores na primeira chamada
        if (up === undefined) up = 0;
        if (daw === undefined) daw = this.array.length - 1;

        let pivot_pos;

        // A CONDIÇÃO DO PROFESSOR: Inferior (up) < Superior (daw)
        if (up < daw) {
            let p = this.array[daw]; // Pivô é o último elemento
            let i, j;
            i = up - 1; // i começa antes do início

            // O laço percorre do início até antes do pivô
            for (j = up; j <= daw - 1; j++) {
                if (this.array[j] <= p) {
                    i++;
                    // Troca: vetor[j] com vetor[i]
                    let ass = this.array[j];
                    this.array[j] = this.array[i];
                    this.array[i] = ass;
                }
            }

            // Troca final: coloca o pivô no lugar correto (i+1)
            let assi = this.array[daw];
            this.array[daw] = this.array[i + 1];
            this.array[i + 1] = assi;

            pivot_pos = i + 1;

            // RECURSÃO: Chama para os dois lados do pivô
            this.sort(up, pivot_pos - 1);  // Lado esquerdo
            this.sort(pivot_pos + 1, daw); // Lado direito
        }
    }
}

// Execução
const Sorting = new QuickSort();
console.log("Before: ", Sorting.array);
Sorting.sort();
console.log("After:  ", Sorting.array);