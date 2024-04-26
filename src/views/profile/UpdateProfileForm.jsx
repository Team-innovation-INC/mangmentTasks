import React, { useState } from 'react';
import {
  Button,
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Divider,
  Typography,
  MenuItem,
  Select,
  TextField,
  InputAdornment,
  IconButton
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useNavigate } from 'react-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Box, useTheme } from '@mui/system';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useSelector } from 'react-redux';
import MainCard from 'ui-component/cards/MainCard';
import GoogleIcon from '@mui/icons-material/Google';
import { FileMosaic, ImagePreview, FullScreen, useFakeProgress } from '@files-ui/react';
import { uploadFileToStorage } from 'api/firebase/uploadFile';

import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

import CancelIcon from '@mui/icons-material/Cancel';
import { convertAgeToDateOfBirth, transformFormData } from 'views/utilities/transformers';
import WebService from 'api/useJwt';
const maxDate = dayjs();
const useStyles = makeStyles(() => ({
  root: {
    minHeight: '85vh'
  }
}));

const sampleFile = {
  size: 28 * 1024 * 1024,
  type: 'text/plain',
  name: 'actions sampleFile.jsx',
  valid: true
};

const UpdateProfileForm = () => {
  const progress = useFakeProgress();

  const { info, contact } = WebService().getUserData();
  console.log(info.pic, 'info.pic');
  const [imgSrc, setImgSrc] = React.useState(info.pic ?? undefined);
  const [value, setValue] = React.useState(info.pic ?? undefined);
  const [loading, setLoading] = useState(false);

  const updateFiles = async (fileArray, setFieldValue) => {
    const file = fileArray[0];
    setLoading('uploading');
    try {
      const firebaseImageUrl = await uploadFileToStorage(file);
      setValue(file);
      setImgSrc(firebaseImageUrl);
      toast.success('File uploaded successfully');
      setFieldValue('pic', firebaseImageUrl);
      setLoading('success');
    } catch (error) {
      setLoading('error');
    }
  };

  const [open, setOpen] = useState(false);
  function handleSee() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  const classes = useStyles();
  const theme = useTheme();
  const customization = useSelector(state => state.customization);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/profile');
  };

  const sumbitInfo = async (values, { setSubmitting, setErrors }) => {
    const data = transformFormData(values);
    try {
      const response = (await WebService().updateInformation(data)).data;
      if (!response.success) {
        setErrors({ submit: response.message });
      } else {
        toast.success(response.message, { position: 'top-center' });
        const updateInfo = (await WebService().getConnectedUser()).data;
        if (updateInfo.user) {
          WebService().setUserData(updateInfo.user);
        }
        navigate('/profile  ');
      }
    } catch (error) {
      throw new Error(erro);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <MainCard title="Update Profile" darkTitle boxShadow shadow="8" className={classes.root}>
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
                Update Profile
              </Button>
              <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
            </Box>
          </Grid>
        </Grid>
        <Formik
          initialValues={{
            firstName: contact.fullName.split(' ')[0],
            lastName: contact.fullName.split(' ')[1],
            pic: info.pic,
            dateOfBirth: convertAgeToDateOfBirth(info.age),
            gender: info.gender ?? undefined,
            userName: contact.userName,
            bio: info.bio
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string().required('First Name is required'),
            lastName: Yup.string().required('Last Name is required'),
            pic: Yup.string().required('Picture is required'),
            dateOfBirth: Yup.date().required('Date of Birth is required'),
            gender: Yup.boolean(),
            userName: Yup.string()
              .required('Username is required')
              .min(3, 'Username lngth at least 3 caracters')
              .test('Username already exists', 'Username already exists', async value => {
                const response = (await WebService().checkExistUserName(value)).data;
                return response.data && !response.data?.exist;
              }),
            bio: Yup.string().required('bio is required')
          })}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            await sumbitInfo(values, { setSubmitting, setErrors });
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, isValid, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    {value ? (
                      <FileMosaic id={2} file={value} onSee={handleSee} imageUrl={imgSrc} info uploadStatus={loading} progress={progress} />
                    ) : (
                      <FileMosaic id={2} uploadStatus={loading} progress={progress} {...sampleFile} info />
                    )}
                    <input type="file" accept="image/*" onChange={e => updateFiles(e.target.files, setFieldValue)} />
                    <FullScreen open={open} onClose={handleClose}>
                      <ImagePreview src={imgSrc} />
                    </FullScreen>
                  </div>
                  {touched.pic && errors.pic && (
                    <FormHelperText error id="outlined-adornment-old-password-helper-text">
                      {errors.pic}
                    </FormHelperText>
                  )}
                </Grid>

                {/* Username */}
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={Boolean(touched.userName && errors.userName)} sx={{ marginTop: 2 }}>
                    <InputLabel htmlFor="userName">Username</InputLabel>
                    <OutlinedInput
                      id="userName"
                      value={values.userName}
                      name="userName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Username"
                      endAdornment={
                        values.userName && (
                          <InputAdornment position="end">
                            <IconButton aria-label="clear user name" onClick={() => setFieldValue('Username', '')} edge="end">
                              <CancelIcon />
                            </IconButton>
                          </InputAdornment>
                        )
                      }
                    />
                    {touched.userName && errors.userName && <FormHelperText error>{errors.userName}</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={Boolean(touched.firstName && errors.firstName)} sx={{ marginTop: 2 }}>
                    <InputLabel htmlFor="outlined-adornment-old-password">firstName</InputLabel>
                    <OutlinedInput
                      id="firstName"
                      value={values.firstName}
                      name="firstName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="firstName"
                      endAdornment={
                        values.firstName && (
                          <InputAdornment position="end">
                            <IconButton aria-label="clear first name" onClick={() => setFieldValue('firstName', '')} edge="end">
                              <CancelIcon />
                            </IconButton>
                          </InputAdornment>
                        )
                      }
                    />
                    {touched.firstName && errors.firstName && (
                      <FormHelperText error id="outlined-adornment-old-password-helper-text">
                        {errors.firstName}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={Boolean(touched.lastName && errors.lastName)} sx={{ marginTop: 2 }}>
                    <InputLabel htmlFor="outlined-adornment-old-password">lastName</InputLabel>
                    <OutlinedInput
                      id="lastName"
                      value={values.lastName}
                      name="lastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="lastName"
                      endAdornment={
                        values.lastName && (
                          <InputAdornment position="end">
                            <IconButton aria-label="clear last name" onClick={() => setFieldValue('lastName', '')} edge="end">
                              <CancelIcon />
                            </IconButton>
                          </InputAdornment>
                        )
                      }
                    />
                    {touched.lastName && errors.lastName && (
                      <FormHelperText error id="outlined-adornment-old-password-helper-text">
                        {errors.lastName}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                {/* Date of Birth */}
                <Grid item xs={12} sm={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <FormControl fullWidth error={Boolean(touched.dateOfBirth && errors.dateOfBirth)} sx={{ marginTop: 2 }}>
                      <DatePicker
                        maxDate={maxDate}
                        label="Date of Birth"
                        value={values.dateOfBirth}
                        onChange={newValue => {
                          setFieldValue('dateOfBirth', new Date(newValue));
                        }}
                        onBlur={handleBlur}
                        renderInput={params => <OutlinedInput {...params} error={Boolean(touched.dateOfBirth && errors.dateOfBirth)} />}
                      />
                      {touched.dateOfBirth && errors.dateOfBirth && <FormHelperText error>{errors.dateOfBirth}</FormHelperText>}
                    </FormControl>
                  </LocalizationProvider>
                </Grid>
                {/* Gender */}
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={Boolean(touched.gender && errors.gender)} sx={{ marginTop: 2 }}>
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                      labelId="gender-label"
                      id="gender"
                      name="gender"
                      value={values.gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Gender"
                    >
                      <MenuItem value={null}>Select Gender</MenuItem> {/* Optional initial empty value */}
                      <MenuItem value={true}>Male</MenuItem>
                      <MenuItem value={false}>Female</MenuItem>
                    </Select>
                    {touched.gender && errors.gender && <FormHelperText error>{errors.gender}</FormHelperText>}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormControl fullWidth error={Boolean(touched.bio && errors.bio)} sx={{ marginTop: 2 }}>
                  <TextField
                    fullWidth
                    multiline
                    row={4}
                    id="bio"
                    value={values.bio}
                    name="bio"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="biography"
                    InputProps={{
                      endAdornment: values.bio && (
                        <InputAdornment position="start" className="mr-16">
                          <IconButton aria-label="clear bio" onClick={() => setFieldValue('bio', '')} edge="end">
                            <CancelIcon />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                  {touched.bio && errors.bio && <FormHelperText error>{errors.bio}</FormHelperText>}
                </FormControl>
              </Grid>
              {errors.submit && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Box>
              )}
              <Box sx={{ mt: 2 }}>
                <AnimateButton>
                  <Button disabled={!isValid || isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
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

export default UpdateProfileForm;
