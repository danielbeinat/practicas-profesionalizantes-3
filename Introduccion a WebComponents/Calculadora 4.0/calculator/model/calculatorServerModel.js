class calculatorServerModel {
  constructor() {}

  async calculateExpression(mathExpression) {
    try {
      let requestMetadata = {
        method: "POST",
        body: JSON.stringify(mathExpression),
      };

      let r = await fetch(
        "http://localhost:1337/calculatorModel/calculateExpression",
        requestMetadata
      );
      let j = await r.json();

      return j;
    } catch (error) {
      console.error("Error:", error);
      response.writeHead(500, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ error: "Internal Server Error" }));
    }
  }
}

export { calculatorServerModel };
