import express from 'express';
import selecaoRoutes from './app/routes/selecaoRoutes.js'

const app = express();

//Indica que o express deve interpretar o body da requisição como JSON
app.use(express.json())
app.use(express.static('src/public'))

app.use("/selecoes", selecaoRoutes)

export default app;
