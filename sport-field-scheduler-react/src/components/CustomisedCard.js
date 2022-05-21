import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";



export default function ImgMediaCard(props) {
  let { id } = useParams();
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
        <Link to={`/select-date/${props.id}`}>
          <Button size="small">Create an appointment</Button>
        </Link>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
