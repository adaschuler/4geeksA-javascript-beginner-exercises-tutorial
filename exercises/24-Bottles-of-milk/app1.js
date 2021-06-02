// Your code here:
/* for/while e if
conteo y luego conteo-1
shift alt a */ 
function bottlesOfMilk() 
{
    let letraGeneral = [
        "bottles of milk on the wall,",
        " bottles of milk. Take one down and pass it around,"];
    let parrafoFinal = [
        "bottle of milk on the wall, ",
        " bottle of milk. Take one down and pass it around, no more bottles of milk on the wall. No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, "
    ];
    let composicion = "";
    let composicionFinal = "";
    var conteo = 99;
    while (conteo >= 1) {
        composicion += conteo+" "+ letraGeneral[0]+" "+conteo+" "+letraGeneral[1];
    console.log(composicion);
    conteo--;
    }
    composicionFinal += conteo+" "+parrafoFinal[0]+" "+conteo+" "+parrafoFinal[1];


    console.log(composicionFinal);

   
}

bottlesOfMilk();