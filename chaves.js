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

  const chaves = Object.keys(cliente) //vai receber uma classe, que é um conjunto de varias funções

  console.log(chaves)


  if (!chaves.includes("enderecos")){
    console.error("Erro. É necessario ter um endereço cadastrado")
  }