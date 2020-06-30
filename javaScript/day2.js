// Given an array of integers,
// return a new array such that
// each element at index i of the
// new array is the product of all the
// numbers in the original array except
// the one at i.

// For example, if our input was [1, 2, 3, 4, 5],
// the expected output would be [120, 60, 40, 30, 24].
// If our input was [3, 2, 1],
// the expected output would be [2, 3, 6].

console.log('test');
let arrOne = [1, 2, 3, 4, 5];
let arrTwo = [];

//define array
let arrProduct = 1;
let productDividedByI;
// multiply all indices
const allIndices = () => {
	//loop through array
	for (let i = 0; i < arrOne.length; i++) {
		arrProduct = arrProduct * arrOne[i];
		// console.log(arrProduct);
		// console.log(arrOne[i]);
	}
	//loop through array
	for (let i = 0; i < arrOne.length; i++) {
		productDividedByI = arrProduct / arrOne[i];
		// console.log(arrProduct);
		// console.log(arrOne[i]);
        // console.log(productDividedByI);
        // populate new array
        arrTwo.push(productDividedByI);
    }
    console.log(arrTwo);
    return arrTwo;
}
allIndices();