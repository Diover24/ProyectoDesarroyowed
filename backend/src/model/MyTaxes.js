import { getConnection } from '../config/Connection.js';
import UserDto from '../dto/UserDto.js';
import IdDto from '../dto/IdDto.js';

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
                if (search != '') {

                    const Predial = await pool
                        .request()
                        .inputc('ID', UserDto.IdPerson)
                        .input('PLACA', '')
                        .input('DIRECCION', search)
                        .execute('VERIMPUESTO');
                    console.log("buscador", UserDto.IdPerson)
                    console.log(Predial.recordset)
                    return {
                        predial: Predial.recordset
                    };
                }
                const Predial = await pool
                    .request()
                    .input('id', UserDto.IdPerson)
                    .execute('MostrarImpuestosPredial');
                console.log(UserDto.IdPerson)
                return {
                    predial: Predial.recordset
                };

            case 'Vehiculos':
                if (search != '') {
                    const Vehiculos = await pool
                        .request()
                        .input('ID', UserDto.IdPerson)
                        .input('PLACA', search)
                        .input('DIRECCION', '')
                        .execute('VERIMPUESTO');
                    console.log("buscador", UserDto.IdPerson)
                    console.log(Vehiculos.recordset)
                    return {
                        vehiculos: Vehiculos.recordset
                    };
                }
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
        }
    } catch (error) {

    }
}
export const findCarByPlaca = async (Placa) => {
    const pool = await getConnection
    console.log("entro al validador de la placa")
    const result = await pool
        .request()
        .input('Placa', Placa)
        .query(`SELECT * FROM Vehiculo WHERE Placa = @Placa`);
    console.log("paso el validador")
    return result.recordset.length > 0;
};
export { getAllTaxes }
const AddTaxes = async (personForm) => {
    const { Total, Fecha_Limite, Nombre, NombreVe, Placa, Cilindraje, Direccion, Metros_Cuadrados, filtros } = personForm;

    const pool = await getConnection

    console.log("entro al validador de cedula")


    try {
        const pool = await getConnection
        console.log("entro a crear Persona")
        switch (filtros) {
            case 'Vehiculo':
                findCarByPlaca(Placa);
                if (result.recordset.length > 0) {
                    const datosVehiculo = result.recordset[0];
                    IdDto.IdVehiculo = datosVehiculo.IdVehiculofk;
                    await pool
                        .request()
                        .input('IdVehiculofk', IdDto.IdVehiculo)
                        .input('Nombre', Nombre)
                        .query(`INSERT INTO Tipo_De_Impuesto (IdVehiculofk,IdPredialfk,Nombre)
                        VALUES (@IdVehiculofk,NULL, @Nombre)`);
                    return res.status(200).json({ message: 'No se encontraron registros.' });
                } else {
                    console.log("teo")
                    await pool
                        .request()
                        .input('Nombre', NombreVe)
                        .input('Placa', Placa)
                        .input('Cilindraje', Cilindraje)
                        .query(`INSERT INTO Persona (Nombre, Placa, Cilindraje)
                        VALUES (@Nombre, @Placa, @Cilindraje)`);
                    findCarByPlaca(Placa);
                    const datosVehiculo = result.recordset[0];
                    IdDto.IdVehiculo = datosVehiculo.IdVehiculofk;
                    console.log(IdDto.IdVehiculo)
                    await pool
                        .request()
                        .input('IdVehiculofk', IdDto.IdVehiculo)
                        .input('Nombre', Nombre)
                        .query(`INSERT INTO Tipo_De_Impuesto (IdVehiculofk,IdPredialfk,Nombre)
                        VALUES (@IdVehiculofk,NULL, @Nombre)`);
                }


                break;
            case 'Predial':

                break;
            default:
                break;
        }
        const result = await pool
            .request()
            .input('ID_cards', ID_cards)
            .query(`SELECT * FROM Persona WHERE Cedula = @ID_cards`);
        const datosUsuario = result.recordset[0];
        UserDto.IdPerson = datosUsuario.IdPerson;
        console.log(UserDto.IdPerson)
    } catch (error) {

    }
}
export { AddTaxes }

export const UpdatePlaca = async (IdVehiculo,Edit) => {
    const pool = await getConnection
    console.log("entro al validador de la placa")
    const resultVc = await pool
        .request()
        .input('id', IdVehiculo)
        .input('placa', Edit)
        .query('Update Vehiculo SET Placa=@placa WHERE IdVehiculo=id');
    console.log("paso el validador")
};
export const Updateclindraje = async (IdVehiculo,Edit) => {
    const pool = await getConnection
    console.log("entro al validador de la placa")
    const resultVc = await pool
        .request()
        .input('id', IdVehiculo)
        .input('Cilindraje', Edit)
        .query('Update Vehiculo SET Cilindraje=@Cilindraje WHERE IdVehiculo=id');
    console.log("paso el validador")
};
export const UpdateTaxes = async (filtros,IdVehiculo,Edit) => {
    switch (filtros) {
        case 'placa':
            UpdatePlaca(IdVehiculo,Edit);
            break;
        case 'Cilingraje':
            Updateclindraje(IdVehiculo,Edit);
            break;
    }
};