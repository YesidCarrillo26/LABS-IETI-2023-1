import "./App.css";
import { useForm } from "react-hook-form";
import { registerUser } from "./services/registerUser";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from "react";


export function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");
  const [termsAcceptedError, setTermsAcceptedError] = useState("");
 
  
  let formValid = false;
  if(![email, name, age, password, passwordCheck].includes('') && (termsAccepted)){
    formValid = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.value;
    registerUser(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (!value) {
      setEmailError("email is required");
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError("email is invalid");
    } else {
      setEmailError("");
    }
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);

    if (!value) {
      setNameError("name is required");
    } else {
      setNameError("");
    }
  };

  const handleAgeChange = (event) => {
    const value = event.target.value;
    setAge(value);

    if (value < 18) {
      setAgeError("you must be above 18 to register");
    } else {
      setAgeError("");
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    if (!value) {
      setPasswordError("password is required");
    } else if (value.length < 6) {
      setPasswordError("password is too short");
    } else {
      setPasswordError("");
    }

    // if (value !== passwordCheck) {
    //   setPasswordCheckError("passwords do not match");
    // } else {
    //   setPasswordCheckError("");
    // }
  };

  const handlePasswordCheckChange = (event) => {
    const value = event.target.value;
    setPasswordCheck(value);

    if (value !== password) {
      setPasswordCheckError("passwords do not match");
    } else {
      setPasswordCheckError("");
    }
  };

  const handleTermsAcceptedChange = (event) => {
    const checked = event.target.checked;
    setTermsAccepted(checked);
    if (!checked) {
      setTermsAcceptedError("please read and accept the terms and conditions");
    } else {
      setTermsAcceptedError("");
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            {emailError && <span className="error" role="alert">{emailError}</span>}
          </label>
        </div>
        <div>
          <label>
            Name
            <input type="text" placeholder="Name" value={name} onChange={handleNameChange}  />
            {nameError && <span className="error" role="alert">{nameError}</span>}
          </label>
        </div>
        <div>
          <label>
            Age
            <input type="number" placeholder="Age" value={age} onChange={handleAgeChange} />
            {ageError && <span className="error" role="alert">{ageError}</span>}
          </label>
        </div>
        <div>
          <label>
            Password
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
            {passwordError && <span className="error" role="alert">{passwordError}</span>}
          </label>
        </div>
        <div>
          <label>
            Password check
            <input type="password" placeholder="Password check" value={passwordCheck} onChange={handlePasswordCheckChange}/>
            {passwordCheckError && <span className="error" role="alert">{passwordCheckError}</span>}
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" value={termsAccepted} onChange={handleTermsAcceptedChange} />
            Accept terms & conditions: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Pellentesque pharetra, tortor ac placerat
            elementum, neque libero luctus mi, ut efficitur nisl mauris at nisl.
            Suspendisse non neque et neque facilisis convallis. Praesent erat
            magna, sollicitudin eu porttitor ut, tincidunt sit amet urna.
            Vestibulum congue neque metus.
            {termsAcceptedError && <span className="error" role="alert">{termsAcceptedError}</span>}
          </label>
        </div>
        <button disabled={!formValid}>Sign up</button>
      </form>
    </div>
  );
}
