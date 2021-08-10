//Array de objetos
const filmes =[
    {
        id: 1,
        titulo: "hacker",
        descrição: "Filme sobre tecnologia",
        duração: 125
    },
    {
        id: 1,
        titulo: "como se fosse a primeira vez",
        descrição: "Filme romantico",
        duração: 80
    },

    {
        id: 1,
        titulo: "V de vingança",
        descrição: "Filme sobre politica",
        duração: 115
    },

]

const [{id, titulo, descrição, duração}] = filmes
//mostrar a descrição
filmes.map (filme => console.log(filme.descrição)) 