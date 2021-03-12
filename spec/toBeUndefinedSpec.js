/*
Realiza a comparação de um objeto como sendo undefined
Prefira usar ToBeDefined ao invés de not.toBeUndefined para
deixar o código de mais fácil compreensão
*/

describe("Teste do toBeUndefined", function(){
	it("Deve demonstrar o uso do toBeUndefined", function(){
		var n1;
		var n2 = undefined;
		var n3 = false;

		expect(n1).toBeUndefined;
		expect(n2).toBeUndefined;

		expect(n3).not.toBeUndefined;
		expect(null).not.toBeUndefined;
	});
});