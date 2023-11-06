const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  ];
//lembre-se que obj não é ordenada, não tem uma ordem (indice), o indice é o proprio nome da propriedade

for (let chave in cliente){ //o método in vai deixar que percorremos todos as propriedades dentro do obj

    let tipo =  typeof cliente[chave]
    if(tipo !== "object" && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
    }

   
}
