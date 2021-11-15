import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import login from '../../images/login.png'

function Copyright() {
  return (
      <>
        <Typography variant="body2" color="#000000">
            {'Copyright © '}
            <Link color="#000000"to="/">
            HandMade Craft
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
        <Typography variant="h6" color="#000000">
        Developed By Md Saifur Rahman 
        </Typography>
      </>
    
  );
}

export default function Footer() {
  return (
    <div className="bg-dark text-center text-white">
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '90vh',
        }}
        >
        <Typography variant="h2" component="h1" gutterBottom>
            HandMade Craft
        </Typography>
            <div className="container">
                <div className="container p-4 pb-0">
                    <section className="">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <Link to="/home">
                                <img style={{ width: '120px' }} src={login} alt="" />
                            </Link>
                            <br/>
                                <p className="p-4 pb-0">
                                Handmade Craft is a global online marketplace, where people come together to make, sell, buy and collect unique items. 
                                </p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">INFOMATION</h6>
                                <p>
                                <a href="#" className="text-white">Delivery Information</a>
                                </p>
                                <p>
                                <a href="#" className="text-white">Privacy Policy</a>
                                </p>
                                <p>
                                <a href="#" className="text-white">Terms & Conditions</a>
                                </p>
                                <p>
                                <a href="#" className="text-white">Shipping Guide</a>
                                </p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                CUSTOMER SERVICE
                                </h6>
                                <p>
                                <a href="#" className="text-white">Your Account</a>
                                </p>
                                <p>
                                <a href="#" className="text-white">Compensation Fist</a>
                                </p>
                                <p>
                                <a href="#" className="text-white">Return Policy</a>
                                </p>
                                <p>
                                <a href="#" className="text-white">Help</a>
                                </p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i className="fas fa-home mr-3"></i> Chittagong,BD</p>
                                <p><i className="fas fa-envelope mr-3"></i> msrs.tuhin240@gmail.com</p>
                                <p><i className="fas fa-phone mr-3"></i> +8801515666904</p>
                                <p><i className="fas fa-print mr-3"></i> +8801632619340</p>
                            </div>
                        </div>
                    </section>
                    

                    <hr className="my-3"/>
                    <section className="mb-4">
                        <a href="#" className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-facebook-f"></i
                        ></a>
                        <a href="#" className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-twitter"></i
                        ></a>
                        <a href="#" className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-google"></i
                        ></a>
                        <a href="#" className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-instagram"></i
                        ></a>
                        <a href="#" className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-linkedin-in"></i
                        ></a>
                        <a href="#" className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-github"></i
                        ></a>
                    </section>
                </div>
            <Copyright 
            /> 
            </div>
        </Box>
    </div>
  );
}