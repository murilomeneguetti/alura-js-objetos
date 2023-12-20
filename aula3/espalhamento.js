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

//assumindo que essa é uma função externa q vamos usar
function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

//com a sintaxe de espalhamento, passamos todos os valores de um array como parametros diferentes
// ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);
ligaParaCliente(...cliente.telefone);

//ao inves de ir colocando cada propriedade de um objeto separado, da pra usar o espalhamento para objetos
const encomenda = {
    destinatario: cliente.nome,
    // rua: cliente.enderecos[0].rua,
    // numero: cliente.enderecos[0].numero,
    ...cliente.enderecos[0],
}

console.log(encomenda);