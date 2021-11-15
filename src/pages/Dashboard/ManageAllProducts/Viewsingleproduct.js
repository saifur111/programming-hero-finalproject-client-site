import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Viewsingleproduct = ({product}) => {
    
        const {_id, productname,price,img ,status} = product;
        const[isUpdate,setIsUpdate]=useState(null);
        const [products,setProducts]=useState([]);
        useEffect(()=>{
            const url=`https://rocky-ridge-95438.herokuapp.com/orders?status=Pending`;
            fetch(url)
            .then(res=>res.json())
            .then(data=>setProducts(data));
        },[isUpdate])

        const handleUpdate = id =>{
 
            const url=`https://rocky-ridge-95438.herokuapp.com/orders/${id}`
            fetch(url)
            .then(res=>res.json())
            .then(data=>{
              if(data.matchedCount>0){
                alert('approved successfully!');
                const remainProduct=products.filter(product=>product.status !=='Shipped')
                setProducts(remainProduct);
                setIsUpdate(true);
                window.location.reload();

              }else{
                setIsUpdate(false)
              }
            });
          }
          
    return (
        <>
            <Card sx={{ Width: 345,boxShadow: 3,m:2}}>
                <CardMedia
                    component="img"
                    height="180"
                    image={img}
                    alt={productname}
                />
                {/* display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' */}
                <CardContent>
                    <Typography variant="h5" >
                    {productname}
                    </Typography>
                    <Typography variant="h5" color="text.error"><span>TK </span>
                    {price}
                    </Typography>
                </CardContent>
                <CardActions sx={{display: 'flex',justifyContent: 'center',alignItems: 'center' }}>
                {
                    status==="Shipped"?<></>:<Box>
                           <button onClick={()=>handleUpdate(_id)} className="btn btn-success">Accepted<i className="fas fa-check-circle mx-2 text-warning"></i></button>
                       </Box>
                }
                    
                </CardActions>
            </Card>
        </>    
    );
};

export default Viewsingleproduct;