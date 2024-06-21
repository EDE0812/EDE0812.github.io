let numeros = [];
numeros = [15,80,650,50.30,-10];

document.write('Elementos: ', numeros);
document.write('<br>');
document.write('<br>');
document.write('Primer elemento: ', numeros[0]);
document.write('<br>');
document.write('<br>');
numeros[0] = 14;

document.write('Elemetos: ', numeros);
document.write('<br>---------------------------------------');

let frutas = ['manzana',' peras', ' naranjas', ' mangos'];
document.write('<br>');
document.write('<br>');
document.write('Frutas: ', frutas);

//METODOS DE LOS ARRAYS
//VER CANTIDAD DE ELEMENTOS
document.write('<br>');
document.write('<br>');
document.write('Cantidad: ', numeros.length);
document.write('<br>');
document.write('<br>');
document.write('Cantidad: ',frutas.length);

//saber ultimo elemento
document.write('<br>');
document.write('<br>');
document.write('Ultimo elemento: ', numeros[numeros.length-1]);

document.write('<br>');
document.write('<br>');
document.write('Ultimo elemento: ', frutas[frutas.length-1]);

//Arrays en tipo texto
document.write('<br>');
document.write('<br>');
document.write('En string: ', numeros.toString());


//unir tipos de arrays
let letras = ['a', 'b', 'c'];
let numeros2 = [1,2,3];

document.write('<br>');
document.write('Alfanumerico: ', letras.concat(numeros2));

document.write('<br>');
document.write('<br>');

//borrar ultimo elemento
numeros.pop();
document.write(numeros);

document.write('<br>');

//Agregar elemento al final
numeros.push(-10);
document.write(numeros);

document.write('<br>');
document.write('<br>');

// eliminar el primer elemento
numeros.shift();
document.write(numeros);

document.write('<br>');
document.write('<br>');

//Insertar elementos al inicio

numeros.unshift(14);
document.write(numeros);

document.write('<br>');
document.write('<br>');

//Eliminar elementos a partir de un punto;
numeros.splice(2,3);
document.write(numeros);
document.write('<br>');
document.write('<br>');

// copiar un array
let cantidades = [100,200,300,500,600,800];
let copia = cantidades.slice(1,4);
document.write('Array copia: ', copia);

///Ordenar un array
document.write('<br>');
document.write('<br>');
let objetos = ['carro','botella','planeta', 'zorro'];
document.write(objetos.sort());

///Ordenar un array
document.write('<br>');
document.write('<br>');
let objetos2 = ['carro','botella','planeta', 'zorro'];
document.write(objetos2.reverse());

document.write('<br>');
document.write('<br>');

const autos = ['Toyota','Chevrolet','BMW'];
document.write('Autos: ', autos);
document.write('<br>');
document.write('<br>');

autos[0] = 'Honda';
document.write('Autos: ', autos);



