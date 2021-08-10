const pessoa ={
    nome: "isaias",
    idade:"26",
    cidade: "Olinda"
}

//notação de ponto

console.log(pessoa.nome)

//notação de colchetes

console.log(pessoa['idade'])

//como desestruturar objetos

const {nome, idade, cidade} = pessoa
//como fiz a desestruturação, não preciso usar mais o 'pessoa'
console.log(nome)
console.log(idade)
console.log(cidade)