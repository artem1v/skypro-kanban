import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import PopExit from './components/Popups/PopExit/PopExit';
import PopNewCard from './components/Popups/PopNewCard/PopNewCard';
import PopBrowse from './components/Popups/PopBrowse/PopBrowse';
import Main from './components/Main';
import { GlobalStyles } from './GlobalStyles';
import theme from './styles/theme';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div className="wrapper">
        <GlobalStyles />
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;