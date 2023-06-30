class calculatorModel {
  constructor() {}

  calculateExpression(mathExpression) {
    return eval(mathExpression);
  }
}

class calculatorBackendModel {
  constructor() {}

  async calculateExpression(mathExpression) {
    try {
      let requestMetadata = {
        method: "POST",
        body: JSON.stringify(mathExpression),
      };

      let r = await fetch("http://localhost:1337/", requestMetadata);
      let j = await r.json();

      return j;
    } catch (error) {
      console.log("Error!");
    }
  }
}

export { calculatorModel, calculatorBackendModel };
