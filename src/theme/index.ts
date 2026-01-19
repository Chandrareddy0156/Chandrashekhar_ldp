import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb', 
      light: '#95AAFF', 
    },
    secondary: { 
      main: '#696A6E' 
    },
    background: { 
      default: '#F7F8FA', 
      paper: '#FFFFFF' 
    },
    text: { 
      primary: '#1f2937', 
      secondary: '#6b7280' 
    },
    error: { 
      main: '#E53935' 
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h5: { 
      fontWeight: 600, 
      fontSize: '1.25rem' 
    },
    subtitle1: { 
      fontWeight: 500 
    },
    body2: { 
      fontSize: '0.875rem' 
    },
  },
  shape: {
  
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px',
          borderRadius: '8px',
          '&.Mui-disabled': {
            backgroundColor: '#93c5fd',
            color: '#ffffff',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
          },
        },
      },
    },
  },
});
