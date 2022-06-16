import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AppointmentsCalendar from './AppointmentsCalendar';
import { useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
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
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const SeeScheduler = ({ selectedUserId }) => {
    let { id } = useParams();
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const [dates, setDates] = useState([]);
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [allAppointments, setAllAppointments] = useState([]);
    const [openAlert, setOpenAlert] = React.useState(false);
    const [appointmentCreated, setAppointmentCreated] = useState(false);
    const handleClickAlert = () => {
        setOpenAlert(true);
    };

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
        setAppointmentCreated(false);
    };


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
            setAppointmentCreated(true);
            handleClickAlert();
        }
    }
    const handleClose = () => {
        setOpen(false);

    };
    useEffect(() => {
        console.log(appointmentCreated);
    }, [appointmentCreated])
    return (
        <>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: '20px', mb: '25px' }}
            >
                <Box id="Show table"
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Link to={`/`}>
                        <Button  >Back
                        </Button>
                    </Link>
                </Box>
                {/* <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    hello
                </Box> */}
                <Box display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                >
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
                </Box>
            </Box>


            <AppointmentsCalendar selectedSportFieldId={id} dates={dates} userId={"a2baf7ff-5b66-4c32-95d7-b6b9f7882589"} />
            {appointmentCreated === true  &&
                <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
                    <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                        Appointment created succesfully!
                    </Alert>
                </Snackbar>
            }
        </>
    )

}
export default SeeScheduler;