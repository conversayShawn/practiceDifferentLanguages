// A classic problem — Check for balanced parentheses in an expression.
// Two brackets are considered to be a matched pair if the an opening bracket
// (i.e., (, [, or { ) occurs to the left of a closing bracket (i.e., ), ], or })
// of the exact same type. There are three types of matched pairs of brackets:
// [], {}, and ().

// Write a balancedParenthesis function that takes a string as input and
// returns a boolean — if the parentheses in the input string are ‘balanced’,
// then return true, else return false. For example, the program should
// print true for exp = “[()]{}{[()()]()}” and false for exp = “[(])”

// declare variables
// test ([{}]) string
let exTest = '({[]})';
//  test () string
// let exp = '(())()';
// test [] string
// let exb = '[[]]';
// test {} string
// let exCB = '{{}';
// parenthesis
let openP = 0;
let closeP = 0;
let countP = false;
// bracket
let openSB = 0;
let closeSB = 0;
let countSB = false;
// curly brace
let openCB = 0;
let closeCB = 0;

// count {}
// pass openSB parameter
const curlyBraceCount = (openSB, openP) => {
	//split string
	let individualCurlyBrace = exTest.split('');
	// console.log(individualCurlyBrace);
	// loop through individualCurlyBrace
	for (let i = 0; i < individualCurlyBrace.length; i++) {
		// if "{" or "}"
		if (individualCurlyBrace[i] === '{') {
			//increment open {
			openCB++;
		} else if (individualCurlyBrace[i] === '}') {
			// decrement close }
			closeCB++;
			// stop method if closeCB > openCB
			if (closeCB > openCB) {
				console.log("missing opening '{'");
				return false;
			}
		}
	}
	// if openCB !== closeCB, return false
	if (openCB !== closeCB) {
		console.log("missing closing '}'");
		return false;
		// else if parentheses not closed, return false
	} else if (openSB % 2 === 1 && openP % 2 === 1) {
		console.log("square bracket not closed");
		return false;
		// else openSB === openCB, closeCB = true
	} else {
		// console.log("curly braces closed");
		countCB = true;
	}
	// verify openCB & closeCB
	// console.log(openCB);
	// console.log(closeCB);
};
// call curlyBraceCount method
// curlyBraceCount();

// count []
// pass openP parameter
const bracketCount = (openP) => {
	//split string
	let individualBracket = exTest.split('');
	// console.log(individualBracket);
	// loop through individualBracket
	for (let i = 0; i < individualBracket.length; i++) {
		// if "[" or "]"
		if (individualBracket[i] === '[') {
			//increment open [
			openSB++;
		} else if (individualBracket[i] === ']') {
			// decrement close ]
			closeSB++;
			// stop method if closeSB > openSB
			if (closeSB > openSB) {
				console.log('closeSB > openSB false');
				return false;
			}
		}
	}
	// if openSB !== closeSB, return false
	if (openSB !== closeSB) {
		console.log('openSB > closeSB false');
		return false;
		// else if parentheses not closed, return false
	// } else if (openP % 2 !== 1) {
	// 	console.log('parenthesis not closed');
	// 	return false;
		// else openSB === closeSB, countSB = true
	} else {
		// console.log('openSB === closeSB true');
		countSB = true;
	}
	// verify openSB & closeSB
	// console.log(openSB);
	// console.log(closeSB);
};
// call bracketCount method
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
				console.log("missing opening '('");
				return false;
			}
		}
	}
	// if openP !== closeP, return false
	if (openP !== closeP) {
		console.log("missing closing ')'");
		return false;
	} else {
		// console.log("parenthses closed");
		countP = true;
	}
	// verify openP & closeP
	// console.log(openP);
	// console.log(closeP);
};
// call paranthesisCount method
// paranthesisCount();

const balancedParenthesis = () => {
	paranthesisCount();
	// if ( === ), return true
	if (countP === true) {
		bracketCount();
    }
    // if [ === ], return true
	if (countSB === true) {
	    curlyBraceCount();
	    console.log("parentheses, brackets, and curly braces balanced")
	}
};
balancedParenthesis();
