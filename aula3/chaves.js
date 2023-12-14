const cliente = {
    nome: 'João',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['1199999999','4499999999'],
};

// cliente.enderecos = [
//     {
//     rua: 'R. Joseph Climber',
//     numero: 1337,
//     apartamento: true,
//     complemento: 'ap 934',
// }
// ];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes('enderecos')) {
    console.error('Erro. É necessário ter um endereço cadastrado.')
}
