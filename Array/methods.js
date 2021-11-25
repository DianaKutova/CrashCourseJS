const age = [ 44, 6, 12, 18, 22, 111];
console.log( age.filter ( go => go > 18));

const numberArray = [ 45, 66, 22, 9, 78, 3];

const newN = numberArray.reduce ((accumulator, currentValue) => accumulator + currentValue);
console.log(newN);

const sweets = ["Chocolate", "Cake", "Ice"];
const containCake = sweets.some( element => element === "Cake");
const includesIce = sweets.includes( "Ice");

console.log(containCake);
console.log(includesIce);


const createArray = Array.from("Coffe");
console.log(createArray);

const recipe = {                // 5
    nameR: 'Cake',
    servings: 5,
    ingredient1: 'powder',
    ingredient2: 'egg',
    ingredient3: 'milk',
    ingredient4: 'butter',
}

console.log(Object.values(recipe));

numberArray.sort(
    (curr, next) => {
      if (curr < next) {
        return -1;
      }
    }
  )
  console.log(numberArray);
  
const numberArray1 = [ 4, 62, 12, 7, 38];
let sum = 0;
 
numberArray1.forEach((num, index) => {
  sum += num;
})

console.log(sum);

const newNums = numberArray1.map(function(num, index) {
  return num + 3;
});

console.log(newNums);
