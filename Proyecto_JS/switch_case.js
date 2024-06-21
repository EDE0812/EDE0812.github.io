/*let valor;

valor = parseInt(prompt('Ingrese valor entre 1 y 3'));

switch (valor) {
    case 1:
        document.write('Ingresó el valor uno...')
        break;
    case 2:
        document.write('Ingreso el numero dos...');
        break;
    case 3:
        document.write('Ingreso el numero 3');
        break;

    default:
        document.write('No es un numero válido...');
        break;
}*/

let color;
color = prompt('INGRESE UN COLOR: ROJO/VERDE/AZUL');

switch (color) {
    case 'rojo':
        document.write('Ingreso el color rojo');
        break;
    case 'verde':
        document.write('Ingreso el color verde');
        break;

    case 'azul':
        document.write('Ingreso el color azul');
        break;

    default:
        document.write('no ingresó color...');
        break;
}