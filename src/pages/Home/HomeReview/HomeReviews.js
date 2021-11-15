import * as React from 'react';
import Box from '@mui/material/Box';
import useAuth from '../../../hooks/useAuth';
import SingleReview from './SingleReview';
import './Home.css';
import { CircularProgress, Container } from '@mui/material';

const HomeReviews = () => {
    const { isLoading } = useAuth(); 
    const [products,setProducts]=React.useState([]);
    React.useEffect(()=>{
        const url=`https://young-everglades-47177.herokuapp.com/viewReviews`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    return (
        <Container>
            <Box sx={{ flexGrow: 1, m:4 }}>
            <h2>PRODUCT REVIEWS BY BUYER</h2>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)'}}>
                {
                    isLoading && <Box sx={{display: 'flex',justifyContent: 'center',alignContent: 'center'}}>
                            <CircularProgress sx={{}}/>
                    </Box>
                    
                }
                
                {
                    
                    products.map( product => 
                        <Box>
                        <SingleReview
                        key={product._id}
                        product={product}
                    >
                    </SingleReview>
                    </Box>
                    )
                }
                
            </Box>
             </Box>
        </Container>
    );
};

export default HomeReviews;