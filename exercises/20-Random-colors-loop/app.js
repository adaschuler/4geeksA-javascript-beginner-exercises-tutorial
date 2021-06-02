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
    
	
   //your loop here
    
    // Se ejecuta 10 veces, con valores del paso 1 al 10.
    for (let step = 0; step < 10; step++) {
    
    //Numero aleatorio entre 1-10, que se ejecute 10 veces
     var numeroAleatorio = Math.floor(Math.random()*(11-1)+1);
     var exampleColor = getColor(numeroAleatorio);	
    
     console.log(numeroAleatorio+(" ")+exampleColor);
} 
   
}


//call the function below with the number of students in the class and print on the console
getAllStudentColors();