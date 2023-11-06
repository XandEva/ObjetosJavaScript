const pessoa = {
    nome: "Alexandre",
    profissão: "DevJunior"
}

console.log(pessoa.nome)

pessoa.idade = 19 //adicionando propriesdades no objeto
pessoa.altura = 175
pessoa.nome = "Alexandre Evangelista" //acessou a propriedade antiga e a modificou
/*
const = constante, certo?
mudamos o nome de uma const?
Oq foi feito foi a modificação de uma propriedade dentro da variavel const, isso é permitido, oque não pode é reatribuir a variavel

 atribuição à variável constante. Logo, isso é o que não podemos fazer, mas se tivermos um objeto armazenado em uma variável constante, podemos manipulá-lo, porém, não podemos reatribuir algum valor naquela variável.
 

*/
console.log(pessoa)