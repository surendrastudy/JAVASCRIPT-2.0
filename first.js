console.log("hello bro");
console.log("Raj")

// Variables

names = "raj";
ages = 55;
x = null;
y = undefined;
console.log("name " + names);
console.log("age " + ages);
console.log(x);
console.log(y);

isFollow = true;     //boolean balue
console.log(isFollow)


// let name = "Nikhil";
// let age = 55
// console.log(name)
// console.log(age)

// let a; undefined

{                          // first block
    let a =5;
    console.log(a);
}


{                          // second block same variable name
    let a =5;
    console.log(typeof a);
}

// object == non premetive and premetive means 7 like string ,number and etc.

const student = {               // student is object
    fullName : "Raj yadav",    //key:value 
    age : 55,
    cgpa :9,
    isPass : true,

};

console.log(student);
console.log(typeof student);

console.log(student["fullName"]);  //key sa value ka output
console.log(student.age);  //key sa value ka output dot(.) se

// if we want to update any value in object

student.age = student.age+10;
console.log(student.age); 

//same thing we can do in []

student["fullName"]  = "Raj sir"
console.log(student["fullName"]); 


//Practice

const profile = {
    name : "itz__rajyadav",
    isFollow : true,
    followers : 555,
    following : 10

}

console.log(profile);
console.log(typeof profile);
console.log(typeof profile["name"]);