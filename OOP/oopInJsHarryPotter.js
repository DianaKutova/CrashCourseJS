function Wizard(faculty, rank, magic) {

    this.faculty = faculty;
    this.rank = rank;
    this.magic = magic;

    this.greeting = function() {
        console.log('Hi! I`m a magician ' + this.magic + '.');
    };
}


function  Student (age, sex, name) {
    Wizard.call(this, faculty, rank, magic);

    this.age = age;
    this.sex = sex;
    this.name = name;

    this.Hi = function() {
        console.log('My name is ' + this.name + '.I`m' + this.age + '.');
    };
    
}

Student.prototype = Object.create(Wizard.prototype);
Object.defineProperty(Wizard.prototype, 'constructor', {
    value: Student,
    enumerable: false,
    writable: true 
});

let Hermiona = new Student('Gryffindor', 'high', 'white', '20', 'female', 'Hermiona');

console.log (Hermiona.name);
console.log (Hermiona.faculty);
Hermiona.greeting();



