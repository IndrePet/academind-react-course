import styles from './UserForm.module.css';
import Button from '../UI/Button';
import { useState } from 'react';
import ErrorModal from '../Modal/ErrorModal';

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const [isValidUsername, setIsValidUsername] = useState(true);
  const [isValidAge, setIsValidAge] = useState(true);

  const [usernameError, setUsernameError] = useState('');
  const [ageError, setAgeError] = useState('');

  const [showModal, setShowModal] = useState(false);

  const usernameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValidUsername(true);
      setUsernameError('');
    }
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    if (parseInt(event.target.value) > 0) {
      setIsValidAge(true);
      setAgeError('');
    }
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      !enteredUsername.trim() ||
      parseInt(enteredAge) < 1 ||
      !enteredAge.trim()
    ) {
      if (!enteredUsername.trim()) {
        setIsValidUsername(false);
        setUsernameError('Please enter a valid name');
      }

      if (parseInt(enteredAge) < 1 || !enteredAge.trim()) {
        setIsValidAge(false);
        setAgeError('Please enter a valid age (> 0)');
      }

      setShowModal(true);
      return;
    }

    const userData = {
      username: enteredUsername,
      age: enteredAge,
    };

    props.onSave(userData);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const modalCloseHandler = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <ErrorModal
          onUsernameError={!isValidUsername && usernameError}
          onAgeError={!isValidAge && ageError}
          onClose={modalCloseHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className={styles['new-user__controls']}>
          <div className={styles['new-user__control']}>
            <label>Username</label>
            <input
              type="text"
              value={enteredUsername}
              onChange={usernameChangeHandler}
            />
          </div>
          <div className={styles['new-user__control']}>
            <label>Age (Years)</label>
            <input
              type="number"
              value={enteredAge}
              onChange={ageChangeHandler}
            />
          </div>
        </div>
        <div className={styles['new-user__actions']}>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
