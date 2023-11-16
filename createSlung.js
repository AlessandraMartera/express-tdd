const arrayDb = require("./db/db.json");

module.exports = function (str) {
    
    let resultToLawerCase = str.toLowerCase();

    let result = resultToLawerCase
    // faccio diventrare la stringa un array
    .split("")
    // mappo l'array carattere per carattere
    .map((char) => {
        if(char == " "){
            return "-"
        }
        return char
    })
    // faccio tornare di nuovo una stringa
    .join('');

    // createSlug dovrebbe incrementare di 1 lo slug quando esiste già
    const arraySlug = arrayDb.map( items => items.slug)
 
    if(arraySlug.includes(result)){
        const counterArrayResult = result.split("");
        counterArrayResult.push("-");
        counterArrayResult.push(1)
        result = counterArrayResult.join("");
        // console.log(counterArrayResult);
    }

    return result
}