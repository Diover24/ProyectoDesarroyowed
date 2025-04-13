import React from 'react'
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-4'>
          <div className="card" >
          <img src="/aviso.jpeg" class="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Nuestro Enfoque</h5>
              <p className="card-text">Nuestra plataforma está diseñada para ayudarte a mantenerte al tanto de tus obligaciones tributarias. Sabemos que recordar las fechas de pago de impuestos puede ser complicado, por eso, te ofrecemos una herramienta fácil de usar que te notifica a tiempo cuándo debes realizar tus pagos. Ya no más olvidos, retrasos o sanciones: con nosotros, estarás siempre informado y al día con tus impuestos.</p>
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className='card'>
          <img src="/impuestos.jpg" class="card-img-top" alt="..."/>
            <div className='card-body'>
              <h5 className='card-title'> Tipos De Impuestos </h5>              
              <li>💼 Impuesto de renta</li>
              <li>🧾 IVA (Impuesto al Valor Agregado)</li>
              <li>🏠 Predial</li>
              <li>🚗 Vehicular</li>
              <li>🧍 Impuesto de industria y comercio</li>
              <li>💰 Retención en la fuente</li>
              <li>📦 Aduanas (para importaciones/exportaciones)</li>            
            </div>
          </div>

        </div>
        <div className='col-4'>
         <div className="card" >
          <img src="/formulario.jpeg" class="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Registrate</h5>
            <p className="card-text">
            ¡No más sorpresas con tus impuestos! <br /> 
            Regístrate ahora y recibe notificaciones personalizadas para que nunca olvides cuándo debes pagar tus impuestos.Nuestro sistema te ayuda a mantener todo en orden y evitar sanciones. <br />
            👉 Crea tu cuenta hoy y toma el control de tus finanzas.</p>
            <Link to="/Register" className="btn btn-primary">Crear Cuenta</Link>
          </div>
        </div>
      </div>


      </div>
      
      
    </div>
  )
}
