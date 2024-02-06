//Examen primer parcial practico.
var url =  "https://jsonplaceholder.typicode.com/todos"
var res


async function onlyIDs(){
    fetch(url).then(response => response.json())
    .then(response => {
        response.forEach(element => {
            console.log("ID: " + element.id)
        });
    })
}

function idnTitles(){
    fetch(url).then(response => response.json())
    .then(response => {
        response.forEach(element => {
            console.log("ID: " + element.id)
            console.log("Titles: " + element.title + "\n")

        });
    })
}

function sidnTitles(){
    fetch(url).then(response => response.json())
    .then(response => {
        response.forEach(element => {
            if (element.completed === false){ 
                console.log("ID: " + element.id)
                console.log("Titles: " + element.title + "\n")
            }
        });
    })
}

function cidnTitles(){
    fetch(url).then(response => response.json())
    .then(response => {
        response.forEach(element => {
            if (element.completed === true){ 
                console.log("ID: " + element.id)
                console.log("Titles: " + element.title + "\n")
            }
        });
    })
}

function idnUid(){
    fetch(url).then(response => response.json())
    .then(response => {
        response.forEach(element => {
            console.log("ID: " + element.id)
            console.log("User ID: " + element.userId + "\n")
        });
    })
}

function cidnUid(){
    fetch(url).then(response => response.json())
    .then(response => {
        response.forEach(element => {
            if (element.completed === true){ 
                console.log("ID: " + element.id)
                console.log("User ID: " + element.userId + "\n")
            }
        });
    })
}

function sidnUid(){
    fetch(url).then(response => response.json())
    .then(response => {
        response.forEach(element => {
            if (element.completed === false){ 
                console.log("ID: " + element.id)
                console.log("User ID: " + element.userId + "\n")
            }
        });
    })
}

console.log("--- Pendientes de la NFL ---")
process.stdout.write("1.- Listar todos los pendientes (Solo ID's).\n"+
"2.- Listar todos los pendientes (ID's y titles)\n"+
"3.- Listar todos los pendientes sin resolver (ID's y titles)\n"+
"4.- Listar todos los pendientes resueltos (ID's y titles)\n"+
"5.- Listar todos los pendientes (ID's y User ID)\n"+
"6.- Listar todos los pendientes resueltos (ID's y User ID)\n"+
"7.- LIstar todos los pendientes sin resolver (ID's y User ID)\n")

const readline = require('readline')
const s = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pregunta = (query) => new Promise(resolve => s.question(query,resolve))

const main = async () => {
    let band = true

    while (band) {
        const num = await pregunta("Digite la el numero de la accion que desea realizar: ")
        if (!isNaN(num)){
            if (num === 1){
                await onlyIDs()
            } else if (num === 2){
                idnTitles();
            } else if (num === 3){
                sidnTitles();
            } else if (num === 4){
                cidnTitles();
            } else if (num === 5){
                idnUid();
            } else if (num === 6){
                cidnUid();
            } else if (num === 7){
                sidnUid();
            } else {
                process.stdout.write('Opcion incorrecta. ');
            }

            const consulta = await pregunta('Desea realizar otra accion? si/no: ')
            if (consulta.toLowerCase() !== 'si'){
                band = false
            }
        } else {
            process.stdout.write("La entrada no fue un numero. Intente nuevamente: ")
        }
    }
    s.close()
};

main().catch(error => console.log(error))

//No pude hacer funcionar los if ni los switch case, al momento de ingresar una entrada correcta
//el programa queda a la espera de ingresar otro numero. No supe como solucionarlo.
//Aunque el programa cumple con los requisitos de tener un menu y realizar las acciones que se
//le solicitan.
