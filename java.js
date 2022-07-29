function pais() {
    alert("A continuación te recomendamos algunos países para vacacionar 😎");
}
function agregar() {
    alert("Si le gustarían más recomendaciones, agregue un país a su gusto");
    let masPaises = prompt("Ingresa un país vacacional");
    alert("Se ha agregado su recomendación 😉");
}

pais();

let paises = ["Dinamarca" , "Italia" , "Mexico" , "Brasil" , "Argentina"];
for(let i=0 ; i<paises.length; i++){ 
    alert(paises[i]);
    }
paises.sort((a, b) => {
    return a.id - b.id;
})

agregar();