const cliente = {
    nome: 'Andre',
    idade: 23,
    cpf: '123456789',
    email: 'andre@dominio.com'
};

console.log(`O nome do cliente é ${cliente['nome']} e essa pessoa tem ${cliente['idade']} anos.`);

console.log(`O 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);

//situação em que é preciso usar o [] para acessar o valor do objeto:

const chaves = ['nome', 'idade', 'cpf', 'email', 'altura'];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});
