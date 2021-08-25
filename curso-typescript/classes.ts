class Data{
    //se eu nao colocar nada, já fica como public
    public dia: number;
    //se eu usar private, apenas a classe pode acessar 
    private mes: number;
    ano: number;
// eu posso definir como public o contructor, e nao precisaria 
//de nada acima, nem do que está dentro do constructor.

    constructor (dia: number, mes: number, ano: number) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const data = new Data(1,1,2020);
console.log(data.dia);

//se eu nao passar o ano, o typescript vai pedir e dar erro, a não ser que eu defina antes o valor. dentro do constructor mesmo.
const data2 = new Data(1,1)

//pesquisar sobre typeScript playground


//criando nova classe
//modificadores de acesso

class Carro {
    constructor{
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220;
    } {}


alterarVelocidade (delta: number) {
    // faço as validações de aceleração e frenagem
    ;;this.velocidadeAtual = XXX
}

acelerar() {
    this.alterarVelocidade(5);
}

frear() {
    this.alteraVelocidade(-5);
    }
}

const carro = new Carro('chevrollet', 'prisma', 250);
carro.acelerar();