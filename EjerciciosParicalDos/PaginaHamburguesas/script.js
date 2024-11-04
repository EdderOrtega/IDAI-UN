let tabla = document.getElementsByTagName("table");
let registros = document.getElementsByTagName("tr");
let inputs = document.getElementsByTagName("input");

let container = document.querySelector(".container");

let nuevoTipoHam = document.createElement("input");
nuevoTipoHam.setAttribute("id", "radioHamDobleEspecial");
nuevoTipoHam.setAttribute("value", "75");
nuevoTipoHam.setAttribute("type", "radio");
nuevoTipoHam.setAttribute("name", "tipoHamburguesa");

let espacio = document.createElement("br");
let labelNuevo = document.createElement("label");
labelNuevo.setAttribute("for", "radioHamDobleEspecial");
labelNuevo.textContent = "Hamburguesa Doble Especial $75.00";

container.appendChild(espacio);
container.appendChild(nuevoTipoHam);
container.appendChild(labelNuevo);

let formulario = document.getElementById("formulario");

function calcular() {
  let total = 0.0;
  let tipoSeleccionado = formulario.tipoHamburguesa.value;
  let tipoCarne = formulario.tipoCarne.value;
  let cantidadHamburguesas = formulario.cantidadHam.value;
  let nombreCliente = formulario.nombreCliente.value;
  let entrega = formulario.tipoEntrega.value;

  if (tipoSeleccionado) {
    total = parseFloat(tipoSeleccionado);
    console.log(total + "total desde tipo seleccionado");
  } else {
    alert("Selecciona un tipo de hamburguesa");
  }
  let ingredientes = formulario.querySelectorAll(
    "input[name='ingredientes']:checked"
  );

  if (ingredientes.length > 0) {
    ingredientes.forEach((ingrediente) => {
      total += parseFloat(ingrediente.value);
      console.log(total + "total desde tipo ingrediente");
    });
  } else {
    alert("Selecciona al menos un ingrediente");
    return;
  }

  if (tipoCarne) {
    total += parseFloat(tipoCarne);
    console.log("total desde tipo de carne" + total);
  } else {
    alert("Selecciona un tipo de carne");
    return;
  }

  if (cantidadHamburguesas) {
    total = parseFloat(cantidadHamburguesas * total);
    console.log(total + "total desde cantidad hamburguesas");
  } else {
    alert("Selecciona cuantas hamburguesas quieres");
    return;
  }

  alert(
    "total a pagar:" +
      total +
      "Cliente : " +
      nombreCliente +
      "Su entrega sera : " +
      entrega
  );
  console.log("total a pagar con estas selecciones es:" + total);
}
let boton = document.getElementById("boton");
boton.addEventListener("click", calcular);
