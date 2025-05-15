import { getConnection } from "../config/Connection.js";
import { getAllTaxes } from "../model/MyTaxes.js";

const getAllT = async (req, res) => {
    const { filtros, search } = req.body;
    console.log(req.body)

    try {
        const Taxes = await getAllTaxes(filtros, search)
        const hayDatos = Object.values(Taxes).some(
            (registro) => Array.isArray(registro) && registro.length > 0
        );

        if (!hayDatos) {
            return res.status(400).json({ message: 'No se encontraron registros.' });
        }
        return res.json(Taxes);
    } catch (error) {
        res.status(500).json({ message: "error" })
    }
}
export { getAllT }
const AddTaxes = async (req, res) => {
    const { Total, Fecha_Limite, Nombre, NombreVe, Placa, Cilindraje, Direccion, Metros_Cuadrados, filtros } = req.body;
    console.log(req.body)
    try {
        const Taxes = await AddTaxes(Total, Fecha_Limite, Nombre, NombreVe, Placa, Cilindraje, Direccion, Metros_Cuadrados, filtros)
        return res.status(400).json({ message: 'No se encontraron registros.' });

        return res.json(Taxes);
    } catch (error) {
        res.status(500).json({ message: "error" })
    }

}
export { AddTaxes }
const DeleteTaxes = async (req, res) => {
    const { filtros,Edit,IdVehiculo } = req.body;
    console.log(req.body)

    try {
        const Taxes = await UpdateTaxes(filtros,Edit,IdVehiculo)
        return res.json(Taxes);
    } catch (error) {
        res.status(500).json({ message: "error" })
    }
}
export { DeleteTaxes}

