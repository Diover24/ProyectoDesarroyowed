import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Create_an_account from './pages/Create_an_account';
import Help from './pages/Help';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  return (
    <Router>
      <Header/>
        <Routes>
        <Route path='/' element={<Home/> }/> 
        <Route path='/Login' element={<Login/> }/> 
        <Route path='/Register' element={<Create_an_account />} /> 
        <Route path='/Help' element={<Help/>}></Route>
        </Routes>

      <Footer/> 
      
    </Router>
  )
}

export default App
