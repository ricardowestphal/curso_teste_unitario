/* 
Verifica se uma exceção lançada por um método. 
Valida o tipo da exceção lançada
Valida a mensagem de erro contida na exceção
Suporta expressão regular na validação da mensagem de erro da exceção
Deve ser utilizada para maior controle do erro lançado
*/

describe("Teste do toThrowError", function() {
    it("Deve demonstrar o teste do toThrowError", function() {

        var somar = function(n1, n2) {
            if (n1 <= 0 || n2 <= 0) {
                throw new TypeError("Deve ser maior que 0");
            }
            return n1 + n2;
        }

        expect(function() { somar(0, 0) }).toThrowError();
        expect(function() { somar(0, 0) }).toThrowError("Deve ser maior que 0");
        expect(function() { somar(0, 0) }).toThrowError(/maior que 0/);
        expect(function() { somar(0, 0) }).toThrowError(TypeError);
        expect(function() { somar(0, 0) }).toThrowError(TypeError, "Deve ser maior que 0");

        expect(function() { somar(1, 1) }).not.toThrowError();
    });
});