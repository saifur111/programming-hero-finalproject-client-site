import * as React from 'react';
import Box from '@mui/material/Box';
import SingleProduct from '../Explore/SingleProduct';
import { CircularProgress, Container } from '@mui/material';
import useAuth from '../../hooks/useAuth';
const NewArival = () => {
    const { isLoading } = useAuth(); 
    const [products,setProducts]=React.useState([]);
    React.useEffect(()=>{
        const url=`https://young-everglades-47177.herokuapp.com/viewProducts`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    return (
        <Container>
            <Box sx={{ flexGrow: 1, m:4 }}>
            <h2>NEW ARRIVAL</h2>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
                {
                    isLoading && <Box sx={{display: 'flex',justifyContent: 'center',alignContent: 'center'}}>
                            <CircularProgress sx={{}}/>
                    </Box>
                    
                }
                {
                    
                    products.slice(0,6).map( product => 
                        <Box >
                        <SingleProduct
                        key={product._id}
                        product={product}
                    >
                    </SingleProduct>
                    </Box>
                    )
                }
            </Box>
             </Box>
        </Container>
    );
};

export default NewArival;