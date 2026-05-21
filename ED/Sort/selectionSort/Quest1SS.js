class SelectioSort{
    constructor(){
        this.array = [5, 4, 8, 1, 2, 6, 7, 3];
    }
    sort(){
        let i;
        let Lower_Index;
        let j;
        for( i=0; i<this.array.length; i++){
             Lower_Index = i;
            for( j=i; j<this.array.length; j++){
                if(this.array[Lower_Index]>this.array[j]){
                    Lower_Index = j;
                }
            }
        }
        if(i != Lower_Index){
            let aux = this.array[i];
            this.array[i] = this.array[Lower_Index];
            this.array[Lower_Index] = aux;

        }
    }
}
const Sorting = new SelectioSort();
console.log("Before: ", Sorting.array);
Sorting.sort();
console.log("After", Sorting.array);