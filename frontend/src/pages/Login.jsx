import React, { useState } from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'
export default function Login({setMostrarMenu}) {
  const [userForm, setUserForm] = useState({
    Username: '',
    Password: ''
  });
  const navigate = useNavigate();

  const handleUserChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.id]: e.target.value
    })
  }
  const handleUserSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/LoginUser', userForm);
      const data = response.data;
      setMostrarMenu(true);
      navigate('/InterfaceParther');
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
  return (
    <div className='vh-100'>
      <div className='container align-items-center  ' id='login'>
        <form className='row g-3 mt-3' onSubmit={handleUserSubmit}>
          <h1 className='text-decoration'>Inicio De Sesión</h1>
          <div className="form-floating mb-3 mt-3">
            <div className="input-group has-validation">
              <span className="input-group-text" id="user">@</span>
              <input type="text" className="form-control " id="Username" placeholder="UserName" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required value={userForm.Username} onChange={handleUserChange} />

              <div id="validationServerUsernameFeedback" className="invalid-feedback">
                Please choose a username.
              </div>
            </div>

          </div>
          <div className='mb-3'>
            <input type="password" className="form-control" placeholder="password" id="Password" required value={userForm.Password} onChange={handleUserChange} />

          </div>
          <div className='text-center'>
            <button type="submit" className="btn btn-dark mb-3 ">Iniciar Sesión</button>
            <p className='text-white fw-bold'>----Crea tu cuenta y mantente al día---</p>
            <Link to="/Register" className="btn btn-dark m-3">Crear Cuenta</Link>

          </div>

        </form>
      </div>



    </div>
  )
}
