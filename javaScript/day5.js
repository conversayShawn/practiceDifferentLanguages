// A classic problem — Check for balanced parentheses in an expression.
// Two brackets are considered to be a matched pair if the an opening bracket
// (i.e., (, [, or { ) occurs to the left of a closing bracket (i.e., ), ], or })
// of the exact same type. There are three types of matched pairs of brackets:
// [], {}, and ().

// Write a balancedParenthesis function that takes a string as input and
// returns a boolean — if the parentheses in the input string are ‘balanced’,
// then return true, else return false. For example, the program should
// print true for exp = “[()]{}{[()()]()}” and false for exp = “[(])”

console.log('hello');
// declare variables
let exTest = ')[]';
let exp = '(())()';
let exb = '[[]]';
// let exc = '{{}}{}{{{}{}}{}}';
// parenthesis
let openP = 0;
let closeP = 0;
let countP = false;
// brackets
let openB = 0;
let closeB = 0;
let countB = false;
// // curly braces
// let openC = 0;
// let closeC = 0;

// count []
const bracketCount = () => {
	//split string
	let individualBracket = exTest.split('');
	// console.log(individualParenthsis);
	// loop through individualParenthesis
	for (let i = 0; i < individualBracket.length; i++) {
		// if "(" or ")"
		if (individualBracket[i] === '[') {
			//increment open (
			openB++;
		} else if (individualBracket[i] === ']') {
			// decrement close )
            closeB++;
            // stop method if closeB > openB
            if (closeB > openB) {
                console.log("closeB > openB false");
                return false;
            }
        }
	}
            if (openB !== closeB) {
                console.log("openB !== closeB false");
                return false;
            } else {
                console.log("openB === closeB true");
                countB = true;
            }
	// console.log(openB);
	// console.log(closeB);
};
// bracketCount();

const paranthesisCount = () => {
	//split string
	let individualParenthsis = exTest.split('');
	// console.log(individualParenthsis);
	// loop through individualParenthesis
	for (let i = 0; i < individualParenthsis.length; i++) {
		// if "(" or ")"
		if (individualParenthsis[i] === '(') {
			//increment open (
			openP++;
		} else if (individualParenthsis[i] === ')') {
			// decrement close )
			closeP++;
            if (closeP > openP) {
                console.log("closeP > openP false");
                return false;
            }
        }
	}
            if (openP !== closeP) {
                console.log("openP !== closeP false");
                return false;
            } else {
                console.log("openP === closeP true");
                countP = true;
            }
	// console.log(openP);
	// console.log(closeP);
};
// paranthesisCount();

const balancedParenthesis = () => {
	paranthesisCount();
	// if ( === ), return true
	if (countP === true) {
        // console.log('true');
        bracketCount();
	} 
	// ) !> (, return false
	// repeat for [] and {}
};
balancedParenthesis();
