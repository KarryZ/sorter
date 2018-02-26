class Sorter {
    constructor() {
        // your implementation
        this.data = [];
        this.defaultNumberComparator = (a, b) => a - b;
    }
    add(element) {
        // your implementation
        this.data.push(element);
    }
    at(index) {
        // your implementation
        return this.data[index];
    }
    get length() {
        // your implementation
        return this.data.length;
    }
    toArray() {
        // your implementation
        return this.data;
    }
    sort(indices) {
        let sortedIndices = indices.sort();
        let sortedValues = sortedIndices
        .map(index => this.data[index])
        .sort(this.comparator || this.defaultNumberComparator);
        sortedIndices.forEach(
            (indexInArray, indexInSoredArray) => 
            this.data[indexInArray] = sortedValues[indexInSoredArray]);
        }
        setComparator(compareFunction) {
            // your implementation
            if (compareFunction && compareFunction instanceof Function) {
                this.comparator = compareFunction;
            }
        }
    }
//    const sorter = new Sorter();
//    sorter.add(6);
//    sorter.add(5);
//    const REVERSE_COMPARATOR = (left, right) => right - left;
//    sorter.setComparator(REVERSE_COMPARATOR);
//    console.log(sorter.toArray())
//    sorter.sort([1, 0]);
//    console.log(sorter.toArray())
//    sorter.add(20);
//    sorter.add(10);
//    sorter.add(100);
//    sorter.sort([3, 4]);
//    console.log(sorter.toArray()) // 6, 5, 20, 100, 10
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
module.exports = Sorter;