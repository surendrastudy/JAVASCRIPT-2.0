let str0 = "Hello";
console.log(str0[1],str0[3]);

//Templates Literals -----

let specialString = `This is a template literal`
console.log(specialString);
console.log(typeof specialString);

// example of templates

let obj ={
    item : "pen",
    price : 10,
};

console.log("the cost of ", obj.item, "is", obj.price, "rupees");
// I can write same thing in easy way use template ` `

let output = `the cost of ${obj.item} is ${obj.price} rupess `;
console.log(output)

// we can do any thing on templates in ${} example
let specialStrings = `This is a template literal ${1+2+3}`;
console.log(specialStrings);


// escape character (( next line print hona ka liya ))

console.log("Apna \n college")
console.log("Apna \t college")



// String Methods

let str = " ApnaCollege ";
// let newStr = str.toUpperCase();
// console.log(newStr);

// str = str.toLowerCase();
 str = str.trim();
console.log(str);

console.log(str.slice(1,4));  // when ever we want some sword in parts
console.log(str.slice(1));  // 1 index sa sara value dega

let str2 = " bro";
let result = str.concat(str2); // second method let result = str + str2;  when ever i want to add 2 strings
console.log(result);

console.log(str.replace("A" , "B"));  // replace search word and give new value
console.log(str.replaceAll("l", "N"))  // same value ko sara replace kar dega

console.log(str.charAt(3));
console.log(str[0]); // second method for print value


// practice

// prompt the user to enter full name and generate userName

let fullName = prompt("Enter your full name")
let userName = "@" + fullName+fullName.length;
console.log(userName);
