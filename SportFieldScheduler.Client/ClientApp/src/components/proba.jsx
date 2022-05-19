
import * as React from 'react';
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker';
import { useEffect, useState } from 'react';
import ListOfHours from './ListOfHours'
import axios from 'axios';
import RoundButton from './RoundButton';
import ContentAppointment from './ContentAppointment';
const SelectDate = () => {
    const [selectedDate, setSelectedDate] = useState();


    const isSelected = (date) => {
        if (date === undefined) return 0;
        return 1;
    }
    const ret = (x) => {
        if (x === undefined) return "z";
        return x.toString();
    }
    const [appoint, setAppoint] = useState([]);

    
        const getDates =(selectedDate) =>{
        const fetchGets = async () => {
            const res = await axios.get('https://localhost:44345/api/Appointments');
            setAppoint(appoint.filter( app=> app.date <= selectedDate));
            console.log(res);
        };

        fetchGets();

}



    return (
        <>
            <div>aici {isSelected(selectedDate)}</div>
            <DatePicker
                selected={selectedDate}
                onChange={date => {
                    setSelectedDate(date);
                    getDates(date);
                    console.log(appoint);
                }}
                
            />
            
         <div > ok </div>
            <div>
            {appoint.map((appointment=> (
                <div>
                <RoundButton
                    id={appointment.id}
                    date={appointment.date}
                    hours={appointment.hours}

                />
                </div>
            )))}
        </div>

        </>

    )


}


export default SelectDate;