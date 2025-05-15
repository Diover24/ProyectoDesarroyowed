import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
export default function AddTaxes() {
  const [mostrarForm, setMostrarForm] = useState({
    filtros: ' '
  });
  const [personForm, setPersonForm] = useState({
    Total: '',
    Fecha_Limite: '',
    Nombre: '',
    NombreVe: '',
    Placa: '',
    Cilindraje: '',
    Direccion: '',
    Metros_Cuadrados: '',
    filtros: ' '
  });
  const handlePersonChange = (e) => {
    setPersonForm({
      ...personForm,
      [e.target.id]: e.target.value
    });


  };
  const handleSelectChange = (e) => {
    setMostrarForm(e.target.value);
    personForm.filtros
  };
  const [EditForm, setForm] = useState({
    Total: '',
    Fecha_Limite: '',
    Nombre: '',
    NombreVe: '',
    Placa: '',
    Cilindraje: '',
    Direccion: '',
    Metros_Cuadrados: '',
    filtros: ' '
  });

  const handleAddTaxes = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        try {
          const response = axios.post('http://localhost:3000/api/Addtaxes', personForm, mostrarForm);
          Swal.fire("Saved!", "", "success");
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

      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }
  return (
    <div className='container' id='form'>
      <form className='form' onSubmit={handleAddTaxes} >
        <h1>Agregar Impuesto</h1>
        <div className='row' >
          <div className="input-group mt-3 mb-3">
            <label className="input-group-text" for="inputGroupSelect01">Impuesto</label>
            <select className="form-select" id="filtros" value={mostrarForm.filtros} onChange={handleSelectChange}>
              <option selected>Seleccione</option>
              <option value="Vehiculo">Vehicular</option>
              <option value="Predial">Predial</option>
            </select>
          </div>
          <div className="input-group col mb-3">
            <span className="input-group-text mb-3">$</span>
            <span className="input-group-text mb-3">0.00</span>
            <input type="text" className="form-control mb-3" aria-label="Dollar amount (with dot and two decimal places)" id='Total' required value={personForm.Total} onChange={handlePersonChange} />
          </div>
          <div className='input-group col  mb-3' >
            <span className="input-group-text mb-3">Fecha Limite a pagar</span>
            <input className='form-control mb-3' type='date' id='Fecha_Limite' required value={personForm.Fecha_Limite} onChange={handlePersonChange} />
          </div>

        </div>

        {mostrarForm === 'Vehiculo' && (
          <div className='row'>
            <h1>Vehiculo</h1>
            <div className="input-group mt-3 mb-3">
              <label className="input-group-text" for="inputGroupSelect01">Tipo de Impuesto</label>
              <select className="form-select" id="Nombre" required value={personForm.Nombre} onChange={handlePersonChange}>
                <option selected>Seleccione</option>
                <option value="SOAT">SOAT</option>
                <option value="TECNOMECANICA">TECNOMECANICA</option>
              </select>
            </div>
            <div className="input-group col mb-3">
              <label className="input-group-text mb-3" for="inputGroupSelect01">Tipo Vehiculo</label>
              <select className="form-select mb-3" id="NombreVe" required value={personForm.NombreVe} onChange={handlePersonChange}>
                <option selected>Seleccione</option>
                <option value="Carro">Carro</option>
                <option value="Moto">Moto</option>
              </select>
            </div>
            <div className="input-group col mb-3">
              <span className="input-group-text mb-3">PLaca</span>
              <input type="text" className="form-control mb-3" aria-label="Dollar amount (with dot and two decimal places)" id='Placa' required value={personForm.Placa} onChange={handlePersonChange} />
            </div>
            <div className="input-group col mb-3">
              <span className="input-group-text mb-3">Clindraje</span>
              <input type="numer" className="form-control mb-3" aria-label="Dollar amount (with dot and two decimal places)" id='Cilindraje' required value={personForm.Cilindraje} onChange={handlePersonChange} />
            </div>
            <div >
              <button className='btn btn-dark mb-3' >Agregar</button>
            </div>
          </div>

        )}
        {mostrarForm === 'Predial' && (

          <div className='row'>
            <h1>Predial</h1>
            <div className="input-group col mt-3 ">
              <span className="input-group-text mb-3">Direccion</span>
              <input type="text" className="form-control mb-3" aria-label="Dollar amount (with dot and two decimal places)" id='Direccion' required value={personForm.Direccion} onChange={handlePersonChange} />
            </div>
            <div className="input-group col mt-3 ">
              <span className="input-group-text mb-3">Metros Cuadrado</span>
              <input type="numer" className="form-control mb-3" aria-label="Dollar amount (with dot and two decimal places)" id='Metros_Cuadrados' required value={personForm.Metros_Cuadrados} onChange={handlePersonChange} />
            </div>
            <div >
              <button className='btn btn-dark mb-3' onClick={() => handleTaxes()}>Agregar</button>
            </div>

          </div>
        )

        }
      </form>

    </div>
  )
}
