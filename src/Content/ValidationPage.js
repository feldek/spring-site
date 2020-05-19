import React, { useState } from "react";
import s from "./LoginPage.module.css";
import { useDispatch } from "react-redux";
import { setValidation } from "../Data/ValidationReducer";

const ValidationPage = () => {
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");
  let [helpLogin, setHelpLogin] = useState("");
  let [helpPassword, setHelpPassword] = useState("");
  let [styleLogin, setStyleLogin] = useState(s.login);
  let [stylePassword, setStylePassword] = useState(s.password);
  let dispatch = useDispatch();

  let onInputChange = (e) => {
    let text = e.target.value;
    if (e.target.id === "Login") {
      setLogin(text);
    } else if (e.target.id === "Password") {
      setPassword(text);
    }
  };

  const checkLogin = (login, password) => {
    setStylePassword(s.password);
    setStyleLogin(s.login);
    setHelpLogin("");
    setHelpPassword("");
    if (login === "admin") {
      if (password === "1234") dispatch(setValidation(true));
      else {
        setStylePassword(s.invalidPassword);
        setPassword("");
        if (password.length === 0) setHelpPassword("Enter password");
        else setHelpPassword("Invalid password");
      }
    } else {
      setStyleLogin(s.invalidLogin);
      if (login.length === 0) setHelpLogin("Enter login");
      else setHelpLogin("This login not found");
    }
  };

  return (
    <div className={s.fullScreen}>
      <div className={s.loginBox}>
        Enter login and password
        <form
          className={s.form}
          id="formLogin"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className={s.textHelp}>{helpLogin}</div>
          <input
            onChange={onInputChange}
            value={login}
            className={styleLogin}
            type="text"
            id="Login"
            placeholder="Login"
          />
          <div className={s.textHelp}>{helpPassword}</div>
          <input
            onChange={onInputChange}
            value={password}
            className={stylePassword}
            type="password"
            id="Password"
            placeholder="Password"
          />
          <input
            className={s.buttonFormLogin}
            value="Sign in"
            type="submit"
            htmlFor="formLogin"
            onClick={() => {
              checkLogin(login, password);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default ValidationPage;
