/*
toContain

Realiza busca por determinado item em uma array
Também pode ser utilizado para buscar uma substring dentre de uma string
não suporta busca por expressões regulares
*/

describe("Teste do toContain", function() {
    it("Deve demonstrar o uso do toContain", function() {
        var texto = "Meu nome é Ricardo Westphal";
        var frutas = ["laranja", "banana", "pera"];

        expect(texto).toContain("Ricardo");
        expect(texto).not.toContain("marcio");

        expect(frutas).toContain("laranja");
        expect(frutas).not.toContain("uva");
    });
});