import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar} from '@mui/material';
import { Box } from '@mui/system';
import Rating from '@mui/material/Rating';
import './Home.css';
const SingleReview = ({product}) => {
    const {productname,img,message,username,rating } = product;
    return (
        <>
            <Card  sx={{m:1}}>
                <Box className='box-shadow'>
                <Box sx={{display: 'flex',justifyContent: 'center',alignContent: 'center'}}>
                    <Avatar
                    alt={productname}
                    src={img}
                    sx={{ width: 100, height: 100 }}
                    />
                </Box>
           
                <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                    {productname}
                    </Typography>
                    <Rating name="Rating" value={rating} readOnly />
                    <Typography variant="body2" color="text.secondary"><small>By </small>
                    {username}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                    {message}
                    </Typography>
                </CardContent>
                </Box>
            </Card>
        </>
    );
};

export default SingleReview;