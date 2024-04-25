import Joyride from 'react-joyride';
import { Typography, Grid, Tooltip } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PasswordIcon from '@mui/icons-material/Password';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ThemeIcon from '@mui/icons-material/Palette';
import SocialMediaIcon from '@mui/icons-material/Group';
import HelpIcon from '@mui/icons-material/Help';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import WebService from 'api/useJwt';

import TourIcon from '@mui/icons-material/Tour';
const cardData = [
  {
    title: 'Update Profile',
    icon: <AccountBoxIcon />,
    description: 'Navigate through different facets of your profile...',
    path: '/profile/information',
    class: 'update-profile-card'
  },
  {
    title: 'Update Password',
    icon: <PasswordIcon />,
    description: 'Enhance your account security by updating your password...',
    path: '/profile/password',
    class: 'update-password-card'
  },
  {
    title: 'Upgrade Role',
    icon: <ManageAccountsIcon />,
    description: 'Elevate your profile with additional privileges by upgrading your role...',
    path: '/profile/role',
    class: 'upgrade-role-card'
  },
  {
    title: 'Theme',
    icon: <ThemeIcon />,
    description: 'Customize the appearance of your profile with different themes...',
    path: '/profile/theme',
    class: 'theme-card'
  },
  {
    title: 'Social Media',
    icon: <SocialMediaIcon />,
    description: 'Connect your profile to social media platforms...',
    path: '/profile/social-media',
    class: 'social-media-card'
  },
  {
    title: 'Help',
    icon: <HelpIcon />,
    description: 'Get assistance with any questions or issues you may have regarding your profile...',
    path: '/profile/help',
    class: 'help-card'
  }
];

const steps = cardData.map((card, index) => ({
  target: `.${card.class}`,
  content: (
    <>
      <Typography variant="h6">{`Step ${index + 1}: ${card.title}`}</Typography>
      <Typography variant="body1">{card.description}</Typography>
    </>
  )
}));

// ==============================|| PROFILE PAGE ||============================== //

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '85vh'
  }
}));

const Help = ({ setRunTour }) => {
  return (
    <Tooltip title="guide">
      <TourIcon sx={{ width: 24, height: 24 }} onClick={() => setRunTour(true)} />
    </Tooltip>
  );
};
const ProfilePage = () => {
  const classes = useStyles();
  const userData = WebService().getUserData();
  const [runTour, setRunTour] = useState(!userData.help.profile);
  async function updateProfileGuideStatus() {
    try {
      const response = (await WebService().updateHelpStatus('profile')).data;
      console.log(response, 'response');
    } catch (error) {
      console.log(error, 'erro');
    }
  }
  const handleJoyrideCallback = async data => {
    const { status } = data;
    if (status === 'finished' || status === 'skipped') {
      await updateProfileGuideStatus();
      // Set runTour to false when the tour is finished or skipped
      setRunTour(false);
    }
  };

  return (
    <>
      <MainCard icon={<Help setRunTour={setRunTour} />} title="Welcome to Your Profile Hub" boxShadow shadow="8" className={classes.root}>
        <Grid container spacing={6}>
          {cardData.map((card, index) => (
            <Grid item key={index} sm={12} md={6} lg={4}>
              <MainCard
                boxShadow
                shadow="8"
                border={0}
                title={card.title}
                icon={
                  <Link to={card.path} className={card.class}>
                    {card.icon}
                  </Link>
                }
              >
                <Typography variant="body2">{card.description}</Typography>
              </MainCard>
            </Grid>
          ))}
        </Grid>
      </MainCard>
      <Joyride continuous run={runTour} showProgress showSkipButton steps={steps} callback={handleJoyrideCallback} />
    </>
  );
};

export default ProfilePage;
