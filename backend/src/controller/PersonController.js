import { findPersonByCedula, createPerson } from '../model/Person.js';

export const registerPerson = async (req, res) => {
    const { ID_cards, first_name, middle_name, first_surname, second_surname, number, mail, address } = req.body;
    
    try {
        console.log(req.body)
        const personExists = await findPersonByCedula(ID_cards);
        if (personExists) {
            return res.status(400).json({  message: 'La cédula ya está registrada.' });
        }
        console.log("paso a crear")
        await createPerson({ ID_cards, first_name, middle_name, first_surname, second_surname, number, mail, address });
        res.status(201).json({  message: 'Usuario registrado exitosamente.' });

    } catch (error) {
        res.status(500).json({  message: 'Error en el registro.', error: error.message });
    }
};
