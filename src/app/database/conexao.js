import mysql from 'mysql';

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'bdcopa'
})

conexao.connect()

/**
 * Executa uma codigo sql com ou sem valores
 * @param {string} sql
 * @param {string=id | [selecao,id]} valores 
 * @param {string} mensagemReject  mensagem a ser exibida em caso de erro
 * @returns retorna o resultado da consulta
 */

 export const consulta = (sql, valores="", mensagemReject) =>{
    return new Promise((resolve, reject) =>{
        conexao.query(sql, valores, (erro, resultado) =>{
            if(erro) return reject(mensagemReject)
            const row = JSON.parse(JSON.stringify(resultado))
            return resolve(row)
        })
    })
}

export default conexao;