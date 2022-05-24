
import * as React from 'react';
import 'react-datepicker/dist/react-datepicker.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, List } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const Proba = () => {
    let { id } = useParams();
    const [selectedDate, setSelectedDate] = useState();
    const [appoint, setAppoint] = useState([]);
    const [filteredData, setFilteredData] = useState();

    useEffect(() => {
        console.log('useEffect')
        const fetchGets = async () => {
            const res = await axios.get('https://localhost:44345/api/Appointments');
            setAppoint(res.data);
        }
        // if (selected === true) {
        //     fetchGets();
        //     getDates(selectedDate);
        //     setSelected(false);
        // }

        fetchGets();

    }, []);

    useEffect(() => {
        const filterAppointment = appoint
            .filter(x => Date.parse((x.date)) >= Date.parse(selectedDate))
            .filter(x => x.sportFieldId === id);

        setFilteredData(filterAppointment);
        console.log("Filtered");
        console.log(filterAppointment);
        console.log(filteredData);
    }, [selectedDate]);


    return (
        <>
            <div id="ContainerSetting" sx={{ m: 10 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        label="Date_Time picker"
                        value={selectedDate}
                        onChange={date => {
                            setSelectedDate(date);
                            console.log("calendar");
                            console.log(date);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                {filteredData &&
                    <>
                        <div>
                            Taken dates :
                        </div>
                        <div>
                            {filteredData.map((info, index) => (
                                <Button key={index}>
                                    {info.date}  for {info.hours} hours

                                </Button>
                            ))}
                        </div>
                    </>
                }

            </div>
        </>

    )


}
export default Proba;