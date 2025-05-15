import React, { useState } from 'react'
import '../styles/styles.css';
import { Link, useNavigate } from 'react-router-dom';


export default function Header({ setMostrarMenu, mostrarMenu }) {
  const navigate = useNavigate();
  return (

    <div >
      <nav className='navbar bg-tertiary mb-3 ' id='Header'>

        <div className='container-fluid md-3'>
            <img src="/img/tributum.gif" alt="" width="130" height="40" className="d-inline-block align-text-top" />

          {!mostrarMenu ? (
            <div class="ms-auto">
              <Link to="/login" className="btn btn-dark " >Iniciar Sesión</Link>

            </div>
          ) : (
            <>
              <div className='ms-5 fs-3 mt-2 fw-semibold fst-italic text-light'id='nava'> 
                <Link to="/InterfaceParther" className='nav-link active' id='LinkHeader'>Inicio</Link>
              </div>

              <div className='ms-auto' >
                <button className='navbar-toggler navbar-dark' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                  <span className='navbar-toggler-icon ' id='hamburger'></span>
                </button>
                <div className='offcanvas offcanvas-end text-bg-dark' tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                  <div className='offcanvas-header'>
                    <h2 className='offcanvas-title' id="offcanvasDarkNavbarLabel">Menu</h2>
                    <button type="button" className='btn-close btn-close-white' data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className='offcanvas-body d-flex flex-column justify-content-between'>
                    <ul className='navbar-nav  flex-grow-1 pe-3'>
                      <li className='nav-item'>
                        <Link to="/MyTaxes" className='nav-link active' id='LinkMenu'>Mis Impuestos</Link>
                      </li>
                      <li className='nav-item'>
                        <Link to="/AddTaxes" className='nav-link active' id='LinkMenu'>Agregar impuestos</Link>
                      </li>
                      <li className='nav-item dropdown'>
                        <a className='nav-link dropdown-toggle' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id='LinkMenu'> Mi Cuenta</a>
                        <ul className='dropdown-menu dropdown-menu-dark'>
                          <li><a className='dropdown-item' href="#">Configuracion</a></li>
                          <li><a className='dropdown-item' href="#">Historial</a></li>
                        </ul>
                      </li>
                      <li className='nav-item'>
                        <Link to="/Help" className="nav-link active" id='LinkMenu'>Ayuda</Link>
                      </li>
                      <li className='nav-item'>

                      </li>
                    </ul>
                    <div className='mt-3'>
                      <button className="btn btn-primary" onClick={() => { localStorage.removeItem("logueado"); setMostrarMenu(false); navigate('/'); }}>Cerrar Sesión</button>
                    </div>
                  </div>
                </div>
              </div>
            </>

          )}
        </div>

      </nav>
    </div>
  )
}
