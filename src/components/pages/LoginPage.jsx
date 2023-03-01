import axios from "axios";
import React from "react";
// import '../../../public/style/Login.css';

export default function LoginPage() {
  const submitHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    axios
      .post("api/user/signin", data)
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
        <h1 className="h3 mb-3 font-weight-normal">Авторизация</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="inputEmail" className="sr-only">
            Ваш email или никнейм
            <input
              type="text"
              name="emailOrUserName"
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
          <label htmlFor="inputPassword" className="sr-only">
            Ваш пароль
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
            Войти
          </button>
        </div>
        <p className="mt-5 mb-3 text-muted">© 2023</p>
      </form>
    </div>
  );
}
