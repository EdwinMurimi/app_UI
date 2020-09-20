import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

export default function Login() {

  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
    
    return(
      <div style={{ width: "40%", }}>
        <h2 
          style={{ 
            paddingTop: "30px",
            textAlign: "center",
            width: "100%",
            fontFamily: "syne",
            color: "grey", 
          }}>
            Sign In
          </h2>
        <div 
          style={{ 
            marginLeft: "15%",
            width: "70%", 
          }}>
          <form validate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={values.email}
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              value={values.password}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ fontFamily: "Syne", textTransform: "lowercase", fontSize: "15px", margin: "24px 0 16px", }}
            >
              Sign In
            </Button>
            <Grid container mt={4}>
              <Grid item xs>
                <Link style={{ textDecoration: "none", fontSize: "12px" }} to="/forgotpassword" variant="subtitle1">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link style={{ textDecoration: "none", fontSize: "12px" }}to="/auth/signup" variant="subtitle1">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    );
  }
