/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';

export default function Comments({
  comments, tea, user,
}) {
  const [comment, setComment] = useState(comments || []);
  const [input, setInput] = useState('');
  // const [click, setClick] = useState(false);
  // const [input1, setInput1] = useState(comments.body);
  function changeHandler(e) {
    setInput(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const body = Object.fromEntries(new FormData(e.target));
    axios.post(`/api/${tea?.id}/addcomment`, body)
      .then((res) => {
        setComment((prev) => [...prev, res.data]);
        setInput('');
      })
      .catch(console.log);
  };
  const deleteHandler = (id) => {
    axios.delete(`/comments/all/${id}`);
    setComment(comment.filter((el) => el.id !== id));
  };

  const outHandler = () => {
    window.location = `/cardMap/${tea?.id}`;
  };
  const outHandler2 = () => {
    window.location = '/api/OneCard';
  };
  // const editHandler = (id) => {
  //   setClick(!click);
  //   if (click) {
  //     axios.put(`/comments/edit/${id}`, { body: input1 });
  //   }
  // };
  // const changeHandler1 = (e) => {
  //   setInput1(e.target.value);
  // };
  return (
    <>
      <div className="position-absolute top-3 start-50 translate-middle">
        <p className="text-center">{`Комментарии к карточке чая: ${tea.name}`}</p>
      </div>
      <p />
      <div className="row">
        {comment?.map((el) => (
          <div className="col-4">
            <div className="card" style={{ width: '18rem' }} key={el.id}>
              <h5 className="card-header">{`Написал ${el?.User.name}:`}</h5>
              <div className="card-body">
                <p className="card-text">{el.body}</p>
              </div>
              {user?.isAdmin || user?.id === el?.User?.id
                ? (
                  <>
                    <button type="button" onClick={() => deleteHandler(el.id)} className="btn btn-primary" style={{ margin: '0 auto', display: 'block' }}>Удалить</button>
                    {/* {!click ? <p className="card-text">{el.body}</p>
                  : <input style={{ width: '100%' }} onChange={changeHandler1} type="text" className="text" value={input1} />} */}
                    {/* <button type="submit" onClick={() => editHandler(el.id)} className="btn btn-primary">Поменять комментарий</button> */}
                  </>
                )
                : null}
            </div>
          </div>
        ))}
      </div>
      <div style={{
        display: 'flex',
        MsFlexAlign: 'center',
        alignItems: 'center',
        paddingTop: '5px',
        paddingBottom: '5px',
        backgroundColor: '#f5f5f5',
      }}
      >
        <button type="button" onClick={() => outHandler()} className="btn btn-primary" style={{ margin: '0 auto', display: 'block' }}>Выйти к карточке</button>
        { user?.isAdmin ? <button type="button" onClick={() => outHandler2()} className="btn btn-primary" style={{ margin: '0 auto', display: 'block' }}>Выйти в редактор карточек</button> : null}
      </div>
      {user?.id ? (
        <div style={{
          display: 'flex',
          MsFlexAlign: 'center',
          alignItems: 'center',
          paddingTop: '10px',
          paddingBottom: '10px',
          backgroundColor: '#f5f5f5',
        }}
        >
          <form
            onSubmit={submitHandler}
            style={{
              width: '100%',
              maxWidth: '330px',
              padding: '15px',
              margin: 'auto',
              position: 'relative',
              boxSizing: 'border-box',
              height: 'auto',
              fontSize: '16px',
              zIndex: '2',
            }}
          >
            <label htmlFor="inputPassword5" className="form-label" style={{ margin: '0 auto', display: 'block' }}>
              <input
                onChange={changeHandler}
                value={input}
                type="text"
                name="body"
                id="inputPassword5"
                className="form-control"
                placeholder="Добавьте комментарий"
                style={{
                  position: 'relative',
                  boxSizing: 'border-box',
                  height: 'auto',
                  padding: '10px',
                  fontSize: '16px',
                  zIndex: '2',
                  margin: '0 auto',
                  display: 'block',
                }}
              />
              <button type="submit" className="btn btn-primary" style={{ margin: '0 auto', display: 'block' }}>Добавить</button>
            </label>
          </form>
        </div>
      ) : null}
    </>
  );
}
