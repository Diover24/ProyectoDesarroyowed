import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Home from './pages/Home';
import InterfaceParther from './pages/InterfaceParther';
import Login from './pages/Login';
import Create_an_account from './pages/Create_an_account';
import Help from './pages/Help';
import AddTaxes from './pages/AddTaxes';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MyTaxes from './pages/MyTaxes';


function App() {
  const [loginCargado, setLoginCargado] = useState(false);
  const [mostrarMenu, setMostrarMenu] = useState(false);
  useEffect(() => {
    const estadoGuardado = localStorage.getItem("logueado");
    if (estadoGuardado === "true") {
      setMostrarMenu(true);

    }
  }, []);
  useEffect(() => {
    localStorage.setItem("logueado", mostrarMenu);
    setLoginCargado(true);
  }, [mostrarMenu]);
  return (


    <Router>

      {loginCargado && (
        <Header setMostrarMenu={setMostrarMenu} mostrarMenu={mostrarMenu} />
      )}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/InterfaceParther" element={<InterfaceParther />} />
        <Route path='/Login' element={<Login setMostrarMenu={setMostrarMenu} />} />
        <Route path='/MyTaxes' element={<MyTaxes />} />
        <Route path='/AddTaxes' element={<AddTaxes />} />
        <Route path='/Register' element={<Create_an_account />} />
        <Route path='/Help' element={<Help />}></Route>


      </Routes>
        {loginCargado && (<Footer />)}
      

    </Router>
  )
}

export default App
