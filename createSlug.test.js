
const createSlug = require("./createSlung");

test("la funzione dovrebbe fare la somma dei due numeri", () => {
    const result = createSlug(1, 1);
    
    expect(result).toBe(2);
})