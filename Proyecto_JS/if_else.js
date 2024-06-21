let nombre, edad;

nombre = prompt('INGRESE SU NOMBRE: ');
edad = parseInt(prompt('INGRESE SU EDAD'));

if (edad >= 18) {
    document.write('BIENVENIDO: ',nombre);
} else {
    if (edad < 18) {
        document.write(nombre,' eres menor de edad.');
    } else {
        document.write('NO HAS INGRESADO DATOS');
    }
    
}