let resultado;

function suma(a, b) {
    return a + b;
}

document.write(suma(80, 10));
document.write('<br>');
//==============================================================
function saludar() {
    return 'HOLA MUNDO';
}

var mensaje = saludar();

document.write(saludar());

//==========================================================

function Vercolor(valor) {

    valor = parseInt(prompt('INGRESE VALOR 1 / 3 ...'));
    switch (valor) {
        case 1:
            return 'ROJO';
        case 2:
            return 'VERDE';
        case 3:
            return 'AMARILLO';
        default:
            return 'VALOR INCORRECTO';
    }

}
alert(Vercolor());