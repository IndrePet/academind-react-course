import { useState } from 'react';

import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SimpleInput = (props) => {
  // const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);

  let helperText = '';

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(true);
      helperText = 'Please enter a valid name (from submission handler)';
      console.log(helperText);
      return;
    }
    setEnteredNameIsValid(false);
    // const enteredValue = nameInputRef.current.value;
    console.log(enteredName);
    setEnteredName('');
  };

  return (
    <Box component="form" onSubmit={formSubmissionHandler}>
      <TextField
        // inputRef={nameInputRef}
        required
        id="name"
        label="Your Name"
        fullWidth
        onChange={nameInputChangeHandler}
        value={enteredName || ''}
        helperText={enteredNameIsValid && 'Enter valid name (from attribute)'}
        error={enteredNameIsValid}
      />
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        type="submit"
        color="success"
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
