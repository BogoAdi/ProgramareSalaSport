
import React, { useEffect, useState } from 'react'
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, Appointments, WeekView , AppointmentTooltip,} from '@devexpress/dx-react-scheduler-material-ui';
import axios from 'axios';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const AppointmentsCalendar = ({dates}) => {

  const [currentDate, setCurrentDate] = useState(Date.now());
  

  return (
    <>
      <div id="topSize" sx=" display: flex;">
        <div sx="position: absolute;
              right: 150px;
              width: 200px;
              height: 120px;
              border: 3px solid green;">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Date_Time picker"
              defaultCalendarMonth={Date.now}
              value={currentDate}
              onChange={date => {
                setCurrentDate(date);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </div>
      <Scheduler
        data={dates}
      >

        <ViewState
          currentDate={currentDate}
        />
        <WeekView
          startDayHour={8}
          endDayHour={20}
        />
        
        <Appointments />
        <AppointmentTooltip />
      </Scheduler>
    </>
  );
}

export default AppointmentsCalendar;
