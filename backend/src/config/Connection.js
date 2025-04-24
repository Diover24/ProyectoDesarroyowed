import sql, { pool } from 'mssql'
import dotenv from 'dotenv'
dotenv.config()

const stringConnection ={
    user:  process.env.USER,
    password : process.env.PASSWORD,
    server : process.env.SERVER,
    database: process.env.DATABASE,
    Options : {
        trusServerCertificate : true,
    }
}
const getConnection = new sql.ConnectionPool(stringConnection)
.connect()
.then(pool =>{
    console.log('lloro')
    return pool
})
.catch(err => console.log('ERROR ',err))
export {sql, getConnection}
    