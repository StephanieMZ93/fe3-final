import React, { useState } from "react";

import './form.css'

const Form = ({setMessage}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function handelSubmit(e) {
    e.preventDefault();
    const isNameNotValid = validateName(name);
    const isEmailNotValid = validateEmail(email);
    if(isNameNotValid || isEmailNotValid){
      setError(isNameNotValid || isEmailNotValid);
    } else {
      setMessage(`Gracias ${name}, te contactaremos cuando antes vía mail`);
      setError(undefined);
      setName('');
      setEmail('');
    }
  }

  function handelName(e) {
    const nameValue= e.target.value;
    setName(nameValue);
  }

  function validateName(name) {
    if(name.trim() === ''){
      return 'The name should not be empty';
    } else if(name.length <= 5){
      return 'The name should have at least 5 characters';
    }
  }

  function handelEmail(e) {
    const emailValue= e.target.value;
    setEmail(emailValue);
  }

  function validateEmail(email) {
    if(email.trim() === ''){
      return 'The email should not be empty';
    }else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)){
     return 'The email is not valid';
    } else {
     return undefined;
    }
  }

  return (
    <div>
      <form onSubmit={(e)=>handelSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="formControlName" className="form-label">Full Name</label>
          <input onChange={handelName} type="text" value={name} className="form-control" id="formControlName" placeholder="Full name"/>
        </div>
        <div className="mb-3">
          <label htmlFor="formControlEmail" className="form-label">Email</label>
          <input onChange={handelEmail} type="email" value={email} className="form-control" id="formControlEmail" placeholder="Email"/>
        </div>
        <input value={'Send'} type="submit"></input>
        {error && <span className="error">*{error}</span>}
      </form>
    </div>
  );
};

export default Form;
