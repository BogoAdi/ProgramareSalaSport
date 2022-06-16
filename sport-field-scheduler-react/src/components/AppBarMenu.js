import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';



const AppBarMenu = () => {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navSportFields = () => {
        handleCloseNavMenu();
        navigate('/');
    }
    const navMyAppointments = () => {
        handleCloseNavMenu();
        navigate('/my-appointments-page');
    }
    
    const navAdminUsers = () => {
        handleCloseNavMenu();
        navigate('/show-all-users');
    }
    const navAllSportFields = () => {
        handleCloseNavMenu();
        navigate('/show-all-sport-fields');
    }
    const navAllAppointments = () => {
        handleCloseNavMenu();
        navigate('/show-all-appointments');
    }
    return (
        
            <AppBar position="static" color="primary">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem onClick={navSportFields}>
                                    <Typography textAlign="center">Sport Fields</Typography>
                                </MenuItem>
                                <MenuItem onClick={navAdminUsers} >
                                    <Typography textAlign="center">Admin-Users</Typography>
                                </MenuItem>
                                <MenuItem onClick={navAllSportFields}>
                                    <Typography textAlign="center">Admin-SportFields</Typography>
                                </MenuItem>
                                <MenuItem onClick={navAllAppointments}>
                                    <Typography textAlign="center">Admin-Appointments</Typography>
                                </MenuItem>
                                <MenuItem onClick={navMyAppointments}>
                                    <Typography textAlign="center">My-Appointments</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                onClick={navSportFields}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >Sport Fields
                            </Button>
                            <Button
                                onClick={navAdminUsers}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >Admin-Users
                            </Button>
                            <Button
                                onClick={navAllSportFields}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >Admin-SportFields
                            </Button>
                            <Button
                                onClick={navAllAppointments}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >Admin-Appointments
                            </Button>
                            <Button
                                onClick={navMyAppointments}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >My-Appointments
                            </Button>

                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
    );
};
export default AppBarMenu;
