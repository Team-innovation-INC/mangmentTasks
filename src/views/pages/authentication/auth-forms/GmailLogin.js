import WebService from 'api/useJwt';
import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function GmailLogin() {
  // Effect to extract token from URL on component mount
  useEffect(() => {
    async function fetchUserDetails() {
      const searchParams = new URLSearchParams(window.location.search);
      const tokenParam = searchParams.get('token');
      WebService().setToken(tokenParam);
      try {
        const response = (await WebService().getConnectedUser()).data;
        if (response.user) {
          WebService().setUserData(response.user);
          window.location.replace('/');
        }
      } catch (error) {
        window.location.replace('/auth');
      }
    }
    fetchUserDetails();
  }, []);

  return (
    <div>
      {/* Display the token value */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </div>
    </div>
  );
}

export default GmailLogin;
