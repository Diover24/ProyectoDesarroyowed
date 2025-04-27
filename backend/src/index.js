import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { getConnection } from './config/Connection.js'
import router from './routes/MyTaxesRoutes.js'
import { getAllTaxes } from './model/MyTaxes.js'

dotenv.config()




const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router);

app.listen(process.env.PORT,()=>{
    console.log(`CONECTADOS AL PUERTO: ${process.env.PORT}`)
    getConnection
})