import React from 'react';

const Message = () => {
    return (
        <div>
            <section className="container pb-5">
                <h1 className=" py-5 fw-bolder text-center mt-3">Handmade Craft <span className="client-color">YouTube Videos</span></h1>
                <div className="row row-cols-1 row-cols-lg-2 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <div className="row  flex-culumn align-items-center justify-content-center ps-0">
                                <iframe width="400" height="200" src="https://www.youtube.com/embed/5xrTHJSNAUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div> 
                        </div>
                    </div>
                    <div className="col">
                    <div className="card h-100">
                        <div className="row flex-culumn align-items-center justify-content-center ps-0 ">
                            <iframe width="400" height="200" src="https://www.youtube.com/embed/n8s3lFIB21k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card h-100">
                        <div className="row flex-culumn align-items-center justify-content-center ps-0 ">
                            <iframe width="400" height="200" src="https://www.youtube.com/embed/E_pg0MUNjLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card h-100">
                        <div className="row flex-culumn align-items-center justify-content-center ps-0">
                            <iframe width="400" height="200" src="https://www.youtube.com/embed/DCnb02k72QE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Message;