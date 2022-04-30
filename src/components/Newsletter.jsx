import React, { useState } from 'react';
import Title from './Title';

const emailState = {
  error: '',
  email: '',
};

const Newsletter = () => {
  const [state, setState] = useState(emailState);

  function changeHandler(e) {
    setState(prev => {
      return { ...prev, email: e.target.value };
    });
  }

  function emailValidation() {
    const reg =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!state.email || reg.test(state.email) === false) {
      setState(prev => {
        return { ...prev, error: alert(`Invalid Email Address`) };
      });
      return false;
    }

    if (state.email || reg.test(state.email) === true) {
      setState(prev => {
        return { ...prev, email: alert(`Thank you for subscribing!`) };
      });
      return true;
    }
  }

  function onSubmit() {
    if (emailValidation()) setState(emailState);
  }

  return (
    <div className="newsletter">
      <div className="newsletter-heading">
        <Title title="newsletter" />
        <h1>Subscribe to our newsletter</h1>
      </div>
      <div className="newsletter-input flex-center">
        <input
          type="email"
          placeholder="Enter your email address"
          value={state.email}
          onChange={changeHandler}
        />
        <button type="submit" className="btn-primary" onClick={onSubmit}>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
