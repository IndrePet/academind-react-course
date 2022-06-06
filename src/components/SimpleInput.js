import { useState } from 'react';

import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  let helperText = '';
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === '') {
      helperText = 'Please enter a valid name (from submission handler)';
      console.log(helperText);
      return;
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      helperText = 'Please enter a valid name (from submission handler)';
      console.log(helperText);
      return;
    }
    setEnteredName('');
    setEnteredNameTouched(false);
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
        value={enteredName || ''}
        helperText={nameInputIsInvalid && 'Enter valid name (from attribute)'}
        error={nameInputIsInvalid}
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
    // <Form>
    //   <div className="form-control">
    //     <label htmlFor="name">Your Name</label>
    //     <input type="text" id="name" />
    //   </div>
    //   <div className="form-actions">
    //     <button>Submit</button>
    //   </div>
    // </Form>
  );
};

export default SimpleInput;
