import * as React from 'react';
import Box from '@mui/material/Box';
import { CircularProgress, Container } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import './Home.css';
import SingleSiteReviewHome from './SingleSiteReviewHome';

const SiteReviewHome = () => {
    const { isLoading } = useAuth(); 
    const [products,setProducts]=React.useState([]);
    React.useEffect(()=>{
        const url=`https://rocky-ridge-95438.herokuapp.com/viewsiteReviews`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    return (
        <Container>
            <Box sx={{ flexGrow: 1, m:4 }}>
            <h2>SITE REVIEWS BY USER</h2>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)'}}>
                {
                    isLoading && <Box sx={{display: 'flex',justifyContent: 'center',alignContent: 'center'}}>
                            <CircularProgress />
                    </Box>
                    
                }
                {
                    
                    products.map( product => 
                        <Box>
                        <SingleSiteReviewHome
                        key={product._id}
                        product={product}
                    />
                
                    </Box>
                    )
                }
            </Box>
             </Box>
        </Container>
    );
};

export default SiteReviewHome;