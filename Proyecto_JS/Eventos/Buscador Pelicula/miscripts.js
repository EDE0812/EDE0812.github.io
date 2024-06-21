let selector = document.getElementById("miSelector");
let input = document.getElementById("miInput");
let boton = document.getElementById("miBoton");
let lista = document.getElementById("miListado");

let archivo = "peliculas.json";


selector.addEventListener("change", cambiarArchivo);
selector.addEventListener("Cambiomodo", mensajemodo);

input.addEventListener("keydown", verificaInput);
boton.addEventListener("click", buscar);

function cambiarArchivo() {
    archivo = selector.value;
    console.log(archivo);
    let evento = new CustomEvent('Cambiomodo');
    selector.dispatchEvent(evento);
}

function mensajemodo() {
    console.log('Entro a mensaje modo');
    swal.fire('El archivo de busqueda ahora es ' + selector.value);
}

function verificaInput(e) {
    /* This code snippet is a key event listener that restricts the input in the `miInput` field to
    only allow alphabetic characters (A-Z), space (for words), and backspace (to delete characters). */
    if ((e.keyCode < 65 || e.keyCode > 90) && e.keyCode != 32 && e.keyCode != 8) {
        e.preventDefault();
    }
}

function buscar() {
    /* This code snippet is performing the following actions: */
    lista.innerHTML = '';
    /* This code snippet is using the `fetch` API to make a request to the specified `archivo` (file)
    which contains JSON data. Once the response is received, it is converted to JSON format using
    the `respuesta.json()` method. */
    fetch(archivo)
        /* The `.then(respuesta => respuesta.json())` part of the code is a promise chain in JavaScript
        that is handling the response from the `fetch` API call. */
        .then(respuesta => respuesta.json())
        .then(function(salida){
            for (let item of salida.data) {
                if (item.nombre.startsWith(input.value.toUpperCase())) {

                    let p = document.createElement('p');
                    p.id = item.nombre;
                    p.innerHTML = item.sinopsis;
                    p.style.display = "none";

                    let li = document.createElement('li');
                    li.innerHTML = item.nombre;
                    li.addEventListener('mouseover', function () {
                        let p = document.getElementById(item.nombre);
                        p.style.display = "block";
                    });

                    li.addEventListener("mouseout", function () {
                        let p = document.getElementById(item.nombre);
                        p.style.display = "none";
                    });
                    lista.appendChild(li);
                    li.appendChild(p);
                    
                }
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
