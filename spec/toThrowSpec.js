/*
Verifica se uma excecão é lançada por um método
Não realiza a validação em detalhe o tipo da exceção lançada, 
apenas certifica que um erro ocorreu na execução da função.
Deve ser utilizada quando deseja apenas certificar que um erro ocorreu,
sem se preocupar com detalhes como tipo ou mensagem de erro.
*/


describe("Teste do toThrow", function() {
    it("Deve demonstrar o uso do toThrow", function() {
        function multiplicar() {
            numero * 10;
        }

        function somar(n1, n2) {
            return n1 + n2;
        }

        expect(multiplicar).toThrow();
        expect(somar).not.toThrow();
    });
});