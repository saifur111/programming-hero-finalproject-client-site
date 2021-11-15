import * as React from 'react';
import Box from '@mui/material/Box';
import SingleProduct from './SingleProduct';
import { CircularProgress, Container } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import Banner from '../Home/Banner/Banner';

const Explore = () => {
    const { isLoading } = useAuth(); 
    const [products,setProducts]=React.useState([]);
    React.useEffect(()=>{
        const url=`https://young-everglades-47177.herokuapp.com/viewProducts`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[products])
    return (

        <>
        <Banner></Banner>
        <Container>
            <Box sx={{ flexGrow: 1 , m:4,pb:5}}>
            <h2>Available Products</h2>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
                    {
                        isLoading && <Box sx={{display: 'flex',justifyContent: 'center',alignContent: 'center'}}>
                                <CircularProgress sx={{}}/>
                        </Box>
                        
                    }
                    
                    {
                        
                        products.map( product => 
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
                <section className="bg-info py-10">
                        <div className="container px-5">
                            <div className="row gx-5 text-center">
                                <div className="col-lg-4 mb-5 mb-lg-0">
                                    <div className="icon-stack icon-stack-xl bg-red text-white mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></div>
                                    <h3>Illustration</h3>
                                    <p className="mb-0">I provide custom illustration services for contract clients</p>
                                </div>
                                <div className="col-lg-4 mb-5 mb-lg-0">
                                    <div className="icon-stack icon-stack-xl bg-yellow text-white mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg></div>
                                    <h3>UI Design</h3>
                                    <p className="mb-0">User experience and interface designs is one of my specialties</p>
                                </div>
                                <div className="col-lg-4">
                                    <div className="icon-stack icon-stack-xl bg-blue text-white mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-droplet"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg></div>
                                    <h3>Graphic Design</h3>
                                    <p className="mb-0">Photo restoration, post processing, and other photo services</p>
                                </div>
                            </div>
                        </div>
                        <div className="svg-border-rounded text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
                        </div>
                </section>
                <section className="bg-white py-10">
                        <div className="container px-5 ">
                            <h1 className='text-center my-5'>SOME GELLARY FEATURES</h1>
                            <div className="row gx-5">
                                <div className="col-md-4">
                                    <a className="card card-portfolio mb-5" href="#!">
                                        <img className="card-img-top" src="https://source.unsplash.com/jWQj5Wjepuk/400x300" alt="..."/>
                                        <div className="card-body"><div className="card-title">Book</div></div>
                                    </a>
                                    <a className="card card-portfolio mb-5" href="#!">
                                        <img className="card-img-top" src="https://source.unsplash.com/Ecnx13MEPK0/400x500" alt="..."/>
                                        <div className="card-body"><div className="card-title">Flower Mug</div></div>
                                    </a>
                                    <a className="card card-portfolio mb-5 mb-md-0" href="#!">
                                        <img className="card-img-top" src="https://source.unsplash.com/eUCy1jb_B7I/400x400" alt="..."/>
                                        <div className="card-body"><div className="card-title">Cactus Display</div></div>
                                    </a>
                                </div>
                                <div className="col-md-4">
                                    <a className="card card-portfolio mb-5" href="#!">
                                        <img className="card-img-top" src="https://source.unsplash.com/cuTcfqsES6o/400x500" alt="..."/>
                                        <div className="card-body"><div className="card-title">Reading</div></div>
                                    </a>
                                    <a className="card card-portfolio mb-5" href="#!">
                                        <img className="card-img-top" src="https://source.unsplash.com/jipR1oTCO7U/400x400" alt="..."/>
                                        <div className="card-body"><div className="card-title">White Book</div></div>
                                    </a>
                                    <a className="card card-portfolio mb-5 mb-md-0" href="#!">
                                        <img className="card-img-top" src="https://source.unsplash.com/n3sqjJzZiBM/400x300" alt="..."/>
                                        <div className="card-body"><div className="card-title">Photo Face</div></div>
                                    </a>
                                </div>
                                <div className="col-md-4">
                                    <a className="card card-portfolio mb-5" href="#!">
                                        <img className="card-img-top" src="https://source.unsplash.com/Zr7MxECDTQ8/400x300" alt="..."/>
                                        <div className="card-body"><div className="card-title">Catalog</div></div>
                                    </a>
                                    <a className="card card-portfolio mb-5" href="#!">
                                        <img className="card-img-top" src="https://source.unsplash.com/QcyenJDqDzw/400x500" alt="..."/>
                                        <div className="card-body"><div className="card-title">Notebook</div></div>
                                    </a>
                                    <a className="card card-portfolio mb-5 mb-md-0" href="#!">
                                        <img className="card-img-top" src="https://source.unsplash.com/TIutDBFEtcY/400x400" alt="..."/>
                                        <div className="card-body"><div className="card-title">Book Stand</div></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="svg-border-rounded text-light">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
                        </div>
                    </section>
        </Container>
        </>
        
    );
};

export default Explore;