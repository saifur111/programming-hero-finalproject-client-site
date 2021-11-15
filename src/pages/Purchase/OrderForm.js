import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
 
const OrderForm = (props) => {
  
  const { user } = useAuth();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
 
  const onSubmit = (data) => {
    console.log(data);
    Swal.fire({
      title: "Are you sure, you want to Order this?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("https://young-everglades-47177.herokuapp.com/orders", data)
          .then((response) => {
            console.log(response);
            if (response.data.insertedId) {
              Swal.fire(
                "Completed",
                "Your Order has been Completed Successfully!",
                "success"
              );
              reset();
              history.replace('/explore');
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            }
          });
      }
    });
  };
 
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          hidden
          value={props.img || " "}
          {...register("img", { required: true })}
        />
        <input
          hidden
          value={props.price || " "}
          {...register("price", { required: true })}
        />
        <input
          hidden
          value="Pending"
          {...register("status", { required: true })}
        />
        <input
          hidden
          value={user.uid || " "}
          {...register("userId", { required: true })}
        />
        <label>Full Name</label>
        <input
          readOnly
          value={user.displayName || " "}
          className="form-control mb-3"
          placeholder="Enter your Full Name"
          {...register("username", { required: true })}
        />
        <label>Email Address</label>
        <input
          readOnly
          value={user.email || " "}
          className="form-control mb-3"
          placeholder="Enter your Email Address"
          {...register("email", { required: true })}
        />
        <label>Phone</label>
        <input
          type="number"
          className="form-control mb-3"
          placeholder="Enter your Phone Number"
          {...register("phone", { required: true })}
        />
        
        <textarea
          className="form-control mb-3 w-100"
          placeholder="Message..."
          {...register("message")}
        />
 
        <input
          className="btn btn-info rounded-pill mb-5 w-100"
          type="submit"
          value="Order Now"
        />
      </form>
    </div>
  );
};
 
export default OrderForm;