import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// PAGES
import { Home } from './pages/Home';
import { PayCalc } from './pages/PayCalc';
import { VacancySearch } from './pages/VacancySearch';
import { NotFound } from './pages/NotFound';

// STYLES
import { GlobalStyles } from './common/styles/GlobalStyles';
import { theme } from './common/styles/Theme';

// COMPONENTS
import { NavBar } from './components/Navigation';

// ROUTES
import { HOME_ROUTE, PAY_CALCULATOR_ROUTE, VACANCY_SEARCH_ROUTE } from './constants/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={PAY_CALCULATOR_ROUTE} element={<PayCalc />} />
          <Route path={VACANCY_SEARCH_ROUTE} element={<VacancySearch />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <GlobalStyles />
      </Router>
    </ThemeProvider>
  );
}

export default App;
