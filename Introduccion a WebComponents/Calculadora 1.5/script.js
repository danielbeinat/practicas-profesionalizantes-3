function onbt1buttonclick(event) {
  document.getElementById("pantalla").value += "1";
}

function onbt2buttonclick(event) {
  document.getElementById("pantalla").value += "2";
}

function onbt3buttonclick(event) {
  document.getElementById("pantalla").value += "3";
}

function onbt4buttonclick(event) {
  document.getElementById("pantalla").value += "4";
}

function onbt5buttonclick(event) {
  document.getElementById("pantalla").value += "5";
}

function onbt6buttonclick(event) {
  document.getElementById("pantalla").value += "6";
}

function onbt7buttonclick(event) {
  document.getElementById("pantalla").value += "7";
}

function onbt8buttonclick(event) {
  document.getElementById("pantalla").value += "8";
}

function onbt9buttonclick(event) {
  document.getElementById("pantalla").value += "9";
}

function onbt0buttonclick(event) {
  document.getElementById("pantalla").value += "0";
}

function puntobuttonclick(event) {
  document.getElementById("pantalla").value += ".";
}

function igualbuttonclick(event) {
  try {
    const resultado = eval(document.getElementById("pantalla").value);
    document.getElementById("pantalla").value = resultado;
  } catch (error) {
    alert("Error: " + error.message);
  }
}

function sumarbuttonclick(event) {
  document.getElementById("pantalla").value += "+";
}

function restabuttonclick(event) {
  document.getElementById("pantalla").value += "-";
}

function multiplicacionbuttonclick(event) {
  document.getElementById("pantalla").value += "*";
}

function divisionbuttonclick(event) {
  document.getElementById("pantalla").value += "/";
}

function Cbuttonclick(event) {
  document.getElementById("pantalla").value = "";
}

function borrarbuttonclick(event) {
  let pantallaValue = document.getElementById("pantalla").value;
  document.getElementById("pantalla").value = pantallaValue.slice(0, -1);
}

function starApplication() {
  let pantalla = document.createElement("input");
  pantalla.id = "pantalla";
  pantalla.type = "text";
  pantalla.placeholder = "0";
  pantalla.readOnly = true;
  document.body.appendChild(pantalla);

  let C = document.createElement("button");
  C.id = "C";
  C.innerText = "C";
  C.addEventListener("click", Cbuttonclick);
  document.body.appendChild(C);

  let borrar = document.createElement("button");
  borrar.id = "borrar";
  borrar.innerText = "borrar";
  borrar.addEventListener("click", borrarbuttonclick);
  document.body.appendChild(borrar);

  let multiplicacion = document.createElement("button");
  multiplicacion.id = "multiplicacion";
  multiplicacion.innerText = "*";
  multiplicacion.addEventListener("click", multiplicacionbuttonclick);
  document.body.appendChild(multiplicacion);

  let division = document.createElement("button");
  division.id = "division";
  division.innerText = "/";
  division.addEventListener("click", divisionbuttonclick);
  document.body.appendChild(division);

  let btn7 = document.createElement("button");
  btn7.id = "btn7";
  btn7.innerText = "7";
  btn7.addEventListener("click", onbt7buttonclick);
  document.body.appendChild(btn7);

  let btn8 = document.createElement("button");
  btn8.id = "btn8";
  btn8.innerText = "8";
  btn8.addEventListener("click", onbt8buttonclick);
  document.body.appendChild(btn8);

  let btn9 = document.createElement("button");
  btn9.id = "btn9";
  btn9.innerText = "9";
  btn9.addEventListener("click", onbt9buttonclick);
  document.body.appendChild(btn9);

  let resta = document.createElement("button");
  resta.id = "resta";
  resta.innerText = "-";
  resta.addEventListener("click", restabuttonclick);
  document.body.appendChild(resta);

  let btn4 = document.createElement("button");
  btn4.id = "btn4";
  btn4.innerText = "4";
  btn4.addEventListener("click", onbt4buttonclick);
  document.body.appendChild(btn4);

  let btn5 = document.createElement("button");
  btn5.id = "btn5";
  btn5.innerText = "5";
  btn5.addEventListener("click", onbt5buttonclick);
  document.body.appendChild(btn5);

  let btn6 = document.createElement("button");
  btn6.id = "btn6";
  btn6.innerText = "6";
  btn6.addEventListener("click", onbt6buttonclick);
  document.body.appendChild(btn6);

  let sumar = document.createElement("button");
  sumar.id = "sumar";
  sumar.innerText = "+";
  sumar.addEventListener("click", sumarbuttonclick);
  document.body.appendChild(sumar);

  let btn1 = document.createElement("button");
  btn1.id = "btn1";
  btn1.innerText = "1";
  btn1.addEventListener("click", onbt1buttonclick);
  document.body.appendChild(btn1);

  let btn2 = document.createElement("button");
  btn2.id = "btn2";
  btn2.innerText = "2";
  btn2.addEventListener("click", onbt2buttonclick);
  document.body.appendChild(btn2);

  let btn3 = document.createElement("button");
  btn3.id = "btn3";
  btn3.innerText = "3";
  btn3.addEventListener("click", onbt3buttonclick);
  document.body.appendChild(btn3);

  let igual = document.createElement("button");
  igual.id = "igual";
  igual.innerText = "=";
  igual.addEventListener("click", igualbuttonclick);
  document.body.appendChild(igual);

  let btn0 = document.createElement("button");
  btn0.id = "btn0";
  btn0.innerText = "0";
  btn0.addEventListener("click", onbt0buttonclick);
  document.body.appendChild(btn0);

  let punto = document.createElement("button");
  punto.id = "punto";
  punto.innerText = ".";
  punto.addEventListener("click", puntobuttonclick);
  document.body.appendChild(punto);

  let container = document.createElement("div");
  container.id = "calculadora";

  container.appendChild(pantalla);
  container.appendChild(C);
  container.appendChild(borrar);
  container.appendChild(multiplicacion);
  container.appendChild(division);
  container.appendChild(btn7);
  container.appendChild(btn8);
  container.appendChild(btn9);
  container.appendChild(resta);
  container.appendChild(btn4);
  container.appendChild(btn5);
  container.appendChild(btn6);
  container.appendChild(sumar);
  container.appendChild(btn1);
  container.appendChild(btn2);
  container.appendChild(btn3);
  container.appendChild(igual);
  container.appendChild(btn0);
  container.appendChild(punto);

  document.body.appendChild(container);
}

window.addEventListener("load", starApplication);
