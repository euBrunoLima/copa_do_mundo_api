import  conexao, {consulta} from "../database/conexao.js";

class SelecaoRepository {
    
    //CRUD
    create(dados){
        const sql = 'insert into selecoes (selecao, grupo) values (?, ?)';
        consulta(sql, dados, "Erro ao cadastrar seleção")
        
        // return new Promise((resolve, reject) =>{
        //     conexao.query(sql, dados, (erro, resultado) =>{
        //         if(erro) return reject("Erro ao cadastrar seleção")
        //         const row = JSON.parse(JSON.stringify(resultado))
        //         return resolve(row)
        //     })
        // })
    }

    async findAll(){
        const sql = 'select * from selecoes';
        return await consulta(sql, "Erro ao buscar seleções")

        // return new Promise((resolve, reject) =>{
        //     conexao.query(sql, (erro, resultado) =>{
        //         if(erro) return reject("Erro ao buscar seleções")
        //         const row = JSON.parse(JSON.stringify(resultado))
        //         return resolve(row)
        //     })
        // })
    }
    
    
    async findById(id){
        const sql = `select * from selecoes where id = ?`
        return await consulta(sql, id, "Erro ao buscar seleção")
        
        // return new Promise((resolve, reject) =>{
        //     conexao.query(sql, id, (erro, resultado) =>{
        //         if(erro) return reject("Erro ao buscar seleção")
        //         const row = JSON.parse(JSON.stringify(resultado))
        //         return resolve(row)
        //     })
        // })
    
    }

    async update(dados){
       // const sql = `update selecoes set selecao = ?, grupo = ? where id = ?`
        const sql = `update selecoes set ? where id = ?`
        return await consulta(sql, [dados, id], "Erro ao atualizar seleção")
        
        // return new Promise((resolve, reject) =>{
        //     conexao.query(sql, dados, (erro, resultado) =>{
        //         if(erro) return reject("Erro ao atualizar a seleção")
        //         const row = JSON.parse(JSON.stringify(resultado))
        //         return resolve(row)
        //     })
        // })
    }

    async delete(id){
        const sql = "delete from selecoes where id = ?"
        return await consulta(sql, id, "Erro ao deletar seleção",)
        
        // return new Promise((resolve, reject) =>{
        //     conexao.query(sql, id,(erro, resultado) =>{
        //         if(erro) return reject("Erro ao deletar seleção")
        //         const row = JSON.parse(JSON.stringify(resultado))
        //         return resolve(row)
        //     })
        // })   
    }

}

export default new SelecaoRepository;