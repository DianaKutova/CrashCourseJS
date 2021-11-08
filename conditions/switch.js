const number = 4;      //First exercise
let month = '';

switch (number) {
    case 1 : {
month = 'January';
console.log( "It is Janyary");
 }
    break;
    case 2 : {
  month = 'February';
  console.log( "It is " + " " + month);
  }
    break;
    case 3 : {
    month = 'March';
   console.log( "It is March");
}
    break;
    case 4 : {
    month = 'April';
    console.log( "It is " + " " + month);
 }
   break;
    default :
    console.log('Choose another number');
}

const product = "Sweets";                                  //Second exercise

switch (product) {
    case "Cheese":
      console.log("Cheese is 56 hryvnias a pack.");
      break;
    case "Snacks":
      console.log("Snacks are 76 hryvnias a kilo.");
      break;
    case "Sweets":
      console.log("Sweets are 69 hryvnias a kilo.");
      break;
    case "Milk":
      console.log("Milk cost 34 hryvnias.");
      break;
    case "Chicken":
      console.log("Chicken is 90 hryvnias a kg.");
      break;
    case "Chockolate":
      console.log("Chockolate is 45 hryvnias a pack.");
      break;
    default:
     console.log("Sorry, we are out of " + product);
  }
  
  const conspect = true;     //Third exercise
  let valuation;

  switch(conspect) {
      case true :
          valuation = "Well done";
          break;
    case false :
        valuation = "Bad work";
        break;
    default :
    valuation = "Try it one more time";
  }
  console.log(valuation);