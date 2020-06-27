// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

console.log("Hello");

const equalsK = () => {
    // define and initialize variables
    let arr = [9, 15, 3, 7];
    let k = 17;
    //loop though array
    for (let i = 0; i < arr.length; i++) 
    {
        // loop second time if arr[j] < arr[i]
        for (let j = 0; j < i; j++) 
        {
            // if index[i] + index[j] = k, return true
            if (arr[i] + arr[j] === k) {
                // test loop
                // console.log(arr[i]+arr[j]);
                // test return
                // console.log("true");
                return true;
            }
        }  
    }
}
equalsK();