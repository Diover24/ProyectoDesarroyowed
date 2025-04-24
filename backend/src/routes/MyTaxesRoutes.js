import { getConnection } from "../config/Connection.js";
import express from 'express'
const router = express.Router()
router.get('/', getAllT)