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

module.exports = Sorter;