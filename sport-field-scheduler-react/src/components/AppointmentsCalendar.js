
import React, { useEffect, useState } from 'react'
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, Appointments, WeekView } from '@devexpress/dx-react-scheduler-material-ui';
import axios from 'axios';



const AppointmentsCalendar = () => {

    const [schedulerData, setSchedulerData] = useState([]);
    const currentDate = Date.now();
    const [dates, setDates] = useState([]);
  
    const exemple = [{ startDate: '2022-05-26T15:45', endDate: '2022-05-26T16:45', title: 'Meeting' }]
    useEffect(() => {
      const getAppointments = async () => {
        const res = await axios.get('https://localhost:44360/api/Appointments');
        setDates(res.data);
        console.log(res.status);
        var d = res.data;
        var array = [];
        d.forEach(element => {
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
    })
  
    return (
      <>
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
  