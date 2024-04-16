import React, { useState } from 'react';
import {
  Button,
  Grid,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  InputAdornment,
  Divider,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Box, useTheme } from '@mui/system';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useSelector } from 'react-redux';
import MainCard from 'ui-component/cards/MainCard';
import GoogleIcon from '@mui/icons-material/Google';
import WebService from 'api/useJwt';
import { toast } from 'react-toastify';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '85vh'
  }
}));

const ResetPasswordForm = () => {
  const classes = useStyles();
  const theme = useTheme();
  const customization = useSelector(state => state.customization);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/profile');
  };
  return (
    <MainCard title="Reset Password" darkTitle boxShadow shadow="8" className={classes.root}>
      <MainCard sx={{ height: 'min', width: 'min', margin: 'inherit' }}>
        <Grid container direction="column" justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <AnimateButton>
              <Button
                disableElevation
                fullWidth
                onClick={handleBack}
                size="large"
                variant="outlined"
                sx={{
                  color: 'grey.700',
                  backgroundColor: theme.palette.grey[50],
                  borderColor: theme.palette.grey[100]
                }}
              >
                Back
              </Button>
            </AnimateButton>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
              <Button
                variant="outlined"
                sx={{
                  cursor: 'unset',
                  m: 2,
                  py: 0.5,
                  px: 7,
                  borderColor: `${theme.palette.grey[100]} !important`,
                  color: `${theme.palette.grey[900]}!important`,
                  fontWeight: 500,
                  borderRadius: `${customization.borderRadius}px`
                }}
                disableRipple
                disabled
              >
                Reset Password
              </Button>
              <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
            </Box>
          </Grid>
        </Grid>
        <Formik
          initialValues={{
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
          }}
          validationSchema={Yup.object().shape({
            currentPassword: Yup.string().required('Old Password is required'),
            newPassword: Yup.string()
              .required('New Password is required')
              .min(8, 'Password must be at least 8 characters')
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                'Password must contain at least one uppercase letter, one lowercase letter, and one number'
              ),
            confirmPassword: Yup.string()
              .required('Confirm Password is required')
              .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
          })}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            try {
              const response = (await WebService().updatePassword(values)).data;
              if (!response.success) {
                setErrors({ submit: response.message });
              } else {
                toast.success(response.message, { position: 'top-center' });
                navigate('/profile  ');
              }
            } catch (error) {
              throw new Error(erro);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <FormControl
                fullWidth
                error={Boolean(touched.currentPassword && errors.currentPassword)}
                sx={{ ...theme.typography.customInput }}
              >
                <InputLabel htmlFor="outlined-adornment-old-password">Old Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-old-password"
                  type={showPassword ? 'text' : 'password'}
                  value={values.currentPassword}
                  name="currentPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle old password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="large"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Old Password"
                  inputProps={{}}
                />
                {touched.currentPassword && errors.currentPassword && (
                  <FormHelperText error id="outlined-adornment-old-password-helper-text">
                    {errors.currentPassword}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth error={Boolean(touched.newPassword && errors.newPassword)} sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-new-password">New Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-new-password"
                  type={showPassword ? 'text' : 'password'}
                  value={values.newPassword}
                  name="newPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle new password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="large"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="New Password"
                  inputProps={{}}
                />
                {touched.newPassword && errors.newPassword && (
                  <FormHelperText error id="outlined-adornment-new-password-helper-text">
                    {errors.newPassword}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl
                fullWidth
                error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                sx={{ ...theme.typography.customInput }}
              >
                <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-confirm-password"
                  type={showPassword ? 'text' : 'password'}
                  value={values.confirmPassword}
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle confirm password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="large"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                  inputProps={{}}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <FormHelperText error id="outlined-adornment-confirm-password-helper-text">
                    {errors.confirmPassword}
                  </FormHelperText>
                )}
              </FormControl>
              {errors.submit && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Box>
              )}
              <Box sx={{ mt: 2 }}>
                <AnimateButton>
                  <Button disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
                    {!isSubmitting ? 'Submit' : 'Loading'}
                  </Button>
                </AnimateButton>
              </Box>
            </form>
          )}
        </Formik>
        <Grid item xs={12} paddingTop={4}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
            <Button
              variant="outlined"
              sx={{
                cursor: 'unset',
                m: 2,
                py: 0.5,
                px: 7,
                gap: 2,
                borderColor: `${theme.palette.grey[100]} !important`,
                color: `${theme.palette.grey[900]}!important`,
                fontWeight: 500,
                borderRadius: `${customization.borderRadius}px`
              }}
              disableRipple
              disabled
            >
              reset with google
              <GoogleIcon />
            </Button>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Typography variant="body2" color="textSecondary">
              Resetting your password with Google allows for a seamless and secure process. For more information on how to integrate Google
              authentication into your application, please refer to the&nbsp;
              <Button
                LinkComponent={'a'}
                onClick={() => window.open('https://support.google.com/mail/answer/41078?hl=en&co=GENIE.Platform%3DDesktop')}
                target="_blank"
                rel="noreferrer"
              >
                Google Identity Change Password documentation
              </Button>
              .
            </Typography>
          </Box>
        </Grid>
      </MainCard>
    </MainCard>
  );
};

export default ResetPasswordForm;
