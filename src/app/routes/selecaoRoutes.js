import express from 'express';

import SelecaoController from '../controllers/SelecaoController.js';

const router = express.Router();

router.post('/', SelecaoController.store)
router.get('/', SelecaoController.index)
router.get('/:id', SelecaoController.show)
router.put('/:id', SelecaoController.update)
router.delete('/:id', SelecaoController.delete)
router.get('/grupo/:grupo', SelecaoController.showGrupo)


export default router;