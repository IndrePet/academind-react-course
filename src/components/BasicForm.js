import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useInputWR from '../hooks/use-input-reducer';

// import useInput from '../hooks/use-input';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const BasicForm = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInputWR(isNotEmpty);

  const {
    value: enteredSurname,
    isValid: enteredSurnameIsValid,
    hasError: surnameInputHasError,
    valueChangeHandler: surnameChangeHandler,
    inputBlurHandler: surnameBlurHandler,
    reset: resetSurnameInput,
  } = useInputWR(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInputWR(isEmail);

  let formIsValid = false;

  if (enteredNameIsValid && enteredSurnameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // to prevent submitting if user enables the submit button with devTools
    if (!enteredNameIsValid && !enteredSurname && !enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    resetSurnameInput();
    resetEmailInput();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container>
            <Grid item xs sx={{ mr: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="off"
                value={enteredName}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                helperText={
                  nameInputHasError && 'Please enter a valid first name'
                }
                error={nameInputHasError}
              />
            </Grid>
            <Grid item xs>
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="off"
                value={enteredSurname}
                onChange={surnameChangeHandler}
                onBlur={surnameBlurHandler}
                helperText={
                  surnameInputHasError && 'Please enter a valid last name'
                }
                error={surnameInputHasError}
              />
            </Grid>
          </Grid>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="off"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            helperText={emailInputHasError && 'Please enter a valid email'}
            error={emailInputHasError}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!formIsValid}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

// const BasicForm = (props) => {
//   return (
//     <form>
//       <div className="control-group">
//         <div className="form-control">
//           <label htmlFor="name">First Name</label>
//           <input type="text" id="name" />
//         </div>
//         <div className="form-control">
//           <label htmlFor="name">Last Name</label>
//           <input type="text" id="name" />
//         </div>
//       </div>
//       <div className="form-control">
//         <label htmlFor="name">E-Mail Address</label>
//         <input type="text" id="name" />
//       </div>
//       <div className="form-actions">
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// };

export default BasicForm;
