// crie um algoritimo que pegue as notas de um aluno e tire sua média e mostre as   
//seguintes mensagens de acordo com cada situação

// 1- se a média for maior ou igual a 7 - O aluno foi aprovado!
// 2- Se a média for maior ou igual a 5 e menor que 7 - Recuperação
// 3- Se a média for menor que 5 - Reprovado

function calculaMedia(nota1,nota2,nota3){
    let media = (nota1+nota2+nota3)/3

    if (media >= 7){
        console.log('O aluno foi aprovado')
    }

    if (media >= 5 && media <7 ){
        console.log('O aluno Tem direito a recuperação')
    }

    if (media < 5){
        console.log('O aluno foi reprovado')
    }


}

console.log(calculaMedia(8,6,7))