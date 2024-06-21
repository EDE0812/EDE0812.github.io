let foto = document.createElement("img");
foto.src = "homero.jpg";

function consulta() {
    let datosjson;
    fetch('resumen.json')
        .then(respuesta => respuesta.json())
        .then((salida) => {
            datosjson = salida;

            document.getElementById("titular")
            titular.textContent = datosjson.titular;

            document.getElementById("no_miembro")
            no_miembro.textContent = 'No. de miembro: ' + datosjson.no_miembro;

            document.getElementById("direccion")
            direccion.textContent = 'Direccion: ' + datosjson.direccion;

            document.getElementById("telefono")
            telefono.textContent = 'Teléfono: ' + datosjson.telefono;

            document.getElementById("email")
            email.textContent = 'email: ' + datosjson.email;

            document.getElementById("saldo_usd")
            saldo_usd.textContent = 'Saldo $US: ' + datosjson.saldo[0].monto;

            document.getElementById("saldo_eu")
            saldo_eu.textContent = 'Saldo EU: ' + datosjson.saldo[1].monto;

            document.getElementById("miembro_desde")
            miembro_desde.textContent = 'Miembro desde: ' + datosjson.miembro_desde;

            let imagen = document.getElementById("foto");
            imagen.appendChild(foto);



        })
}