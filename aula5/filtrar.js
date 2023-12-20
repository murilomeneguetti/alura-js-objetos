//filtrar clientes que moram em aparamento mas não colocaram o complemento no endereço
const clientes = require('./clientes.json');

//função hasOwnProperty retorna true se o objeto tem a propriedade passada como parametro
function filtrarApartamentoSemComplemento(clientes) {
    return clientes.filter((cliente) => {
        return ( 
            cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty('complemento')
        );
    })
}

const filtrados = filtrarApartamentoSemComplemento(clientes);
console.log(filtrados);
