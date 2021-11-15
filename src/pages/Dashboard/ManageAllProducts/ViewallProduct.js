import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const ViewallProduct = ({product}) => {
    const {user}=useAuth();
    const {_id,price,rating,productname,img } = product;
    const[orders,setOrders]=React.useState([]);
    const handleDeleteOrder= id =>{
        const proceed=window.confirm('Are you sure,you want to delete');
        if(proceed){
          const url=`https://rocky-ridge-95438.herokuapp.com/viewallproduct/${id}`
          fetch(url,{
              method:'DELETE',
     
          })
          .then(res=>res.json())
          .then(data=>{
              if(data.deletedCount>0){
                  alert('Deleted Successfully!')
                  const remainingProduct=orders.filter(order=>order._id !== id)
                  setOrders(remainingProduct);
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
                    <Typography gutterBottom variant="h5" component="div">
                    {productname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary"><span>TK </span>
                    {price}
                    </Typography>
                    <Rating name="Rating" value={rating} readOnly />
                </CardContent>
                <CardActions sx={{display: 'flex',justifyContent: 'center',alignItems: 'center' }}>
                    <Box >
                           <button onClick={() => handleDeleteOrder(_id)} className="btn btn-danger me-2">Delete</button>  
                    </Box>
                    <Link to={`/updateproduct/${_id}`}>
                        <Button  variant="contained">Update</Button>
                    </Link> 
                </CardActions>
            </Card>
        </>
    );
};

export default ViewallProduct;