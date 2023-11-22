// for loop


// for(let count =1; count <=5;count++){
//     console.log("hello world");
// }

// let sum = 0;
// let n = 5
// for(i=0; i<=n; i++) {
//     sum = sum +i;
//     console.log(sum);
// }


// while loop

let j =0;
while(j<=5){
    console.log("j=",j);
    j++;
}

// do-while loop

let k =0;
do{
    k++;
    console.log("k=",k);
}while(k<=5);


// for-of loop

let str = "Hello World";

let size =0;
for(let p of str){          //for string and Arays
    console.log(p);
    size++;
}

console.log("String Size= ", size); // size bata dega


//for-in loop
let student ={
    name : "Surendra",
    roll_no : 45,
    age :20,
    isPass:true,
};

for (let m in student) {   // most of time return key 
    console.log("Key=",m , "Value= ", student[m]);
}

//Practice quetion ----------------->

// Q1 print all even number from 0 to 100.

for(i=1;i<=100;i++){
    if(i%2===0){
        console.log("even= ",i)
    }
}


// Q2 create a game any random number

let gameNum = 25;
let userNum = prompt("Guess the game number: ");

while(userNum != gameNum){            //choice correct 
   userNum = prompt("You entered wrong number try again:")
}

console.log("right number")