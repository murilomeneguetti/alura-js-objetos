const cliente = {
    nome: 'João',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['1199999999','4499999999'],
};

cliente.enderecos = [
    {
    rua: 'R. Joseph Climber',
    numero: 1337,
    apartamento: true,
    complemento: 'ap 934',
}

];

cliente.enderecos.push({
    rua: 'R. Joseph Climber',
    numero: 404,
    apartamento: false,
});

//console.log(cliente.enderecos);

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);
