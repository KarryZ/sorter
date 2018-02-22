class Sorter {
    constructor() {
        // your implementation
        this._element = null;
        this._index = null;
        this._arr = [];
        this.copy_partArr = [];
        this.sort_arr = [];
        
        this.copy_arr = [];
    }
    add(element) {
        // your implementation
        //	if(element typeof  Symbol) this._element = Symbol.toPrimitive; 
        //	if(element == "symbol"){			}
        this._element = +element;
        this._arr.push(+this._element);
    }
    at(index) {
        // your implementation
        return this._arr[index];
    }
    get length() {
        // your implementation
        return this._arr.length;
    }
    toArray() {
        // your implementation
        return this._arr;
    }
    sort(indices) {
        // your implementation
        let begin, end;
/*        if (indices.length == 3) {
            begin = indices[0];
            end = indices[2];
        }
        else if (indices[0] > indices[1]) {
            begin = indices[1];
            end = indices[0];
        }
        else {
            begin = indices[0];
            end = indices[1];
        }
         this.copy_partArr = this._arr.slice(begin, end + 1);
        */
       
        
        for(var i = 0; i < indices.length; i++){
            this.copy_arr.push(this._arr[indices[i]]);
            
        }
        console.log(this.copy_arr);

        function compareNumeric(a, b) {
            return a - b;
        }
        this.sort_arr = this.copy_arr.sort(this.comparator|| compareNumeric);
        
        let delete_length = this.copy_arr.length;
        for(var i = 0; i<this.sort_arr.length; i++){
            arr.splice(i,1,this.sort_arr[i] );
        }

      /*  function insertArrayAt(array, index, arrayToInsert) {
            
            Array.prototype.splice.apply(array, [index, delete_length].concat(arrayToInsert));
                 console.log(array);
            return array;
        }
        insertArrayAt(this._arr, this.sort_arr[o], this.sort_arr);*/
    }
    setComparator(compareFunction) {
        // your implementation
        if (compareFunction && compareFunction instanceof Function) {
            this.comparator = compareFunction;
        }
    }
}
const sorter = new Sorter();
        sorter.add(6);
        sorter.add(5);
        console.log(sorter.toArray()) // 6,5
const REVERSE_COMPARATOR = (left, right) => right - left;
        sorter.setComparator(REVERSE_COMPARATOR);
        sorter.sort([1, 0]);
  
        sorter.add(20);
        sorter.add(10);
        sorter.add(100);
        sorter.sort([3, 4]);
 console.log(sorter.toArray()) */ // 6, 5, 20, 100, 10
//sorter.add(1);
// sorter.add(2);
//console.log(sorter.length) // 2
//console.log(sorter.toArray()) // [1, 2]
/* sorter.add(7);
 sorter.add(6);
 sorter.add(5);
 sorter.sort([0, 1, 2]); // 5, 6, 7
 console.log(sorter.toArray())*/
/*  sorter.add(6);
sorter.toArray()
      sorter.add(5);
sorter.toArray()
      sorter.add(20);
sorter.toArray()
      sorter.add(10);
    sorter.toArray()
      sorter.add(100);
    sorter.toArray()

      sorter.sort([2, 1]); // 6, 5
console.log(sorter.toArray())
      sorter.sort([3, 2]); // 10, 20
console.log(sorter.toArray())
      sorter.sort([4, 3]); // 100, 1000
console.log(sorter.toArray())

      sorter.add(1000);
console.log(sorter.toArray())

*/
//module.exports = Sorter;