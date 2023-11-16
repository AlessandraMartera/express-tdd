
const createSlug = require("./createSlung");



test("la funzione dovrebbe controllare se sto passando una stringa", () => {
    const result = createSlug("Questo è uno SLUnG");
    let typeResult = false;

    if(typeof result === "string"){
        typeResult = true
    }

    expect(typeResult).toBe(true);
})

test("la funzione dovrebbe convertire tutto il lowercase", () => {
    const result = createSlug("Questo è uno SLUnG");
    
    expect(result).toBe("questo-è-uno-slung");
})

test("la funzione dovrebbe ritornare una stringa con gli spazi sostituiti da -", () => {
    const result = createSlug("Questo è un test");
    
    expect(result).toBe("questo-è-un-test");
})

test("la funzione dovrebbe incrementare di 1 lo slug quando esiste già", () => {
    const result = createSlug("ciambellone");
    
    expect(result).toBe("ciambellone-1");
})

test("la funzione dovrebbe lanciare un errore in caso di titolo non presente o formato errato", () => {
    // const result = createSlug("ciambellone");
    createSlug();
    expect(createSlug).toThrowError("title not found");
})

/* 
test("la funzione dovrebbe lanciare un errore se manca l’array dei post", () => {

    createSlug();
    expect(createSlug).toThrowError("array dei post non trovato");
})

*/