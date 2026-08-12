import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#666666',
      disabled: '#9e9e9e',
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    subtitle1: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          fontWeight: 700,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0px 1px 1px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 2px rgba(0,0,0,0.14)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: '1px solid #e0e0e0',
          width: 240,
        },
      },
    },
  },
});

export default theme;
