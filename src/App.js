import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// PAGES
import { Home } from './pages/Home';

// STYLES
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/Theme';
import { NavBar } from './components/Navigation';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pay-calc" element={<Home />} />
          <Route path="/vacancy-search" element={<Home />} />
        </Routes>
        <GlobalStyles />
      </Router>
    </ThemeProvider>
  );
}

export default App;
