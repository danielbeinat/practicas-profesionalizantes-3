class calculatorView {
  constructor() {
    this.container = document.createElement("div");
    this.document = document;
    this.pantalla = this.document.createElement("input");
    this.pantalla.id = "pantalla";
    this.pantalla.type = "text";
    this.pantalla.placeholder = "0";
    this.pantalla.readOnly = true;
    this.document.body.appendChild(this.pantalla);

    this.C = this.document.createElement("button");
    this.C.id = "C";
    this.C.Text = "C";
    this.C.textContent = "C";
    this.document.body.appendChild(this.C);

    this.borrar = document.createElement("button");
    this.borrar.id = "borrar";
    this.borrar.textContent = "borrar";
    this.document.body.appendChild(this.borrar);

    this.multiplicacion = document.createElement("button");
    this.multiplicacion.id = "multiplicacion";
    this.multiplicacion.textContent = "*";
    this.document.body.appendChild(this.multiplicacion);

    this.division = document.createElement("button");
    this.division.id = "division";
    this.division.textContent = "/";
    this.document.body.appendChild(this.division);

    this.btn7 = document.createElement("button");
    this.btn7.id = "btn7";
    this.btn7.textContent = "7";
    this.document.body.appendChild(this.btn7);

    this.btn8 = document.createElement("button");
    this.btn8.id = "btn8";
    this.btn8.textContent = "8";
    this.document.body.appendChild(this.btn8);

    this.btn9 = document.createElement("button");
    this.btn9.id = "btn9";
    this.btn9.textContent = "9";
    this.document.body.appendChild(this.btn9);

    this.resta = document.createElement("button");
    this.resta.id = "resta";
    this.resta.textContent = "-";
    this.document.body.appendChild(this.resta);

    this.btn4 = document.createElement("button");
    this.btn4.id = "btn4";
    this.btn4.textContent = "4";
    this.document.body.appendChild(this.btn4);

    this.btn5 = document.createElement("button");
    this.btn5.id = "btn5";
    this.btn5.textContent = "5";
    this.document.body.appendChild(this.btn5);

    this.btn6 = document.createElement("button");
    this.btn6.id = "btn6";
    this.btn6.textContent = "6";
    this.document.body.appendChild(this.btn6);

    this.sumar = document.createElement("button");
    this.sumar.id = "sumar";
    this.sumar.textContent = "+";
    this.document.body.appendChild(this.sumar);

    this.btn1 = document.createElement("button");
    this.btn1.id = "btn1";
    this.btn1.textContent = "1";
    this.document.body.appendChild(this.btn1);

    this.btn2 = document.createElement("button");
    this.btn2.id = "btn2";
    this.btn2.textContent = "2";
    this.document.body.appendChild(this.btn2);

    this.btn3 = document.createElement("button");
    this.btn3.id = "btn3";
    this.btn3.textContent = "3";
    this.document.body.appendChild(this.btn3);

    this.igual = document.createElement("button");
    this.igual.id = "igual";
    this.igual.textContent = "=";
    this.document.body.appendChild(this.igual);

    this.btn0 = document.createElement("button");
    this.btn0.id = "btn0";
    this.btn0.textContent = "0";
    this.document.body.appendChild(this.btn0);

    this.punto = document.createElement("button");
    this.punto.id = "punto";
    this.punto.textContent = ".";
    this.document.body.appendChild(this.punto);

    // crear un div que envuelva todos los elementos
    this.container = this.document.createElement("div");
    this.container.id = "calculadora";

    // agregar cada elemento dentro del contenedor
    this.container.appendChild(this.pantalla);
    this.container.appendChild(this.C);
    this.container.appendChild(this.borrar);
    this.container.appendChild(this.multiplicacion);
    this.container.appendChild(this.division);
    this.container.appendChild(this.btn7);
    this.container.appendChild(this.btn8);
    this.container.appendChild(this.btn9);
    this.container.appendChild(this.resta);
    this.container.appendChild(this.btn4);
    this.container.appendChild(this.btn5);
    this.container.appendChild(this.btn6);
    this.container.appendChild(this.sumar);
    this.container.appendChild(this.btn1);
    this.container.appendChild(this.btn2);
    this.container.appendChild(this.btn3);
    this.container.appendChild(this.igual);
    this.container.appendChild(this.btn0);
    this.container.appendChild(this.punto);

    this.document.body.appendChild(this.container);
  }
}

export { calculatorView };
