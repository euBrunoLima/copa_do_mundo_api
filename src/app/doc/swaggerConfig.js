import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import express from 'express';

const router = express.Router();

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Seleções',
      version: '1.0.0',
      description: 'Documentação da API de Seleções',
    },
    servers: [
      {
        url: 'http://localhost:3100',
      },
    ],
  },
  apis: ['./src/app/routes/*.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
router.use(swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocs));

export default router;
