import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SingleProduct = ({product}) => {
    const {admin,user}=useAuth();
    const {_id,price,rating,productname,img } = product;
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
                        {
                            user?.email ?
                            <>

                            {
                                admin?<Link to='/dashboard'>
                                <button className="btn btn-primary my-2  btn-fr">
                                <i className="fas fa-cart"></i> {' '}Add To Cart</button>
                                </Link>
                                :
                                <Link to={`/purchase/${_id}`}>
                                <button className="btn btn-primary my-2  btn-fr">
                                <i className="fas fa-cart"></i> {' '}Add To Cart</button>
                                </Link>
                            }
                            </>
                            :
                            <Link to='/login'>
                            <button className="btn btn-primary my-2  btn-fr">
                            <i className="fas fa-cart"></i> {' '}Add To Cart</button>
                            </Link> 
                        }
                        
                    </Box>
                    
                </CardActions>
            </Card>
        </>
    );
};

export default SingleProduct;