//em typescript antes de compilar ele acusa erro caso não seja definido o tipo das variáveis
//ajudando você a cometer menos erros
//quando usar o 'tsc' para gerar o JS ele diz se tem erros no meio do caminho
function somar(num1: number, num2: number){
    return num1+num2
}

const a = 15, b = 8

const soma = somar(a,b)
console.log(soma)