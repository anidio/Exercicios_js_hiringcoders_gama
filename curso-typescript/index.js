"use strict";
//em typescript antes de compilar ele acusa erro caso não seja definido o tipo das variáveis
//ajudando você a cometer menos erros
//quando usar o 'tsc' para gerar o JS ele diz se tem erros no meio do caminho
function somar(num1, num2) {
    return num1 + num2;
}
var a = 15, b = 8;
var soma = somar(a, b);
console.log(soma);
