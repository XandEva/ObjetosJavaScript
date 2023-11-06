const cliente = {
    nome: "Alexandre",
    idade: 19,
    email: "alefernandocampos38@gmail.com",
    telefone: ["17996720616", "17997848489"],
    saldo: 1500,
    pagamento: function (valor){
        if (valor > this.saldo){ //o this significa ISSO, ou seja, vai representar o objeto atual
            console.log("Saldo insuficiênte")
        }else{
            this.saldo -= valor;
            console.log(`Pagamento Realizado, novo saldo ${this.saldo}`)
        }
    }
 } 

 cliente.pagamento(1700)



