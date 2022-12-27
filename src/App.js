
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import './App.css';
import Products from './Component/Products';
import Register from './Component/Register';
import Sign from './Component/Sign';
import Amazon from './img/Amazon.png';

function App() {
  return (
    <div className='App' >
     <img src={Amazon} alt='' className='img' /> 
    
     <nav>
      <a href='/Register'><button className='login' >Login</button></a>
      <a href='/'><button className='logout' >Logout</button></a>
     </nav>
     
      <Routes>
        <Route path='/' element={<Sign />}/>
        <Route path='/Register' element={<Register />}/>
        <Route path='/Proudct' element={<Products/>} />
      </Routes>
    </div>
  );
}

export default App;