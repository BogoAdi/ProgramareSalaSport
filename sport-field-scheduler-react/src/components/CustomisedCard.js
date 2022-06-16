import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';

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
    <>
      <Card sx={{
        mt: '100px',
        mb: '25px',
        margin: '5%',
        heigth: "400px",
        width: "250",
        animation: 'ease-in-out',
        borderRadius: 3,
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
          height="150"

          image={props.image}
        />
        <CardContent sx={{ heigth: "100" }} >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography  variant="h6" component="div" align="justify">
              {props.name}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="body2" color="text.secondary">
              {props.price} $ per Hour
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="body" color="text.secondary">
              {props.city}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="body" color="text.secondary">
              {props.category}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link to={`/see-scheduler/${props.id}`}>
              <Button size="small">See scheduler   </Button>
            </Link>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button size="small" onClick={handleClickOpen}>
              Learn More
            </Button>
          </Box>
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
    </>
  );
}
