import './App.css';
import LoanCalculatorView from './view/LoanCalculatorView';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Copyright as Footer } from './Components/Copyright';
import { Version1 } from './Components/Version1';

const theme = createTheme({
  palette: {
    primary: {
      light: '#0897E9',
      main: '#0897E9',
      dark: '#0897E9',
      contrastText: '#fff',
    },
    warning: {
      light: '#fadab6',
      main: '#ed6c02',
      dark: '#ed6c02',
      contrastText: '#fff',
    },
    erro: {
      light: '#c62828',
      main: '#d30e00',
      dark: '#c62828',
      contrastText: '#fff',
    },
    info: {
      light: '#1976d2',
      main: '#1976d2',
      dark: '#1976d2',
      contrastText: '#fff',
    },
  },
});

function App() {
  return (
    <div className="app-container">
      <ThemeProvider theme={theme}>
        <main className="main-content">
          <Version1 />
          <LoanCalculatorView />
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
