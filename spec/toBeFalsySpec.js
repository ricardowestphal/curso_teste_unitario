/*
toBeFalsy

Realiza uma comparação dizendo se uma variável ou objeto possui um valor inválido
Um Valor será considerado inválido caso seja false, O, undefined, null ou NaN
Deve ser utilzido quando a verificação abordar valores inválidos distintos, 
baseados nas opções citadas acima
Prefira usar toBeTruthy ao invés de not.toBeFalsy, para deixar o código de mais
facil compreensão.
*/

describe("Teste do toBeFalsy", function() {
    it("Deve demonstrar o uso do toBeFalsy", function() {
        expect(null).toBeFalsy();
        expect(undefined).toBeFalsy();
        expect('').toBeFalsy();
        expect(false).toBeFalsy();
        expect(NaN).toBeFalsy();
        expect(0).toBeFalsy();

        expect(true).not.toBeFalsy();
    });
});