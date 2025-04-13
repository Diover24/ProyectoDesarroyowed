import React, { useState } from 'react'
export default function Create_an_account() {
    const [mostrarSegundoFormulario, setMostrarSegundoFormulario] = useState(false);
    return (

        <div className='container ' id='form'>
            <h1 className='text-decoration-underline'>Registro</h1>
            {!mostrarSegundoFormulario ? (
                <form className="row g-3 align-items-center" id='FormPrin'>
                    <div className='row mt-4 mb-3'>
                        <div className="col ">
                            <label for="PNombre" className="form-label">Primer Nombre</label>
                            <input type="text" className="form-control " id="PNombre" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col ">
                            <label for="SNombre" className="form-label">Segundo Nombre</label>
                            <input type="text" className="form-control " id="SNombre"  />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className="col">
                            <label for="PAllido" className="form-label">Primer Apellido</label>
                            <input type="text" className="form-control " id="PApellido" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col">
                            <label for="SApellido" className="form-label">Segundo Apellido</label>
                            <input type="text" className="form-control " id="SApellido"  />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className="col">
                            <label for="Cedula" className="form-label">Cedula</label>
                            <input type="number" className="form-control " id="Cedula" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col">
                            <label for="Telefono" className="form-label">Celular</label>
                            <input type="number" className="form-control " id="Telefono" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className="col">
                            <label for="Correo" className="form-label">Correo</label>
                            <input type="email" className="form-control " id="Correo" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col">
                            <label for="Dirrecccion" className="form-label">Dirreccion</label>
                            <input type="text" className="form-control " id="Dirrecion" required />
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
                            <button className="btn btn-primary " type="submit" onClick={() => setMostrarSegundoFormulario(true)}>Continuar</button>
                        </div>
                    </div>
                </form>
            ) : (
                <form id='NextForm'>
                    <div className='container '>
                        <div className='row'>
                            <div class="col mb-3">
                                <label for="User" className="form-label">Username</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="User">@</span>
                                    <input type="text" className="form-control " id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                                    <div id="validationServerUsernameFeedback" className="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='row'>

                            <div className="col">
                                <label for="Dirrecccion" className="form-label">Contraseña</label>
                                <input type="password" className="form-control " id="Contraseña" required />
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className="col">
                                <label for="Dirrecccion" className="form-label">Ingresa nuevamente la Contraseña</label>
                                <input type="password" className="form-control " id="Confirmada" required />
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
