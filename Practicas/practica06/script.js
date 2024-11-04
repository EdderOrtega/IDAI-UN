let form = document.getElementById("formulario");
let botonSuma = document.getElementById("btnSumar");
let botonResta = document.getElementById("btnRestar");

botonSuma.addEventListener("click", function (event) {
  event.preventDefault();
  let inputs = document.getElementsByTagName("input");
  let num1 = parseFloat(inputs[0].value);
  let num2 = parseFloat(inputs[1].value);
  let resultadoSuma = sumar(num1, num2);
  resultado("Resultado de la suma : " + resultadoSuma);
  console.log("Resultado de la suma:", resultadoSuma);
});

botonResta.addEventListener("click", function (event) {
  event.preventDefault();
  let inputs = document.getElementsByTagName("input");
  let num1 = parseFloat(inputs[0].value);
  let num2 = parseFloat(inputs[1].value);
  let resultadoResta = restar(num1, num2);
  resultado("Resultado de la resta : " + resultadoResta);
  console.log("Resultado de la resta:", resultadoResta);
});

function sumar(numero1, numero2) {
  let res = numero1 + numero2;
  return res;
}

function restar(numero1, numero2) {
  let res = numero1 - numero2;
  return res;
}

function resultado(resultado) {
  let h1 = document.createElement("h1");
  h1.textContent = resultado;
  form.appendChild(h1);
}
