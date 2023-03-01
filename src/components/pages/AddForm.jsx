import axios from "axios";
import React, { useState } from "react";

export default function AddForm({ setAllCards }) {
  const [input, setInput] = useState({});
  const submitCardHandler = (e) => {
    e.preventDefault();
    axios.post("/api/card", input).then((res) => {
      setAllCards((prev) => [...prev, res.data]);
      setInput({});
    });
  };
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div
      style={{
        display: "flex",
        MsFlexAlign: "center",
        alignItems: "center",
        paddingTop: "40px",
        paddingBottom: "40px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <form
        onSubmit={submitCardHandler}
        className="form-signin"
        style={{
          width: "100%",
          maxWidth: "330px",
          padding: "15px",
          margin: "auto",
          position: "relative",
          boxSizing: "border-box",
          height: "auto",
          fontSize: "16px",
          zIndex: "2",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>Создание карточки</h2>
          <p />
          <label htmlFor="inputEmail" className="sr-only">
            <input
              type="text"
              name="name"
              onChange={changeHandler}
              value={input.name}
              id="inputEmail"
              className="form-control"
              style={{
                position: "relative",
                boxSizing: "border-box",
                height: "auto",
                padding: "10px",
                fontSize: "16px",
                zIndex: "2",
              }}
            />
          </label>
          Напишите сорт чая
          <label htmlFor="inputPassword" className="sr-only">
            <input
              type="text"
              name="place"
              onChange={changeHandler}
              value={input.place}
              id="inputPassword"
              className="form-control"
              style={{
                position: "relative",
                boxSizing: "border-box",
                height: "auto",
                padding: "10px",
                fontSize: "16px",
                zIndex: "2",
              }}
            />
          </label>
          Напишите место выращивания чая
          <label htmlFor="inputPassword" className="sr-only">
            <input
              type="text"
              name="img"
              onChange={changeHandler}
              value={input.img}
              id="inputPassword"
              className="form-control"
              style={{
                position: "relative",
                boxSizing: "border-box",
                height: "auto",
                padding: "10px",
                fontSize: "16px",
                zIndex: "2",
              }}
            />
          </label>
          Напишите URL ссылку на фото нужного чая
          <label htmlFor="inputPassword" className="sr-only">
            <input
              type="text"
              name="coordinates_x"
              onChange={changeHandler}
              value={input.coordinates_x}
              id="inputPassword"
              className="form-control"
              style={{
                position: "relative",
                boxSizing: "border-box",
                height: "auto",
                padding: "10px",
                fontSize: "16px",
                zIndex: "2",
              }}
            />
          </label>
          Напишите URL ссылку на фото флага страны
          <label htmlFor="inputPassword" className="sr-only">
            <input
              type="text"
              name="description"
              onChange={changeHandler}
              value={input.desription}
              id="inputPassword"
              className="form-control"
              style={{
                position: "relative",
                boxSizing: "border-box",
                height: "auto",
                padding: "10px",
                fontSize: "16px",
                zIndex: "2",
              }}
            />
          </label>
          Напишите описание этого чая
          <button
            className="btn btn-lg btn-primary btn-block --bs-body-color-pink-200"
            type="submit"
          >
            Добавить карточку чая
          </button>
        </div>
        <p className="mt-5 mb-3 text-muted">© 2023</p>
      </form>
    </div>
  );
}
