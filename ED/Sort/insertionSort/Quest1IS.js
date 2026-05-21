class InsertionSort{
    constructor(){
        this.array = [1, 4, 8, 1, 2, 6, 7, 3];  
    }
    sort(){
        for(let i=1; i<this.array.length; i++){
            let assistent = this.array[i];
            let j = i-1;
            while(j>0 && this.array[j]>assistent){
                this.array[j+1] = this.array[j];
                j = j-1;
            }
            this.array[j+1]=assistent;
        }
    }
}
const Sorting = new InsertionSort();
console.log("Before: ", Sorting.array);
Sorting.sort();
console.log("After", Sorting.array);
