import { getConnection } from '../config/Connection.js';
import UserDto from '../dto/UserDto.js';
export const findPersonByCedula = async (cedula) => {
    const pool = await getConnection

    console.log("entro al validador de cedula")
    const result = await pool
        .request()
        .input('ID_cards', cedula)
        .query(`SELECT * FROM Persona WHERE Cedula = @ID_cards`);
    console.log("paso el validador")
    return result.recordset.length > 0;
};

export const createPerson = async (personData) => {

    const { ID_cards, first_name, middle_name, first_surname, second_surname, number, mail, address } = personData;
    const pool = await getConnection
    console.log("entro a crear Persona")
    let Estado = "activo";
    await pool
        .request()
        .input('ID_cards', ID_cards)
        .input('first_name', first_name)
        .input('middle_name', middle_name)
        .input('first_surname', first_surname)
        .input('second_surname', second_surname)
        .input('number', number)
        .input('mail', mail)
        .input('address', address)
        .query(`INSERT INTO Persona (Estado, Cedula, Nombre1, Nombre2, Apellido1, Apellido2, Telefono, Correo, Direccion)
        VALUES ('${Estado}',@ID_cards, @first_name, @middle_name, @first_surname, @second_surname, @number, @mail, @address)`);
    const result = await pool
        .request()
        .input('ID_cards', ID_cards)
        .query(`SELECT * FROM Persona WHERE Cedula = @ID_cards`);
    const datosUsuario = result.recordset[0];
    UserDto.IdPerson = datosUsuario.IdPerson;
    console.log(UserDto.IdPerson)
};
