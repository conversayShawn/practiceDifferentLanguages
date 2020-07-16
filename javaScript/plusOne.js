// Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// declare and initialize array
let arr = [4,3,2,1]

const plusOne = () => {
    // find end of loop
    for (let i = 0; i < arr.length; i++) {
        if (arr.length === true) {
            console.log(arr.peekBack(arr[i]))
            arr.peekBack(arr[i])++;
            // console.log(arr[i]);
        }
        console.log(arr[i]);
    }

    // increment last index plus 1
}
plusOne();


// /** * @param {number[]} digits * @return {number[]} */var plusOne = function(digits) {    // [1, 2, 3] => [1, 2, 4] (123 => 124)     // [1, 9] => [2, 0] (19 => 20)    // [1, 9, 9] => [2, 0, 0] (199 => 200)    // [9, 9] => [1, 0, 0] (99 => 100)    // Create an index, set it to the end of the array    let index = digits.length - 1;    // While the index points to 9, and is still a valid index (>= 0):    while (index >= 0 && digits[index] === 9) {        // Set the value at the index to 0        digits[index] = 0;        // Decrement the index        index--;    }    // Now, either we have a number to increment,    // or we've gone off the end of the array    // If i is a valid index:    if (index >= 0) {        // we have a number to increment, so do that        digits[index]++;    // Otherwise:    } else {        // Add 1 to the beginning of the array       digits.unshift(1);    }    // Return the modified array    return digits;}; 