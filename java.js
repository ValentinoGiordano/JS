class info{
    constructor(){
    this.nombre=prompt("Ingrese su nombre"); 
    this.edad=prompt("Ingrese su edad"); 
    this.telefono=prompt("Ingrese su telefono"); 
    this.email=prompt("Ingrese su mail");  
}
}

const datos = new info();


alert(`Nombre: ${datos.nombre} 
        Edad: ${datos.edad} 
        Telefono: ${datos.telefono} 
        Email: ${datos.email} 
`)

let resultado = 0

function sumar(valor1, valor2, valor3) {
    resultado = (valor1 + valor2 + valor3);
}

function mostrarMensaje(mensaje) {
    alert("El resultado es " + mensaje);
}

let var1 = parseInt(prompt("Ingrese un valor"));
let var2 = parseInt(prompt("Ingrese un valor"));
let var3 = parseInt(prompt("Ingrese un valor"));

sumar(var1, var2, var3);
mostrarMensaje(resultado); 

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

