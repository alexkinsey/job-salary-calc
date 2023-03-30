import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// PAGES
import { Home } from './pages/Home';
import { PayCalc } from './pages/PayCalc';
import { VacancySearch } from './pages/VacancySearch';

// STYLES
import { GlobalStyles } from './common/styles/GlobalStyles';
import { theme } from './common/styles/Theme';

// COMPONENTS
import { NavBar } from './components/Navigation';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pay-calc" element={<PayCalc />} />
          <Route path="/vacancy-search" element={<VacancySearch />} />
        </Routes>
        <GlobalStyles />
      </Router>
    </ThemeProvider>
  );
}

export default App;
