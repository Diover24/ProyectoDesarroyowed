import { getConnection, sql } from '../config/Connection.js';
import UserDto from '../dto/UserDto.js';

export const findUserByUser = async (User) => {
    const pool = await getConnection
    const result = await pool
        .request()
        .input('Username', User)
        .query(`SELECT * FROM Usuario WHERE Usuario = @Username`);
    return result.recordset.length > 0;
};

export const createUser = async (userData) => {
    const { Username, Password, PasswordConfirmation } = userData;
    console.log("Entro a crear usuario");
    const pool = await getConnection
    let Rol = "Parther";
    console.log(UserDto.IdPerson)
    if (Password == PasswordConfirmation) {
        await pool
            .request()
            .input('userName', Username)
            .input('Password', Password)
            .query(`INSERT INTO Usuario (Usuario,Contraseña,Rol,IdPersonfk)
        VALUES(@userName, @Password, '${Rol}', '${UserDto.IdPerson}')`);
    }
    else {
        return res.status(400).json({ message: 'La contraseña no coninciden.' });
    }

};
export const loginUser = async (userData) => {
    const { Username, Password } = userData;
    console.log("Entro a validar usuario");
    const pool = await getConnection
    const result = await pool
        .request()
        .input('Username', Username)
        .input('Password', Password)
        .query(`SELECT * FROM Usuario WHERE Usuario= @Username AND Contraseña = @Password `);


    if (result.recordset.length > 0) {
        const datosUsuario = result.recordset[0];
        if (datosUsuario.Usuario === Username) {
            console.log("si esta el usuario")

            UserDto.IdUser = datosUsuario.IdUser;
            UserDto.IdUser = datosUsuario.IdUser;
            UserDto.User = datosUsuario.Usuario;
            UserDto.Password = datosUsuario.Contraseña;
            UserDto.Rol = datosUsuario.Rol;
            UserDto.IdPerson = datosUsuario.IdPersonfk;
            result.recordset.forEach((item) => {
                console.log(item);

            });

            console.log(UserDto.IdPerson);
            return result.recordset
        }

    }
    else {
        console.log("no se encuentra")
    }

};
