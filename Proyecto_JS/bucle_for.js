/*let f;

for (let f = 1; f <= 20; f+=2) {
    document.write('valor de f:  ', f);
    document.write('<br>');
}

document.write('FIN DEL BUCLE....');*/
/*
let f;
for (let f = 1; f <= 20; f+=2) {
    if(f==15){
        document.write('AQUI EL VALOR ES: ', f);
        document.write('<br>');
    }    
}*/

const frutas = ['manzanas', 'peras', 'uvas', 'naranjas'];

for(let f = 0; f < frutas.length; f++){
    document.write('Frutas: ',f,' = ', frutas[f]);
    document.write('<br>');
}