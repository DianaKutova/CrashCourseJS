function Wizard(faculty, rank, magic, age, sex, name) {

    this.faculty = faculty;
    this.rank = rank;
    this.magic = magic;
    this.age = age;
    this.sex = sex;
    this.name = name;

    this.greeting = function() {
        console.log('Hi! I`m a magician ' + this.magic + '.');
    };
}

Wizard.prototype.hello = function() {
    console.log('My name is ' + this.name + '.I`m ' + this.age + '.');
};

let Hermiona = new Wizard('Gryffindor', 'high', 'white', '20', 'female', 'Hermiona');

console.log (Hermiona.name);
console.log (Hermiona.faculty);
Hermiona.greeting();
Hermiona.hello();

Wizard.prototype.ball = function () {

    this.sex === 'male' ? console.log ('Please choose girl for ball') : console.log ('Please choose boy for ball'); 
}
function  Teacher (faculty, rank, magic, age, sex, name, subject) {
    Wizard.call(this, faculty, rank, magic, age, sex, name);
    this.subject = subject;
}

let Snape = new Teacher('Slytherine', 'high', 'white', '50', 'male', 'Snape', 'Protection from darkness');

Teacher.prototype.listen = function() {
    console.log('Listen, Harry!');
}

    Snape.greeting();
    Snape.listen();
    console.log( 'I`m perfect at ' + Snape.subject);
    console.log(Snape.age);


let Harry = new Wizard ('Gryffindor', 'high', 'white', '21', 'male', 'Harry');

Harry.ball();
console.log('My faculty is ' + Harry.faculty);

class Animal {
    constructor(name) {
        this.name = name;
    }
    sound() { console.log ('nothing'); }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
    eat() { return this; }
    scaredOf() {console.log ('I scared of hunters')}

}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    sound() {
        console.log ('Meow!');
    }
    eat() {
        console.log('Milk');
    }
    scaredOf() {
        console.log('I scared of dogs');
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    sound() {
        console.log('Woof!');
    }
    eat() {
        console.log('Meat');
    }
}

class Mouse extends Animal {

    constructor(name) {
        super(name);
    }
    eat() {
        console.log('Cheese');
    }
    scaredOf() {
        console.log('I scared of cats');
    }
}

class Lion extends Animal {

    sound() {  
        console.log('Roar!');
    }
    eat() {
        super.eat();
        console.log('People on Safari');
    }    
}

class Woolf extends Animal {

    sound() {
        super.sound();
    }
    eat() {
        super.eat();
        console.log('Rabbit');
    }
}

const Tom = new Cat('Tom');
Tom.sound();
Tom.eat(); 
Tom.scaredOf();
const Rex = new Dog('Rex');
Rex.sound();
Rex.eat(); 
const Mikki = new Mouse('Mikki');
Mikki.sound();
Mikki.eat();
Mikki.scaredOf();
const Leo = new Lion('Leo');
Leo.sound();
Leo.eat();
Leo.scaredOf();
const Gray = new Woolf('Gray');
Gray.sound();
Gray.eat();
Gray.scaredOf();

