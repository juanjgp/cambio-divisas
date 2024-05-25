// Inicialización variables y objetos.
const tipo_divisa = document.getElementById("select_divisa"); // Guarda el tipo de divisa del selector.
const divisa_input = document.getElementById("divisa_input"); // Guarda el valor de divisa de entrada.
const formulario = document.getElementById("formulario"); // Valor del formulario para el evento.
const divisa_output_yenes = document.getElementById("divisa_output_yenes"); // Input donde se muestra el valor convertido en Yenes.
const divisa_output_yuanes = document.getElementById("divisa_output_yuanes"); // Input donde se muestra el valor convertido en Yuanes.
const divisa_output_rupias = document.getElementById("divisa_output_rupias"); // Input donde se muestra el valor convertido en Rupias.

// Función comprobar valor de divisa de entrada.
function comprobar(event) {
    if (tipo_divisa.value == "0") {
        tipo_divisa.focus();
        event.preventDefault();
        error.innerText = "Introduce una divisa para convertir.";
    }
    else if ((divisa_input.value == "") || (divisa_input.value == 0)) {
        divisa_input.focus();
        event.preventDefault();
        error.innerText = "El valor de divisa de entrada está vacío.";
    }
    else if (divisa_input.value < 0) {
        divisa_input.focus();
        event.preventDefault();
        error.innerText = "El valor de divisa de entrada es negativo.";
    }
    else if (divisa_input.value.match(/^[a-zA-Z]+$/)) {
        divisa_input.focus();
        event.preventDefault();
        error.innerText = "El valor de divisa de entrada debe ser numérico.";
    }
    else{
        event.preventDefault();
        if (tipo_divisa.value == "1") {
            var cambio_yenes = 170.25;
            var cambio_yuanes = 7.85;
            var cambio_rupias = 90.08;
            convertir(event,cambio_yenes, cambio_yuanes, cambio_rupias);
        }
        else if (tipo_divisa.value == "2") {
            var cambio_yenes = 199.93;
            var cambio_yuanes = 9.23;
            var cambio_rupias = 105.82;
            convertir(event,cambio_yenes, cambio_yuanes, cambio_rupias);
        }
        else{
            var cambio_yenes = 156.96;
            var cambio_yuanes = 7.24;
            var cambio_rupias = 83.06;
            convertir(event,cambio_yenes, cambio_yuanes, cambio_rupias);
        }  
    }
    }

// Función convertir divisas.
function convertir(event, cambio_yenes, cambio_yuanes, cambio_rupias) {
    yenes = divisa_input.value * cambio_yenes;
    yuanes = divisa_input.value * cambio_yuanes;
    rupias = divisa_input.value * cambio_rupias;
    console.log("El valor de " + divisa_input.value + " " + tipo_divisa.options[tipo_divisa.selectedIndex].text + " es de " + yenes + " yenes.");
    console.log("El valor de " + divisa_input.value + " " + tipo_divisa.options[tipo_divisa.selectedIndex].text + " es de " + yuanes + " yuanes.");
    console.log("El valor de " + divisa_input.value + " " + tipo_divisa.options[tipo_divisa.selectedIndex].text + " es de " + rupias + " rupias.");
    mostrar_cambio(event);
}

// Función salida y muestra de cambio
    function mostrar_cambio(event) {    
    divisa_output_yenes.value = yenes;
    divisa_output_yuanes.value = yuanes;
    divisa_output_rupias.value = rupias;
    }

// Captura del evento del botón.
formulario.addEventListener('submit', comprobar);