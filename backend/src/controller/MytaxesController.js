import { getConnection } from "../config/Connection.js";
import { getAllTaxes } from "../model/MyTaxes.js";

const getAllT = async (req, res) =>{
    const { filtros, search } = req.body;
    console.log(req.body)
    try {
        const Taxes = await getAllTaxes(filtros,search)
        res.json(Taxes)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
export {getAllT}