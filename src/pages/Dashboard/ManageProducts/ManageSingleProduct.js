import { WindowSharp } from '@mui/icons-material';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const ManageSingleProduct = ({product}) => {
    const {_id,price,status,img,phone } = product;
       
    const[orders,setOrders]=useState([]);
    const[isUpdate,setIsUpdate]=useState(null);


    useEffect(()=>{
    fetch(`https://rocky-ridge-95438.herokuapp.com/orders`)
    .then(res=>res.json())
    .then(data=>setOrders(data))
    },[isUpdate])

    const handleDeleteOrder= id =>{
        const proceed=window.confirm('Are you sure,you want to delete');
        if(proceed){
          const url=`https://rocky-ridge-95438.herokuapp.com/orders/${id}`
          fetch(url,{
              method:'DELETE',
     
          })
          .then(res=>res.json())
          .then(data=>{
              if(data.deletedCount>0){
                  alert('Deleted Successfully!')
                  const remainingOrders=orders.filter(order=>order._id !== id)
                  setOrders(remainingOrders);
                  window.location.reload();
              }
          });
        }
      }
    return (
        <>
            <Card sx={{ Width: 345,boxShadow: 3,m:2}}>
                <CardMedia
                    component="img"
                    height="180"
                    image={img}
                    alt="green iguana"
                />
                {/* display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' */}
                <CardContent>
                    <Typography variant="body2" color="text.secondary">Price :<span>TK </span>
                    {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">Status :
                    {status}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">Contact Info. :
                    {phone}
                    </Typography>
                </CardContent>
                <CardActions sx={{display: 'flex',justifyContent: 'center',alignItems: 'center' }}>
                    {
                        status==="Shipped"?<></>:
                        <Box >
                            <div className="d-flex justify-content-center align-items-centerp-2">
                                <button onClick={() => handleDeleteOrder(_id)} className="btn btn-danger">Delete</button>
                                
                            </div> 
                        </Box>
                    }
                    
                    
                    
                </CardActions>
            </Card>
        </>
    );
};

export default ManageSingleProduct;