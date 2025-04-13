import express from 'express';
import SelecaoController from './app/controllers/SelecaoController.js';
import selecaoRoutes from './app/routes/selecaoRoutes.js'

const app = express();

//Indica que o express deve interpretar o body da requisição como JSON
app.use(express.json())

app.use("/selecoes", selecaoRoutes)


  
//Funções auxiliares
function buscarSelecaoPorId(id){
    return selecoes.filter(selecao => selecao.id == id)
}
function buscarIndexSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id)
}
















//Mock
const usuarios = [
    {id: 1, nome: 'João', email: 'joão@gmail.com'},
    {id: 2, nome: 'Maria', email: 'maria@gmail.com'},
    {id: 3, nome: 'José', email: 'jose@gmail.com'},
    {id: 4, nome: 'Ana', email: 'ana@gmail.com'},
    {id: 5, nome: 'Carlos', email: 'carlos@gmail.com'},
    {id: 6, nome: 'Naldo', email: 'naldo@gmail.com'},
]

//Função para adicionar usuário
app.post('/usuarios', (req, res) =>{
    usuarios.push(req.body)
    res.status(201).send("Usuário adicionado com sucesso")
})

//Função para buscar usuário por id
app.get('/usuarios/:id', (req, res) =>{
    res.json(usuarios.filter(usuario => usuario.id == req.params.id))
})

//Função para atualizar usuário
app.put('/usuarios/:id', (req, res) =>{
    let index = usuarios.findIndex(usuario => usuario.id == req.params.id)
    usuarios[index].nome = req.body.nome
    usuarios[index].email = req.body.email
    res.send(usuarios)
})

//Função para deletar usuário
app.delete('/usuarios/:id', (req, res) =>{
    let index = usuarios.findIndex(usuario => usuario.id == req.params.id)
    usuarios.splice(index, 1)
    res.send(`Usuário com id ${req.params.id} deletado com sucesso`)
})





//Funções para retornar seleções e usuários


app.get('/usuarios', (req, res) =>{
    res.status(200).json(usuarios)
})




export default app;