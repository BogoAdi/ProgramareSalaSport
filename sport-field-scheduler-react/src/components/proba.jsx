
import * as React from 'react';
import 'react-datepicker/dist/react-datepicker.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, List } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useParams } from "react-router-dom";

import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Schema = yup.object().shape({
    date: yup.date(),
    hours: yup.number(),
    sportFieldId: yup.string(),
    userId: yup.string()
})


const Proba = ({ pushAppointment, succesfullAppointment }) => {

    let { id } = useParams();
    //const [state, SetState]=useState(false);
    const [username, setUsername] = useState([]);
    const [users, setUsers] = useState([]);
    const [finalDate, setFinalDate] = useState(Date.now);
    const [totalPrice, setTotalPrice] = useState(0);
    const [sportField, setSportField] = useState({});
    const [errorState, setErrorState] = useState(false);
    const { register, handleSubmit, formState: { errors }
    } = useForm({
        resolver: yupResolver(Schema)
    });



    useEffect(() => {

        const fetchGetUser = async () => {
            const res = await axios.get('https://localhost:44360/api/Users');
            setUsers(res.data);
        }
        const fetchGetSportField = async () => {
            const res = await axios.get(`https://localhost:44360/api/SportFields/${id}`);
            setSportField(res.data);
        }
        fetchGetUser();
        fetchGetSportField();
        setTotalPrice(sportField.pricePerHour);
    }, []);

    useEffect(() => {
        console.log(sportField.pricePerHour);
    }, [sportField])
    const handleChange = (event) => {
        setUsername(event.target.value);
    };



    const CreateAnAppointment = data => {

        const sendData = () => {
            const ChosenDate = new Date(finalDate);
            console.log(ChosenDate);

            data.date = ChosenDate;
            // console.log(final)
            //to move to UTC
            data.date.setHours(ChosenDate.getHours() + 3);

            data.sportFieldId = id;
            data.userId = username;
            axios.post('https://localhost:44360/api/Appointments', data)
                .then(res => {
                    pushAppointment(data);
                    succesfullAppointment(true);
                    setErrorState(false);
                }).catch(err => {
                    setErrorState(true);
                });

        };
        sendData();



    }

    const handleTotalPrice = (event) => {
        setTotalPrice(event.target.value * sportField.pricePerHour);
    };
    return (
        <>
            <br />
            <div id="ContainerSetting" sx={{ m: 10 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        label="Date Time picker"
                        value={finalDate}
                        onChange={date => { setFinalDate(date) }
                        }
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
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

                {finalDate.length !== 0 && username.length !== 0 &&
                    <>
                        <div>
                            <form onSubmit={handleSubmit(CreateAnAppointment)}>
                                <label title="Hours" >Hours </label>
                                <br></br>
                                <input type="number" defaultValue="1" min="1" max="5"{...register('hours')}
                                    onChange={handleTotalPrice}
                                /><br />
                                <h4 >Total Price 
                                    { totalPrice } 
                                </h4>
                                {errorState === true &&
                                    <h3 style={{ color: 'red' }}>
                                        Invalid time slot! Try another time span.
                                    </h3>
                                }
                                <Button type="submit"> Create Appointment
                                </Button>
                            </form>

                        </div>
                    </>
                }
            </div>
        </>

    )


}
export default Proba;