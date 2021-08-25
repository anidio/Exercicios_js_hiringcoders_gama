"use strict";
//Boolean
var contaPaga = false;
//Number
var idade = 23;
var avaliacao = 4.7;
// string
var nome = 'isaias roberto';
//array
var idades = [21, 25, 26, 24, 30];
var idades2 = [35, 55, 32, 41, 34];
//tuple 
var jogadores;
jogadores = ['isaias', 'bode', 'roberto'];
var jogador;
jogador = ['isaias', 10, true];
//enum
//mapeamento de informações
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusAluno = StatusAprovacao.Aprovado;
//any, quando você não sabe o que vai retornar!
//(qualquer coisa), sem dfinição. anula a tipagem.
//só usar e, casos especiais (um erro por ex)
var retornoDaApi = [123, 'isaias', true];
var retornoDaApi = (
//.......
);
//void
//quando uma função nao retorna nada 
function printarNaTela(msg) {
    console.log(msg);
}
