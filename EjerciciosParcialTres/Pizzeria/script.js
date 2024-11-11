function PPP() {
  // Obtener cantidad de pizzas
  const A = parseInt(pizzeria.canpiz.value) || 0;

  // Calcular costo según tamaño de pizza
  let TB = 0;
  if (pizzeria.cantpi[0].checked) {
    TB = 45;
  }
  if (pizzeria.cantpi[1].checked) {
    TB = 90;
  }
  if (pizzeria.cantpi[2].checked) {
    TB = 150;
  }
  if (pizzeria.cantpi[3].checked) {
    TB = 250;
  }
  if (pizzeria.cantpi[4].checked) {
    TB = 400;
  }

  // Calcular costo según tipo de pan
  let TC = 0;
  if (pizzeria.tippan[1].checked) {
    TC = 15;
  }
  if (pizzeria.tippan[2].checked) {
    TC = 20;
  }
  if (pizzeria.tippan[3].checked) {
    TC = 30;
  }

  // Calcular costo según ingredientes
  let TD = 0;
  if (pizzeria.ingre1.checked) {
    TD += 5;
  }
  if (pizzeria.ingre2.checked) {
    TD += 5;
  }
  if (pizzeria.ingre3.checked) {
    TD += 5;
  }
  if (pizzeria.ingre4.checked) {
    TD += 5;
  }
  if (pizzeria.ingre5.checked) {
    TD += 5;
  }
  if (pizzeria.ingre6.checked) {
    TD += 5;
  }
  if (pizzeria.ingre7.checked) {
    TD += 5;
  }
  if (pizzeria.ingre8.checked) {
    TD += 5;
  }

  // Calcular costo según selección especial
  const E = parseInt(pizzeria.pizzaselect.value) || 0;

  // Verificar si es buffet
  const F = pizzeria.bufff.value;
  const G = parseInt(pizzeria.adul.value) || 0;
  const H = parseInt(pizzeria.nin.value) || 0;

  let TTT = 0;
  if (F === "SI") {
    TTT = G * 120 + H * 60;
  } else {
    TTT = (TB + TC + TD + E) * A;
  }

  // Asignar valor al campo total
  pizzeria.totpiz.value = TTT;
}
