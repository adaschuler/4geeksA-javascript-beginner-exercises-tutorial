/*
"let it be,"x4 "words of wisdom,"
"let it be,"x5 "there will be an answer,"
"let it be,"x1*/ 
function sing()
{
    let lib = "let it be,";
    let letra = lib.repeat(4);
    letra += "words of wisdom,";
    letra += lib.repeat(5);
    letra += "there will be an answer,";
    letra += lib.repeat(1);
    return letra;
}

//Your code above ^^^

console.log(sing())