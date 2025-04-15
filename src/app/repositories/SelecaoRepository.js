import {consulta} from "../database/conexao.js";
class SelecaoRepository {
    
    //CRUD
    create(dados){
        const sql = 'insert into selecoes (selecao, grupo) values (?, ?)';
        consulta(sql, dados, "Erro ao cadastrar seleção")
    }

    async findAll(){
        const sql = 'select * from selecoes';
        return await consulta(sql, "Erro ao buscar seleções")
    }

    async findByGrupo(grupo){
        const sql = `select * from selecoes where grupo = ?`
        return await consulta(sql, grupo, "Erro ao buscar seleções por grupo")
    }
    
    async findById(id){
        const sql = `select * from selecoes where id = ?`
        return await consulta(sql, id, "Erro ao buscar seleção")
    }

    async findByGrupo(grupo){
        const sql = `select * from selecoes where grupo = ?`
        return await consulta(sql, [grupo], "Erro ao buscar seleção")
    }

    async update(dados, id){
        const sql = `update selecoes set ? where id = ?`
        return await consulta(sql, [dados, id], "Erro ao atualizar seleção")
    }

    async delete(id){
        const sql = "delete from selecoes where id = ?"
        return await consulta(sql, id, "Erro ao deletar seleção",)
    }

}

export default new SelecaoRepository;