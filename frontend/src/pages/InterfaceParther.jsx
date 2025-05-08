import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
export default function InterfaceParther() {
  const [data, setData] = useState([]);
  useEffect((p) => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/findPersonByID');
        setData(response.data);
        console.log("Los datos son:", response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='container'>
      {data.map((p) =>
        <div className='container d-flex ' key={p.Cedula}>
          <h3>Bienvenido Sr/a {p.Nombre1}</h3>
        </div>
      )}
      <div className="alert alert-info shadow-sm rounded">
        <h5 className="fw-bold">📰 Noticias recientes</h5>
        <ul className="mb-0">
          <li>⚠️ Nuevas normas tributarias a partir de junio 2025</li>
          <li>📢 Plazo extendido para el pago del impuesto vehicular</li>
          <li>💼 Recuerda actualizar tus datos fiscales antes del 30 de abril</li>
        </ul>
      </div>
      <div className='row'>
        <div className="card  bg-light border-success mb-3">
          <div className="card-header text-success fw-bold">🎁 Descuentos disponibles</div>
          <div className="card-body">
            <h5 className="card-title">¡Aprovecha 10% de descuento!</h5>
            <p className="card-text">Paga tu impuesto predial antes del 10 de mayo y obtén un descuento automático.</p>

          </div>
          <div className='text-center'>
            <button className="btn btn-dark mt-auto mb-3">Ver impuestos con descuento</button>
          </div>
        </div>
        <div className="card bg-light ms-auto border-primary mb-3 shadow-sm">
          <div className="card-header text-dark fw-bold">
            💳 Paga con Mastercard
          </div>
          <div className="card-body">
            <h5 className="card-title">6 cuotas sin intereses</h5>
            <p className="card-text">
              Ahora puedes pagar tus impuestos en 6 cuotas sin intereses usando tu tarjeta de crédito Mastercard. ¡Sin trámites y al instante!
            </p>
            <button className="btn btn-dark mt-auto">Ver métodos de pago</button>
          </div>
        </div>
        <div className="card ms-auto border-warning mb-3">
          <div className="card-header bg-warning text-dark fw-semibold">
            ⌛ Impuestos próximos a vencer
          </div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Impuesto de Industria y Comercio
                <span className="badge bg-danger">Vence en 3 días</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Impuesto Predial
                <span className="badge bg-warning text-dark">Vence en 7 días</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className='d-flex justify-content-center align-items-center mt-4'>
        <div id="carouselExampleCaptions" className="carousel slide md-6 " data-bs-ride="carousel" >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="../public/Bancos.jpg" className="img d-block w-100" alt="Primera imagen" />
              <div className="carousel-caption d-none d-md-block text-dark bg-white bg-opacity-75 rounded p-2">
                <h5> Bancos para Pago Diferido Sin Intereses</h5>
                <p>Ahora puedes pagar tus impuestos en cuotas sin intereses con tarjetas de crédito de nuestros bancos aliados. <br />
                  Aliados: Bancolombia, Davivienda, Banco de Bogotá. <br />
                  Beneficio: Hasta 6 cuotas sin interés al pagar directamente desde nuestra plataforma.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="../public/contable.jpg" className="img d-block w-100" alt="Segunda imagen" />
              <div className="carousel-caption d-none d-md-block text-dark bg-white bg-opacity-75 rounded p-2">
                <h5>Asesorías Tributarias</h5>
                <p>¿Necesitas ayuda con tu declaración? Contadores aliados disponibles con descuentos especiales solo para usuarios registrados con el plan plata.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="../public/software.webp" className="img d-block w-100" alt="Tercera imagen" />
              <div className="carousel-caption d-none d-md-block text-dark bg-white bg-opacity-75 rounded p-2">
                <h5> Convenio con Empresas de Tecnología o Software Contable</h5>
                <p>Integra tu información automáticamente con nuestro aliado contable Siigo y evita errores al declarar tus impuestos..</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>

      </div>

    </div>
  )
}
