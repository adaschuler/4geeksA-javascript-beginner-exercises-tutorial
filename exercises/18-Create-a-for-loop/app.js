/* This exercise should be moved before 17-Your first loop? */

// Declare and write your function here:
function standardsMaker()
{
   var frase="Yo preguntaré si estoy atascado";
    for(var i = 1; i < 301; i++)
	{
		console.log(i + frase);
	}
	
	return i;

}

// Calling the function:
standardsMaker();