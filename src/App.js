import './App.css';
import Login from './Component/Login';
import Amazon from './img/Amazon.png'


function App() {

  return (
    <div className='App' >
      <img src={Amazon} alt='' className='img' />
        <Login />
    </div>
  );
}

export default App;