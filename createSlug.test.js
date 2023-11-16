
const createSlug = require("./createSlung");


test("la funzione dovrebbe controllare se sto passando una stringa", () => {
    const result = createSlug("Questo è un TESTO incReDibLE");
    let typeResult = false;

    if(typeof result === "string"){
        typeResult = true
    }
    
    expect(typeResult).toBe(true);
})


test("la funzione dovrebbe controllare che ciò che passo converta tutto il lowercase", () => {
    const result = createSlug("Questo è un TESTO incReDibLE");
    
    expect(result).toBe("questo è un testo incredible");
})