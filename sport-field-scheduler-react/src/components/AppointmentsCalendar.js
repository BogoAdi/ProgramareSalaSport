
import React, { useEffect, useState } from 'react'
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, Appointments, WeekView } from '@devexpress/dx-react-scheduler-material-ui';
import axios from 'axios';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AppointmentsCalendar = ({ selectedSportFieldId, selectedUserId }) => {

  const [schedulerData, setSchedulerData] = useState([]);
  const [currentDate, setCurrentDate] = useState(Date.now());
  const [dates, setDates] = useState([]);

  //const exemple = [{ startDate: '2022-05-26T15:45', endDate: '2022-05-26T16:45', title: 'Meeting' }]
  useEffect(() => {
    const getAppointments = async () => {
      const res = await axios.get('https://localhost:44360/api/Appointments');
      setDates(res.data);
      //dates.filter(x=> x.sportFieldId === selectedSportFieldId);

      var d = res.data;
      var array = [];
      d.forEach(element => {
        if (element.sportFieldId === selectedSportFieldId) {
          let t = new Date(element.date);
          t.setHours(t.getHours() + element.hours);


          let newData = {
            startDate: element.date,
            endDate: (t),
            sportFieldId: element.sportFieldId,
            userId: element.userId,
            TotalPrice: element.totalPrice,
            Hours: element.hours
          }


          array.push(newData);
        }

      })
      setSchedulerData(array);
    }

    getAppointments();
    console.log(dates);

  }, []);

  useEffect(() => {
    console.log("Here");
    console.log(schedulerData);
    console.log(currentDate);
    console.log(dates);
  }, [dates])

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
        data={schedulerData}
      >
        <ViewState
          currentDate={currentDate}
        />
        <WeekView
          startDayHour={8}
          endDayHour={20}
        />
        <Appointments />
      </Scheduler>
    </>
  );
}

export default AppointmentsCalendar;
