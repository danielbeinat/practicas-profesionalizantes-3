import { calculatorDefaultView } from "./view/calculatorDefaultView.js";
import { calculatorDefaultController } from "./controller/calculatorDefaultController.js";
import { calculatorDefaultModel } from "./model/calculatorDefaultModel.js";

class HTMLCalculator extends HTMLElement {
  constructor(modelConstructor = calculatorDefaultModel) {
    super();

    this.innerView = new calculatorDefaultView();
    this.innerModel = new modelConstructor();
    this.innerController = new calculatorDefaultController(
      this.innerView,
      this.innerModel
    );
  }

  connectedCallback() {
    this.innerController.enable();
  }

  disconnectedCallback() {
    this.innerController.disable();
  }

  adoptedCallback() {}

  attributeChangedCallback(newValue, oldValue) {}

  static get observedAttributes() {
    return [];
  }
}

customElements.define("x-calculator", HTMLCalculator);

export { HTMLCalculator };
