let sum = 66;

for (let i = 0; i <= 1000; i++) {
  sum = sum + i;
}

console.log( sum );

let n = 6;
while( n <= 10) {
    console.log( "The numer is " + n );
    n++;
}

const sweets = ["Chocolate", "Cake", "Ice"];

for (let i = 0; i<sweets.length; i++) {
    console.log("Do you wanna " + sweets[i] + "?");
}

const greet = "Have a nice day!";

for(let character of greet) {
    console.log(character); 
}

const stringArray = [ 'I','work in','laptop', 'at home'];
let sentence = '';
let p = 0;

while (p < stringArray.length) {
  sentence += stringArray[p] + ' ';
  p++;
}

console.log(sentence);
