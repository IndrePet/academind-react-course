import { useRef } from 'react';
import { useSelector } from 'react-redux';
import classes from './ProfileForm.module.css';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAGjOEfcLMS-miw8i--HyDUNGleX44kf54',
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: token,
          password: enteredNewPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => {
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
      .then(navigate('/'))
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
