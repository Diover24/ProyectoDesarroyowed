import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { getConnection } from './config/Connection.js'
import MyTaxesRoutes from './routes/MyTaxesRoutes.js'
import PersonRoutes from './routes/PersonRoutes.js'
import UserRoutes from './routes/UserRouters.js'
dotenv.config()




const app = express()
app.use(cors());
app.use(express.json());

app.use('/api', MyTaxesRoutes); 
app.use('/api', PersonRoutes);
app.use('/api', UserRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`CONECTADOS AL PUERTO: ${process.env.PORT}`)
    getConnection

})