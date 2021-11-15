import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Avatar, Card, CardActionArea, CardContent, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import '../../Home/HomeReview/Home.css';

const DashboardHome = () => {
    const { user} = useAuth();
    const [manageproducts, setManageProducts] = useState([])

    useEffect(() => { 
        fetch(`https://young-everglades-47177.herokuapp.com/ManageProducts?email=${user.email}`)
            .then(res => res.json())
            .then(data => setManageProducts(data));
    }, [user.email,manageproducts])
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }} className='box-shadow'>
            <Card>
                <CardActionArea>
                
                    {
                        user?.email &&<Box sx={{display: 'flex',justifyContent: 'center',alignContent: 'center'}}>
                        <Avatar
                                 alt={user.displayName} src={user.photoURL}
                                    sx={{ width: 250, height: 250 }} 
                                 />
                        </Box>
                    }
                    <CardContent>
                    <Typography gutterBottom variant="h2" component="div">
                        Hi , {user.displayName}
                    </Typography>
                    <Typography gutterBottom variant="h4" component="div">
                    WelCome To Our  Dashboard.
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                    Your Email : {user.email}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
             </Box>
        </Container>
    );
};

export default DashboardHome;