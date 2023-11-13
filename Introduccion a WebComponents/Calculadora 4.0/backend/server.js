const http = require("http");

const hostname = "127.0.0.1";
const port = "1337";

class CalculatorModel {
  constructor() {}

  calculateExpression(mathExpression) {
    try {
      const result = eval(mathExpression);
      if (isNaN(result) || !isFinite(result)) {
        throw new Error("La expresión matemática es inválida");
      }
      return result;
    } catch (error) {
      console.error("Error al calcular la expresión:", error.message);
      throw new Error("Error al calcular la expresión: " + error.message);
    }
  }
}

function handleGet(request, response) {
  const data = { message: "[GET] Hello World NodeJS with CORS!" };
  response.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  response.end(JSON.stringify(data));
  console.log("GET Response");
}

function handlePost(request, response, body) {
  let mdl = new CalculatorModel();
  try {
    const data = { message: mdl.calculateExpression(body) };
    response.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    response.end(JSON.stringify(data));
    console.log("POST Response");
  } catch (error) {
    handleError(response, error);
  }
}

function handlePut(request, response) {
  response.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  response.end(JSON.stringify({ message: "PUT request handled" }));
}

function handleDelete(request, response) {
  response.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  response.end(JSON.stringify({ message: "DELETE request handled" }));
}

function processRequest(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (request.method === "OPTIONS") {
    response.writeHead(204).end();
  } else if (request.method === "GET") {
    handleGet(request, response);
  } else if (request.method === "POST") {
    let body = [];
    request
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString().replace(/"/g, "");
        handlePost(request, response, body);
      });
  } else if (request.method === "PUT") {
    handlePut(request, response);
  } else if (request.method === "DELETE") {
    handleDelete(request, response);
  } else {
    response.writeHead(404).end();
  }
}

function handleError(response, error) {
  console.error("Error:", error.message);
  response.writeHead(500, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  response.end(JSON.stringify({ error: error.message }));
}

http.createServer(processRequest).listen(port, hostname);
