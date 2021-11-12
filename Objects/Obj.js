const workshop = {                 // 1
    yearCreation: 2020,
    seamstress: 'Anna',
    mainProduct: 'Dogs Hoodie',
};

workshop.owner = 'Diana';

const memberTeam = 'manager';
workshop[memberTeam] = 'Katya';

console.log(workshop);

const book = {                            //2
    author: 'Stanislas Dehaene',
    nameB:'Learn',
    yearPublish: 2020,
    isItRead:true, 
};

if (book.nameB !== "How we learn") {
    book ['nameB'] = "How we learn";
}

if (book.isItRead) {
    console.log("I have already red this one")
}
console.log(book);


const car = new Object();                     // 3
car.yearProduction = 2010;
car.make = 'Ford';
car.model = 'Fiesta';
car.color = 'black';

console.log(car);

const myCar = Object.assign ({} , car);            // 4
myCar.fuelLevel = "30 litres";
myCar.yearProduction = 2015;

console.log(myCar);


const recipe = {                // 5
    nameR: 'Cake',
    servings: 5,
    ingredient1: 'powder',
    ingredient2: 'egg',
    ingredient3: 'milk',
    ingredient4: 'butter',
}

recipe.timePrepare = '40 minutes';

if (recipe.servings === 3) {
    console.log (recipe)
} else {
    recipe.timePrepare = '50 minutes'
}

console.log(recipe);

const hikingBackpack = {        // 6
    tent: true,
    sleepingBag: true,
    firstAidKit: false,
    knife: true,
    food: 3,
    rainCover: false,
}

hikingBackpack.tent == true && hikingBackpack.firstAidKit == true
? console.log("Go hiking")
: console.log("Stay at home")

const movie1 = {}                  // 7

const value1 = "movieName";
const value2 = "Director";
const value3 = "Genre";
const value4 = "year";

movie1[value1] = "Avatar";
movie1[value2] = "James Cameron";
movie1[value3] = "Sci-fi";
movie1[value4] = 2009;

console.log(movie1);


const movie2 = {}             // 8

movie2[value1] = "Valerian";
movie2[value2] = "Luc Besson";
movie2[value3] = "fantasy";
movie2[value4] = 2009;

if (movie2.year !== 2017) {
    movie2.year = 2017
}

console.log (movie2);

const englishKnowledje = {           // 9
    reading: 3,
    writing: 4,
    speaking: 4,
}

if (englishKnowledje.reading >= 3 && englishKnowledje.writing >= 3 || englishKnowledje.speaking <= 3) {
    console.log ( "You have got work");
}  else {
    console.log ("You have not got work");
}

const sister1 = {           // 10
year: 2003,
nameS: "Julia",
}

const sister2 = {          //11
    year: 1998,
    nameS: "Diana",
    }

let olderSister;
 if (sister1.year > sister2.year) {
     olderSister = sister2.nameS;
     console.log(olderSister);
 } else {
     console.log (sister1.nameS);
 }

