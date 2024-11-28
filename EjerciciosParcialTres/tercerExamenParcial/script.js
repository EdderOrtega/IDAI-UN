var formulario = document.getElementById("calculoMinutos");

function calcular() {
  var minCel = parseInt(formulario.minCel.value);
  var total = 0;
  total = minCel * 10;

  if (formulario.plan.value === "telefono") {
    total += 500;
  } else if (formulario.plan.value === "telefonoInternet") {
    total += 650;
  } else if (formulario.plan.value === "telefonoInternetTv") {
    total += 800;
  } else if (formulario.plan.value === "TelefonoInternetTvDos") {
    total += 950;
  }

  if (formulario.otros1.checked) {
    total += parseFloat(formulario.otros1.value);
  }
  if (formulario.otros2.checked) {
    total += parseFloat(formulario.otros2.value);
  }
  if (formulario.otros3.checked) {
    total += parseFloat(formulario.otros3.value);
  }
  if (formulario.otros4.checked) {
    total += parseFloat(formulario.otros4.value);
  }
  let paquetes = formulario.paquetes.value;
  total += parseFloat(paquetes);
  console.log(total);

  formulario.resultado.value = total;
}
