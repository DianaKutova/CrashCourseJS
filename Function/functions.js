function reverse(n) {                                            //1
    newString = n.toString();
    return newString.split('').reverse().join('');
}
console.log(reverse(6789));

function sort(word) {                                             //2
    return word.split('').sort().join('');
}
console.log(sort("babalamaga"));

const workshop = {                 
    yearCreation: 2020,
    seamstress: 'Anna',
    mainProduct: 'Dogs Hoodie',
};

function add(obj, field, value) {                                  //3
    const newObj = Object.assign({},obj );
    newObj[field] = value;
    return newObj;
}
console.log(add(workshop, 'newProduct', 'beds'));

function sum(a, b){                                                 //4
    return a + b;
}

let result = sum(345, 789);
console.log(result);

function ageCheck(age){                                              //5
    if (age > 18 && age< 50){
        return "Let`s go to the party" 
    } else {
       return "Let`s go home"; 
    }
}

console.log(ageCheck(67));

function min(a, b){                                                    //6
    if (a>b){
        return b;
    }else if (a<b){
        return b;
    }else{
        return 'num is equel';
    }
}
console.log(min(67, 89));

function pow(x, n){                                                     //7
    if (x>1 && n>1) {
       let result = x**n;
       return result;
    } else{
        return "Please enter an integer";
    }
    
}
console.log(pow(6, 3));

