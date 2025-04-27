import { getConnection } from "../config/Connection.js";

const getAllTaxes = async ()=>{
    const con = await getConnection
    const result = await con.request().query(`SELECT * FROM Impuesto`)
    if (result.recordset.length > 0) {
        console.log("tenemos datos sisis")
    }
    else{
        console.log("no hay datos")
    }
    return result.recordset;
}
export {getAllTaxes}