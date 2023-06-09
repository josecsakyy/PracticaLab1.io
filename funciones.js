function realizarCalculo() {
    // Obtener los valores ingresados por el usuario
    var nombre1 = document.getElementById("nombre1").value;
    var edad1 = parseInt(document.getElementById("edad1").value);
    var nombre2 = document.getElementById("nombre2").value;
    var edad2 = parseInt(document.getElementById("edad2").value);
    var operacion = document.getElementById("operacion").value;

    // Validar edades no negativas
    if (edad1 < 0 || edad2 < 0) {
        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = "Error: Las edades no pueden ser negativas.";
        return;
    }

    // Realizar la operación seleccionada
    var resultado;
    switch (operacion) {
        case "suma":
            resultado = edad1 + edad2;
            break;
        case "resta":
            resultado = edad1 - edad2;
            break;
        case "division":
            resultado = edad1 / edad2;
            break;
        case "multiplicacion":
            resultado = edad1 * edad2;
            break;
        case "mayor":
            resultado = (edad1 > edad2) ? nombre1 + " es mayor" : nombre2 + " es mayor";
            break;
        case "menor":
            resultado = (edad1 < edad2) ? nombre1 + " es menor" : nombre2 + " es menor";
            break;
        default:
            resultado = "Operación inválida";
    }

    // Mostrar el resultado en la página
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "Resultado: " + resultado;
}
function obtenerIdiomaSeleccionado() {
    // Obtener los idiomas seleccionados
    var idiomasSeleccionados = [];
    if (document.getElementById("idioma1").checked) {
        idiomasSeleccionados.push(document.getElementById("idioma1").value);
    }
    if (document.getElementById("idioma2").checked) {
        idiomasSeleccionados.push(document.getElementById("idioma2").value);
    }
    if (document.getElementById("idioma3").checked) {
        idiomasSeleccionados.push(document.getElementById("idioma3").value);
    }
    if (document.getElementById("idioma4").checked) {
        idiomasSeleccionados.push(document.getElementById("idioma4").value);
    }
    if (document.getElementById("idioma5").checked) {
        idiomasSeleccionados.push(document.getElementById("idioma5").value);
    }
    
    // Mostrar el anuncio del idioma seleccionado
    var resultadoDiv = document.getElementById("resultado");
    if (idiomasSeleccionados.length > 0) {
        resultadoDiv.innerHTML = "Idiomas seleccionados: " + idiomasSeleccionados.join(", ");
    } else {
        resultadoDiv.innerHTML = "No se ha seleccionado ningún idioma.";
    }
}

