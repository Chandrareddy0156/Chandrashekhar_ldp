import React from 'react';
import { ThemeProvider,CssBaseline} from '@mui/material';
 import {Theme} from "./statemanagementassignment/theme/index.Theme"



import MyLibrary from './statemanagementassignment/library';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />

      <MyLibrary />
      
   
    </ThemeProvider>
  );
};

export default App;


