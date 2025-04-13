import SelecaoRepository from '../repositories/SelecaoRepository.js';

class SelecaoController {

    async index(req, res) {
        const row = await SelecaoRepository.findAll()
        res.json(row)
    }

    async show(req, res){
        const id = req.params.id
        const row = await SelecaoRepository.findById(id)
        res.json(row)
    }

    async store (req, res){
        const dados = [req.body.selecao, req.body.grupo]
        const row = await SelecaoRepository.create(dados)
        res.send("Seleção cadastrada com sucesso")
    }

    async update (req, res){
        const id = req.params.id
        const dados = [req.body.selecao, req.body.grupo, id]
        const row = await SelecaoRepository.update(dados)
        res.json(row)
    }

    async delete (req, res){
        const id = req.params.id
        const row = await SelecaoRepository.delete(id)
        res.send("Seleção deletada com sucesso")
        //res.json(row)
        
    }
}

export default new SelecaoController();
