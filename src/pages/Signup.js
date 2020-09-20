import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

export default function Signup() {
    const [values, setValues] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
    
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      };
  
    return (
        <div style={{  width: "40%" }}>
        <h2 
            style={{ 
                paddingTop: "30px",
                textAlign: "center",
                width: "100%",
                fontFamily: "syne",
                color: "grey", 
            }}>
                Sign Up
        </h2>
        <div 
            style={{ 
                marginLeft: "10%",
                width: "80%", 
            }}>
            <form validate>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField
                    autoComplete="fname"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    autoComplete="lname"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    autoComplete="email"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ 
                    fontFamily: "Syne", 
                    textTransform: "lowercase", 
                    fontSize: "15px", 
                    margin: "24px 0 16px", 
                }}
            >
                Sign Up
            </Button>
            </form>
            <Grid container justify="flex-end">
                <Grid item>
                <Link style={{ textDecoration: "none", fontSize: "12px", }} to="/auth/login" variant="subtitle1">
                    Already have an account? Sign in
                </Link>
                </Grid>
            </Grid>
            </div>
        </div>
    );
}
