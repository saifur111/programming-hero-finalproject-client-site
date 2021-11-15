import React from 'react';
import banner1 from '../../../images/banner3.jpg'
import banner2 from '../../../images/banner4.jpg'
import banner3 from '../../../images/banner1.jpg'
import UnstyledButtonCustom from './UnstyledButtonCustom';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={banner1} alt="First slide"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>HANDMADE IDEAS</h1>
                        <h5>GET UP TO 50% OFF</h5>
                        <Link to='/explore'> 
                            <UnstyledButtonCustom ></UnstyledButtonCustom>
                        </Link>
                        <br/><br/>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={banner2} alt="Second slide"/>
                    <div className="carousel-caption d-none d-md-block">
                    <h1>KIDS TABLEWARE</h1>
                    <h5>GET UP TO 50% OFF</h5>
                        <Link to='/explore'> 
                            <UnstyledButtonCustom ></UnstyledButtonCustom>
                        </Link>
                        <br/><br/>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={banner3} alt="Third slide"/>
                    <div className="carousel-caption d-none d-md-block">
                    <h1>NEW HANDMADE PRODUCTS</h1>
                    <h5>GET UP TO 50% OFF</h5>
                    <Link  to='/explore'> 
                            <UnstyledButtonCustom ></UnstyledButtonCustom>
                    </Link>
                    <br/><br/>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
    );
};

export default Banner;