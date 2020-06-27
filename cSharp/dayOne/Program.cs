// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given {10, 15, 3, 7} and k of 17, return true since 10 + 7 is 17.

using System;

namespace dayOne
{
    class Program
    {
        static void Main(string[] args)
        {
            //call method
            equalK();
        }
        // create method
        static void equalK()
        {
        // declare and initialize array and variable
        int[] arr = {10, 15, 3, 7};
        int k = 17; 
            // loop through array
            for (int i = 0; i < arr.Length; i++) 
            {
                // loop through array second time if arr[j] < arr[i]
                for (int j = 0; j < i; j++) 
                {
                // declare and initialize indexSum variable
                int indexSum = arr[i] + arr[j];
                // check output
                // Console.WriteLine(indexSum);
                    // if indexSum == k, return true
                    if (indexSum == k)
                    {
                        // test return if values of to indicies equal k
                        // Console.WriteLine("true");
                        return; 
                    }
                }
            }
        }

    }
}
