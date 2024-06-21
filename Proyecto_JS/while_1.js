/*let f = 1

while (f <= 10) {
    document.write('Vuelta nro:  ',f);
    document.write('<br>');
    f++;
    //f+=1;
}
document.write('<br>');
document.write('FIN DEL BUCLE...');*/

let f = 1;
let suma = 0;
let valor;

while (f <= 5) {
    valor = parseInt(prompt('Ingrese valor..'));
    suma = suma + valor;
    f++;
    
}
document.write('La suma es: ',suma,'<br>');