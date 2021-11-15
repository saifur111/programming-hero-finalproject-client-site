import { Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
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
            bgcolor:'error.main',
            }}
            >
            <img style={{ width: '10%' }} src={login} alt="" />
            <Typography variant="h4" gutterBottom>REGISTER</Typography>
            {!isLoading && 
            <form onSubmit={handleLoginSubmit}>
                <TextField
                    sx={{ width: '70%', m: 1 }}
                    id="standard-basic"
                    label="Your Name"
                    name="name"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <TextField
                    sx={{ width: '70%', m: 1 }}
                    id="standard-basic"
                    label="Your Email"
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <TextField
                    sx={{ width: '70%', m: 1 }}
                    id="standard-basic"
                    label="Your Password"
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <TextField
                    sx={{ width: '70%', m: 1 }}
                    id="standard-basic"
                    label="ReType Your Password"
                    type="password"
                    name="password2"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <br/>
                <Button sx={{  m: 1 }} type="submit" variant="contained">REGISTER</Button>
                <br/>
                <NavLink
                    style={{ textDecoration: 'none' }}
                    to="/login">
                    <Button variant="text">Already Registered? Please Login</Button>
                </NavLink>
            </form>
            }
            {isLoading && <CircularProgress />}
            {user?.email && <Alert severity="success">User Created successfully!</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
        </Box>
    );
};

export default Register;