//CORS Server API Example

const http = require('http');

const hostname = '127.0.0.1';
const port = '1337';

class calculatorModel
{
	constructor()
	{

	}

	calculateExpression( mathExpression )
	{
		return eval(mathExpression);
	}
}

function processRequest( request, response )
{
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

	if (request.method === 'OPTIONS') 
	{
		response.writeHead(204).end();
	}
	else if ( request.method == 'GET' )
	{
		const data = { message: '[GET] Hello World NodeJS with CORS!' };
		response.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
		response.end(JSON.stringify(data));
		console.log('GET Response');
	}
	else if ( request.method == 'POST' )
	{
		let body = [];
		request.on('data', (chunk) =>
		{
			body.push(chunk);
		}).on('end', () => 
		{
			body = Buffer.concat(body).toString().replace(/"/g, '');
			
			let mdl = new calculatorModel();
			const data = { message: mdl.calculateExpression(body) };

			response.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
			response.end(JSON.stringify(data));
			console.log('POST Response');
		});

		
		//
		
	}
	else
	{
		response.writeHead(404).end();
	}
	
}
// 'Access-Control-Allow-Origin': '*'
http.createServer( processRequest ).listen( port, hostname );
