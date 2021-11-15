import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Button, IconButton } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'
const Navbar = () => {
   const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <Link to="/home">
                <img style={{ width: '80px' }} src={login} alt="" />
              </Link>
                {/* <MenuIcon /> */}
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              </Typography>
              
                      
              <NavLink  style={{ textDecoration: 'none', color: 'white' }} to="/explore"><Button color="inherit">Explore</Button></NavLink>
              {
                  user?.email ?
                    <Box sx={{display: 'flex' ,justifyContent: 'flex-end',alignItems: 'center'}}>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                            <Button color="inherit">Dashboard</Button>
                        </NavLink>
                        <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                            {user.displayName}
                        </Typography>
                        <Button onClick={logout} color="inherit">Logout</Button>
                    </Box>
                    :
                    <Box sx={{display: 'flex' ,justifyContent: 'flex-end',alignItems: 'center'}}>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                        <Button color="inherit">Login</Button>
                    </NavLink>  
                    </Box>                     
              }
              {
                 user?.email &&<Avatar alt={user.displayName} src={user.photoURL} />
              }
            </Toolbar>
          </AppBar>
        </Box>
    );
};
 
export default Navbar;
