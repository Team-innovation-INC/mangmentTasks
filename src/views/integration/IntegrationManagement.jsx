// material-ui
import React from 'react';
import { Button, Typography, Skeleton } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';

import githubIcon from 'assets/images/provider/githubIcon.png';
import jiraIcon from 'assets/images/provider/jiraIcon.png';
import megaIcon from 'assets/images/provider/megaIcon.png';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import WebService from 'api/useJwt';
import { toast } from 'react-toastify';

// ==============================|| Developer Calendar PAGE ||============================== //

const ConditionalButton = ({ providerId, type, loadingProviders, handleConnect }) => {
  switch (type) {
    case 'Jira':
    case 'Mega':
      return (
        <Button variant="contained" disabled>
          Soon
        </Button>
      );
    case 'GitHub':
      if (providerId) {
        return (
          <Button variant="contained" color="success">
            Connected
          </Button>
        );
      }
      return (
        <Button variant="contained" onClick={() => handleConnect(type)}>
          {loadingProviders === type ? <WifiIcon /> : 'Connect'}
        </Button>
      );
    default:
      return (
        <Button variant="contained" onClick={() => handleConnect(type)}>
          {loadingProviders === type ? <WifiIcon /> : 'Connect'}
        </Button>
      );
  }
};

function Provider({ provider, loadingProviders, handleConnect }) {
  const { type, providerId } = provider;
  return (
    <MainCard contentSX={{ display: 'flex', flexDirection: 'column', gap: 2 }} title={type}>
      {/* Render icon based on provider type */}
      {type === 'GitHub' && <img src={githubIcon} alt="githubIcon-icon" width={80} height={80} />}
      {type === 'Jira' && <img src={jiraIcon} alt="jiraIcon-icon" width={80} height={80} />}
      {type === 'Mega' && <img src={megaIcon} alt="megaIcon-icon" width={80} height={80} />}
      {/* Render button based on provider ID existence */}
      <ConditionalButton handleConnect={handleConnect} loadingProviders={loadingProviders} providerId={providerId} type={type} />
    </MainCard>
  );
}

const IntegrationManagement = () => {
  const [loading, setLoading] = React.useState(true);
  const [providers, setProviders] = React.useState([]);
  const [loadingProviders, setLoadingProviders] = React.useState();
  React.useEffect(() => {
    async function fetchIntegrationList() {
      try {
        const response = (await WebService().getPRoviderList()).data;
        if (response.success) {
          setProviders(response.data);
        }
        toast.info(response.message);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchIntegrationList();
  }, []);

  const handleConnect = async (_providerType) => {
    setLoadingProviders(_providerType);
    try {
      if (_providerType === 'GitHub') {
        const response = (await WebService().accessToGithHub()).data;
        toast.info(response.message);
        window.open(response.data.authorizationUrl);
      }

      const response = (await WebService().getPRoviderList()).data;
      setProviders(response.data);
      toast.info(response.message);
    } catch (error) {
      console.error('Error connecting:', error);
    } finally {
      setLoadingProviders(null);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <MainCard title={`List of integrations applications`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {loading ? (
            <>
              <Typography variant="body2">
                Welcome for the most important part of the application that you can make integration with
              </Typography>
              {/* Render Skeleton placeholders for loading */}
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <Skeleton variant="rectangular" width={150} height={50} />
                  <Skeleton variant="rectangular" width={150} height={100} />
                </div>
              ))}
            </>
          ) : (
            <>
              <Typography variant="body2">
                Welcome for the most important part of the application that you can make integration with
              </Typography>
              <div style={{ display: 'flex', gap: 8 }}>
                {/* Map through providers and render a card for each */}
                {providers.map((provider) => (
                  <Provider key={provider.type} provider={provider} loadingProviders={loadingProviders} handleConnect={handleConnect} />
                ))}
              </div>
            </>
          )}
        </div>
      </MainCard>
    </div>
  );
};

export default IntegrationManagement;
