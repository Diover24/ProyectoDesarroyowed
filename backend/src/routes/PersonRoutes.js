
import express from 'express';
import { registerPerson } from '../controller/PersonController.js';

const router = express.Router();

router.post('/CreatePerson', registerPerson);

export default router;
