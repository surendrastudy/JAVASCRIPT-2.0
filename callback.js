// Asunchronos

// function hello(){
//     console.log("hello")
// }

// setTimeout(hello,2000)   //timeout ;  2s =2000

// setTimeout(()=>{
//     console.log("hello")
// },2000);


function getData(dataid,getNextdata){  
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data ", dataid);
            resolve("sucess")
            // if(getNextdata){
            //     getNextdata();
            // }
        },2000);
    })
};

//ASYNC- WAIT

async function getAllData(){
    await getData(1);
   
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
}
// getAllData()

//second method to do not need to call a function
(async function(){
    await getData(1);
   
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
})();

//(( promise chain)) me come from asynchronus fuction ((to reduce callback hell))

getData(1)
.then((res)=>{
    return getData(2);
})
.then((res)=>{
   return getData(3)  //same for data 3
})
.then((res)=>{
   console.log(res);
});


//callback hell
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4)
//         });
//     });
// });

//promises

// let promise = new Promise((resolve,reject)=>{
//     console.log("promise");
//     // resolve(12)
//     reject("error")
// })


const getPromise = ()=>{
   return new Promise ((resolve,reject)=>{
        console.log("promise2");
        // resolve(123);
        reject("network error")
    });
};

let promise = getPromise();

promise.then((res)=>{                      //this is for resolve
    console.log("promise fullfiled",res);   
});

promise.catch((err)=>{                      //this is for reject
    console.log("promise rejected",err);    // joa reject mea pass kiya uska value aya ga
});


//
function asyncFunc1() {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
                console.log("some data1");
                resolve("sucess")
        },2000)
    });
};

function asyncFunc2() {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
                console.log("some data2");
                resolve("sucess")
        },2000)
    });
};
console.log("fecting data")

 // do (2) data hai mera pass dono sath mea araha hai magar phela ascychro1 ana cahya uska baad asynchrons2
let p1 = asyncFunc1(); 
p1.then((res)=>{
    console.log(res) // success o/p
    asyncFunc2().then((res =>{}));  // 2nd method

    // let p2 = asyncFunc2();
    // p2.then((res0 => {}) )
});


//ASYNC- WAIT

function api(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data ");
            resolve(200);
        },2000)
    });
}

async function getWeatherData() {
    await api()     //1st eska pura hona tak wait karo
    await api()     //2nd
}
getWeatherData()