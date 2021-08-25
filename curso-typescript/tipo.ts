//Boolean
const contaPaga: boolean = false;

//Number

const idade: number = 23;
const avaliacao: number = 4.7;

// string

const nome: string = 'isaias roberto';

//array

const idades: number[] = [21, 25, 26, 24, 30];
const idades2: Array<number> = [35, 55, 32, 41, 34];

//tuple 
let jogadores: [string, string, string];
jogadores = ['isaias','bode','roberto'];

let jogador: [string, number, boolean];
jogador = ['isaias',10,true];

//enum
//mapeamento de informações

enum StatusAprovacao{
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}

const statusAluno: StatusAprovacao = StatusAprovacao.Aprovado;

//any, quando você não sabe o que vai retornar!
//(qualquer coisa), sem dfinição. anula a tipagem.
//só usar e, casos especiais (um erro por ex)

const retornoDaApi: any = [123, 'isaias', true]
const retornoDaApi: any = (
    //.......
)

//void
//quando uma função nao retorna nada 

function printarNaTela(msg: string) {
    console.log(msg);
}

// Never
//raramente aplicado em algum projeto
//usado para coisas que nunca ocorrem

function loopInfinito(): never{
    while(true);
}

function erro(mensagem: string): never{
    throw new Error (mensagem);
}

function falha(){
    return erro('Algo falhou');
}

//Union Types
//quando algo pode ter mais de um tipo

const nota: string | number = 5;
function exibirNota(nota: number |string){
    console.log(`A nota é ${nota}`);
}

exibirNota('10')
exibirNota(10)

// Alias
//atalhos paa os tipos
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

type Funcionarios = Array<Funcionario>;
cons funcionarios: Funcionarios = [{
    nome: 'Isaías';
    sobrenome: 'Roberto';
    dataNascimento: new Date();
}];

function tratarFuncionarios(funcionarios: Funcionarios){
        for (let funcionario of funcionarios) {
            console.log('Nome do funcionário: ', funcionario.nome')
        }    
}

// Null
//precisa ser especificado que pode ser uma variável null ou mudar de true para false no tsconfig

let altura: number | null = 1.75
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    //o '?' abaixo faz com que seja undefined, nãp precisando preencher e não precisando declarar que é null, o null abaixo pode ser apagado.
    telefone2?: string | null;

}

const contato: Contato = {
    nome: 'isaias',
    telefone1:'12344556'
    //eu posso apagar o telefone 2 abaixo, é opcional já que eu usei o '?'.
    telefone2: null
}

// Type assertion

const minhaIdade: any = 23;
(minhaIdade as number).toString();
//mesma coisa que
// <number>minhaIdade.toString();

//const input = document.getElementById("numero1") as HTMLInputElement;
//mesma coisa que
const input = <HYMLInputElement>document.getElementById("numero1")
console.log(input.value);