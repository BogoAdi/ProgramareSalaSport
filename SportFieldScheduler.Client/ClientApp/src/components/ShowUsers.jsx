import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UsersTable from './UsersTable';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteObject from'./DeleteObject';

const ShowUsers = () => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        const fetchInfo = async () => {
          const res = await axios.get('https://localhost:7242/api/Users');
          setInfo(res.data);
        };
  fetchInfo();
}, []);
return (
    <>
    <UsersTable props={info}>All Users</UsersTable>
    </>
)
}

export default ShowUsers;


/*
  
       <Button variant="text"startIcon={<DeleteIcon />}    >
           Delete
       </Button>  
*/