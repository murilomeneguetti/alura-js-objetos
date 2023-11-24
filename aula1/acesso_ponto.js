const cliente = {
    nome: 'Andre',
    idade: 23,
    cpf: '123456789',
    email: 'andre@dominio.com'
};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);

console.log(`O 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);
