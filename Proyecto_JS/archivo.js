/*var nombre = 'Pedro';
var Nombre = 'Anny';
var _nombre = 'Tomas';
var NOMBRE = 'Elizabeth'


document.write(NOMBRE);*/

//===================================================================================
//operadores de asignacion, incremento y decremento

/*let a = 1;

document.write('Valor de a: ', a);
document.write('<br>');
a++// aumenta vlaor en 1

document.write('valora de a: ', a);
document.write('<br>');
a+=5;//aumento de variable
document.write('valor de a: ', a);
document.write('<br>');

a--; // resta valor en 1
document.write('valor de a: ' + a);
document.write('<br>');

a-=3; //resta variable

document.write('Valor de a: ', a);
document.write('<br>');

a*=2; // multiplica a la variable
document.write('Valor de a: ', a);
document.write('<br>');

a/=3;
document.write('Valora de a: ',a);
document.write('<br>');
a**=2;
document.write('Valor de a: ' + a);*/

///=============================================================================================
//operadores de comparacion
/*let valor1, valor2;

valor1 = 20;
valor2 = 10;

document.write(valor1 > valor2);//mayor
document.write('<br>');
document.write(valor1 < valor2);//menor
document.write('<br>');
document.write(valor1 == valor2);//comparacion
document.write('<br>');
document.write(valor1 != valor2);// diferente
document.write('<br>');
document.write(valor1 <= valor2); //menor o igual
document.write('<br>');
document.write(valor1 >= valor2); // mayor o igual
document.write('<br>');
document.write(valor1 => valor2); //Error
*/

//=========================================================================================
//operaciones matematicas
// redondear a siguiente entero en decimal .5
var precio = Math.round(399.53);
document.write('Precio redondeado: ', precio);
document.write('<br>');

// redondear sin importar decimal hacia arriba
var precio = Math.ceil(299.9);
document.write('Precio redondeado: ',precio);
document.write('<br>');

//redondear sin importar decimal hacia abajo
var precio = Math.floor(540.9);
document.write('precio redondeado: ', precio);

//calcular el seno de un angulo
var seno = Math.sin(45);
document.write('Seno de 45: ', seno);
document.write('<br>');

//calcular el exponecial de un numero
var expo = Math.exp(10);
document.write('Exponencial de 10: ' + expo);
document.write('<br>');

//calcular el logaritmo de un numero
var logaritmo = Math.log(10);
document.write('El logaritmo de 10 es: ' + logaritmo);
document.write('<br>');

//valor absoluto de un numero
var absoluto = Math.abs(-10);
document.write('El valor absoluto de -10: ' + absoluto);
document.write('<br>');

// valor maximo de una secuencia
var maximo = Math.max(10,50,600,1,8);
document.write('Mayor valor: ',maximo);
document.write('<br>');

// valor minimo de una secuencia
var minimo = Math.min(10,50,600,1,8);
document.write('Mayor valor: ',minimo);
document.write('<br>');

//traer en pantalla un valor aleatorio
var aleatorio = Math.random()*10;
document.write('valor aleatorio: ', aleatorio);
document.write('<br>');

//raiz cuadrada de un numero
var valor = Math.sqrt(144);
document.write('Raiz cuadrada de 144: ', valor);
document.write('<br>');
//calcular el exponente de un numero

var exponente = Math.pow(4,2);
document.write(' 4 a la 2 es: ', exponente);


























