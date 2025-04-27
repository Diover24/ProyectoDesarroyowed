import { getConnection } from "../config/Connection.js";
import { getAllT } from "../controller/MytaxesController.js";
import express from 'express'
const router = express.Router()
router.get('/Mytaxes', getAllT, (req, res) => {
    res.send('Lista de impuestos');
});
export default router;