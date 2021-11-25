let myList = [ ];
const numberArray = [ 45, 66, 22, 9, 78, 3];
const numberArray1 = [ 4, 62, 12, 7, 38];
const stringArray = [ 'laptop', 'work', 'home'];
const differentDataTypes = [ 'mouse', 99, true, {model : 'Fiesta'}];

myList.push('Connan Doyle');
myList.push(66, 89);
myList.pop();
console.log( myList );

console.log( numberArray[0]);

numberArray1.unshift(23, 69);

const result = numberArray.concat(numberArray1);
console.log(result);

const user = [
    { userName: 'Anna' },
    { userName: 'Pavlo' },
    { userName: 'Inna' },
   ];
   
   function access (userName) {
    console.log ('Hello, ' + userName + '!');
   }
   
   access(user[0].userName);
   access(user[1].userName);
   access(user[2].userName);
   
   console.log(user.length);


