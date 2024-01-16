let woord = prompt("schrijf je woord");

const letters = woord.split("");
console.log(letters);

let letterGeraden = letters;

let letterRaden = prompt("raad de letter");

if(letters.includes(letterRaden)){
    console.log("werkt");
    for(let letter = 0; letter > letters.includes(letterRaden).length; letter++){
        
    }
    prompt("raad de volgende letter");
console.log("letter");
}else{
    console.log("Fuck off and try again");
    prompt("raad een andere letter");
}