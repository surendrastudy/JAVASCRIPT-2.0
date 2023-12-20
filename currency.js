const BASE_URL =
 "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button")
const fromcurr = document.querySelector(".from select")
const tocurr =  document.querySelector(".to select")
const msg = document.querySelector(".msg")

// for ( code in countryList) {
//     console.log(code,countryList[code] )
// }


window.addEventListener("load",() =>{
    updateExchangeRate()
})

for(let select of dropdowns){
    for ( currcode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currcode;
        newOption.value = currcode;
        if(select.name == "from" && currcode ==="USD"){
            newOption.selected = "selected"
        }else if(select.name == "to" && currcode ==="INR"){
             newOption.selected = "selected"
        }
        select.append(newOption);
    }

    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target)  // joa select mea change kiya wo updateflag mea pass hoga
    })
}




const updateFlag =(element)=>{
let currcode = element.value  // value safe kara raha hai
// console.log(currcode)

let countryCode = countryList[currcode];  // IN , EU
let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`      // i removed us https://flagsapi.com/US/flat/64.png"
let img =element.parentElement.querySelector("img");   // hamna select acces kiya hama uska parent mea joa img hai wo caheya 
img.src = newSrc;
}

const updateExchangeRate = async ()=>{   // this is last part ((btn.event  part ))
    let amount = document.querySelector(".amount input");
    let amtval = amount.value  
    console.log(amtval)
    if(amtval === "" || amtval<1){
       amtval = 1;  // automatic set value 1
        amount.value ="1"  // user ko dekhna ka liya 
    }
 console.log(fromcurr.value,tocurr.value)
    const URL = `${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data)  // yaha par small name mea data dekh raha hai esliya small kara
    let rate = data[tocurr.value.toLowerCase()]  //waha joa inr hai uska naam smaal kara ga 
    console.log(rate)

    let finalAmount = amtval * rate;
    msg.innerText = `${amtval} ${fromcurr.value} = ${finalAmount} ${tocurr.value} `   //`1USD = 80 INR`
}

btn.addEventListener("click", (evt)=>{  //kuch event ajaya ga 
    evt.preventDefault();  // button par joa click karta hai joa page load hota hai wo nahi hoga ab
    updateExchangeRate()
});





