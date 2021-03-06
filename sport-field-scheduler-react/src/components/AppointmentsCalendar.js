
import React, { useEffect, useState } from 'react'
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler, Appointments, WeekView, AppointmentTooltip, Resources } from '@devexpress/dx-react-scheduler-material-ui';
import axios from 'axios';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';



import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import Room from '@mui/icons-material/Room';
import classNames from 'clsx';
import { styled } from '@mui/material/styles';

const AppointmentsCalendar = ({ dates, userId }) => {

  const [currentDate, setCurrentDate] = useState(Date.now());
  const [modifiedAppointments, setModifiedAppointments] = useState([]);

  useEffect(() => {
    console.log(userId);
    var array = [];
    dates.forEach(element => {
      //console.log("...");
      //console.log(element);
      var colour;

      if (element.userId === userId)
        colour = "purple";
      else
        colour = "red";

      let newData = {
        startDate: element.startDate,
        endDate: element.endDate,
        sportFieldId: element.sportFieldId,
        userId: element.userId,
        totalPrice: element.totalPrice,
        hours: element.hours,
        color: colour
      }
      //console.log(newData);
      array.push(newData);
    });
    setModifiedAppointments(array);

  }, [dates, userId])


  const Appointment = ({ children, style, data, ...restProps }) => (
    <Appointments.Appointment
      {...restProps}
      
      style={{
        ...style,
        backgroundColor: data.color
      }}
    >
      {children}
    </Appointments.Appointment>

  );


  const deleteAppointments = (data) => {
    console.log(data.id);
  }

  const commitChanges = ({ deleted }) => {
    this.setState((state) => {
      let { data } = state;
      if (deleted === data) {
        // data = data.filter(appointment => appointment.id !== deleted);
        console.log(data.filter(appointment => appointment.id !== deleted));
      }
      // return { data };
    });
  }
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
        data={modifiedAppointments}
      >

        <ViewState
          currentDate={currentDate}
        />
        <EditingState
          onCommitChanges={commitChanges}
        >
        </EditingState>
        <IntegratedEditing />
        <WeekView
          cellDuration={60}
          startDayHour={6}
          endDayHour={22}
        />

        <Appointments
          appointmentComponent={Appointment}
        />
        <AppointmentTooltip
          showDeleteButton
          showCloseButton
        />
      </Scheduler>

    </>
  );
}

export default AppointmentsCalendar;
