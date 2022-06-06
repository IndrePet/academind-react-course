import useInput from '../hooks/use-input';

import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SimpleInput = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@') && value.trim() !== '');

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  return (
    <Box component="form" noValidate onSubmit={formSubmissionHandler}>
      <TextField
        required
        id="name"
        label="Your Name"
        fullWidth
        autoComplete="off"
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        value={enteredName}
        helperText={nameInputHasError && 'Enter valid name (from attribute)'}
        error={nameInputHasError}
      />
      <TextField
        required
        id="email"
        label="Your E-mail"
        type="email"
        fullWidth
        autoComplete="off"
        sx={{ mt: 3 }}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        value={enteredEmail}
        helperText={emailInputHasError && 'Enter valid email (from attribute)'}
        error={emailInputHasError}
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
