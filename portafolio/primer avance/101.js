// console.log("Hola mundo")

// let x = 19
// var y = 78

// console.log(x,y)

// y = "hola jeje"
// console.log(y)

// var notDefined
// console.log(notDefined)

// array = [2,"cualquier cosa", undefined, null, true, 2.51]
// console.log (array[0] * array [5])
//  obj = {
//     name : "Foo",
//     city: "TJ",
//     age : 22  
//  }

//  console.log(obj ["name"])
//  console.log(obj.city)

//console.log(obj["name"], obj["age"])
//console.log(object.values(obj))

//  for (let i=0; i<=100; i+=5)[
//     console.log(i)
//  ]

//  for (let index = 0; index < array.length; index++) {
//    console.log(array[index]);
    
//  }

//  for (let i of array) {
//     console.log(i)
//  }

//  for (let key of Object.keys(obj)){
//    console.log(key + ": " + obj[key])
//  }

//  for (let key in obj){
//    console.log(key + ": " + obj[key])
//  }

//  i = 1000
//  while (i <1000){
//    console.log(i)
//    i += 5
//  }
// k = 1000
//  do {
//    console.log(k)
//    k += 5
//  } while (k< 1000)

// var gatito = "cute2"

// if (gatito === 'cute'){
//    console.log("This KItty is pretty cute")
// } else {
//    console.log("This is a Ordinary Kitty")
// }

// var ternary = (gatito === 'cute') ? 'kitty pretty cute':'Kitty cute'

// console.log(ternario)
 
// var opc = 1

// switch (opc) {
//    case 1:
//       console.log("I am THe case 1")
//       break;

//    case 2:
//       console.log("I am THe case 2")
//       break;
   
//    case Default:
//       console.log("I am The default case")
// } 

// base = 5
// altura = 10

// function area (base, altura){
//    area = (base*altura)/2
//    console.log(area)
// }

// area(base,altura)

// ( function () {
//     console.log("I am the IIFE")
// }()
// );
// var msg = "Hello!"
// const bar = (function(msg){
//     console.log("Me3ssage: " + msg)
// }(msg))

// var say = function say (times){
//     if (times > 0 ){
//         console.log('Hello!')

//         say (times - 1)
//     }
// }

// var sayHelloTimes = say;
// say = "oo"
// sayHelloTimes(2);

// function persons (p, ... person){
//     person.forEach(args =>{
//         console.log("P -- " + args + " " + p)
//     })
// }

// persons("Hola", "Foo", "Bar", "Joe", "Doe")


var url = 'https://jsonplaceholder.typicode.com/posts'
// var url2 = "https://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=javascript"
// var responseData = fetch(url2).then(response => response.json())
// responseData.then(({items, has_more, quota_max, quota_remaining}) => {
//     for ({title, owner, is_answered} of items) {
//         console.log("Q: " + title + " - - is_answered: " + is_answered)
//     }
// })

// Lectura de una API
// fetch(url).then(response => response.json())
//     .then(response => {
//         response.forEach(element => {
//             console.log(element.title)
//         });
//     })


// Escritura en una API
// fetch(url, {
//     method: "POST",
//     headers: {
//         "Content_type" : "application/json"
//     }, 
//     body: JSON.stringify({
//         userId: 1,
//         title: "lorem ipsum etc etc etc"
//     })
// }).then(response => response.json())
//     .then(response => console.log(response))

//Username, email, address, company
var url3 = "https://jsonplaceholder.typicode.com/users"
fetch(url3).then(response => response.json())
    
    .then(response => {
        response.forEach(element => {
            if (!Array.isArray(element)){
                console.log(element)
            } else {
                
            }
        });
    })

    // console.log("Username: " + element.name)
    // console.log("Email: " + element.email)
    // console.log("Address: " + element.address)
    // console.log("Company: " + element.company)