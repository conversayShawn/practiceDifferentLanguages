// Given an array of integers, return a new array such that
// each element at index i of the new array is the product of all the
// numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5],
// the expected output would be [120, 60, 40, 30, 24].
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].

using System;

namespace dayTwo
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");
            allButI();
        }
        static void allButI()
        {
            // declare array
            int[] arrOne = {3, 2, 1};
            int[] arrTwo = new int[arrOne.Length];
            int indicesProduct = 1;
            // loop through array to find product of indices
            for (int i = 0; i < arrOne.Length; i++)
            {
                // find total indices product
                indicesProduct = indicesProduct * arrOne[i];
                // Console.WriteLine(indicesProduct);
            }
            for (int i = 0; i < arrOne.Length; i++)
            {
                int productDividedByI = indicesProduct / arrOne[i];
                // Console.WriteLine(productDividedByI);
                // Console.WriteLine(arrOne[i]);
                arrTwo[i] = productDividedByI;
                Console.WriteLine(arrTwo[i]);
            }
        }
    }
}
//  