var total = prompt('How many km are left to go?');
// Your code below:

var number=parseInt(total);

if(number>100){
    console.log("Are we there yet?");
}else if(number>50){
    console.log("Well be there ir 5 minutes");
}else if(number<=50){
    console.log("im parking, I see you right now");
} 