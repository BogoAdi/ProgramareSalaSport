
import { Button } from '@mui/material';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';

import { useState, useEffect } from 'react';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MyAppointmentsPage = () => {

    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState([]);
    const [personalAppointments, setPersonalAppointments] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('https://localhost:44360/api/Users');
            setUsers(res.data);
        };

        fetchPosts();
    }, []);

    const handleChange = (event) => {
        setUsername(event.target.value);
    };


    const DeleteItem = (itemID) => {
        const fetchInfo = async () => {
            const res = await axios.delete(`https://localhost:44360/api/Appointments/${itemID}`);
            if (res.status === 204) {
                setPersonalAppointments(personalAppointments.filter(user => user.id !== itemID));
            }

            console.log(res);
        };
        fetchInfo();

    }


    useEffect(() => {
        const fetchInfo = async () => {
            const res = await axios.get('https://localhost:44360/api/Appointments');
            setPersonalAppointments(res.data.filter(appointment => appointment.userId === username)); 
             console.log(res);    
        };
            fetchInfo();
            //setPersonalAppointments(personalAppointments.filter(appointment => appointment.userId === username));
            console.log(personalAppointments);
    }, [username]);

    return (
        <>
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
            {username.length !== 0 &&

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Date </TableCell>
                                <TableCell align="center">TotalPrice</TableCell>
                                <TableCell align="center">Hours</TableCell>
                                <TableCell align="center">Username</TableCell>
                                <TableCell align="center">Delete  </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {personalAppointments.map((appointment) => (
                                <TableRow
                                    key={appointment.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center" component="th" scope="row">
                                        {appointment.date}
                                    </TableCell>
                                    <TableCell align="center" >
                                        {appointment.totalPrice}
                                    </TableCell>

                                    <TableCell align="center">{appointment.hours}</TableCell>
                                    <TableCell align="center">{appointment.user.name}</TableCell>
                                    <TableCell align="center">
                                        <Button startIcon={<DeleteIcon />} onClick={() => { DeleteItem(appointment.id) }} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


            }
        </>
    )

}

export default MyAppointmentsPage;