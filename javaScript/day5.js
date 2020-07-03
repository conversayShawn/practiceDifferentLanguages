// A classic problem — Check for balanced parentheses in an expression. 
// Two brackets are considered to be a matched pair if the an opening bracket 
// (i.e., (, [, or { ) occurs to the left of a closing bracket (i.e., ), ], or }) 
// of the exact same type. There are three types of matched pairs of brackets: 
// [], {}, and ().

// Write a balancedParenthesis function that takes a string as input and 
// returns a boolean — if the parentheses in the input string are ‘balanced’, 
// then return true, else return false. For example, the program should 
// print true for exp = “[()]{}{[()()]()}” and false for exp = “[(])”

console.log("hello")
// declare variables
let exp = "[()]{}{[()()]()}"
// parenthesis
let openP = 0;
let closeP = 0;
// brackets
let openB = 0;
let closeB = 0;
// curly braces
let openC = 0;
let closeC = 0;



const balancedParenthesis = () => 
{
    //sort string
    //increment open (
    // decrement close )
    // if ( === ), return true
    // ) !> (, return false
    // repeat for [] and {}
}