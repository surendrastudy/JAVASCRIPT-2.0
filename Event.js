let btn1 = document.querySelector("#btn1");

//event handling

// btn1.onclick = (evt) =>{
//     console.log(evt);    // event object 
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
//     console.log("btn1 was click");
//     let a = 25;
//     a++;
//     console.log(a); //26
// }

// let div = document.querySelector("div"); // event handling
// div.onmouseover = () =>{
//     console.log("you are inside div")
// }

//event Listeners

btn1.addEventListener("click", () =>{
    console.log('button was click')
});
// we can do tha same thing ,mutiple time

btn1.addEventListener("click", (evt) =>{ // evt is show event object
    console.log('button was click2')
    console.log(evt);
});

// remove handler 
let handler = ()=>{
    console.log("button was click on 3")
}

btn1.addEventListener("click", handler);

btn1.removeEventListener("click" , handler);


// Practice.
//Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.

let modebtn =  document.querySelector("#mode");
let currmode = "light"; // dark
let body = document.querySelector("body");

modebtn.addEventListener("click", () =>{
    if(currmode === "light"){
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currmode); //for check is dark and light change is not 
});