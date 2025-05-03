import { getAllT } from '../controller/MyTaxesController.js';
import express from 'express';
const router = express.Router();
router.post('/Mytaxes', getAllT);

export default router;
