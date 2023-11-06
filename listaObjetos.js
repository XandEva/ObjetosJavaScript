//aninhado é um estar dentro de outro

const cliente = {
    nome: "Alexandre",
    idade: 19,
    email: "alefernandocampos38@gmail.com",
    telefone: ["17996720616", "17997848489"]
 } 


 cliente.endereco = [
   {
    rua: "Paraná",
    numero: 3770,
    apartamento: true,
    city: "Votuporanga"
   },

] //o obj cliente vai receber uma propriedade endereço recebendo outro objeto
 
cliente.endereco.push({
   rua: "América",
   numero: 2335,
   apartamento: false,
   city: "Fernandopolis"
})

const apenasAp = cliente.endereco.filter( //vai filtrar os apartamentos
   (endereco) => endereco.apartamento === true //um função que vai pegar apenas os endereços que os aps for true
)

console.log(apenasAp)

