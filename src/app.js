import express from 'express';
import selecaoRoutes from './app/routes/selecaoRoutes.js';
import swaggerMiddleware from './app/doc/swaggerConfig.js';


const app = express();

app.use(express.json());
app.use(express.static('src/public'));

app.use('/selecoes', selecaoRoutes);
app.use('/api-docs', swaggerMiddleware);

export default app;
