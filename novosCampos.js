const pessoa = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
 }


 pessoa.social = "ativo"
 pessoa.cpf = "50057292833"

 console.log(`O nome do cliente é ${pessoa.nome}, e seu cpf é ${pessoa.cpf.substring(0,4)}
 e sua identidade ${pessoa.carteiraIdentidade.substring(0,4)}
 
 `)