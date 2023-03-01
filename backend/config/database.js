const mongoose = require("mongoose");

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados!')
});

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados: ' + err)
});

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao banco de dados!')
});

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O valor '{VALUE}' informado é menor do que o limite mínimo."
mongoose.Error.messages.Number.max = "O valor '{VALUE}' informado é maior do que o limite máximo."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."


module.exports = mongoose.connect('',
{useNewUrlParser: true});