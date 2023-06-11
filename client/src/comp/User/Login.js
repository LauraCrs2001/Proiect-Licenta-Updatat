import React, { useState } from "react";
import { isEmail } from "validator";

function Login() {

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const handleInputEmailChange = (event) => {
        const email = event.target.value;
        setInputEmail(email);
    
        if (isEmail(email)) {
        } else {
        }
    };
      
      const handleInputPasswordChange = (event) => {
        const password = event.target.value;
        setInputPassword(password);
      };

    return (
        <>
        <div className="login-singup">
            <form action="/login" method="POST">
                <h1>
                    Enter Account
                </h1>
                <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={inputEmail}
                    onChange={handleInputEmailChange}
                />
                <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={inputPassword}
                    onChange={handleInputPasswordChange}
                />
                <button type="submit">Log In</button>
                <p>
                    Don't have an account? <a href="/signup">Create one here.</a>
                </p>
                <a href="/reset-password">Forgot your password?</a>
            </form>
        </div>
        </>
    );
}

export default Login;