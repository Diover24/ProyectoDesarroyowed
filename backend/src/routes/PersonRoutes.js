
import express from 'express';
import { extractPersonModel, registerPerson, } from '../controller/PersonController.js';

const router = express.Router();

router.post('/CreatePerson', registerPerson);
router.get('/findPersonByID',extractPersonModel);

export default router;
