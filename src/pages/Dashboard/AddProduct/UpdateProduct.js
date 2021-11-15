import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const UpdateProduct = () => {
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
   const {setIsLoading}=useAuth();


    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from ||'/';
    const {id}= useParams();
    const [product,setProduct]=useState({});
    
    useEffect(()=>{
        fetch(`http://young-everglades-47177.herokuapp.com/updateProducts/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[product,id])
    // young-everglades-47177.herokuapp.com/
    const onSubmit = data =>{
        const url=`http://young-everglades-47177.herokuapp.com/updateProducts/${id}`;
        fetch(url,{
            method :'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount>0) {
                alert('Successfully Updated the Products.')
                reset();
                history.push(redirect_url);
            }
        }).finally(()=>{
            setIsLoading(false);
        });
    }

    return (
        <div className='container loginWrapper mt-5 mb-5 p-5'> 
           <h1 className="text-center">Update Product Information</h1> 
           <small className="text-center">Update Product Id : {product._id}</small> 
           <div className="d-flex justify-content-center flex-culumn align-items-center">
           <form onSubmit={handleSubmit(onSubmit)}>
               <div className="m-2">
                    <label className="form-label">Product Name</label>
                    <input className="form-control" defaultValue={product.productname} {...register("productname", { required: true })}  />
               </div>
                <div className="m-2">
                    <label className="form-label">Product Price</label>
                    <input  className="form-control" {...register("price", { required: true })} defaultValue={product.price}  />
                </div>
                <div className="m-2">
                    <label className="form-label">Single Image Url</label>
                    <input className="form-control" defaultValue={product.img}{...register("img", { required: true })} />
                </div>
                <div className="m-2">
                    <label className="form-label">Product Rating</label>
                    <input className="form-control"defaultValue={product.rating} {...register("rating", { required: true })} />
                </div>
                
                    {errors.exampleRequired && <span>This field is required</span>}      
                <input  className="btn btn-outline-info m-2 p-2"  type="submit" value='UPDATE PRODUCT' />
            </form>
           </div>
           
        </div>
    );
};

export default UpdateProduct;