import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function DashboardPage() {
  return (
    <Container style={{ marginTop: '100px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to the Dashboard
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        This is a basic dashboard page.
      </Typography>
      <Button variant="contained" color="primary" fullWidth>
        Log Out
      </Button>
    </Container>
  );
}

export default DashboardPage;
