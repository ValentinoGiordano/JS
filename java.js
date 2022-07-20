let Numero = parseInt (prompt("Write a number"));
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
}


