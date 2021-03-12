/*toBe
Realiza a comparação com operador '===', que compara o valor e também
o tipo do objeto
Deve ser utilizado para comparar valores de forma mais efetiva pelo fato
de também verificar o tipo do objeto
*/

describe("Comparador toBe", function(){
	it("Deve validar o uso do toBe", function(){
		var obj1 = {valor: true};
		var obj2 = {valor: true};

		expect(true).toBe(true);
		expect("teste").toBe("teste");
		expect(obj1).not.toBe(obj2);
	});
});