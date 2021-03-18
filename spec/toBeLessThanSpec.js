/*
toBeLessThan

Compara se um valor numérico é menor do que outro valor
Realiza a conversão para valor numérico antes da comparaao, podendo o valor ser 
passado em formato texto
Prefira usar toBeGreaterThan ao invés de not.toBeLessthan para deixar o código de mais facil
compreensão
Para valores iguais utilize o toEqual.
*/

describe("Uso do toBelessThan", function() {
    it("deve demonstrar o uso do toBelessThan", function() {
        var PI = 3.1415;

        expect(3).toBeLessThan(PI);

        expect(3.5).not.toBeLessThan(PI);
    });
});