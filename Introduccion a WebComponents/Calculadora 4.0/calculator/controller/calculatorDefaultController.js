class calculatorDefaultController {
  constructor(viewReference, modelReference) {
    this.viewReference = viewReference;
    this.modelReference = modelReference;
  }

  enable() {
    this.viewReference.C.addEventListener("click", () => {
      this.Cbuttonclick();
    });
    this.viewReference.borrar.addEventListener("click", () => {
      this.borrarbuttonclick();
    });
    this.viewReference.multiplicacion.addEventListener("click", () => {
      this.multiplicacionbuttonclick();
    });
    this.viewReference.division.addEventListener("click", () => {
      this.divisionbuttonclick();
    });
    this.viewReference.btn7.addEventListener("click", () => {
      this.onbt7buttonclick();
    });
    this.viewReference.btn8.addEventListener("click", () => {
      this.onbt8buttonclick();
    });
    this.viewReference.btn9.addEventListener("click", () => {
      this.onbt9buttonclick();
    });
    this.viewReference.resta.addEventListener("click", () => {
      this.restabuttonclick();
    });
    this.viewReference.btn4.addEventListener("click", () => {
      this.onbt4buttonclick();
    });
    this.viewReference.btn5.addEventListener("click", () => {
      this.onbt5buttonclick();
    });
    this.viewReference.btn6.addEventListener("click", () => {
      this.onbt6buttonclick();
    });
    this.viewReference.sumar.addEventListener("click", () => {
      this.sumarbuttonclick();
    });
    this.viewReference.btn1.addEventListener("click", () => {
      this.onbt1buttonclick();
    });
    this.viewReference.btn2.addEventListener("click", () => {
      this.onbt2buttonclick();
    });
    this.viewReference.btn3.addEventListener("click", () => {
      this.onbt3buttonclick();
    });
    this.viewReference.igual.addEventListener("click", () => {
      this.igualbuttonclick();
    });
    this.viewReference.btn0.addEventListener("click", () => {
      this.onbt0buttonclick();
    });
    this.viewReference.punto.addEventListener("click", () => {
      this.puntobuttonclick();
    });
  }

  disable() {
    this.viewReference.C.onclick = null;
    this.viewReference.borrar.onclick = null;
    this.viewReference.multiplicacion.onclick = null;
    this.viewReference.division.onclick = null;
    this.viewReference.btn7.onclick = null;
    this.viewReference.btn8.onclick = null;
    this.viewReference.btn9.onclick = null;
    this.viewReference.resta.onclick = null;
    this.viewReference.btn4.onclick = null;
    this.viewReference.btn5.onclick = null;
    this.viewReference.btn6.onclick = null;
    this.viewReference.sumar.onclick = null;
    this.viewReference.btn1.onclick = null;
    this.viewReference.btn2.onclick = null;
    this.viewReference.btn3.onclick = null;
    this.viewReference.igual.onclick = null;
    this.viewReference.btn0.onclick = null;
    this.viewReference.punto.onclick = null;
  }

  igualbuttonclick(event) {
    this.modelReference
      .calculateExpression(this.viewReference.pantalla.value)
      .then((response) => {
        this.viewReference.pantalla.value = response.message;
      });
  }

  onbt1buttonclick(event) {
    this.viewReference.pantalla.value += "1";
  }

  onbt2buttonclick(event) {
    this.viewReference.pantalla.value += "2";
  }

  onbt3buttonclick(event) {
    this.viewReference.pantalla.value += "3";
  }

  onbt4buttonclick(event) {
    this.viewReference.pantalla.value += "4";
  }

  onbt5buttonclick(event) {
    this.viewReference.pantalla.value += "5";
  }

  onbt6buttonclick(event) {
    this.viewReference.pantalla.value += "6";
  }

  onbt7buttonclick(event) {
    this.viewReference.pantalla.value += "7";
  }

  onbt8buttonclick(event) {
    this.viewReference.pantalla.value += "8";
  }

  onbt9buttonclick(event) {
    this.viewReference.pantalla.value += "9";
  }

  onbt0buttonclick(event) {
    this.viewReference.pantalla.value += "0";
  }

  puntobuttonclick(event) {
    this.viewReference.pantalla.value += ".";
  }

  sumarbuttonclick(event) {
    this.viewReference.pantalla.value += "+";
  }

  restabuttonclick(event) {
    this.viewReference.pantalla.value += "-";
  }

  multiplicacionbuttonclick(event) {
    this.viewReference.pantalla.value += "*";
  }

  divisionbuttonclick(event) {
    this.viewReference.pantalla.value += "/";
  }

  Cbuttonclick(event) {
    this.viewReference.pantalla.value = "";
  }

  borrarbuttonclick(event) {
    let pantallaValue = document.getElementById("pantalla").value;
    this.viewReference.pantalla.value = pantallaValue.slice(0, -1);
  }
}

export { calculatorDefaultController };
