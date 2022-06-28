import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/user-slice';

import { useNavigate } from 'react-router-dom';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setLoading(true);
    let url;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAGjOEfcLMS-miw8i--HyDUNGleX44kf54';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAGjOEfcLMS-miw8i--HyDUNGleX44kf54';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        dispatch(
          login({ token: data.idToken, tokenExpiration: data.expiresIn })
        );
        navigate('/');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!loading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {loading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
