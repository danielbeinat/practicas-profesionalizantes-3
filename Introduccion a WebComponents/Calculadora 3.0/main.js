import { calculatorView } from "./calculadora/view.js";
import { calculatorController } from "./calculadora/controller.js";
import { calculatorModel } from "./calculadora/model.js";

class calculator {
  constructor() {
    this.innerView = new calculatorView();
    this.innerModel = new calculatorModel();
    this.innerController = new calculatorController(
      this.innerView,
      this.innerModel
    );
  }
}
function main() {
  alert("Starting Application...");

  let calculatorInstance = new calculator();
  document.body.appendChild(calculatorInstance.innerView.container);
}

window.onload = main;
