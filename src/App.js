
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import './App.css';
import Register from './Component/Register';
import Sign from './Component/Sign';
import Amazon from './img/Amazon.png';

function App() {
  return (
    <div className='App' >
     <img src={Amazon} alt='' className='img' /> 
      <Routes>
        <Route path='/' element={<Sign />}/>
        <Route path='/Register' element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;