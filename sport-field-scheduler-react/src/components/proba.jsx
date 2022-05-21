
import * as React from 'react';
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ContainerForDates from './ContainerForDates'; 


const Proba = () => {

    const [selectedDate, setSelectedDate] = useState();
    const [selected, setSelected] = useState(false);
    const [allDates, setAllDates] = useState([]);
    const [data, setData] =useState();
    const [appoint, setAppoint] = useState([]);


    const getDates = (selectedDate) => {

        console.log("here");
        appoint.forEach(element => {
            console.log(Date.parse(element.date));
            console.log(element.date);
        });

        console.log(Date.parse(selectedDate) );
        console.log(selectedDate);
        setAppoint(appoint.filter(x => Date.parse((x.date)) >=  Date.parse(selectedDate) ));
        console.log("appoint:");
      // console.log(getDate(selectedDate));
        // let s = appoint[0];
        // console.log( Date.parse(s.date))
        // setData(s.date);
        //console.log(s.date);
        //console.log(s.date.toUTCString());
       // console.log(getDate(data));
        console.log(appoint);
        // getTheDay(x.date) <= getTheDay(selectedDate)
        //&& selectedDate >= x.date
    };

    useEffect(() => {
        const fetchGets = async () => {

            const res = await axios.get('https://localhost:44345/api/Appointments');
            setAppoint(res.data);
        }
        if (selected === true) {
        
            getDates(selectedDate);
        }
        fetchGets();
    }, [selected]);

    
    return (
        <>
            <div>aici </div>
            <DatePicker
                selected={selectedDate}
                onChange={date => {
                    setSelectedDate(date);
                    setSelected(true);
                   // getDates(selectedDate);
                }}

            />

            <div > ok </div>
            <ContainerForDates appoint={appoint} loading={selected} selectedDate={selectedDate} />


        </>

    )


}


export default Proba;