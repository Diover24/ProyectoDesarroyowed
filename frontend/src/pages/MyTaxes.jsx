import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
export default function MyTaxes() {
    const [mostrarFormularioVehiculo, setMostrarFormularioVehiculo] = useState(true);
    const [mostrarTaxesPredial, setMostrarTaxesPresial] = useState(true);
    const [mostrarEditPredial, setMostrarEditPresial] = useState(true);
    const [mostrarEditVehiculo, setMostrarEditVehiculo] = useState(true);
    const [mostrarNota, setMostrarNota] = useState(false);
    const [taxesVehiculos, setTaxesVehiculos] = useState([])
    const [taxesPredial, setTaxesPredial] = useState([])
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
    const handleEditChange = (e) => {
        setEditForm({
            ...EditForm,
            [e.target.id]: e.target.value
        })
    }
    const [EditForm, setEditForm] = useState({
        Edit: '',
        filtros: ' '
    });
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/LoginUser',EditForm);
            
        } catch (error) {
            setError(error)
        }
    }
    const handleTaxes = () => {
        e.preventDefault();
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, edit it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const response = axios.post('http://localhost:3000/api/Deletetaxes',EditForm,IdVehiculo);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    const handleTaxesSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post('http://localhost:3000/api/Mytaxes', taxesForm);
            console.log(response.data)
            const data = response.data;
            console.log("va");
            setMostrarNota(true)
            switch (taxesForm.filtros) {
                case 'Predial':
                    setTaxesPredial(data.predial);
                    setMostrarTaxesPresial(false)
                    setMostrarFormularioVehiculo(true)
                    console.log("si envios")
                    break;

                case 'Vehiculos':
                    setTaxesVehiculos(data.vehiculos);
                    setMostrarTaxesPresial(true)
                    setMostrarFormularioVehiculo(false)

                    break;
                case 'Todos':
                    setTaxesVehiculos(data.vehiculos);
                    setTaxesPredial(data.predial);
                    setMostrarTaxesPresial(false)
                    setMostrarFormularioVehiculo(false)
                    break;
            }
        } catch (error) {
            if (error.response) {
                const status = error.response.status;
                const data = error.response.data;
                if (status === 400) {
                    alert(data.message);
                } else if (status === 500) {
                    alert(data.message);
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
                {!mostrarNota ? (
                    <div className="max-w-xl mx-auto mt-8">
                        <div className="bg-gray-100 border border-gray-300 text-gray-800 px-6 py-4 rounded-lg shadow-sm">
                            <p className="text-center text-base">
                                Presiona <span className="font-semibold">Buscar</span> para consultar tus impuestos registrados.
                            </p>
                        </div><br />
                    </div>


                ) : true}
                {!mostrarFormularioVehiculo ? (
                    <>
                        <h1 className='text-center mt-3 '>Vehiculos</h1>
                        <table className="table table-striped mt-3">
                            <thead>
                                <tr className='text-center'>
                                    <th scope="col">Cilindraje</th>
                                    <th scope="col">Fecha Limite</th>
                                    <th scope="col"> Tipo de Vehiculo</th>
                                    <th scope="col">Pago</th>
                                    <th scope="col">Placa</th>
                                    <th scope="col">Tipo De Impuesto</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>


                                {taxesVehiculos.map((p) =>

                                    <tr key={p.IdImpu} className='text-center'>

                                        <td scope="row">{p.Cilindraje}</td>
                                        <td scope="row"><span>
                                            {new Intl.DateTimeFormat('es-CO', { dateStyle: 'medium' }).format(new Date(p.Fecha_Limite))}
                                        </span></td>
                                        <td scope="row">{p.NombreVehiculo}</td>
                                        <td scope="row">{p.Pago}</td>
                                        <td scope="row">{p.Placa}</td>
                                        <td scope="row">{p.Nombre}</td>
                                        <td scope="row"><button className="btn btn-dark">Pagar</button></td>
                                        <td scope="row"><button className="btn btn-dark"onClick={()=>setMostrarEditVehiculo(false)}>Eliminar</button></td>
                                    </tr>
                                )}
                            </tbody>
                        </table><br />
                    </>



                ) : true}
                {!mostrarTaxesPredial ? (
                    < div className=''>
                        <h1 className='text-center mt-3 '>Predial</h1>
                        <table className="table table-striped mb-3 mt-3">
                            <thead>
                                <tr className='text-center mb-3'>
                                    <th scope="col">Direccion</th>
                                    <th scope="col">Fecha Limite</th>
                                    <th scope="col">Metros Cuadrados</th>
                                    <th scope="col">Pago</th>
                                    <th scope="col">Tipo De Impuesto</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>


                                {taxesPredial.map((p) =>

                                    <tr key={p.IdImpu} className='text-center mb-3'>

                                        <td scope="row">{p.Direcion}</td>
                                        <td scope="row"><span>
                                            {new Intl.DateTimeFormat('es-CO', { dateStyle: 'medium' }).format(new Date(p.Fecha_Limite))}
                                        </span></td>
                                        <td scope="row">{p.Metros_Cuadrados}</td>
                                        <td scope="row">{p.Pago}</td>
                                        <td scope="row">{p.Nombre}</td>
                                        <td scope="row"><button className="btn btn-dark">Pagar</button></td>

                                    </tr>
                                )}
                            </tbody>
                        </table><br />

                    </div>


                ) : true}
                {!mostrarEditVehiculo ? (
                    <div>
                        <form className=" container-fluid d-flex  " role="search">

                            <div className='mt-3 mb-3  '>

                                <select className="select form-select-lg" id="filtros" value={EditForm.filtros} onChange={handleEditChange}>
                                    <option value="0">Seleccione</option>
                                    <option value="Placa">Placa</option>
                                    <option value="Nombre">Nombre</option>
                                    <option value="Clindraje">Clindraje</option>
                                </select>
                            </div>
                            <div className='ms-auto mt-3 mb-3'>
                                <input className="form-control-lg   " type="Text" placeholder="Search" aria-label="Search" id='Edit' value={EditForm.Edit} onChange={handleEditChange} />
                            </div>
                            <div className='' >
                                <button className="btn btn-dark btn-lg mt-3 mb-3" type="Button" onClick={() => handleTaxes(p.IdVehiculo)}>Confirmar</button>
                            </div>


                        </form>
                    </div>
                ) : true}



            </div>


        </div>
    )
}
