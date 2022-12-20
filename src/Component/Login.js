import Register from './Register';
import './Login.css';
import { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [register, setRegister] = useState(true);


    function handleFormSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            setFlag(true);
        }
        else {
            setFlag(false);
            localStorage.setItem("", JSON.stringify(email));
            localStorage.setItem("", JSON.stringify(password));
            console.log("Saved in local storage");
            setRegister(!register)
        }
    }

    function handleSubmit() {
        setRegister(!register);
    }

    return (
        <>
            <div>
                {" "}
                {register ?
                    (
                        <Form onClick={handleFormSubmit} action="" >
                            <h1 className='tag' >Sign-In</h1>
                            <label>Name
                                <input type="text" placeholder="Name" className="name" />
                            </label><br />
                            <label> Email
                                <input className='email' type="text" onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                            </label>
                            <br />
                            <label> Password
                                <input className='password' type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                            </label>
                            <br />
                            <button type='submit' className='btn'>Create</button>
                            <p onClick={handleSubmit}>
                                Already have an{" "}Account ?
                            </p >
                            {
                                flag && (<Alert>Fill all the field</Alert>)
                            }
                        </Form>
                    ) : (
                        <Register />
                    )}
            </div>
        </>
    );
}

export default Login;