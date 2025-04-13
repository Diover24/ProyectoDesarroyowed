import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
export default function Ayuda() {
  const [mensajes, setMensajes] = useState([
    { texto: "¡Hola! ¿En qué puedo ayudarte?", remitente: "bot" }
  ]);
  const [mensajeNuevo, setMensajeNuevo] = useState("");

  const enviarMensaje = () => {
    if (mensajeNuevo.trim() === "") return;

    const nuevoMensaje = { texto: mensajeNuevo, remitente: "usuario" };
    const respuestaBot = { texto: "Gracias por tu mensaje. Pronto un asesor te responderá.", remitente: "bot" };

    setMensajes([...mensajes, nuevoMensaje, respuestaBot]);
    setMensajeNuevo("");
  };

  const manejarEnter = (e) => {
    if (e.key === "Enter") enviarMensaje();
  };

  return (
    <div className="container py-4"  id='Help'>
      <h2 className="text-center mb-4">Centro de Ayuda</h2>
      <div className="border rounded p-3 bg-light"  id='Chat'>
        {mensajes.map((msg, idx) => (
          <div key={idx} className={`d-flex ${msg.remitente === "usuario" ? "justify-content-end" : "justify-content-start"}`}>
            <div className={`mb-2 px-3 py-2 rounded ${msg.remitente === "usuario" ? "bg-primary text-white" : "bg-secondary text-white"}`}>
              {msg.texto}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Escribe tu mensaje..."
          value={mensajeNuevo}
          onChange={(e) => setMensajeNuevo(e.target.value)}
          onKeyDown={manejarEnter}
        />
        <button className="btn btn-success" onClick={enviarMensaje}>Enviar</button>
      </div>
    </div>
  );
}
