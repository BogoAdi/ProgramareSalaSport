
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
const UsersTable = ({props}) => {
      return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name </TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">PhoneNumber</TableCell>
                <TableCell align="center">Username</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.map((prop) => (
                <TableRow
                  key={prop.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {prop.name}
                  </TableCell>
                  <TableCell align="center" >
                    {prop.email}
                    </TableCell>

                  <TableCell align="center">{prop.phoneNumber}</TableCell>
                  <TableCell align="center">{prop.username}</TableCell>
                  <TableCell align="center"> 
                  <Button variant="outlined"  startIcon={<DeleteIcon />} onClick="console.log()"/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )
    }
    
export default UsersTable;
/* 
*/