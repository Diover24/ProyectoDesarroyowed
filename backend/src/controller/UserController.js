import userDto from "../dto/UserDto.js";
import { findUserByUser, createUser, loginUser } from "../model/User.js";

export const registerUser = async (req, res) => {
    const { Username, Password, PasswordConfirmation } = req.body;

    try {
        console.log(req.body)
        const UserExists = await findUserByUser(Username);
        if (UserExists) {
            return res.status(400).json({ message: 'El usuario ya está registrada.' });
        }
        console.log("paso a crear")
        await createUser({ Username, Password, PasswordConfirmation }, userDto);
        res.status(201).json({ message: 'Usuario registrado exitosamente.' });

    } catch (error) {
        res.status(500).json({ message: 'Error en el registro.', error: error.message });
    }
};
export const LoginUser = async (req, res) => {
    const { Username, Password } = req.body;

    try {
        console.log(req.body)
        console.log("paso a validar")
        const result = await loginUser({Username, Password});
        if (result) {
            console.log("valido")
            return res.status(201).json({ message: 'validado correctamente.' });
        }
        else{
            return res.status(400).json({ message: 'El usuario o la contraseña es incorrecta.' });
        }
        

    } catch (error) {
        res.status(500).json({ message: 'Error en el registro.', error: error.message });
    }
};