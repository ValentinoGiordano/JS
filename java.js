/*let Numero = parseInt (prompt("Write a number"));
for (let i = 1; i <=5; i++){
    let resultado = Numero / i ;
    alert(Numero +" / "+ i +" = "+ resultado);
}

let datos = prompt("Tell us about you");
while(datos != "ESC"){
    alert(" The user sent "+ datos);
    username = prompt(" What's your name?");
    alert(" Hello there "+ username);
    age = prompt("How old are you");
    alert(" The user is "+ age + " years old ");
    break
}*/
let saldo = parseFloat(prompt("Tu saldo es:"));
let prenda = "";
let gastos = 0;

while (prenda.toUpperCase() != "ESC") {
    prenda = prompt("Ingrese el nombre de la prenda:");

    if (prenda.toUpperCase() == "ESC") {
        alert("Tu saldo es de: $" + gastos + " pesos ");
        break;
    }

    console.log("Nombre: " + prenda);
    let precio = parseFloat(prompt("Ingrese el precio de su prenda:"));
    console.log("Precio: " + precio);
    gastos += precio;

    if (gastos > saldo){
        alert("Superaste el límite de tu saldo");
        alert("El saldo es: $" + gastos + " pesos ");
        break;
    }
}


