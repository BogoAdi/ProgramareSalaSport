
import React, { useEffect, useState } from 'react'
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler, Appointments, WeekView, AppointmentTooltip, Resources } from '@devexpress/dx-react-scheduler-material-ui';
import axios from 'axios';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


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
      console.log(newData);
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



  // const AppointmentTooltip = (props) =>{
    
  //     return (
  //       <div className="movie-tooltip">
  //         <div className="movie-info">
  //           <div className="movie-title">
  //             {props.startDate} -{props.endDate}
  //           </div>
  //           <div>
  //             Price: {props.totalPrice}
  //           </div>
  //           <div>
  //             hours: {props.hours} 
  //           </div>
  //         </div>
  //       </div>
  //     );
  // }
  


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

        />
        <WeekView
          startDayHour={8}
          endDayHour={20}
        />

        <Appointments
          appointmentComponent={Appointment}
        />
        <AppointmentTooltip
          showOpenButton
          showDeleteButton
        />
      </Scheduler>

    </>
  );
}

export default AppointmentsCalendar;
