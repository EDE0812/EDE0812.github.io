/*let boton = document.getElementById("boton1");
let div1 = document.getElementById("div1");
let enlace = document.getElementById("enlace1");

function bloqueo_enlace(event){
    event.preventDefault();
    alert('Enlace dehabilitado!');
}

function mostrarMensaje(event){
    alert(event.target); // mostrar el objetivo del evento
    alert(event.currentTarget);
}

div1.addEventListener('click', mostrarMensaje);
enlace.addEventListener('click', bloqueo_enlace);
// boton.addEventListener('click', function(){
//     alert('Presionaste el boton');
// });

// function mensaje2() {
//     alert('soy un mouseover');
// }

// boton.addEventListener('mouseover', mensaje2)*/

// let texto1 = document.getElementById("mitexto");

// function verificar_numero(e){
//     if(e.keyCode < 48 || e.keyCode > 57 && e.keyCode != 127){
//         e.preventDefault();
//     }
// }

// texto1.addEventListener('keydown', verificar_numero);

// let menu = document.getElementById("mimenu");
// let boton = document.getElementById("miboton");

// // boton.addEventListener('click', function(){
// //     menu.style.display = 'block';
// // })

// boton.addEventListener('mouseover', function(){
//     menu.style.display = 'block';
// })

// boton.addEventListener('mouseout', function(){
//     menu.style.display = 'none';
// })

// boton.addEventListener('mousemove', function(e){
//     console.log("Posicion X: " + e.clientX + "Posiciion Y: " + e.clientY);
// })

//Web Sockets

// let socket = new WebSocket('ws://localhost:5501/'); //url de ejemplo
// let mensajeIngresado = document.getElementById('mensajeIngresado');
// let botonenviar = document.getElementById("botonenviar");


// function mostrarMensajes(contenido){
//     let contenidoMensajes = document.getElementById("mensajeChat");
//     let elementoMensaje = document.createElement('p');

//     elementoMensaje.innerText = contenido;
//     contenidoMensajes.appendChild(elementoMensaje);
//     console.log(elementoMensaje);
// }

// botonenviar.onclick = function(){
//     let mensaje = mensajeIngresado.value;
//     mostrarMensajes(mensaje);
//     socket.send(mensaje);
// }

// socket.onmessage = function(e){
//     let mensaje = e.data;
//     mostrarMensajes(mensaje);
// }



