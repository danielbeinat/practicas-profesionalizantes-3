class calculatorDefaultModel
{
	constructor()
	{

	}

	calculateExpression( mathExpression )
	{
		return Promise.resolve({message: eval(mathExpression)});;
	}
}


export { calculatorDefaultModel }