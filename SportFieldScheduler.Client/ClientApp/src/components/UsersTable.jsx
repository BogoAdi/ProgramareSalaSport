import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';



function getRole(role) {
  if (role === 0) {
    console.log(role)
    return "Client";
   
  }
  return "Admin";
}


const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const deleteItem = (itemID) => {

    const fetchInfo = async () => {
      const res = await axios.delete(`https://localhost:7242/api/Users/${itemID}`);
      if (res.status === 204) {
        setUsers(users.filter(user => user.id !== itemID));
      }

      console.log(res);
    };
    fetchInfo();

  }

  useEffect(() => {
    const fetchInfo = async () => {
      const res = await axios.get('https://localhost:7242/api/Users');
      setUsers(res.data);
      console.log(res);
    };
    fetchInfo();
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name </TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">PhoneNumber</TableCell>
              <TableCell align="center">Username</TableCell>
              <TableCell align="center">Role</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="center" >
                  {user.email}
                </TableCell>

                <TableCell align="center">{user.phoneNumber}</TableCell>
                <TableCell align="center">{user.username}</TableCell>
                <TableCell align="center">....</TableCell>
                <TableCell align="center">
                  <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => { deleteItem(user.id) }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


    </>
  );
}

export default UsersTable;
/* <TableCell align="center" > (getRole({user.role}))</TableCell>
*/