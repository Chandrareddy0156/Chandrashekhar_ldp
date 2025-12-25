import { Typography,Box,Checkbox ,Stack} from '@mui/material'
// import React from 'react'



const MuiTypograpghy = () => {
    const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };
  return (
    <Box sx={{color:'pink' }}>
        <Stack>
    <Typography variant="h1" gutterBottom>
     Welcome to web 
    </Typography>
    <Typography variant="h4"  align='justify' >
      Chandra Reddy Web Developer
    </Typography>
    <Checkbox {...label} defaultChecked color="default" />
  
    </Stack>
  </Box>

  
  
  )
}

export default MuiTypograpghy;