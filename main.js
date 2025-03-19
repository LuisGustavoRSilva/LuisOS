/**
 * Processo principal
 * Estudo do banco de dados mongoDB (Crud)
 * @author Luis Gustavo Rodrigues Da Silva
 */

// Importação do modulo de conexão
const { conectar, desconectar } = require('./database.js')

// Importação do modelo de dados do Cliente
const osemodel = require('./src/Models/OS.js')

// Função para poder cadastrar o cliente
// Atenção para trabalhar com banco de dados usar sempre async-await-try-catch
const salvaros = async (nomeCli, foneCli, insCli, marcCli, relCli, NumOS, cond, func, serv, orc, dataEnt, dataFiz) => {
    try {
        // setar a estrutura de dados com o valores
        // OBS: usar os mesmos nomes da estrutura
        const novaos = new osmodel({
            nomeCliente: nomeCli,
            foneCliente: foneCli,
            tipoInstrumento: insCli,
            marcaModelo: marcCli,
            relatoCliente: relCli,
            numeroOS: NumOS,
            condicao: cond,
            funcionario: func,
            servicoRealizado: serv,
            orcamento: orc,
            dataEntrada: dataEnt,
            dataFinalizada: dataFiz
        })
        // a linha abaixo salva os dados no banco de dados
        await novocliente.save()
        console.log("Ordem de Serviço Adicionada com Sucesso")
    } catch (error) {
        // tratamento personalizado de erro
        if (error.code = 1200) {
            console.log(`Erro a OS ${NumOS} já esta ABERTA!`)
        } else {
            console.log(error)
        }
    }
}

// função para listar todos os clientes

// const listarClientes = async () => {
//    try {
//       const cliente = await clientemodel.find().sort({
//        nomeCliente: 1 })
//        console.log(cliente)
//    } catch (error) {
//        console.log(error)
//    }
// }

// Função para buscar um cliente pelo nome

// const buscarClientenome = async (nome) => {
//    try {
//        const clientenome = await clientemodel.find({nomeCliente:
//        new RegExp(nome, 'i')}) // RegExp tem em toda linguagem de programação, e a letra i faz com que a busca ignore as letras maiusculas ou minuculas (case insensitivi)
//        console.log(clientenome)
//    } catch (error) {
//        console.log(error)
//    }
// }


// Função para buscar o CPF do cliente
//const buscarClientecpf = async (cpf) => {
//    try {
//        const clientecpf = await clientemodel.find({cpf:
//        new RegExp(cpf, 'i')}) // RegExp tem em toda linguagem de programação, e a letra i faz com que a busca ignore as letras maiusculas ou minuculas (case insensitivi)
//        console.log(clientecpf)
//    } catch (error) {
//        console.log(error)
//    }
//}

// Função par aeditar os dados do cliente
// atenção! utilizar o id do cliente

//const atualizarcliente = async (id, nomeCli, foneCli, cpfCli) => {
//    try {
//        const clienteeditar = await clientemodel.findByIdAndUpdate()
//            id,
//            {
//                nomeCliente: nomeCli,
//                foneCliente: foneCli,
//                cpf: cpfCli,
//            },
//            {
//                new:true,
 //               runValidators:true
//            }
//        console.log("Dados do cliente alterados com sucesso")
//    } catch (error) {
//         // tratamento personalizado de erro
//         if (error.code = 1200) {
 //           console.log(`Erro o CPF ${cpfCli} já esta cadastrado`)
//        } else {
//            console.log(error)
//        }
//    }
//}

// Função para excluir o cliente

// const excluirCliente = async (id) => {
//    try {
//        const clientedeletado = await clientemodel.findByIdAndDelete
//        (id)
//        console.log("Cliente deletado")
//   } catch {
//        console.log(error)
//    }
//}

// -------------------------------------------------------------------------------------------------------
const iniciarsistema = async () => {
    console.clear()
    console.log("Estudo do MongoDB")
    console.log("----------------------------------------------")
    await conectar()
    // CRUD Create (inserção no banco de dados)
   // await salvarcliente("Helena Silva", "928125-01124", "08287935625")

    // await buscarClientecpf("81521481568")

    await salvaros("Fernando Silva", "(11)95477-0832", "Violão", "Crafter", "Corda Rompida", "01", "Boa, Somente as cordas", "",)

    await desconectar()
}

iniciarsistema()