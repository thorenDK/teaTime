import axios from 'axios';
import React from 'react';

export default function LoginPage() {
  const submitHandler = (e) => {
    const data = Object.fromEntries(new FormData(e.target));
    axios.post('api/user/signin', data)
      .then(() => {
        window.location = '/';
      }).catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="carsemail" className="form-label">
          Email address or Username
          <input type="text" name="emailOrUserName" className="form-control" id="carsemail" />
        </label>
        <label htmlFor="carspass" className="form-label">
          Password
          <input type="password" name="pass" className="form-control" id="carspass" />
        </label>
      </div>

      <button type="submit" className="btn btn-primary">Sign In</button>
    </form>
  );
}
