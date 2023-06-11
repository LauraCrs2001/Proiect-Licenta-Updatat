import React, { useState, useEffect } from "react";

function Password() {
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    setToken(token);
  }, []);

  const handleInputPasswordChange = (event) => {
    const password = event.target.value;
    setInputPassword(password);
  };

  const handleInputConfirmPasswordChange = (event) => {
    const confirmPassword = event.target.value;
    setInputConfirmPassword(confirmPassword);
  };

  const validateResetForm = () => {
    let isValid = true;

    if (inputPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      isValid = false;
    } else if (!/\d/.test(inputPassword)) {
      setPasswordError("Password must contain at least one number.");
      isValid = false;
    } else if (!/[A-Z]/.test(inputPassword)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (inputPassword !== inputConfirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    return isValid;
  };

  const handleResetSubmit = async (event) => {
    event.preventDefault();

    if (validateResetForm()) {
      try {
        const response = await fetch("/confirm-reset-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: inputPassword,
            token: token,
          }),
        });

        if (response.ok) {
          setInputPassword("");
          setInputConfirmPassword("");
        } else {
        }
      } catch (error) {
      }
    }
  };

  return (
    <div className="login-singup">
      <form onSubmit={handleResetSubmit}>
        <h1>Reset Password</h1>
        {passwordError && <span className="error">{passwordError}</span>}
        <input
          type="password"
          name="password"
          placeholder="New Password"
          value={inputPassword}
          onChange={handleInputPasswordChange}
        />
        {confirmPasswordError && <span className="error">{confirmPasswordError}</span>}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm New Password"
          value={inputConfirmPassword}
          onChange={handleInputConfirmPasswordChange}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default Password;
