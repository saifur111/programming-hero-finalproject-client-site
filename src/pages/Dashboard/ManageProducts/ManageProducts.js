import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress, Container } from '@mui/material';
import { Box } from '@mui/system';
import ManageSingleProduct from './ManageSingleProduct';

const ManageProducts = () => {
    const {isLoading, user} = useAuth();
    const [manageproducts, setManageProducts] = useState([]);

    useEffect(() => { 
        fetch(`https://rocky-ridge-95438.herokuapp.com/ManageProducts?email=${user.email}`)
            .then(res => res.json())
            .then(data => setManageProducts(data));
    }, [user.email])

    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
            <h1>Hi , {user.displayName}</h1>
            <h2>Here Your {manageproducts.length} Products.</h2>
            <h5>Your Email : {user.email}</h5>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
                {
                    isLoading && <Box sx={{display: 'flex',justifyContent: 'center',alignContent: 'center'}}>
                            <CircularProgress sx={{}}/>
                    </Box>
                    
                }
                {
                    
                    manageproducts.map( product => 
                        <Box >
                        <ManageSingleProduct
                        key={product._id}
                        product={product}
                    >
                    </ManageSingleProduct>
                    </Box>
                    )
                }
            </Box>
             </Box>
        </Container>
    );
};

export default ManageProducts;