const number = 6;      //First exercise

if ( number > 0 ) {
    console.log ( "It is ok =" + " "+ number );
} else if ( number === 0 ) {
        console.log ("It is null =" + " "+ number );
} else if ( number < 0 ) {
    console.log ("Wrong number =" + " "+ number );
}
else {
    console.log ("Write another number");
}

let temperature = "hot";       //Second exercise

if ( temperature === "cold") {
    console.log ( "You can take it");
} else {
    console.log ("Wait! It is hot");
}


const a = 13;     //Third exercise
const b = 20;
const c = 20;

    if ( a != c , b != c  ) { 
        console.log ("This is isosceles a=b");
} else if (  a != b , b != c ) {
    console.log ("This is isosceles a=c");
} else if (  a != b , a != c ) {
    console.log ("This is isosceles b=c");
}  else {
    console.log ("Write another number");
}



let workHours = 23;          //Fourth exercise

if ( workHours == 8) {
    console.log ("Great work");
} else if ( workHours < 8 ) {
    console.log ("You need to work");
} else {
    console.log ("You need to have a rest");
}