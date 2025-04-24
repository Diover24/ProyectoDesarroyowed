import { getConnection } from "../config/Connection.js";

const getAllTaxes = async ()=>{
    const con = await getConnection
    const result = await con.request().querry(`SELECT * FROM Impuestos`)

}
export {getAllTaxes}