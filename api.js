const URL = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#fact")
const btn = document.querySelector("#btn")

const getFacts = async () => {
    let response = await fetch(URL);    // await eska run hona tak ka wait kara ga 
    console.log(response);  // json format 

   let data = await response.json();  // json to js object ((aur bata dega kitna data hai ))
   console.log(data[1].text)

   factpara.innerText = data[1].text;
};


// we can do same in promise chain
// function getFactss(){
//     fetch(URL)
//     .then((response) =>{
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data)
//         factpara.innerText = data[2].text;
//     });
// }

btn.addEventListener("click",getFacts)