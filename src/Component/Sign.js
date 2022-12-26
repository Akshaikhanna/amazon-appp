import './Login.css';
import { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Sign() {
    const nav = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const [errorp, setErrorp] = useState("")
    // const [flag, setFlag] = useState(false);
    // const [register, setRegister] = useState(true);


    function handleFormSubmit(e) {
        e.preventDefault();
        if (!email && !password) {
            // setFlag(true);
        }
        else {
            // setFlag(false);
            localStorage.setItem("sanskarEmail", JSON.stringify(email));
            localStorage.setItem("sanskarPassword", JSON.stringify(password));
            if ((regex.test(email)) && (regexp.test(password))) {
                nav("/register")
            }
            console.log("Saved in local storage");
            // setRegister(!register)
            // nav("/register")
        }

    }

    function handleSubmit() {
        // setRegister(!register);

    }
    var regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{1,3})+$/g;
    var regexp = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    return (
        <>
            <div>
                <Form onClick={handleFormSubmit} action="" >
                    <h1 className='tag' >Sign-In</h1>
                    <label> Email
                        <input className='email' type="text" onChange={(e) => {
                            setEmail(e.target.value);

                            if (email === "") {
                                setError("");
                            } else if (!regex.test(email)) {
                                setError("invalid");
                            } else if (regex.test(email)) {
                                setError("");
                            } else {
                                setError("");
                            }
                        }
                        }
                            placeholder="email" />
                    </label>
                    <br />
                    {error} <br />
                    <label> Password
                        <input className='password' type="password" onChange={(e) => {
                            setPassword(e.target.value);
                            var regexp = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
                            if (password === "") {
                                setErrorp("");
                            } else if (regexp.test(password)) {
                                setErrorp("");
                            }
                            else if (!regexp.test(password)) {
                                setErrorp("Invalid");
                            } else {
                                setErrorp("");
                            }
                        }
                        }
                            placeholder="password" />
                    </label>
                    <br />
                    {errorp}<br />
                    <button type='submit' className='btn'>Create</button>
                    <p onClick={handleSubmit}>
                        Already have an{" "}Account ?
                    </p >
                    {
                        // flag && (<Alert></Alert>)
                    }
                </Form>
            </div>
        </>
    );
}

export default Sign;