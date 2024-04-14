// material-ui
import React from 'react';
import { Button, Typography, Skeleton } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';

import githubIcon from 'assets/images/provider/githubIcon.png';
import jiraIcon from 'assets/images/provider/jiraIcon.png';
import megaIcon from 'assets/images/provider/megaIcon.png';
import bitbucketIcon from 'assets/images/provider/bitbucketIcon.png';
import gitlabIcon from 'assets/images/provider/gitlabIcon.png';
import gmailIcon from 'assets/images/provider/gmailIcon.png';
import googleCalendarIcon from 'assets/images/provider/googleCalendarIcon.png';
import googleMeetIcon from 'assets/images/provider/googleMeetIcon.png';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import WebService from 'api/useJwt';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

// ==============================|| Developer Calendar PAGE ||============================== //

const ConditionalButton = ({ type, loadingProviders, handleConnect, integrationStatus }) => {
  switch (integrationStatus) {
    case 'soon':
      return (
        <Button variant="contained" fullWidth disabled>
          Soon
        </Button>
      );
    case 'available':
      return (
        <Button variant="contained" fullWidth onClick={() => handleConnect(type)}>
          {loadingProviders === type ? <WifiIcon /> : 'Connect'}
        </Button>
      );
    default:
      return (
        <Button variant="contained" fullWidth color="success">
          Connected
        </Button>
      );
  }
};

// Inside your ConditionalButton component definition
ConditionalButton.propTypes = {
  type: PropTypes.string.isRequired,
  loadingProviders: PropTypes.string,
  handleConnect: PropTypes.func.isRequired,
  integrationStatus: PropTypes.string.isRequired
};
function ProviderCategory({ category, type, handleConnect }) {
  return (
    <MainCard title={type} contentSX={{ display: 'flex', gap: 2, flexWarp: 'warp', overflowX: 'scroll' }}>
      {category.map(provider => {
        return (
          <div key={provider.type} style={{ minWidth: 200 }}>
            <Provider provider={provider} handleConnect={handleConnect} />
          </div>
        );
      })}
    </MainCard>
  );
}

// Inside your ProviderCategory component definition
ProviderCategory.propTypes = {
  category: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  handleConnect: PropTypes.func.isRequired
};

function Provider({ provider, loadingProviders, handleConnect }) {
  const { type, providerId, integrationStatus } = provider;
  return (
    <MainCard contentSX={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }} title={type}>
      {/* Render icon based on provider type */}
      {type === 'GitHub' && <img src={githubIcon} alt="github-icon" width={80} height={80} />}
      {type === 'Jira' && <img src={jiraIcon} alt="jira-icon" width={80} height={80} />}
      {type === 'Mega' && <img src={megaIcon} alt="mega-icon" width={80} height={80} />}
      {type === 'Bitbucket' && <img src={bitbucketIcon} alt="bitbucket-icon" width={80} height={80} />}
      {type === 'GitLab' && <img src={gitlabIcon} alt="gitlab-icon" width={80} height={80} />}
      {type === 'Gmail' && <img src={gmailIcon} alt="gmail-icon" width={80} height={80} />}
      {type === 'Google Calendar' && <img src={googleCalendarIcon} alt="googleCalendar-icon" width={80} height={80} />}
      {type === 'Google Meet' && <img src={googleMeetIcon} alt="googleMeet-icon" width={80} height={80} />}

      {/* Render button based on provider ID existence */}
      <ConditionalButton
        handleConnect={handleConnect}
        integrationStatus={integrationStatus}
        loadingProviders={loadingProviders}
        providerId={providerId}
        type={type}
      />
    </MainCard>
  );
}

// Inside your Provider component definition
Provider.propTypes = {
  provider: PropTypes.shape({
    type: PropTypes.string.isRequired,
    providerId: PropTypes.string.isRequired,
    integrationStatus: PropTypes.string.isRequired
  }).isRequired,
  loadingProviders: PropTypes.string,
  handleConnect: PropTypes.func.isRequired
};

const IntegrationList = () => {
  const [loading, setLoading] = React.useState(true);
  const [providersByCategories, setProvidersByCategories] = React.useState([]);
  const [loadingProviders, setLoadingProviders] = React.useState();
  React.useEffect(() => {
    async function fetchIntegrationList() {
      try {
        const response = (await WebService().getProviderList()).data;
        if (response.success) {
          setProvidersByCategories(response.data);
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

  const handleConnect = async _providerType => {
    setLoadingProviders(_providerType);
    try {
      if (_providerType === 'GitHub') {
        const response = (await WebService().accessToGithHub()).data;
        toast.info(response.message);
        window.open(response.data.authorizationUrl);
      }

      const response = (await WebService().getProviderList()).data;
      setProvidersByCategories(response.data);
      toast.info(response.message);
    } catch (error) {
      console.error('Error connecting:', error);
    } finally {
      setLoadingProviders(null);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <MainCard title={`List of integrations applications`} style={{ width: '100%' }}>
        <Typography variant="body2">Welcome for the most important part of the application that you can make integration with</Typography>
        <MainCard>
          {loading || loadingProviders ? (
            <>
              {/* Render Skeleton placeholders for loading */}
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  <Skeleton variant="rectangular" width={'100%'} height={50} />
                  <Skeleton variant="rectangular" width={'100%'} height={100} />
                </div>
              ))}
            </>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
              {/* Map through providers and render a card for each */}
              {Object.keys(providersByCategories).map(type => (
                <ProviderCategory category={providersByCategories[type]} handleConnect={handleConnect} type={type} key={type} />
              ))}
            </div>
          )}
        </MainCard>
      </MainCard>
    </div>
  );
};

export default IntegrationList;
