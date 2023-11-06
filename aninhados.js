//aninhado é um estar dentro de outro

const cliente = {
    nome: "Alexandre",
    idade: 19,
    email: "alefernandocampos38@gmail.com",
    telefone: ["17996720616", "17997848489"]
 } 


 cliente.endereço = {
    rua: "Paraná",
    numero: 3770,
    apartamento: true,
    city: "Votuporanga"

 } //o obj cliente vai receber uma propriedade endereço recebendo outro objeto
 console.log(cliente)