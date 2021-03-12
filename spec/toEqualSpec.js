/*
Realiza a comparação de dois elementos de modo muito similar ao toBe
A unica diferença em relação ao toBe é que ele não compara o tipo
do objeto, somente seu valor
*/

describe("Teste do toEqual", function(){
	it("deve validar o uso do toEqual", function(){
		var obj1 = {valor: true};
		var obj2 = {valor: true};

		expect(true).toEqual(true);
		expect(obj1).toEqual(obj2);
	});
});