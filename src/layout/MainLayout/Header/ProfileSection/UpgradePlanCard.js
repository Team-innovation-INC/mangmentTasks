// material-ui
import { styled } from '@mui/material/styles';
import { Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// styles
const CardStyle = styled(Card)(({ theme }) => ({
  background: theme.palette.warning.light,
  marginTop: '16px',
  marginBottom: '16px',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '200px',
    height: '200px',
    border: '19px solid ',
    borderColor: theme.palette.warning.main,
    borderRadius: '50%',
    top: '65px',
    right: '-150px'
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: '200px',
    height: '200px',
    border: '3px solid ',
    borderColor: theme.palette.warning.main,
    borderRadius: '50%',
    top: '145px',
    right: '-70px'
  }
}));

// ==============================|| PROFILE MENU - UPGRADE PLAN CARD ||============================== //

const UpgradePlanCard = () => {

  return (
    <CardStyle>
      <CardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h4">Ask for more member</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color="grey.900" sx={{ opacity: 0.5 }}>
              if you need to get more members <br />
              click here to add more
            </Typography>
          </Grid>
          <Grid item>
            <Stack direction="column" gap={2}>
              <AnimateButton>
                <Link to={'/members/add'} style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="warning" sx={{ boxShadow: 'none' }}>
                    Add members
                  </Button>
                </Link>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </CardStyle>
  );
};

export default UpgradePlanCard;
