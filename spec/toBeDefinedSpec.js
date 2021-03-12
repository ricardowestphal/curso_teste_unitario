/*
Realiza a comparação de um objeto como não sendo undefined
Prefira usar toBeUndefined ao invés de not.toBeDefined para
deixar o código de mais fácil compreensão
*/

describe("Teste do toBeDefined", function(){
	it("Deve demonstrar o uso do toBeDefined", function(){
		var n1 = 10;
		var n2;
		var n3 = undefined;

		expect(n1).toBeDefined();
		expect(null).toBeDefined();
		expect(NaN).toBeDefined();

		expect(n2).not.toBeDefined();
		expect(n3).not.toBeDefined();

	});
});