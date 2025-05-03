import express from 'express';
import { registerUser,LoginUser } from '../controller/UserController.js';

const router = express.Router();

router.post('/CreateUser', registerUser);
router.post('/LoginUser', LoginUser);

export default router;
