// // let div1 = document.querySelector("div");
// // console.log(div1);

// // let id1 = div1.getAttribute("id");
// // console.log(id1);

// // let name1 = div1.getAttribute("name");
// // console.log(name1);

// //class 

// // let para1 = document.querySelector("p");
// // console.log(para1.getAttribute("class"));
// // console.log(para1.setAttribute("class","xyz"))


// // //style
// // let div2 = document.querySelector("div"); -----
// // div2.style.backgroundColor = "green";

// // div2.style.fontSize = "20px"
// // div2.innerText = "Hello"  // we can change a text 
// //  div2.style.visibility = "hidden"

// // div2.style.height = "150px";

// // insert element
//  let newbtn = document.createElement("button");
//  newbtn.innerText = "click me";
//  console.log(newbtn);

//  let div2 = document.querySelector("div"); // we can do for para also
// // div2.append(newbtn); for in the end of div
// //  div2.prepend(newbtn); for in the end of div

// // div2.before(newbtn); when we want a button before div
// //  div2.after(newbtn); when we want a button after div

// // let heading = document.createElement("h1");
// heading.innerText = "<i> this is heading is js </i>";

// document.querySelector("body").prepend(heading);

// let para = document.querySelector("p");
// para.remove(); // for delete


// Practice

//  Q1. Create a new button element Give it a text "click me ", bg-color of red and text of white and insert the button as the first element inside the body tag

let botn = document.createElement("button");
botn.innerText = "Click me ";

botn.style.backgroundColor = "red";
botn.style.color = "white";

document.querySelector("body").prepend(botn);


// Q2. Create a <p> tag in html , give it class and some styling. Now create a new class in css and try to append this class to the <p> element.    Did you notice how you overwrite the class name when you add a new one?  solve the problem using (((((classList search in mdn)))))))


let para = document.querySelector("p");
let newPara = para.classList.add("newclass");
console.log(newPara);