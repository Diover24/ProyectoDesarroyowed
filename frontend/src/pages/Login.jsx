import React from 'react'
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div >
      <div className='container align-items-center ' id='form'>
        <form className='row g-3 mt-3'>
          <h1 className='text-decoration-underline'>Inicio De Sessión</h1>
          <div className="form-floating mb-3 mt-3">
            <div className="input-group has-validation">
              <span className="input-group-text" id="user">@</span>
              <input type="text" className="form-control " id="validationServerUsername" placeholder="UserName" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />

              <div id="validationServerUsernameFeedback" className="invalid-feedback">
                Please choose a username.
              </div>
            </div>

          </div>
          <div className=" form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" required />
            <label for="floatingPassword">Password</label>
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
