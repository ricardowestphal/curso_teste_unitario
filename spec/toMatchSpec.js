/*
Realiza a comparação utilizando expressões regulares
Caso seja passada uma string como parâmetro, o 
comparador tentará encontrar o texto passado dentro
do valor a ser comparado.
*/

describe("Teste do toMatch", function(){
	it("Deve Validar o uso do toMatch", function(){
		var texto = "teste com Jasmine";

		expect(texto).toMatch("Jasmine");
		expect(texto).toMatch(/jasmine/i);
		expect("88034-500").toMatch(/^\d{5}-\d{3}$/);
	});

});