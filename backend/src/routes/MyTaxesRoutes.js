
import { getAllT, AddTaxes,DeleteTaxes } from '../controller/MyTaxesController.js';
import express from 'express';
const router = express.Router();
router.post('/Mytaxes', getAllT);
router.post('/Addtaxes', AddTaxes);
router.post('/Deletetaxes', DeleteTaxes);
export default router;
