let myName = "Dianka"  ;
let age = 23;

// myName = "Diana";
// age = 23;


console.log(myName, age);

const name = "Ді";
const dogName = 'Mania';

console.log(typeof name,typeof dogName);

function sayHello() {
    let sms = "Hello JS" + " " + myName;
    console.log(sms);

}
sayHello();


function easyMath(a, b, c) {
    let result = a+b/c;
    console.log(result);
    return result;
}

let sum = easyMath(77, 90, 3);

console.log(sum);

var smth = undefined;
var n = null;
const compare = smth == n;
const compare2 = smth === n;

console.log(typeof smth, typeof n);

const number = 33;
const numBer = "33";
var object =  "33";
var y = "3" + 45;
var y1 = 3 + 45;

console.log(number == numBer);      // It is true;
console.log(number === numBer);    // It is false;
console.log(numBer == object);      // It is true;
console.log(numBer === object);     // It is true;
console.log(y == y1);              // It is false;
console.log(y === y1);             // It is false;
console.log(smth == n);            // It is true;
console.log(smth === n);           // It is false;

if (smth == n) {
    console.log("It is true");
} else {
    console.log("It is false");
}

/* In this code I used: 1) different data types; 
2) comments;
3) variables;
4) operators - ('==' - equal to) and ('===' - equal value and type);
5) type operator;
6) if...else
*/
