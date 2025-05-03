import { getConnection } from '../config/Connection.js';
import UserDto from "../dto/UserDto.js";
const getAllTaxes = async (filtros, search) => {
    try {
        
        const pool = await getConnection;
        switch (filtros) {

            case 'todos':
                if (search != null) {
                    const result = await pool
                        .request()
                        .input('IdPerson', sql.Int, UserDto.IdPerson)
                        .execute('sp_MostrarImpuestosVehiculo');

                }
                break;
            case 'Predial':
                
                const Predial = await pool
                    .request()
                    .input('id', UserDto.IdPerson)
                    .execute('MostrarImpuestosPredial');
                console.log(UserDto.IdPerson)
                return Predial.recordset
            case 'Vehiculos':
                const Vehiculos = await pool
                    .request()
                    .input('id', UserDto.IdPerson)
                    .execute('MostrarImpuestosVehiculo');
                console.log(UserDto.IdPerson)
                return Vehiculos.recordset
            case 'Moto':

                break;

            default:
                break;
        }
    } catch (error) {

    }

    const result = await pool.request().query(`SELECT * FROM Persona`)

    if (result.recordset.length > 0) {
        console.log("tenemos datos sisis")
    }
    else {
        console.log("no hay datos")
    }
    return result.recordset;
}
export { getAllTaxes }