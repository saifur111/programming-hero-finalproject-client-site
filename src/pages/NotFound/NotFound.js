import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import notfound from '.././../images/404page.jpg'
const NotFound = () => {
    return (
        <div className='m-5 bg'>
            <img style={{ width:'80%' }} src={notfound} alt="" />
            <Link className='btn btn-outline-info m-2 p-2' to="/">Go Back</Link>
        </div>
    );
};

export default NotFound;