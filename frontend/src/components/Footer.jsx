import React from 'react'
import '../styles/styles.css';

export default function Footer() {
  return (
    <div className="bg-dark text-white text-center py-4 mt-5" id='Footer'  >
      <div className="row" >
            <div className="col">
                <p className="mt-3" >
                    Ayuda <br/>
                    Política de cookies <br/>
                    Información de la empresa <br/>
                    Partners <br/>
                    © Tributum Ltd 2002 – 2025 <br/>
                </p>
            </div>

            <div className="col">
                <p className="mt-3" >
                    Configuración de privacidad <br/>
                    Política de privacidad <br/>
                    Explorar <br/>
                    Viajes <br/>
                </p>
            </div>
            <div className="col">
                <p className="mt-3" >
                    Iniciar sesión <br/>
                    Términos de servicio <br/>
                    Compañía <br/>
                    Sitios internacionales <br/>
                </p>
            </div>
        </div>

    </div>
  )
}
