import { useState } from 'react';

import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredEmailIsValid =
    enteredEmail.includes('@') && enteredEmail.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }
    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  return (
    <Box component="form" noValidate onSubmit={formSubmissionHandler}>
      <TextField
        required
        id="name"
        label="Your Name"
        fullWidth
        onChange={nameInputChangeHandler}
        onBlur={nameInputBlurHandler}
        value={enteredName}
        helperText={nameInputIsInvalid && 'Enter valid name (from attribute)'}
        error={nameInputIsInvalid}
      />
      <TextField
        required
        id="email"
        label="Your E-mail"
        type="email"
        fullWidth
        sx={{ mt: 3 }}
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
        value={enteredEmail}
        helperText={emailInputIsInvalid && 'Enter valid email (from attribute)'}
        error={emailInputIsInvalid}
      />
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        type="submit"
        color="success"
        disabled={!formIsValid}
      >
        Submit
      </Button>
    </Box>
  );
};

export default SimpleInput;
