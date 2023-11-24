// Functions

// function myFunction(){          // Non-parameter
//     console.log("Hello");
//     console.log("Bro");
// }

// myFunction();



function myFunction(msg,n){         // Parameter -> input
    console.log(msg,n);
}
myFunction("Raj",5);                // argument


// sum of 2 number

function sum(x,y){
    // console.log(x+y)
    // local variable -> scope
    s = x + y;
    return s;
}
let val = sum(5,5);
console.log(val)


// Aroow function for small line of code 

const Arrowadd =(a,b) => {
    console.log(a+b);
    // console.(a*b);
    return a*b;
}
Arrowadd(5,50);



const printHello = () =>{
    console.log("hello");
}
printHello();

// Practice

// Qs. Create a function take a string as a argument & return the Number of volwels=a,e,i,o,u   in the string

function countVolwels(str){
    let count = 0;
    for(const char of str) {
        if (char === "a" || char ==="e" || char === "i" || char === "o" || char === "u" ) {
            count++;
            }
    }
    console.log(count);

}
countVolwels("ApnaCollege");


// Q create a arrow function perform same task

const countvow = (str) =>{
    let count = 0;
    for(const char of str) {
        if (char === "a" || char ==="e" || char === "i" || char === "o" || char === "u" ) {
            count++;
            }
    }
    console.log(count);
}
countvow("ApnaCollege");


//For-each loop

let arry = [2,3,3,4,5];

// arry.forEach(function printval(val) {
//     console.log(val);
// });

arry.forEach((val,idx,arr) =>{          //value, index ,arr itself
    console.log(val,idx,arr);  //for string to uppercase we can do val.touppercase();
});

//practice

// qs. for given a array of numbers, print square of each value using the forEach loop.

let nums = [2,3,3,4,5];

// nums.forEach((val) => {
//     console.log(val*val);
// });

let calSquar = (val) => {
    console.log(val*val);
};
nums.forEach(calSquar) ;


//Map       to create a new

let nu = [5,6,3,8];

let new_nu = nu.map((val) => {
return val*2;
});
console.log(new_nu);  // new array 
console.log(nu);


// filters    we can give condtion what we want from array

let array = [ 1,2,3,5,6,90];

let new_array = array.filter((val) =>{
    return val%2 === 0 ;        //for odd   val%2 !== 0  2) if want geater 3  val <3
});
console.log(new_array);


// reduce 

let arr = [1,2,3,4];
const output = arr.reduce((res ,cur) => {  //prevous + current
    // return res + cur;  for all all number

    return res > cur ? res:cur;  // to print largest number in array  ((res bada hai toa usa print kaedo : nahi to curent print kardo))
    
});
console.log(output); //10



// practice


// greate the 90 

let stud = [55,89,99,96,];

 let new_stud = stud.filter((val) => {
    return val>90;
});
console.log(new_stud);

// take a number n from user & create a array from 1 to n   *use reduce method to calculate sum & product


 let n = prompt("Enter a number");
 let arrs = [];
 for (let i=1; i<=n; i++) {
    arrs[i-1] = i;  // 1(0), 2(1), 3(2), 4(3)
 }
 console.log(arrs);

 let sums = arrs.reduce((pre,cur) => {
     return pre + cur;
 });

 console.log("sum" , sums);

 let fact = arrs.reduce((pre,cur) => {
    return pre * cur;
});
console.log("fact" , fact);
