//OPERADOR && (Y)
/*
let a,b;
a=20;
b=30;

document.write(a == b);*/

/*
let continente, edad;

continente = prompt('INGRSE SU CONTINENTE');
edad = parseInt(prompt('INGRESE SU EDAD...'));

if (continente == 'America' && edad >= 18) {
    document.write('eres un adulto americano');
} else {
    document.write('o no eres adulto, o no eres americano');
}*/

let dia, mes, anio;

dia = prompt('INGRESE DIA...');
mes = prompt('INGRESE MES...');
anio = prompt('INGRSE AÑO...');

if (mes == 1 || mes == 2 || mes == 3){
    document.write('Pertenece al primer trimestre...');
}else{
    document.write('No pertenece al primer trimestre');
}