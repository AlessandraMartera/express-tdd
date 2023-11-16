
const createSlug = require("./createSlung");


test("la funzione dovrebbe controllare se sto passando una stringa", () => {
    const result = createSlug("Questo è un TESTO incReDibLE");
    let typeResult = false;

    if(typeof result === "string"){
        typeResult = true
    }

    expect(typeResult).toBe(true);
})

test("la funzione dovrebbe convertire tutto il lowercase", () => {
    const result = createSlug("Questo è un TESTO incReDibLE");
    
    expect(result).toBe("questo-è-un-testo-incredible");
})

test("la funzione dovrebbe ritornare una stringa con gli spazi sostituiti da -", () => {
    const result = createSlug("Questo è un TESTO incReDibLE");
    
    expect(result).toBe("questo-è-un-testo-incredible");
})