
    function getColor(colorNumber=0)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}
function getAllStudentColors() {
   let arrayColors =[];

    //your loop here
// Se ejecuta 10 veces, con valores del paso 1 al 10.
    for (let step = 0; step < 10; step++) {
    //Numero aleatorio entre 1-4, que se ejecute 10 veces
     var numeroAleatorio = Math.floor(Math.random()*5);
     var exampleColor = getColor(numeroAleatorio);	
    arrayColors.push(exampleColor);
    console.log(exampleColor);
}
    return arrayColors;
}
//call the function below with the number of students in the class and print on the console
/* console.log(getAllStudentColors()); */
getAllStudentColors();