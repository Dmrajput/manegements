import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <Container maxWidth="md" style={{ marginTop: '100px' }}>
      <Typography variant="h4" align="center" gutterBottom>Welcome to Our Website</Typography>
      <Typography variant="body1" align="center" paragraph>
        Make Life Easy.
      </Typography>
      <Button component={Link} to="/register" variant="contained" color="primary" size="large">
        Register Now
      </Button>
      
      <Button component={Link} to="/login" variant="contained" color="primary" size="large">
      Login
      </Button>
    </Container>
  );
}

export default LandingPage;
