import React, { useState } from 'react';
import axios from 'axios';

export default function AllComments({ el, setComment }) {
//   const submitHandler = (e) => {
//     e.preventDefault();
//     const result = Object.fromEntries(new FormData(e.target));
//     console.log(el);
//     axios.post(`/comments/all/${el.id}`, result)
//       .then((res) => setComment((prev) => [...prev, res.data]))
//       .catch(console.log);
//   };
  return (
    <>
      {/* <form onSubmit={submitHandler}>
        <label htmlFor="inputPassword5" className="form-label">
          Добавить комментарий
          <input type="text" name="body" id="inputPassword5" className="form-control" />
          <button type="submit" className="btn btn-primary">Добавить</button>
        </label>
      </form> */}
      <div id="passwordHelpBlock" className="form-text" />
      <div className="card" style={{ width: '18rem' }}>
        <ul className="list-group list-group-flush">
          <div>
            <li className="list-group-item">{el.body}</li>
            <button type="button" className="btn btn-primary">Удалить</button>
          </div>
        </ul>
      </div>
    </>
  );
}
