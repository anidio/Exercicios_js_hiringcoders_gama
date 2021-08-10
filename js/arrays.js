//operador em um array
const cursosGama = ["git", "html", "css", "react", "nodejs", "vtex"]

// console.log(cursosGama[4])// nodejs

//operador spreed (...)
const cursosVtex = [...cursosGama, "LinkedIn"]

// console.log(cursosVtex)

// //metodos de iteração

// for (let i = 0; i < cursosVtex.length; i++){
//     console.log(cursosVtex[i])
// }


//Metodos de iteração de array
//1- map: Retorna um novo array sem alterar o array original
//craindo uma cópia com as alterações que desejamos

cursosGama.map(curso => console.log(curso))

//2- Filter: retorna um novo array com os elementos filtrados

const numeros = [25, 35, 45, 74, 66, 57]

const numerosImpares = numeros.filter(numero => numero%2 != 0)
console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero%2 == 0)
console.log(numerosPares)

//3-find: encontra e retorna o primeiro elemento que achar 
//igual ao elemento por parâmetros

const produtos = ["geladeira","fogão","cama","microondas", "armário"]
const encontrarmicroondas = produtos.find(produto => produto === "microondas")
console.log (encontrarmicroondas)

//4- sort: ordena o array

const num = [ 5,3,4,2,1]

const crescente = num.sort((a,b) => a-b) //se nao fosse usada a arrow function de (a,b), um numero como 111 ficaria no começo, pq ela só compararia o primeiro valor 1
console.log(crescente)

const decrescente = num.sort((a,b) => b-a)
console.log (decrescente)

//5- reduce: Reduz nosso array a um resultado de uma operação matemática

const numbers = [1, 34, 35, 44]

const soma = numbers.reduce((valorAtual, valorAnterior) => {
    return valorAnterior+valorAtual
})

console.log(soma)