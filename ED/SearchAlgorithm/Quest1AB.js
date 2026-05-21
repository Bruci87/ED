class SearchSequential{
    constructor(array = []){
        this.array = array;
    }
    search(WantedElement){
        for(let i=0; i<this.array.length; i++){
            if(this.array[i]===WantedElement){
                return i;
            }
        }
        return -1;
    }
}
const number = [20, 5, 8, 0, 12, 40];
const searchs = new SearchSequential(number);
console.log(searchs.search(12));
console.log(searchs.search(40));