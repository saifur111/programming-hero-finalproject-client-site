import { CircularProgress, Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import ViewallProduct from './ViewallProduct';
import Viewsingleproduct from './Viewsingleproduct';

const ManageAllProducts = () => {
    const { isLoading } = useAuth(); 
    const [products,setProducts]=useState([]);
    const [allproducts,setallProducts]=React.useState([]);
    
    useEffect(()=>{
        const url=`https://rocky-ridge-95438.herokuapp.com/orders?status=Pending`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    
    React.useEffect(()=>{
        const url=`https://rocky-ridge-95438.herokuapp.com/viewProducts`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setallProducts(data));
    },[])
    
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
            <h2>Pending Products</h2>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
                {
                    isLoading && <Box sx={{display: 'flex',justifyContent: 'center',alignContent: 'center'}}>
                            <CircularProgress sx={{}}/>
                    </Box>
                    
                }
                
                {
                    
                    products.map( product => 
                        <Box >
                        <Viewsingleproduct
                        id={product._id}
                        product={product}
                    >
                    </Viewsingleproduct>
                    </Box>
                    )
                }
            </Box>
             </Box>
             <Box sx={{ flexGrow: 1 , m:4}}>
            <h2>All Products Collections</h2>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
                {
                    isLoading && <Box sx={{display: 'flex',justifyContent: 'center',alignContent: 'center'}}>
                            <CircularProgress sx={{}}/>
                    </Box>
                    
                }
                {
                    
                    allproducts.map( product => 
                        <Box >
                        <ViewallProduct
                        id={product._id}
                        product={product}
                    >
                    </ViewallProduct>
                    </Box>
                    )
                }
            </Box>
             </Box>
        </Container>
    );
};

export default ManageAllProducts;