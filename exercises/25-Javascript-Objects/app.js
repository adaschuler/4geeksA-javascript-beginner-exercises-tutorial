var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};

function addAllFamilyLuckyNumbers(anArray) {
    var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
    /* lucky_numbers.forEach(function(a){sumOfAllLuckyNumbers += a;});
        }); */
    //To-Do: loop and add; consider nested loops
    //Hint: use the anArray variable to get all of the lucky numbers

    anArray = [person.lucky_numbers.reduce((a, b) => a + b), person2.lucky_numbers.reduce((a, b) => a + b),
    person3.lucky_numbers.reduce((a, b) => a + b)]
    sumOfAllLuckyNumbers = anArray.reduce((a, b) => a + b);
    return sumOfAllLuckyNumbers;
}

/* for (let i=0;i<person.lenght;i++){
    for (let a=0;a<person[i].lucky_numbers.lenght;l++){
        sumOfAllLuckyNumbers +=person[i].lucky_numbers[l];
  }
  return person[i].lucky_numbers;
}
return sumOfAllLuckyNumbers;
} */

//Enter all your code here:

/* var nuevonumero = 33 */

person2.lucky_numbers[3] = 33;
let person3 = { 
    name: "Jimmy", 
    lastname: "Doe", 
    age: 13, 
    gender: "male", 
    lucky_numbers: [1, 2, 3, 4], 
    significant_other: null };
family.members.push(person3);
/* family.members.push(persona 3);
family.push({
    name: "Jimmy Doe",
    gender: "masculine",
    lucky_numbers: " 1, 2, 3, 4",
    significant_other: null
}); */



//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members));

