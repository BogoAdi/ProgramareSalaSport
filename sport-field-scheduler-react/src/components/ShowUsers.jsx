import * as React from 'react';
import Button from '@mui/material/Button';
import UsersTable from './UsersTable';
import Icon from '@mui/material/Icon';
import { green } from "@mui/material/colors";
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

const ShowUsers = () => {

  return (
    <>
      <Tooltip title="Create new User">
        <Link to="/add-user-form">
          <Button color="primary" aria-label="add new User">
            <Icon sx={{ color: green[500] }}>add_circle</Icon>
          </Button>
        </Link>
      </Tooltip>
      <UsersTable >All Users</UsersTable>
    </>
  )
}

export default ShowUsers;




