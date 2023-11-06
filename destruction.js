const xand = {
    idade: 19,
    sex: 'masc',
}


const xandTel = { //obj não é ordenada, ou seja, não importa a ordem em que esteja as informações
    ...xand,
    telefone: 996720616
}

console.log(xandTel)