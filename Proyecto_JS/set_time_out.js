let elementotextoAlarma = document.getElementById("textoalarma");
const contador1 = document.getElementById('contador');
let intervalo;
let contar = 0;
let elementoSegundos;

function comenzarTiempo(){
    elementoSegundos = parseInt(document.getElementById("tiempoelegido").value);
    let milisegundos = 1000 * elementoSegundos; 
    
    //Detiene el intervalo si ya existe
    clearInterval(intervalo);

    //Reinicia el contador
    contar = 0;
    contador1.textContent = 0;

    //Inicia el temporizador y el intervalo
    intervalo = setInterval(contador, 1000);
    //setTimeout(tiempocumplido, milisegundos);
    
}

function contador(){
    contar++;
    contador1.textContent = contar; 
    console.log(contar + ' + ' + elementoSegundos);
    //Verifica si el contador ha alcanzado el valor del input
    if(contar == elementoSegundos){
        tiempocumplido();
    }

     
}

function tiempocumplido(){
    elementotextoAlarma.textContent = "ENCENDIDO";
    elementotextoAlarma.style.color = "green";  
    clearInterval(intervalo);  
    //alert("Se termino el tiempo");
    //document.getElementById("audioalarma").play();
    reproducirAlarma(3);
}

function inicio(){
    elementotextoAlarma.textContent = "APAGADO!";
    elementotextoAlarma.style.color = "red";
    document.getElementById("tiempoelegido").value = 0;
    contador1.innerText = 0;
    contar = 0;
    clearInterval(intervalo);
}

function reproducirAlarma(repeticiones) {
    const audio = document.getElementById('audioalarma');
    let count = 0;

    function playSound() {
        if (count < repeticiones) {
            audio.play();
            count++;
            setTimeout(() => {
                audio.pause();
                audio.currentTime = 0;  // Reinicia el audio al principio
                if (count < repeticiones) {
                    setTimeout(playSound, 1000);  // Reproduce nuevamente después de 1 segundo
                }
            }, 1000);  // Duración de cada reproducción
        }
    }

    playSound();
}


function comenzarReloj(){
    setInterval(tictac, 1000);
}

function tictac(){
    let tiempoactual = new Date();

    let hora = String(tiempoactual.getHours()).padStart(2,"0");
    let minutos = String(tiempoactual.getMinutes()).padStart(2,"0");
    let segundos = String(tiempoactual.getSeconds()).padStart(2, "0");


    let textoHora = hora + ':' + minutos + ':' + segundos;

    elementotextoAlarma.textContent = textoHora;

}

/*
let timer;

function inicio() {
    // Clear any existing timer when the input gains focus
    clearInterval(timer);
    document.getElementById('textoalarma').innerText = 'APAGADO!';
    document.getElementById('textoalarma').style.color = 'red';
    document.getElementById('contador').innerText = '0';
}

function comenzarTiempo() {
    const tiempoelegido = document.getElementById('tiempoelegido').value;
    const textoalarma = document.getElementById('textoalarma');
    const contador = document.getElementById('contador');
    let timeLeft = parseInt(tiempoelegido);

    if (isNaN(timeLeft) || timeLeft <= 0) {
        alert('Please enter a valid positive number');
        return;
    }

    textoalarma.innerText = 'APAGADO!';
    contador.innerText = timeLeft;

    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            textoalarma.innerText = 'ALARMA ENCENDIDA!';
            textoalarma.style.color = 'green';
        } else {
            timeLeft--;
            contador.innerText = timeLeft;
        }
    }, 1000);
}*/