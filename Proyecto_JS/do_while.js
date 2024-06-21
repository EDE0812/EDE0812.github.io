/*let valor;

do {
    valor = parseInt(prompt('Ingrese valor 1 para salir...'));
    document.write('Ingrese valor:  ', valor);
    document.write('<br>');
} while (valor != 1);

document.write('Fin del bucle');*/

let usuario, clave, control;

control = 0;
usuario = prompt('INGRESE USUARIO.....');
clave = prompt('INGRESE SU CONTRASEÑA..');

do {
    if (clave != 'MIacceso33%'){
        clave = prompt('CONTRASEÑA INCORECTA \n' + 
            'INTENTE DE NUEVO...');
            control = 0;
    }else{
        control = 1;
    }
} while (control != 1);

document.write('ACCESO CORRECTO! ');
document.write('<br>');
document.write('USUARIO: ',usuario);
document.write('<br>');
document.write('CONTRASEÑA: ',clave);