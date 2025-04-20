import express from 'express';
import SelecaoController from '../controllers/SelecaoController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Seleções
 *   description: Endpoints da API para gerenciar seleções
 */

/**
 * @swagger
 * /selecoes:
 *   post:
 *     summary: Cadastrar uma nova seleção
 *     tags: [Seleções]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               grupo:
 *                 type: string
 *     responses:
 *       200:
 *         description: Seleção criada com sucesso
 */
router.post('/', SelecaoController.store);

/**
 * @swagger
 * /selecoes:
 *   get:
 *     summary: Listar todas as seleções
 *     tags: [Seleções]
 *     responses:
 *       200:
 *         description: Lista de seleções
 */
router.get('/', SelecaoController.index);

/**
 * @swagger
 * /selecoes/{id}:
 *   get:
 *     summary: Buscar uma seleção por ID
 *     tags: [Seleções]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Seleção encontrada
 *       404:
 *         description: Seleção não encontrada
 */
router.get('/:id', SelecaoController.show);

/**
 * @swagger
 * /selecoes/{id}:
 *   put:
 *     summary: Atualizar uma seleção pelo ID
 *     tags: [Seleções]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               grupo:
 *                 type: string
 *     responses:
 *       200:
 *         description: Seleção atualizada com sucesso
 */
router.put('/:id', SelecaoController.update);

/**
 * @swagger
 * /selecoes/{id}:
 *   delete:
 *     summary: Deletar uma seleção pelo ID
 *     tags: [Seleções]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Seleção deletada com sucesso
 */
router.delete('/:id', SelecaoController.delete);

/**
 * @swagger
 * /selecoes/grupo/{grupo}:
 *   get:
 *     summary: Buscar seleções por grupo
 *     tags: [Seleções]
 *     parameters:
 *       - name: grupo
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de seleções do grupo
 */
router.get('/grupo/:grupo', SelecaoController.showGrupo);

export default router;
