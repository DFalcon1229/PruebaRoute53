const camposTxt = document.getElementsByClassName("campo-txt");
const btnEnviar = document.getElementById('btnEnviar');
const selectSexo = document.getElementById('sexo');
const selectProvincia = document.getElementById('provincia');
const selectCiudad = document.getElementById('ciudad');
const ciudad1 = document.getElementById('ciudad1');
const ciudad2 = document.getElementById('ciudad2');
const ciudad3 = document.getElementById('ciudad3');

function validarCedula() {
    let cad = document.getElementById('cedula').value.trim();
    let total = 0;
    let longitud = cad.length;
    let longcheck = longitud - 1;

    if (cad !== "" && longitud === 10) {
        for (i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                var aux = cad.charAt(i) * 2;
                if (aux > 9) aux -= 9;
                total += aux;
            } else {
                total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
            }
        }
    }
    total = total % 10 ? 10 - total % 10 : 0; 

    if (cad.charAt(longitud - 1) == total) {
        return true;
    } else {
        return false;
    }
}

function validarDatos() {
    for (let i = 0; i < camposTxt.length; i++) {
        if (!camposTxt[i].value) {
            console.log('?');
            return false;
        }
    }
    if (selectCiudad.value == 'none' || selectSexo.value == 'none' || selectProvincia.value == 'none') {
        return false;
    }

    return true;
}
function llenardatos() {
    let cedula = document.getElementById('cedula').value;
    let nombre = document.getElementById('nombre').value;
    let direccion = document.getElementById('direccion').value;
    let sexo = document.getElementById('sexo').value;
    let provincia = document.getElementById('provincia').value;
    let ciudad = document.getElementById('ciudad').value;

    datosFinales.innerHTML = `
                <p><strong>Cedula:</strong> ${cedula} </p>
                <p><strong>Nombre:</strong> ${nombre} </p>
                <p><strong>direccion:</strong> ${direccion} </p>
                <p><strong>sexo:</strong> ${sexo} </p>
                <p><strong>provincia:</strong> ${provincia} </p>
                <p><strong>ciudad:</strong> ${ciudad} </p>
    `;
}
btnEnviar.addEventListener("click", function () {
    if (!validarDatos()) {
        return alert("Por favor, Ingrese todo los datos correspondientes. ");
    } else if (!validarCedula()) {
        return alert("Ingrese una cédula real por favor. ");
    }    
    llenardatos();
});
