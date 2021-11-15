import {  Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Box } from '@mui/system';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
            <Box style={{ backgroundColor: '#6aa2ad' }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          p: 1,
          m: 8,
          bgcolor:'secondary.main',
        }}
        >
            <img style={{ width: '10%' }} src={login} alt="" />
            <Typography variant="h4" gutterBottom>LOGIN</Typography>
            <form onSubmit={handleLoginSubmit}>
                <TextField
                    sx={{ width: '70%', m: 1 }}
                    id="standard-basic"
                    label="Your Email"
                    name="email"
                    onChange={handleOnChange}
                    variant="standard" />
                <TextField
                    sx={{ width: '70%', m: 1 }}
                    id="standard-basic"
                    label="Your Password"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    variant="standard" />

                <Button sx={{ width: '70%', m: 1 }} type="submit" variant="contained">Login</Button>
                <NavLink
                    style={{ textDecoration: 'none' }}
                    to="/register">
                    <Button variant="text">New User? Please Register</Button>
                </NavLink>
                {isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success">Login successfully!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
            </form>
            
            <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
        </Box>
    );
};

export default Login;