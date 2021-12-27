import React, { FC, useRef, useState } from "react";
import { auth } from "../../firebase/firebase";
import firebase from "firebase";

import "./LoginPage.css";

const LoginPage: FC = () => {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState('')
  const emailRef = useRef<HTMLInputElement>(null!);
  const passwordRef = useRef<HTMLInputElement>(null!);

  const register = (e: any) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      ).then(function(result) {
        return result.user?.updateProfile({
          displayName: name
        })
      })
  };

  const signIn = (e: any) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser:any) => {
        console.log(authUser);
      })
      .catch((error:any) => alert(error.message));
  };

  return (
    <div className="login">
      {login ? (
        <form className="login-container">
          <h3>Регистрация</h3>
          <div className="login-inputs">
            <input ref={emailRef} type="email" placeholder="Login" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <input type="text" placeholder="username" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="login-de">
            <span onClick={() => setLogin(prev => !prev)}>Есть аккаунт?</span>
          </div>
          <button onClick={register} type="submit">
            Sign Up
          </button>
        </form>
      ) : (
        <form className="login-container">
          <h3>Вход</h3>
          <div className="login-inputs">
            <input ref={emailRef} type="email" placeholder="Login" />
            <input ref={passwordRef} type="password" placeholder="Password" />
          </div>
          <div className="login-de">
            <span onClick={() => setLogin(prev => !prev)}>Зарегестрироватса</span>
          </div>
          <button onClick={signIn} type="submit">
            Sign In
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
