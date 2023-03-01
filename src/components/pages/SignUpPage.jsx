import React, { useState } from "react";
import axios from "axios";

export default function SignUpPage() {
  const [error, setError] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log("213124");
    axios
      .post("api/user/signup", data)
      .then(() => {
        window.location = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        MsFlexAlign: "center",
        alignItems: "center",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <form
        onSubmit={submitHandler}
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
        <h1 className="h3 mb-3 font-weight-normal">Регистрация</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="inputEmail" className="sr-only">
            Введите вашу почту
            <input
              type="email"
              name="email"
              id="inputEmail"
              className="form-control"
              placeholder="email@mail.org"
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
          <label htmlFor="inputUsername" className="sr-only">
            Ваш никнейм
            <input
              type="text"
              name="name"
              id="inputEmail"
              className="form-control"
              placeholder="Никнейм"
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
          <label htmlFor="inputUsername" className="sr-only">
            Ваше имя
            <input
              type="text"
              name="secondName"
              id="inputEmail"
              className="form-control"
              placeholder="Имя"
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
          <label htmlFor="inputPassword" className="sr-only">
            Пароль
            <input
              type="password"
              name="pass"
              id="inputPassword"
              className="form-control"
              placeholder="*****************"
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
          <p />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Зарегистрироваться
          </button>
          {error.message && <div style={{ color: "red" }}>{error.message}</div>}
        </div>
        <p className="mt-5 mb-3 text-muted">© 2023</p>
      </form>
    </div>
  );
}
