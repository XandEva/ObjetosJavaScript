const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   delete objPersonagem.aliado

console.log(objPersonagem)
console.log(objPersonagem.aliado) //undefined

delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

// delete remove do objeto o valor da propriedade, assim como a chave.
/*
O valor do delete é bool, vai retornar verdadeiro ou falso
porém ele não retorna false se tentar remover algo que não existe dentro do objeto

*/

const delProp = delete objPersonagem.aliado //vai retornar true pq ja foi deletado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true