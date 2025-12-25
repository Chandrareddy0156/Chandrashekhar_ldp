import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {Container,Button} from '@mui/material';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container >
        <Box sx={{ bgcolor: '#ebeef2ff', height: '100vh',width:'50vh' }} />
        <Button variant="contained" >Home</Button>
      </Container>
    </React.Fragment>
  );
}