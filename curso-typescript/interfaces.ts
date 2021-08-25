interface Usuario{
    nome: string;
    email: string;
    address?: string;
}


function  getUser(): Usuario {
    return{
        nome: 'isaias'
        email:'isaias@eu.com'
    }
    
}

function setUser(usuario: Usuario) {
    //.....    
}