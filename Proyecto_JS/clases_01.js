class Persona{
    nombre = 'Homero'; //<-------------Atributos
    apellido = 'Simpson';
    direccion = 'Av. Siempreviva 742';
    email = 'amantedelacomida@ol.com';

    trabajar(){ //<----------Metodos
        return 'trabaja en la planta nuclear';
    }

    estudiar(){
        return 'Escuela primaria de Sprinfield';
    }
}

const homero = new Persona();
const bart = new Persona();
const lenny = new Persona();

document.write(homero.nombre + ' ' + homero.apellido); //Objeto.propiedad
document.write('<br>');
document.write(homero.trabajar());
document.write('<br>');
document.write('<br>');
document.write('Bart ', bart.apellido);
document.write('<br>');
document.write('Estudia en : ', bart.estudiar());
document.write('<br>');
document.write('<br>');
document.write('Lenny ', lenny.trabajar());