import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login submission
    console.log("Login form submitted:", loginForm);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '100px' }}>
      <Typography variant="h4" align="center" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="email"
              name="email"
              label="Email"
              value={loginForm.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="password"
              name="password"
              label="Password"
              value={loginForm.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
          </Grid>
        </Grid>
      </form>
      <Typography variant="body1" align="center" style={{ marginTop: '20px' }}>
        Don't have an account? <Link to="/register">Register</Link>
      </Typography>
    </Container>
  );
}

export default LoginPage;
