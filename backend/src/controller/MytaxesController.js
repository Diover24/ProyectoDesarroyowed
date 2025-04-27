import { getConnection } from "../config/Connection.js";
import { getAllTaxes } from "../model/MyTaxes.js";

const getAllT = async (req, res) =>{
    try {
        const Taxes = await getAllTaxes()
        res.json(Taxes)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
export {getAllT}