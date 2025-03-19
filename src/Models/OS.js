/**
 * modelo de dados para as coleções ( tabelas)
 */

// importação do srecursos do framework mongoose
const {model, Schema, version} = require('mongoose')

// Criação da estrutura d acoleção clientes
const osSchema = new Schema({
    nomeCliente: {
        type: String
    },
    foneCliente: {
        type: String
    },
    TipoInstrumento: {
        type: String
    },
    MarcaModelo: {
        type:String
    },
    RelatoCliente: {
        type:String
    },
    NumeroOS: {
        type:String,
        unique: true
    },
    Condicao: {
        type:String
    },
    Funcionario:{
        type:String
    },
    ServicoRealizado: {
        type:String
    },
    Orcamento: {
        Type:Number
    },
    dataEntrada: {
        type: Date,
        default: Date.now
    },
    dataFinalizada: {
        type:Date
    }
},{versionKey: false}) // não vercionar os dados armazenados

// exportar para o main o modelo de dados

module.exports = model('Ordem de Serviço', osSchema)