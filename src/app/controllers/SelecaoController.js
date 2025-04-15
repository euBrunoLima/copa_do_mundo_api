import SelecaoRepository from '../repositories/SelecaoRepository.js';

class SelecaoController {

    async index(req, res) {
        try {
            const row = await SelecaoRepository.findAll()
            res.json({
                mensagem: "Selecões encontradas com sucesso!",
                dados: row
            });
        } catch (error) {
            console.log(error)
            res.status(500).json({
                mensagem: "Erro ao buscar seleções",
                error: error
            })    
        }
    }

    async show(req, res){
        try {
            const id = req.params.id
            const row = await SelecaoRepository.findById(id)
            res.json({
                mensagem: "Seleção encontrada com sucesso!",
                dados: row
            
            });
        } catch (error) {
            console.log(error)
            res.status(500).json({
                mensagem: "Erro ao buscar seleção",
                error: error
            })
        }
    }

    async showGrupo(req, res){
        try{
            const grupo = req.params.grupo
            const row = await SelecaoRepository.findByGrupo(grupo)
            res.json({
                mensagem: "Seleções encontradas com sucesso!",
                dados: row
            
            });
        }catch(erro){
            console.log(erro)
            res.status(500).json({
                mensagem: "Erro ao buscar seleções por grupo",
                erro: erro
            })
        }
       
    }

    async store (req, res){
       try {
            const dados = [req.body.selecao, req.body.grupo]
            const row = await SelecaoRepository.create(dados)
            res.json({
                mensagem: "Seleção cadastrada com sucesso!",
                dados: row
            });
       } catch (error) {
            console.log(error)
            res.status(500).json({
                mensagem: "Erro ao cadastrar seleção",
                error: error
            })    

        
       }
    }

    async update (req, res){

        try{
            const id = req.params.id
  
            const dados = {
            selecao: req.body.selecao,
            grupo: req.body.grupo
            }

            const row = await SelecaoRepository.update(dados,id)
            res.json({
                mensagem: "Seleção atualizada com sucesso!",
                dados: row
            });
        }catch(erro){
            console.log(erro)
            res.status(500).json({
                mensagem: "Erro ao atualizar seleção",
                erro: erro
            })
        }
        
    }

    async delete (req, res){
        try {
            const id = req.params.id
            const row = await SelecaoRepository.delete(id)
            res.json({mensagem: "Seleção deletada com sucesso!" });
           
        } catch (error) {
            console.log(error)
            res.status(500).json({
                mensagem: "Erro ao deletar seleção",
                error: error
            })
            
        }
        
    }
}

export default new SelecaoController();
