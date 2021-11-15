import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
 
const SiteReview = (props) => {
  
  const { user } = useAuth();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
 
  const onSubmit = (data) => {
    Swal.fire({
      title: "Are you sure, you want to Review this?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("https://rocky-ridge-95438.herokuapp.com/sitereviews", data)
          .then((response) => {
            console.log(response);
            if (response.data.insertedId) {
              Swal.fire(
                "Completed",
                "Your Review has been Completed Successfully!",
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
    <Box sx={{ flexGrow: 1 }}>
    <h1>Hi , {user.displayName}</h1>
    <h7>Your Email : {user.email}</h7>
    <div className="container my-5">
        <h1 className='text-center'>Review Our Site</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          hidden
          value={user.photoURL|| " "}
          {...register("img", { required: true })}
        />
        <input
          hidden
          value={user?.uid || " "}
          {...register("userId", { required: true })}
        />
        <input
          readOnly
          value={user?.displayName || " "}
          className="form-control mb-3"
          placeholder="Enter your Full Name"
          {...register("username", { required: true })}
        />
        <input
          hidden
          value={user?.email || " "}
          className="form-control mb-3"
          placeholder="Enter your Email Address"
          {...register("email", { required: true })}
        />
        
        
        <textarea
          className="form-control mb-3 w-100"
          placeholder="Your Message..."
          {...register("message")}
        />
        <input
          className="form-control mb-3 w-100"
          placeholder="Your Rating (0-5) "
          {...register("rating", { required: true })}
        />
        <input
          className="btn btn-info rounded-pill mb-5 w-100"
          type="submit"
          value="Submit Review"
        />
      </form>
    </div>
    </Box>
  );
};
 
export default SiteReview;