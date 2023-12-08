// console.dir(window);
// console.dir(document.body);
// console.log(document.body);  same head for

// console.dir(document.body.childNodes[1]);


// id
let heading = document.getElementById("heading"); // h1 ki value return kara ga 
console.dir(heading);

// class
let headings = document.getElementsByClassName("heading");
console.dir(headings);

// tag
let pera = document.getElementsByTagName("p");
console.dir(pera);


let firEl = document.querySelector("p");  // 1st element ((we can id and class also for 1st element print))
console.dir(firEl);

let allEl = document.querySelectorAll("p")  // All element
console.dir(allEl);

let firtEl = document.querySelector("#button");  // in id we can give selectorAll
console.dir(firtEl);

//properties ----->

//inner Text 
let div = document.querySelector("div")
console.dir(div.innerText);     // text ka form mea aya ga
console.dir(div.innerHTML);  // html mea jasa code hai wasa aya ga
console.dir(div.textContent); // normal output aya ga jasa webpage par raha ga

 // now value set  ((we can change a text and tag))

//  console.dir(div.innerText= "aba"); 
//  console.dir(div.innerHTML = "<div>new div</div>");


 //let's Practice

//  Q1 Create a H2 heading element with text - "Hello JavaScript . Append "from Apna college student's to text using js.

let h2 = document.querySelector("h2");
console.dir(h2.innerText );

h2.innerText =h2.innerText +  " from Apna college"

// Q2 create 3 divs with common class name - "box". Access them & add some unique text to each of them

let divs = document.querySelectorAll(".box");

// console.log(divs[0]);
let idx = 1
for (dvs of divs) {
    dvs.innerText = `new unique value ${idx}`;
    idx++;
}

// divs[0].innerText = "new unique value 1"
// divs[1].innerText = "new unique value 2"
// divs[2].innerText = "new unique value 3"


// for( dvs of divs) {
//     console.dir(dvs.textContent)
// }