let marks = [97 ,85, 44, 55, 56];
console.log(marks);
console.log(marks.length);  //property 

let heroes = ["Luffy", "Goku", "Naruto","Mikey", "L", "Tanjiro"];
console.log(heroes);

//Array indices

marks[0] = 66;
console.log(marks);


//Loop over a Array

 for(let idx = 0; idx<marks.length;idx++){
     console.log(marks[idx]);
 };


 //for of
 for(let el of marks){
        console.log(el);
 }


// let indx =0 ;
// while(indx < marks.length){
//     console.log(marks[indx]);
//     indx++;
// };

let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];
for (let city of cities){
    console.log(city.toUpperCase());
}

//practice
// Q1  find average

let result = [85, 55, 88, 55, 66,6];
let sum =0;

for(let val of result){
    sum = sum + val;            // sum += val
}
let avg = sum/result.length;
// console.log(sum);
console.log(`avg marks of the class = ${avg}`);


// Q2 create array give 10% off and give final price 

let items =[55,65,66,88,5];

// let indx =0;
// for(let val of items){
//     let offer = val/10;
//     items[indx] = items[indx]-offer;
//     console.log(` ${val} value of after offer =${items[indx]} `);
//     indx++;
// }


for (let i=0 ; i<items.length; i++){
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);

//Array methods

let vegitable = ["Potato", "apple", "litchi", "tomato"];

vegitable.push("chips");
vegitable.push("buger","banna","panner", "watermellon");
console.log(vegitable);

let deletdvalue = vegitable.pop()
console.log(vegitable);
console.log("deleted " ,deletdvalue);

console.log(vegitable.toString());          //Array to string

let marvel_heroes = ["thor", "spiderman", "ironman"]     // Add 2 or more array
let indian_heroes = ["shiva","superman"]

let heroe = marvel_heroes.concat(vegitable,indian_heroes);
console.log(heroe);

console.log( "unshipt " ,marvel_heroes.unshift("antman"));  // start mea add hoga
console.log(marvel_heroes);

console.log( "shipt " ,marvel_heroes.shift());  // start mea delete hoga
console.log(marvel_heroes);


// splice()
let anime = ["Luffy" , "raj", "naruto" , " goku", "onepunch man"];      //slice
console.log(anime)
console.log(anime.slice(1,3));

//add element
console.log("splice" ,anime.splice(1,1,"gojo","vegeta")); // starting , delet count how many index you want to delete , new value
console.log(anime)

// delete element
console.log("splice" ,anime.splice(1,2));

// replace
console.log("splice" ,anime.splice(1,2,"MIkey"))
console.log(anime)
