import React, { useState } from 'react'
import axios from 'axios'
export default function Create_an_account() {
    const [mostrarSegundoFormulario, setMostrarSegundoFormulario] = useState(false);
    const [personForm, setPersonForm] = useState({
        first_name: '',
        middle_name: '',
        first_surname: '',
        second_surname: '',
        ID_cards: '',
        number: '',
        mail: '',
        address: ''
    });
    const [userForm, setUserForm] = useState({
        Username: '',
        Password: '',
        PasswordConfirmation: ''
    });

    const handlePersonChange = (e) => {
        setPersonForm({
            ...personForm,
            [e.target.id]: e.target.value
        });

    };

    const handleUserChange = (e) => {
        setUserForm({
            ...userForm,
            [e.target.id]: e.target.value
        })

    }

    const handlePersonSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/CreatePerson', personForm)


            const data = response.data;
            console.log('Datos enviados correctamente:', data);
            setMostrarSegundoFormulario(true);

        } catch (error) {
            if (error.response) {
                const status = error.response.status;
                if (status === 400) {
                    alert('El usuario ya se encuentra registrado intenta con otro.');
                } else if (status === 500) {
                    alert('Error 500: Error interno del servidor. Inténtalo más tarde.');
                } else {
                    alert(`Error ${status}: Algo salió mal.`);
                }

                throw new Error('Error al enviar los datos');
            }
            console.error('Error al enviar los datos:', error);
        }
    };
    const handleUserSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/CreateUser',userForm);
            const data = response.data;
            console.log('Datos enviados correctamente:', data);

            setMostrarSegundoFormulario(true);
        } catch (error) {
            if (error.response) {
                const status = error.response.status;
                if (status === 400) {
                    alert('El usuario ya se encuentra registrado intenta con otro.');
                } else if (status === 500) {
                    alert('Error 500: Error interno del servidor. Inténtalo más tarde.');
                } else {
                    alert(`Error ${status}: Algo salió mal.`);
                }

                throw new Error('Error al enviar los datos');
            }
            console.error('Error al enviar los datos:', error);
        }
    };
    return (
        <div className='container ' id='form'>
            <h1 className='text-decoration'>Registro</h1>
            {!mostrarSegundoFormulario ? (
                <form className="row g-3 align-items-center" id='FormPrin' onSubmit={handlePersonSubmit}>
                    <div className='row mt-4 mb-3'>
                        <div className="col ">
                            <label for="PNombre" className="form-label">Primer Nombre</label>
                            <input type="text" className="form-control " id="first_name" required value={personForm.first_name} onChange={handlePersonChange} />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col ">
                            <label for="SNombre" className="form-label">Segundo Nombre</label>
                            <input type="text" className="form-control " id="middle_name" value={personForm.middle_name} onChange={handlePersonChange} />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className="col">
                            <label for="PAllido" className="form-label">Primer Apellido</label>
                            <input type="text" className="form-control " id="first_surname" required value={personForm.first_surname} onChange={handlePersonChange} />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col">
                            <label for="SApellido" className="form-label">Segundo Apellido</label>
                            <input type="text" className="form-control " id="second_surname" value={personForm.second_surname} onChange={handlePersonChange} />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className="col">
                            <label for="Cedula" className="form-label">Cedula</label>
                            <input type="number" className="form-control " id="ID_cards" required value={personForm.ID_cards} onChange={handlePersonChange} />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col">
                            <label for="Telefono" className="form-label">Celular</label>
                            <input type="number" className="form-control " id="number" required value={personForm.number} onChange={handlePersonChange} />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className="col">
                            <label for="Correo" className="form-label">Correo</label>
                            <input type="email" className="form-control " id="mail" required value={personForm.mail} onChange={handlePersonChange} />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col">
                            <label for="Dirrecccion" className="form-label">Dirreccion</label>
                            <input type="text" className="form-control " id="address" required value={personForm.address} onChange={handlePersonChange} />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                    </div>
                    {/**/}
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input-group " type="checkbox" value="" id="TyC" aria-describedby="invalidCheck3Feedback" required />
                            <label className="form-check-label " for="TyC">
                                Aceptar terminos y condiciones
                            </label>
                            <div id="invalidCheck3Feedback" className="invalid-feedback" >
                                You must agree before submitting.
                            </div>
                        </div>
                        <div className="col-12 ">
                            <button className="btn btn-primary " type="submit" id='register_person' >Continuar</button>
                        </div>
                    </div>
                </form>
            ) : (
                <form id='NextForm' onSubmit={handleUserSubmit}>
                    <div className='container '>
                        <div className='row'>
                            <div class="col mb-3">
                                <label for="User" className="form-label">Username</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="User">@</span>
                                    <input type="text" className="form-control " id="Username" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required value={userForm.Username} onChange={handleUserChange} />
                                    <div id="validationServerUsernameFeedback" className="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='row'>

                            <div className="col mb-3">
                                <label for="Dirrecccion" className="form-label">Contraseña</label>
                                <input type="password" className="form-control " id="Password" required value={userForm.Password} onChange={handleUserChange} />
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className="col">
                                <label for="Dirrecccion" className="form-label">Ingresa nuevamente la Contraseña</label>
                                <input type="password" className="form-control " id="PasswordConfirmation" required value={userForm.PasswordConfirmation} onChange={handleUserChange} />
                            </div>
                        </div>

                        <div className="col-12 ">
                            <button className="btn btn-primary " type="submit">Continuar</button>
                        </div>


                    </div>
                    <div className='text-start'>
                        <button className="btn btn-primary  " type="button" onClick={() => setMostrarSegundoFormulario(false)}>Atras</button>
                    </div>

                </form>
            )}
            <h1> colocar en el js: is-invalid/ is-valid</h1>

        </div>

    )
}
