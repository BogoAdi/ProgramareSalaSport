
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


const Schema = yup.object().shape({
    date: yup.date(),
    hours: yup.number(),
    sportFieldId: yup.string(),
    userId: yup.string()
})
const Proba = ({pushAppointment,succesfullAppointment}) => {
    let { id } = useParams();
      //const [state, SetState]=useState(false);
    const [username, setUsername] = useState([]);
    const [users, setUsers] = useState([]);
    const [finalDate, setFinalDate] = useState(Date.now);
    const [totalPrice, setTotalPrice] = useState(0);
    const [sportField, setSportField] = useState([]);
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

    useEffect(() => {
        console.log(totalPrice);
    }, [totalPrice]);


    const CreateAnAppointment = data => {

        const sendData = () => {
            data.date = finalDate;
            //to move to UTC
            data.date.setHours(finalDate.getHours() + 3);
         
            data.sportFieldId = id;
            data.userId = username;
            axios.post('https://localhost:44360/api/Appointments', data)
                .then(res => {
                    alert("Appointment created");
                }).catch(err => {
                    alert("The choose time span is not free. Please choose an appropriate slot");
                });

        };
        sendData();
        pushAppointment(data);
        succesfullAppointment(true);


    }

    const handleTotalPrice = (event) => {
        setTotalPrice(event.target.value* sportField.pricePerHour);
    };
    return (
        <>
            <div id="Show table">
                <Link to={`/see-scheduler/${id}`}>
                    <Button >See all time slots
                    </Button>
                </Link>
            </div>
            <p></p>
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
                <div>
                    Id of the user:
                    {username}
                </div>

                {finalDate.length !== 0 && username.length !== 0 &&
                    <>
                        <div>
                            <form onSubmit={handleSubmit(CreateAnAppointment)}>
                                <label title="Hours" >Hours </label>
                                <br></br>
                                <input type="number" defaultValue="1" min="1" max="5"{...register('hours')}
                                onChange={handleTotalPrice}
                                /><p></p>
                                <div >Total Price  {totalPrice}
                                </div>
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