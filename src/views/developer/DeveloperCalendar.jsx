// material-ui
import * as React from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography } from '@mui/material';
import { Fragment } from 'react';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| Developer Calendar PAGE ||============================== //

const DeveloperCalendar = () => {
  const [date, setDate] = React.useState('');
  function handleDate(_newDate) {
    setDate(_newDate);
  }
  return (
    <Fragment>
      <MainCard title={`Developer Calendar for ${date}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2">Welcome for the most important part of the day, Lets work</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker onChange={handleDate} />
          </LocalizationProvider>
        </div>
      </MainCard>
    </Fragment>
  );
};

export default DeveloperCalendar;
