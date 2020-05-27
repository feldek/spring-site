import React, { useState } from "react";
import s from "./ValidationPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setValidation } from "../Data/ValidationReducer";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const ValidationPage = () => {
  const { handleSubmit, register, errors } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const [invalidEnter, setInvalidEnter] = useState("");
  const [styleLogin, setStyleLogin] = useState(s.login);
  const [stylePassword, setStylePassword] = useState(s.password);

  const checkLogin = (e) => {
    setStylePassword(s.password);
    setStyleLogin(s.login);
    if (e.login === "admin") {
      if (e.password === "1234") {
        dispatch(setValidation(true));
        history.replace("/");
      } else {
        setInvalidEnter("Invalid login or password");
        setStylePassword(s.invalidPassword);
        setStyleLogin(s.invalidLogin);
      }
    } else {
      setInvalidEnter("Invalid login or password");
      setStylePassword(s.invalidPassword);
      setStyleLogin(s.invalidLogin);
    }
  };

  let loginCheck = useSelector((state) => state.validation.loginCheck);

  return (
    <div className={s.fullScreen}>
      <div className={s.loginBox}>
        Enter login and password
        <form onSubmit={handleSubmit(checkLogin)} className={s.form}>
          <input
            className={styleLogin}
            name="login"
            ref={register({
              required: "This field must be filled",
              minLength: {
                value: 3,
                message: "Enter more than 2 characters",
              },
            })}
          />
          <div className={s.textHelp}>
            {invalidEnter}
            {errors.login && errors.login.message}
          </div>

          <input
            className={stylePassword}
            name="password"
            type="password"
            ref={register({
              required: "This field must be filled",
              minLength: {
                value: 3,
                message: "Enter more than 2 characters",
              },
            })}
          />
          <div className={s.textHelp}>
            {errors.password && errors.password.message}
          </div>

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};
export default ValidationPage;
