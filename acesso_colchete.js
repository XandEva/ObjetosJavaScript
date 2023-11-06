const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
  };

  console.log(cliente["idade"]) // tem como acessar as propriedades do objeto

  console.log(`O nome do cliente é ${cliente["nome"]}`) //o . vai retornar o valor de uma propriedade

  console.log(`Os três primeiros digitos do cpf são ${cliente.cpf.substring(0,3)}`)

  const chaves = ["nome","idade","cpf","email"]

  chaves.forEach((chave) => { 
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
  })
  //o colchete é bom para quando a gente não sabe o nome das propriedades 

  //

  const pet = {
    nome: "Rex",
    dataDeNascimento: "12/03/2017",
    brinquedoFavorito: "bolinha",
    cor: "cinza",
  };

console.log(pet.dataDeNascimento)
console.log(pet["brinquedoFavorito"])