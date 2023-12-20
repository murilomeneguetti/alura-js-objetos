//require é uma função do node para puxar um código 
const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

//transformando JSON em string
const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

//como é uma string, não tem como usar propriedades de objetos
console.log(clienteEmString.nome);//undefined

//transformar string em objeto
const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);
