// const student = {
//     name :"raj",
//     marks : 11,
//     printmarks:function(){
//         console.log("marks=", this.marks);  //student.marks
//     },
// };

// when i want crate a 1 object function and use in different object 
const employee = {
    calcTax1(){         //use this
        console.log("Tax rate is 10%")
    },

    // calcTax2: function(){            //second method to write a function in object
    //     console.log("Tax rate is 10% ")
    // }
};

const karan ={
    salary: 50000,
    calcTax1(){
        console.log("tax rate is 20%")  // ya print hoga kyu ki ya uska jada pass hai aur uski jada priorty hai
    }
};
const Arjun ={
    salary: 50000,
};

karan.__proto__ = employee //karan.calcTax1 to check  (eployee ki propertie karna ka under bhej raha hai )

Arjun.__proto__ = employee


//class

class Toyotacar {

    constructor(brand,mileage){
        console.log("creating new object ");
        this.brand = brand;
        this.mileage = mileage;
    }    
    
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    // setbrand(brand){
    //     // object ki properties  this.brand 
    //     this.brand = brand;
    // }
}

let fortuner = new Toyotacar("fortuner", 12);
console.log(fortuner)
// fortuner.setbrand("fortuner")
let lexues = new Toyotacar("lexues", 10);
 console.log(lexues);

 //inheritance

 //single level
 class Parent{
        hello(){
        console.log("hello");
        }
 }

 class Child extends Parent{}

 let obj = new Child();


// super keyword 

 class Person{
    constructor(){
        console.log("enter parent constuctor")
        this.species = "homo species"
    }
    eat(){
        console.log("eat");
    }

    work(){
        console.log("do nothing ")
    }
 }

 class Engineer extends Person{
    constructor(branch){
        console.log("enter child constructor ")
        super();  //to invoke parent class constuctor((child ka info parent ko pass karna ka liya ))   aur child const call ka badd parent const call hoga 

        this.branch = branch;
        console.log("exit child constructor ")
    }
    work(){
        console.log("solve problem , build something");
    }
 }
 
 let engobj = new Engineer("software");


// super keyword


class person{
    constructor(name){
        this.specie = "homo species"
        this.name = name
    }

    eats(){
        console.log("eat");
    }
}

class Enginer extends person{
    constructor(name){
        super(name);
    }

    works(){
        super.eats();  // mujhe console ka phela parent ka eat function caheya 
        console.log("solve problem , build something");
    }
}

let enobj = new Enginer("raj");


//Practice
let DATA = "secret information";

class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("Data ", DATA)
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email)
    }
    editData(){
        DATA = "some new value";
    }
}

let student1 =new User("raj","abc@gamil.com")
let student2 =new User("Aman","abc@gamil.com")

let teacher = new User("dean", "dean@gmail.com");

let Admin1 = new Admin("admin", "admin@gmail.com");


//ERROR HANDLING

let a = 5;
let b= 10;

console.log("a",a);
console.log("b",b);
console.log("a+b",a+b);
console.log("a+b",a+b);
try{
    console.log("a+b",a+c);   // error 

}catch(err){

    console.log(err);
}
console.log("a+b",a+b);
console.log("a+b",a+b);