import React from 'react'
import {Typography,Paper,Box,TextField, Stack,Button} from '@mui/material'

function Registartion() {
  return (
    <>
 
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh'
        
      }}
    >
     
      <Paper elevation={5} sx={{width:'500px',height:'500px',padding:'10px'}} >
      <Stack direction={'column'} spacing={5}>
      <Typography variant='h3'>Sign Up</Typography>
      <TextField
          required
          id="standard-required"
          label="Name"
          type="text"
          variant="standard"
        />
      <TextField
          required
          id="required"
          label="Email"
          type="text"
          variant="standard"
        />
      <TextField
          required
          id="required"
          label="password"
          type="password"
          variant="standard"
        />
         <Button
          size="small"
        //   onClick={handleClick}
          loading={false}
          variant="contained"
        >
          Register
        </Button>
        </Stack>
      </Paper >
      
      
    </Box>
    
    </>
  )
}

export default Registartion