import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
import { Coffee } from './context/CoffeeContext'





export function App() {



  return (

    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Coffee>
          <Router />
        </Coffee>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>

  )
}


