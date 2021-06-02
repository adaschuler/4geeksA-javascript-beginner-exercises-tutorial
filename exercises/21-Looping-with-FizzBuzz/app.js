function fizzBuzz() {
    // Your code here

    var counter = 1;
    while (counter <= 100) {
        //en orden de que tantas condiciones tiene, mas condiciones, mas arriba
        if (counter % 3 === 0 && counter % 5 === 0) {
            console.log("FizzBuzz")
        }
        else if (counter % 3 === 0) {
            console.log("Fizz")
        }
        else if (counter % 5 === 0) {
            console.log("Buzz")
        }
        else {
            console.log(counter);
        }
        counter++;
    }
    
}
fizzBuzz()