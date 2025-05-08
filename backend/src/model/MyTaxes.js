import { getConnection } from '../config/Connection.js';
import UserDto from "../dto/UserDto.js";
const getAllTaxes = async (filtros, search) => {
    try {

        const pool = await getConnection;
        switch (filtros) {

            case 'Todos':
                console.log("todo")
                const resultV = await pool
                    .request()
                    .input('id', UserDto.IdPerson)
                    .execute('MostrarImpuestosVehiculo');

                console.log(UserDto.IdPerson)
                const resultp = await pool
                    .request()
                    .input('id', UserDto.IdPerson)
                    .execute('MostrarImpuestosPredial');
                console.log(UserDto.IdPerson)
                return {
                    vehiculos: resultV.recordset,
                    predial: resultp.recordset
                  };
            case 'Predial':

                const Predial = await pool
                    .request()
                    .input('id', UserDto.IdPerson)
                    .execute('MostrarImpuestosPredial');
                console.log(UserDto.IdPerson)
                return {
                    predial: Predial.recordset
                };
            case 'Vehiculos':
                const Vehiculos = await pool
                    .request()
                    .input('id', UserDto.IdPerson)
                    .execute('MostrarImpuestosVehiculo');
                console.log(UserDto.IdPerson);
                return {
                    vehiculos: Vehiculos.recordset
                };
            default:
                console.log("todo")
                const resultVc = await pool
                    .request()
                    .input('id', UserDto.IdPerson)
                    .execute('MostrarImpuestosVehiculo');

                console.log(UserDto.IdPerson)
                const resultP = await pool
                    .request()
                    .input('id', UserDto.IdPerson)
                    .execute('MostrarImpuestosPredial');
                console.log(UserDto.IdPerson)
                return {
                    vehiculos: resultVc.recordset,
                    predial: resultP.recordset
                  };
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