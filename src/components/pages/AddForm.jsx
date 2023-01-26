import axios from 'axios';
import React, { useState } from 'react';

export default function AddForm({ setAllCards }) {
  const [input, setInput] = useState({});
  const submitCardHandler = (e) => {
    e.preventDefault();
    axios.post('/api/card', input)
      .then((res) => setAllCards((prev) => [res.data, ...prev]));
  };
  const changeHandler = (e) => {
    setInput((prev) => ({
      ...prev, [e.target.name]: e.target.value,
    }));
  };
  return (
    <form onSubmit={submitCardHandler}>
      <div className="mb-3">
        <label htmlFor="carbrand" className="form-label">
          Please set sort of Tea
          <input type="text" name="name" onChange={changeHandler} value={input.name} className="form-control" id="carbrand" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="carmodel" className="form-label">
          Please set place of Tea
          <input type="text" name="place" onChange={changeHandler} value={input.place} className="form-control" id="carmodel" />
        </label>
        <div>
          <label htmlFor="carmodel" className="form-label">
            Please download a picture of Tea
            <input type="text" name="img" onChange={changeHandler} value={input.img} className="form-control" id="carmodel" />
          </label>
        </div>
        <div>
          <label htmlFor="carmodel" className="form-label">
            Please describe this Tea
            <input type="text" name="description" onChange={changeHandler} value={input.desription} className="form-control" id="carmodel" />
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  );
}
