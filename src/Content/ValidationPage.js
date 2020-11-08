import React, { useEffect } from "react";
import s from "./ValidationPage.module.css";
import { useDispatch } from "react-redux";
import { setValidation } from "../Data/ValidationReducer";
import { useForm } from "react-hook-form";
import useLocalStorage from "local-storage-hook";
import * as yup from "yup";

const SignupSchema = yup.object().shape({
  login: yup
    .string()
    .required("Required")
    .test("Login", "This login not found", (e) => {
      return e === "admin";
    }),
  password: yup
    .string()
    .required("Required")
    .min(3, "Minimum 3 characters required")
    .test("Password", "Invalid password", (e) => {
      return e === "1234";
    }),
});

const ValidationPage = () => {
  console.log();
  const { handleSubmit, register, errors } = useForm({
    validationSchema: SignupSchema,
  });
  const dispatch = useDispatch();
  const [localDataUser, setLocalDataUser] = useLocalStorage("dataUser", false);

  useEffect(() => {
    if (localDataUser.loginCheck)
      dispatch(setValidation(localDataUser.loginCheck));
  });

  const checkLogin = (e) => {
    if (e.checkbox === true) {
      dispatch(setValidation(true));
      setLocalDataUser({
        login: e.login,
        password: e.password,
        loginCheck: true,
      });
    } else {
      dispatch(setValidation(true));
    }
  };

  return (
    <div className={s.fullScreen}>
      <div className={s.loginBox}>
        <div className={s.descriptionForm}>Enter login and password</div>
        <form onSubmit={handleSubmit(checkLogin)} className={s.form}>
          <input className={s.login} name="login" ref={register()} />
          <div className={s.textHelp}>
            {errors.login && errors.login.message}
          </div>

          <input
            className={s.password}
            name="password"
            type="password"
            ref={register()}
          />
          <div className={s.textHelp}>
            {errors.password && errors.password.message}
          </div>

          <div className={s.spaceSignIn}>
            <button type="submit">Sign In</button>
            <label>
              <div>Remember</div>
              <input name="checkbox" type="checkbox" ref={register()} />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ValidationPage;
