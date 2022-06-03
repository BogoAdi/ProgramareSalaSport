import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import AppointmentsCalendar from './AppointmentsCalendar';
import { useParams } from "react-router-dom";


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ImgMediaCard(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);

  };

  return (
    <Card sx={{
      minWidth: '15%',
      maxWidth: '15%',
      margin: '2%',
      animation: 'ease-in-out',
      shadow: '0px 0px 15px -5px',
      display: 'inline-block',
      '& .MuiCardMedia-img': {
        objectFit: 'cover'
      }, ":hover": {
        transform: "scale(1.1)",
        shadow: "0px 0px 15px 0px"
      }

    }}>
      <CardMedia
        component="img"
        alt={props.name}
        height="140"
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.price} RON
        </Typography>
        <Typography variant="body" color="text.secondary">
          {props.city}
        </Typography>

      </CardContent>
      <CardActions>
        <Link to={`/see-scheduler/${props.id}`}>
          <Button size="small">See scheduler   </Button>
        </Link>
        <Button size="small" onClick={handleClickOpen}>
          Learn More
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {props.name}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {props.description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

      </CardActions>
    </Card >
  );
}
