//1. Implemente o algoritmo Bubble Sort em javascript


class BubbleSort{
    constructor(){
        this.array = [5, 7, 15, 22, 43, 9, 12];
    }
    sort(){
        for(let i=0; i<=this.array.length; i++){
            for(let j=0; j<=this.array.length-1; j++){
                if(this.array[j] >= this.array[j+1]){
                   let aux1 = this.array[j];
                   let aux2 =this.array[j+1];
                   this.array[j] = aux2;
                   this.array[j+1] = aux1; 
                }
            }
        }
    }
}
const ordenador = new BubbleSort();
console.log("Antes:", ordenador.array);

ordenador.sort();
console.log("Depois:", ordenador.array)