class calculatorDefaultView extends HTMLElement {
  constructor() {
    super();

    // Estilos encapsulados en el componente
    const styles = `* {
      padding: 0;
      margin: 0;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    body {
      min-height: 100vh;
      background-color: rgb(16, 16, 94);
      display: grid;
      place-items: center;
    }
    button {
      color: rgb(255, 252, 252);
      background-color: rgb(235, 0, 0);
      border-color: black;
      font-family: monospace;
      font-size: 20px;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      border-radius: 10px;
    }
    
    button:hover {
      background-color: rgb(182, 32, 32);
    }
    
    #calculadora {
      background-color: rgb(2, 2, 2);
      color: rgb(255, 8, 8);
      max-width: 100%;
      grid-template-columns: repeat(4, 1fr);
      width: 300px;
      padding: 1.5rem;
      border-radius: 1rem;
      display: grid;
      gap: 0.5rem;
      display: grid;
    }
    
    #pantalla {
      grid-column: 1 / -1;
      background-color: rgb(231, 211, 211);
      border-color: black;
      font-size: 25px;
      text-align: right;
      border-radius: 1rem;
      font-family: monospace;
      padding: 1.5rem;
    }
    
    #punto {
      grid-column: span 2;
    }
    
    #igual {
      grid-row: span 2;
    }
    
      
    `;

    const styleElement = document.createElement("style");
    styleElement.textContent = styles;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(styleElement);

    this.document = document;
    this.pantalla = this.document.createElement("input");
    this.pantalla.id = "pantalla";
    this.pantalla.type = "text";
    this.pantalla.placeholder = "0";
    this.pantalla.readOnly = true;
    this.appendChild(this.pantalla);

    this.C = this.document.createElement("button");
    this.C.id = "C";
    this.C.Text = "C";
    this.C.textContent = "C";
    this.appendChild(this.C);

    this.borrar = document.createElement("button");
    this.borrar.id = "borrar";
    this.borrar.textContent = "borrar";
    this.appendChild(this.borrar);

    this.multiplicacion = document.createElement("button");
    this.multiplicacion.id = "multiplicacion";
    this.multiplicacion.textContent = "*";
    this.appendChild(this.multiplicacion);

    this.division = document.createElement("button");
    this.division.id = "division";
    this.division.textContent = "/";
    this.appendChild(this.division);

    this.btn7 = document.createElement("button");
    this.btn7.id = "btn7";
    this.btn7.textContent = "7";
    this.appendChild(this.btn7);

    this.btn8 = document.createElement("button");
    this.btn8.id = "btn8";
    this.btn8.textContent = "8";
    this.appendChild(this.btn8);

    this.btn9 = document.createElement("button");
    this.btn9.id = "btn9";
    this.btn9.textContent = "9";
    this.appendChild(this.btn9);

    this.resta = document.createElement("button");
    this.resta.id = "resta";
    this.resta.textContent = "-";
    this.appendChild(this.resta);

    this.btn4 = document.createElement("button");
    this.btn4.id = "btn4";
    this.btn4.textContent = "4";
    this.appendChild(this.btn4);

    this.btn5 = document.createElement("button");
    this.btn5.id = "btn5";
    this.btn5.textContent = "5";
    this.appendChild(this.btn5);

    this.btn6 = document.createElement("button");
    this.btn6.id = "btn6";
    this.btn6.textContent = "6";
    this.appendChild(this.btn6);

    this.sumar = document.createElement("button");
    this.sumar.id = "sumar";
    this.sumar.textContent = "+";
    this.appendChild(this.sumar);

    this.btn1 = document.createElement("button");
    this.btn1.id = "btn1";
    this.btn1.textContent = "1";
    this.appendChild(this.btn1);

    this.btn2 = document.createElement("button");
    this.btn2.id = "btn2";
    this.btn2.textContent = "2";
    this.appendChild(this.btn2);

    this.btn3 = document.createElement("button");
    this.btn3.id = "btn3";
    this.btn3.textContent = "3";
    this.appendChild(this.btn3);

    this.igual = document.createElement("button");
    this.igual.id = "igual";
    this.igual.textContent = "=";
    this.appendChild(this.igual);

    this.btn0 = document.createElement("button");
    this.btn0.id = "btn0";
    this.btn0.textContent = "0";
    this.appendChild(this.btn0);

    this.punto = document.createElement("button");
    this.punto.id = "punto";
    this.punto.textContent = ".";
    this.appendChild(this.punto);

    this.container = this.document.createElement("div");
    this.container.id = "calculadora";

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

    this.shadowRoot.appendChild(this.container);

    this.document.body.appendChild(this.shadowRoot);
  }
}

customElements.define("x-calculator-view", calculatorDefaultView);

export { calculatorDefaultView };
