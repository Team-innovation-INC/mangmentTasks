import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import WebService from 'api/useJwt';
import { useEffect } from 'react';

// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector(state => state.customization);
  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const response = (await WebService().getConnectedUser()).data;
        if (response.user) {
          WebService().setUserData(response.user);
        }
      } catch (error) {
        window.location.replace('/auth');
      }
    }
    fetchUserDetails();
  }, []);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes userRole={WebService().getUserRole()} />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
