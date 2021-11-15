import React from 'react';
import Message from '../Shared/Services/Message';
import Services from '../Shared/Services/Services';
import Banner from './Banner/Banner';
import HomeReviews from './HomeReview/HomeReviews';
import SiteReviewHome from './HomeReview/SiteReviewHome';
import NewArival from './NewArival';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewArival></NewArival>
            <HomeReviews></HomeReviews>
            <Services></Services>
            <Message></Message>
            <SiteReviewHome></SiteReviewHome>
           
            <div className="container my-5">
            <h2>GALLARY</h2>
                <div className="text-center text-white" style={{backgroundColor: '#caced1'}}>
                    <div className="container p-4">
                    <section className="">
                        <div className="row">
                        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                            <div
                                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                data-ripple-color="light"
                                >
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-O5F0s-CDRXmJ21etc6hai6UHKVLnMh65Q&usqp=CAU"
                                className="w-100" alt=""
                                />
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{backgroundColor: (251, 251, 251, 0.2)}}
                                    ></div>
                            </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                            <div
                                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                data-ripple-color="light"
                                >
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCztfvcEfW3ax0bHxHBJ1dqCYSXNhq1b_jxA&usqp=CAU"
                                className="w-100" alt="" 
                                />
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{backgroundColor: (251, 251, 251, 0.2)}}
                                    ></div>
                            </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                            <div
                                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                data-ripple-color="light"
                                >
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Hbmo2Zhs4zD4jwlvWY6ZO4vf7I3BKRklxQ&usqp=CAU"
                                className="w-100" alt="" 
                                />
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{backgroundColor: (251, 251, 251, 0.2)}}
                                    ></div>
                            </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                            <div
                                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                data-ripple-color="light"
                                >
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6hdBK3JINd4TLcpRDGJy_n6YAiuAi5tTN9Q&usqp=CAU"
                                className="w-100" alt=""
                                />
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{backgroundColor: (251, 251, 251, 0.2)}}
                                    ></div>
                            </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                            <div
                                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                data-ripple-color="light"
                                >
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpHnsZxMqTWd-oX2u7MQ-bS-vlXiVXRo98SA&usqp=CAU"
                                className="w-100" alt="" 
                                />
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{backgroundColor: (251, 251, 251, 0.2)}}
                                    ></div>
                            </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                            <div
                                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                data-ripple-color="light"
                                >
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyszQGK8juRTTp0AbJzJEx-O5ftEfrdWhOPA&usqp=CAU"
                                className="w-100" alt=""
                                />
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{backgroundColor: (251, 251, 251, 0.2)}}
                                    ></div>
                            </a>
                            </div>
                        </div>
                        </div>
                    </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;