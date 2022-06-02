import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AppointmentsCalendar from './AppointmentsCalendar';
import { useParams } from "react-router-dom";

import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Proba from './proba';
import { useState, useEffect } from 'react';
import axios from 'axios';



const SeeScheduler = ({ selectedUserId }) => {
    let { id } = useParams();
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const [dates, setDates] = useState([]);
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [allAppointments, setAllAppointments] =useState([]);
    useEffect(() => {
        const getAppointments = async () => {
            const res = await axios.get('https://localhost:44360/api/Appointments');
            setDates(res.data);
            //dates.filter(x=> x.sportFieldId === selectedSportFieldId);

            var d = res.data;
            var array = [];
            d.forEach(element => {
                if (element.sportFieldId === id) {
                    let t = new Date(element.date);
                    t.setHours(t.getHours() + element.hours);


                    let newData = {
                        startDate: element.date,
                        endDate: (t),
                        sportFieldId: element.sportFieldId,
                        userId: element.userId,
                        totalPrice: element.totalPrice,
                        hours: element.hours
                    }


                    array.push(newData);
                }

            })
            setDates(array);
        }

        getAppointments();
        console.log(dates);

    }, [allAppointments]);


    // useEffect(() => {
    //     console.log(dates);
    // }, [dates])

    //const [state, SetState]=useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const pushAppointment = appointment => {
        let array = [];
        array = dates;
        array.push(appointment);
        console.log(array);
        setDates(array);
        console.log(dates);
        setAllAppointments(dates);

    }

    const succesfullAppointment = (response) => {
        if (response === true) {
            handleClose();
            console.log(response);

        }
    }
    const handleClose = () => {
        setOpen(false);

    };
    return (
        <>
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Create an Appointment
                </Button>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">
                        {"Create a new Appointment?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Proba
                                pushAppointment={pushAppointment}
                                succesfullAppointment={succesfullAppointment}
                            />
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div id="Show table">
                <Link to={`/sport-fields`}>
                    <Button  >Back
                    </Button>
                </Link>


            </div>
            <AppointmentsCalendar selectedSportFieldId={id} dates={dates} userId={"a2baf7ff-5b66-4c32-95d7-b6b9f7882589"} />
        </>
    )

}
export default SeeScheduler;