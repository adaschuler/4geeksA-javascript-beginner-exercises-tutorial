/* si es menor a 5 let it be, "there will be an answer,"
si es menor a 5 es la frase ble 
"let it be,"x4 "words of wisdom,"
"let it be,"x5 "there will be an answer,"
"let it be,"x1*/ 
function sing()
{
    let lib = "let it be";
    let letra = "";
    for(let i = 1; i <= 4; i++){
        letra+= lib+", "
        //concatenar          
    }
    letra += "words of wisdom, ";
     for(let i = 1; i <= 5; i++){
        letra+= lib+", "
        //concatenar          
    }
    letra += "there will be an answer, ";
              
    
    letra += lib;
    return letra;
}

//Your code above ^^^

console.log(sing())