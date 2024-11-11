//Con la instruccion de "getElementsByName" estoy obtenniendo un arreglo de todos los elementos que tenga este Name: tiendacom
var f = document.getElementsByName("tiendacom");
var formulario = document.getElementById("idTienda");

function calPr() {
  formulario.tot1.value = "";
  let totalPesos = 0;

  //GABINETE
  if (formulario.gab.value == "Minitorre") {
    // formulario.tot1.value = "618";
    totalPesos += 100;
  } else if (formulario.gab.value == "Torre1") {
    // formulario.tot1.value = "1700";
    totalPesos += 1700;
  } else if (formulario.gab.value == "Desktop") {
    // formulario.tot1.value = "580";
    totalPesos += 580;
  } else if (formulario.gab.value == "Gamer1") {
    // formulario.tot1.value = "2700";
    totalPesos += 2700;
  }

  //PROCESADOR
  if (formulario.pro.value == "Celeron") {
    // formulario.tot1.value = "900";
    totalPesos += 900;
  } else if (formulario.pro.value == "i3") {
    // formulario.tot1.value = "1900";
    totalPesos += 1900;
  } else if (formulario.pro.value == "i5") {
    // formulario.tot1.value = "2600";
    totalPesos += 2600;
  } else if (formulario.pro.value == "i7") {
    // formulario.tot1.value = "6700";
    totalPesos += 6700;
  }

  //DISCO DURO
  if (formulario.disc.value == "500GB") {
    // formulario.tot1.value = "520";
    totalPesos += 520;
  } else if (formulario.disc.value == "750GB") {
    // formulario.tot1.value = "650";
    totalPesos += 650;
  } else if (formulario.disc.value == "1TB") {
    // formulario.tot1.value = "880";
    totalPesos += 880;
  } else if (formulario.disc.value == "250GBSSD") {
    // formulario.tot1.value = "330";
    totalPesos += 330;
  } else if (formulario.disc.value == "500GBSSD") {
    // formulario.tot1.value = "770";
    totalPesos += 770;
  }

  //MEMORIA RAM
  if (formulario.mem.value == "4GB") {
    // formulario.tot1.value = "390";
    totalPesos += 390;
  } else if (formulario.mem.value == "8GB") {
    // formulario.tot1.value = "500";
    totalPesos += 500;
  } else if (formulario.mem.value == "16GB") {
    // formulario.tot1.value = "800";
    totalPesos += 800;
  }

  let monitores = formulario.moni.value;
  totalPesos += parseFloat(monitores);

  let motherBoard = formulario.mb.value;
  totalPesos += parseFloat(motherBoard);

  // const accesorios = [
  //   { name: "acc1", price: 291 },
  //   { name: "acc2", price: 2240 },
  //   { name: "acc3", price: 1070 },
  //   { name: "acc4", price: 900 },
  //   { name: "acc5", price: 1820 },
  //   { name: "acc6", price: 2500 },
  //   { name: "acc7", price: 2700 },
  //   { name: "acc8", price: 960 },
  //   { name: "acc9", price: 70 },
  //   { name: "acc10", price: 800 },
  //   { name: "acc11", price: 2400 },
  //   { name: "acc12", price: 1300 },
  //   { name: "acc13", price: 400 },
  // ];

  // for (let i = 0; i < accesorios.length; i++) {
  //   const acc = formulario[accesorios[i].name];
  //   if (acc.checked) {
  //     totalPesos += accesorios[i].price;
  //   }
  // }

  if (formulario.acc1.checked) {
    totalPesos += parseFloat(formulario.acc1.value);
  }
  if (formulario.acc2.checked) {
    totalPesos += parseFloat(formulario.acc2.value);
  }
  if (formulario.acc3.checked) {
    totalPesos += parseFloat(formulario.acc3.value);
  }
  if (formulario.acc4.checked) {
    totalPesos += parseFloat(formulario.acc4.value);
  }
  if (formulario.acc5.checked) {
    totalPesos += parseFloat(formulario.acc5.value);
  }
  if (formulario.acc6.checked) {
    totalPesos += parseFloat(formulario.acc6.value);
  }
  if (formulario.acc7.checked) {
    totalPesos += parseFloat(formulario.acc7.value);
  }
  if (formulario.acc8.checked) {
    totalPesos += parseFloat(formulario.acc8.value);
  }
  if (formulario.acc9.checked) {
    totalPesos += parseFloat(formulario.acc9.value);
  }
  if (formulario.acc10.checked) {
    totalPesos += parseFloat(formulario.acc10.value);
  }
  if (formulario.acc11.checked) {
    totalPesos += parseFloat(formulario.acc11.value);
  }
  if (formulario.acc12.checked) {
    totalPesos += parseFloat(formulario.acc12.value);
  }
  if (formulario.acc13.checked) {
    totalPesos += parseFloat(formulario.acc13.value);
  }
  formulario.tot1.value = totalPesos.toFixed(2);
  let totalDolares = totalPesos / 18;
  formulario.tot2.value = totalDolares.toFixed(2);
}
