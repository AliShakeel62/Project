import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Button, Typography, Box } from '@mui/material';

export default function SignOutPage() {
  const [message, setMessage] = useState('');

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setMessage('Sign-out successful.');
      })
      .catch((error) => {
        setMessage('An error happened: ' + error.message);
      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        p: 3,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Sign Out
      </Typography>
      <Button variant="contained" color="primary" onClick={handleSignOut}>
        Sign Out
      </Button>
      {message && (
        <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
}
