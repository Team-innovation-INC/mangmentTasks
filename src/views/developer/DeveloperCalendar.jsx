// material-ui
import * as React from 'react';
import { Typography } from '@mui/material';
import { Fragment } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import frLocale from '@fullcalendar/core/locales/fr';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| Developer Calendar PAGE ||============================== //
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

const DeveloperCalendar = () => {
  const [date, setDate] = React.useState(new Date());
  function handleDate(_newDate) {
    setDate(_newDate);
  }
  return (
    <Fragment>
      <MainCard title={`Developer Calendar for ${date}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2">Welcome for the most important part of the day, Lets work</Typography>
        </div>
      </MainCard>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        datesSet={handleDate}
        eventContent={renderEventContent}
        initialDate={date}
        locale={frLocale}
      />
    </Fragment>
  );
};

export default DeveloperCalendar;
