//import axios from 'axios';
const axios = require('axios')
const url = 'https://jsonplaceholder.typicode.com/users'

// axios.get(url).then(({data}) =>{
//     data.forEach(element =>{
//         console.log(element.username)
//     })
// })

axios.post(url, {
    username: "Foo",
    mail: "Foo@gmail.com"
}).then(response => {
    if (response.status === 201){
        console.log("El Registro fue guardado de forma correcta!!")
    }
})