/*let palabra = 'JavaScript';
//let valor = 5;

//palabra = ['J','a','v','....'] --> asi lo ve el sistema for in
//solo funciona para variables que contienn una cantidad de elementos

for(let f in palabra){
    document.write(palabra[f]);
    document.write('<br>');
}*/

let palabra = 'muuuurcielagooo';
let vocal = 0;
let vocala = 0;
let vocale = 0;
let vocali = 0;
let vocalo = 0;
let vocalu = 0;

for (let f in palabra) {
    if (palabra[f] == 'a' || palabra[f] == 'e' ||
        palabra[f] == 'i' || palabra[f] == 'o' ||
        palabra[f] == 'u') {
        vocal++;
    }

    switch (palabra[f]) {
        case 'a':
            vocala++;
            break;
        case 'e':
            vocale++;
            break;
        case 'i':
            vocali++;
            break;
        case 'o':
            vocalo++;
            break;
        case 'u':
            vocalu++;
        default:
            break;

    }
}

document.write('Cantidad de vocales: ', vocal);
document.write('<br>');
document.write('Vocal A: ', vocala);
document.write('<br>');
document.write('Vocal E:  ', vocale);
document.write('<br>');
document.write('Vocal I: ', vocali);
document.write('<br>');
document.write('Vocal O:  ', vocalo);
document.write('<br>');
document.write('Vocal U: ', vocalu);
document.write('<br>');
