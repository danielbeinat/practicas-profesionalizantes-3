import { HTMLCalculator } from "./calculator/calculator.js";
import { calculatorServerModel } from "./calculator/model/calculatorServerModel.js";

function main() {
  alert("Starting application...");

  let calculator = new HTMLCalculator(calculatorServerModel);

  document.body.appendChild(calculator);
}

window.onload = main;
