// Your code here:

function bottlesOfMilk() {
    var ultimaParte = "1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall. No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall"
    for (let i = 100; i > 1; i--) {
        if (i == 2){
            console.log(ultimaParte);
            break;
        }
        else (i <= 100 && i > 2)
            console.log(`${i - 1} bottles of milk on the wall, ${i - 1} bottles of milk. Take one down and pass it around,`);
    }
}
bottlesOfMilk();