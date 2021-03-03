console.log("Cadastro de pessoas");

var prompt = require('prompt-sync')();

let pessoa = {
    nome: prompt('Nome: '),
    sobrenome: prompt('Sobrenome: '),
    hobbies: prompt('Hobbies: '),
    idade: parseInt(prompt('Idade: ')),
    dataNascimento: prompt('Data de nascimento: '),
    telefone: prompt('Telefone: '),
    endereco: {
        cep: prompt('CEP: '),
        rua: prompt('Rua: '),
        cidade: prompt('Cidade: '),
    },
    animalDeEstimacao: prompt('Animal de estimação | Digite sim ou nao: ') == 'sim'? true:false ,
}

console.log(pessoa);
