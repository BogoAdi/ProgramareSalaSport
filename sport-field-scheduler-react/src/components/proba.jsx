
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

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
const Proba = () => {
    let { id } = useParams();
    const [selectedDate, setSelectedDate] = useState([]);
    const [appoint, setAppoint] = useState([]);
    const [filteredData, setFilteredData] = useState();
    const [username, setUsername] = useState([]);
    const [users, setUsers] = useState([]);
    const [time, setTime] = useState([]);
    const [finalDate, setFinalDate] = useState([]);
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
        console.log("selectedDate")
        console.log(selectedDate);
        const filterAppointment = appoint
            .filter(x => Date.parse((x.date)) >= Date.parse(selectedDate))
            .filter(x => x.sportFieldId === id);

        setFilteredData(filterAppointment);
        // console.log("Filtered");
        // console.log(filterAppointment);
        // console.log(filteredData);
    }, [selectedDate]);

    useEffect(() => {
        const fetchGetUser = async () => {
            const res = await axios.get('https://localhost:44345/api/Users');
            setUsers(res.data);
        }
        fetchGetUser();
    }, []);


    const handleChange = (event) => {
        setUsername(event.target.value);
    };
    const handleChangeTime = (newValue) => {
        setTime(newValue);
        //  console.log(time);
    }
    useEffect(() => {
        console.log("Time")
        console.log(time);
    }, [time]);

    // useEffect(() => {
    //     console.log(time);
    //     if (selectedDate !== undefined && time !== undefined) {
    //         setFinalDate = selectedDate.setHours(time.getHours()).setMinutes(time.getMinutes());
    //         console.log(setFinalDate);
    //     }

    // }, [time]);

    const sendIt = () => {

        if (time.length !== 0 && selectedDate.length !== 0) {
            let t = new Date(selectedDate);
            t.setHours(time.getHours());
            t.setMinutes(time.getMinutes());
            setFinalDate(t);

        }
    }
    useEffect(() => {
        console.log(finalDate);
    }, [finalDate]);

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
                        <div>
                            <FormControl sx={{ m: 1, minWidth: 80 }}>
                                <InputLabel id="demo-simple-select-autowidth-label">User</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={username}
                                    onChange={handleChange}
                                    autoWidth
                                    label="Username"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>{
                                        users.map((info, index) => (
                                            <MenuItem key={index} value={info.id}>{info.username}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>

                        </div>
                        <div>
                            Id of the user:
                            {username}
                        </div>
                        <p>
                        </p>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    label="Time"
                                    value={time}
                                    onChange={handleChangeTime}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>

                        </div>
                        {time &&
                            <Button onClick={() => { sendIt() }}>
                                Aicea
                            </Button>
                        }


                    </>
                }

            </div>
        </>

    )


}
export default Proba;