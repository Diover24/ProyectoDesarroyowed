import React, { useState, useEffect } from 'react'
import axios from 'axios';
export default function MyTaxes() {
    const [mostrarFormularioVehiculo, setMostrarFormularioVehiculo] = useState(true);
    const [mostrarTaxesPredial, setMostrarTaxesPresial] = useState(true);
    const [taxes, setTaxes] = useState([])
    const [error, setError] = useState('')
    const [taxesForm, setTaxesForm] = useState({
        filtros: '',
        search: ''
    });
    const handleTaxesChange = (e) => {
        setTaxesForm({
            ...taxesForm,
            [e.target.id]: e.target.value
        })
    }
    const handleTaxesSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post('http://localhost:3000/api/Mytaxes', taxesForm);
            const data = response.data;
            console.log("va")
            alert(data.message);
            console.log('Datos enviados correctamente:', data);
            setTaxes(data)
            if (filtros.value === 'Predial') {
                setMostrarTaxesPresial(false)
                setMostrarFormularioVehiculo(true)
            }
            else if (filtros.value === 'Vehiculos') {
                setMostrarTaxesPresial(true)
                setMostrarFormularioVehiculo(false)
            }
            else {

            }
        } catch (error) {
            if (error.response) {
                const status = error.response.status;
                const data = error.response.data;
                if (status === 400) {
                    alert('El Usuario o la contraseña son incorrectas');
                } else if (status === 500) {
                    alert(`Error interno del servidor`);
                } else {
                    const data = error.response.data;
                    alert(`Error ${status}: ${data.message || 'Algo salió mal'}`);
                }
            } else {
                alert('Error de red: No se pudo conectar al servidor');
            }
        }
    };
    useEffect((p) => {
        fecthTaxes()
    }, [])

    const fecthTaxes = async (data) => {
        try {
            const response = await axios.get('http://localhost:3000/api/LoginUser');
            setTaxes(response)
        } catch (error) {
            setError(error)
        }

    }
    return (
        <div>
            <div className="container " id='MyTaxes'>
                <form className=" container-fluid d-flex  " role="search" onSubmit={handleTaxesSubmit}>

                    <div className='mt-3 mb-3  '>

                        <select className="select form-select-lg" id="filtros" value={taxesForm.filtros} onChange={handleTaxesChange}>
                            <option value="0">Agregar Filtro</option>
                            <option value="Predial">Predial</option>
                            <option value="Vehiculos">Vehiculos</option>
                            <option value="Todos">Todo</option>
                        </select>


                    </div>
                    <div className='ms-auto mt-3 mb-3'>
                        <input className="form-control-lg   " type="search" placeholder="Search" aria-label="Search" id='search' value={taxesForm.search} onChange={handleTaxesChange} />
                    </div>
                    <div className='' >

                        <button className="btn btn-dark btn-lg mt-3 mb-3" type="submit">Search</button>
                    </div>

                </form>
                {!mostrarFormularioVehiculo ? (
                    <>
                        <h1 className='text-center mt-e'>Vehiculos</h1>
                        <table className="table table-striped">
                            <thead>
                                <tr className='text-center'>
                                    <th scope="col">Cilindraje</th>
                                    <th scope="col">Fecha Limite</th>
                                    <th scope="col"> Tipo de Vehiculo</th>
                                    <th scope="col">Pago</th>
                                    <th scope="col">Placa</th>
                                    <th scope="col">Tipo De Impuesto</th>
                                    <th scope="col">Nombre</th>
                                </tr>
                            </thead>
                            <tbody>


                                {taxes.map((p) =>

                                    <tr key={p.Placa} className='text-center'>

                                        <td scope="row">{p.Cilindraje}</td>
                                        <td scope="row"><span>
                                            {new Intl.DateTimeFormat('es-CO', { dateStyle: 'medium' }).format(new Date(p.Fecha_Limite))}
                                        </span></td>
                                        <td scope="row">{p.NombreVehiculo}</td>
                                        <td scope="row">{p.Pago}</td>
                                        <td scope="row">{p.Placa}</td>
                                        <td scope="row">{p.TipoDeImpuesto}</td>
                                        <td scope="row"><button className="btn btn-dark">Editar</button></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </>



                ) : (
                    <div className='container mt-3'>
                        <p>Tambien Puesdes buscar por la placa o por medio de la Dirrecccion de la casa desde el buscador</p>
                    </div>


                )}
                {!mostrarTaxesPredial ? (
                    <>
                        <h1 className='text-center mt-e'>Predial</h1>
                        <table className="table table-striped">
                            <thead>
                                <tr className='text-center'>
                                    <th scope="col">Direccion</th>
                                    <th scope="col">Fecha Limite</th>
                                    <th scope="col">Metros Cuadrados</th>
                                    <th scope="col">Pago</th>
                                    <th scope="col">Tipo De Impuesto</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>


                                {taxes.map((p) =>

                                    <tr key={p.Placa} className='text-center'>

                                        <td scope="row">{p.Direcion}</td>
                                        <td scope="row"><span>
                                            {new Intl.DateTimeFormat('es-CO', { dateStyle: 'medium' }).format(new Date(p.Fecha_Limite))}
                                        </span></td>
                                        <td scope="row">{p.Metros_Cuadrados}</td>
                                        <td scope="row">{p.Pago}</td>
                                        <td scope="row">{p.TipoDeImpuesto}</td>
                                        <td scope="row"><button className="btn btn-dark">Editar</button></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                    </>


                ) : (
                    <div className='container mt-3'>
                        <h5>Nota</h5>
                        <p>Tambien Puesdes buscar por la placa o por medio de la Dirrecccion de la casa desde el buscador</p>
                    </div>


                )}


            </div>


        </div>
    )
}
