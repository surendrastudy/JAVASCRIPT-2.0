// Artimetic Operators

let a = 2;
let b = 3;
let z = a + b ;

console.log("a = ",a, "b = ",b)
console.log("a + b = ", z);

console.log("a - b ", a-b);
console.log("a * b ", a*b);
console.log("a / b ", a/b);
console.log("a**b ",a**b); //1^3

//Unary Operator

// a++;       a =a+1
// console.log(a);

a--;
console.log(a);

// Assignment Operator
let c = 2;
let d = 3;

c += 4;
console.log("c += ", c);

// d -= 1;
// console.log("d -= ", d);

// d /= 1;
// console.log("d /= ", d);

//  d %= 1;
//  console.log("d %= ", d);

 d **= 1;
console.log("d **= ", d);



//Comparison Operator

let x = 1; //number
let y = "1";    //string -> number if we use ==

console.log("x == y", x == y );      //false
console.log("x != y", x != y );     //true

console.log("x === y", x === y );      //IT will check strickly
console.log("x !== y", x !== y );      //IT will check strickly


let u = 5;
let v = 3;

console.log("5 > 3" , u > v);
console.log("5 > 3" , u < v);
console.log("5 >= 3" , u >= v);
console.log("5 <= 3" , u <= v);

// Logical  Operator 

let a_ = 6;
let b_ = 5;

let cond1 = a_>b;  //true
let cond2 = a_===5;  //false

console.log("cond1 && cond2= ", cond1 && cond2);
console.log("cond1 || cond2= ", cond1 || cond2);
console.log("cond1 ! = ", !cond1);
console.log("cond1 ! = ", !(a_===6));

// ternary operator
let ages
let result = ages >=18 ?  "adult":"not adult";  //like if and else statment
console.log(result);
// Condtion Statement

let age = 25;


if (age >= 18){
    console.log("con vote");
}
else{
    console.log("you can't vote")
}


//even odd  
if (age%2 === 0){
    console.log("even");
}


//check idea
let mode = "dark";
let color;

if(mode === "dark"){
    color = "black";
}
else if(mode === "light"){
    color="blue";
}
else{
    color ="white";
}

console.log(color);


// promt and alert

// alert("hello babli");  //one time popup

// let name = prompt("Raj")         //tempory for input from user
// console.log(name);

let num = prompt("enter a number");
if (num %5 ===0){
    console.log(num,"is multiple of 5");
}
else{
    console.log(num,"is not multiple of 5");

}

const grade = 'A';
switch (grade){
    case 'A':
        console.log("80-100");
        break;
    case 'B':
        console.log("80-50");
        break;
    case 'C':
        console.log("50-35");
        break;
    default:
        console.log("wrong choice");
}