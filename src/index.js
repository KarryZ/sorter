class Sorter {
  constructor() {
    // your implementation
		this._element = null;
		this._index = null;
		this._arr = []; 
	//	this.sort_arr = []; 
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
	//	console.log(this._arr);
		return this._arr;
  }

  sort(indices) {
    // your implementation
		let begin = indices[0];
		let end = indices[1];
		 ;
		return this._arr.slice(begin, end).sort(function (a,b) {
			return a - b;
		})
  }

  setComparator(compareFunction) {
    // your implementation
		
  }
}
/*

 const sorter = new Sorter();
  sorter.add(1);
  sorter.add(2);

  console.log(sorter.length) // 2
  console.log(sorter.toArray()) // [1, 2]
     sorter.add(6);
console.log(sorter.toArray())
      sorter.add(5);
console.log(sorter.toArray())
      sorter.add(20);
console.log(sorter.toArray())
      sorter.add(10);
console.log(sorter.toArray())
      sorter.add(100);
console.log(sorter.toArray())

      sorter.sort([2, 1]); // 6, 5
console.log(sorter.toArray())
      sorter.sort([3, 2]); // 10, 20
console.log(sorter.toArray())
      sorter.sort([4, 3]); // 100, 1000
console.log(sorter.toArray())

      sorter.add(1000);
console.log(sorter.toArray())

*/


module.exports = Sorter;