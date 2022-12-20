import { useState } from 'react'
import { Form, Alert } from 'react-bootstrap'
import Products from './Products'
import './Register.css'

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [flag, setFlag] = useState(false);
  const [products, setProducts] = useState(true);

  function handleFormSubmit(event) {
    event.preventDefault();
    let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");
    let pass = localStorage.getItem("sanskarPassword").replace(/"/g, "");
    if (!email || !password) {
      setFlag(true);
    } else if (email !== mail || password !== pass) {
      setFlag(true);
    } else {
      setProducts(!products)
      setFlag(false);
    }
  }

  return (
    <div className='Register'  >
      {" "}
      {products ?
        (
          <Form onClick={handleFormSubmit}>
            <h1>Login</h1>
            <label>Email</label>
            <input type="text" className="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="email" /><br />
            <label>Password</label>
            <input type="password" className="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="password" /><br />
            <button className="btn3" >Login</button>
            {
              flag && (<Alert></Alert>)
            }
          </Form>
        ) : (
          <Products />
        )}
    </div>
  )
}

export default Register