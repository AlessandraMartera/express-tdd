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

    
    // console.log(result.join());
    return result
}