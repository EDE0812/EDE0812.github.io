function saludar() {
    let saludo = prompt('INGRESE UN SALUDO!  ');
    alert(saludo);
    //document.write('Hola a todos');
    //document.write('<br>');
    //alert('Hola a todos');
    despedida();
}


function despedida() {
    document.write('TE AMO SHEELLY ');
}

saludar();