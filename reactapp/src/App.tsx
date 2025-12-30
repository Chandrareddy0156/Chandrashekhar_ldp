import React from 'react';
import { ThemeProvider,CssBaseline} from '@mui/material';
// import { Theme} from './use_stateassignment/Books.Theme';
import Theme from "./components/theme/index.theme"
import Sidebar from './components/organisms/sideBar';
// import Seeder from './cp_assignment/sideBar/index.sideBar';

// import MyLibrary from './use_stateassignment/Library';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      {/* <MyLibrary /> */}
      
    <Sidebar />
     {/* <Seeder /> */}
    </ThemeProvider>
  );
};

export default App;