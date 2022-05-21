
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getDate } from 'date-fns';
import RoundButton from './RoundButton';
const ListOfHours = ({ selectedDate }) => {
    const [appoint, setAppoint] = useState();

    useEffect(() => {
        const fetchGets = async () => {
            const res = await axios.get('https://localhost:44345/api/Appointments');
            setAppoint(res.data);
            console.log(res.data);
            console.log("ok");
            console.log( selectedDate);
        };
      
        fetchGets();
    }, []);


    return (
        <>
        <div>pp{selectedDate}   ok</div>
        </>

    );


}

export default ListOfHours;
/*
 {appoint.map((appoint) => (
                <RoundButton
                    id={appoint.id}
                    date={appoint.name}
                    hours={appoint.img}
                />
            ))}
*/