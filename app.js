let numeroSecreto= 0;
let intentos= 0; 
let listaNumerosSorteados= [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
if (numeroDeUsuario===numeroSecreto){
    asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos ===1)?'vez':'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
}
else{
    //El usuario no acertó 
    if (numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor');
            }else{
                asignarTextoElemento('p','El numero secreto es mayor');
            }
            intentos++;
            limpiarCaja();
    }
    return;
}

function limpiarCaja() {
document.querySelector('#valorUsuario').value= '';
}


function generarNumeroSecreto(){
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
if(listaNumerosSorteados.length== numeroMaximo){
 asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
}
else{
    if(listaNumerosSorteados.includes(numeroGenerado)){

        return generarNumeroSecreto();
        
        }else {
        
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

}


}
function condicionesIniciales(){
    asignarTextoElemento ('h1','Nuevo Juego');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos=1;
    limpiarCaja();
}
function reiniciarJuego(){
    //limpiar la caja 
    //indicar mensaje de intervalo de numeros 
    //generar nro aleatorio
    //Inicializar el numero de intentos 
    condicionesIniciales();
    //deshabilitar boton nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled', true);

}

condicionesIniciales();