import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function SingUp() {
  return (
    <div>
      <div  className="flex h-screen items-center justify-center ">
        <div className="modal-box rounded-md dark:bg-white dark:text-black">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg">SignUp</h3>
          {/* Name */}
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              className="w-80 px-3 py-1 border rounded-md dark:bg-white outline-none "
              placeholder="Enter Your Name"
            />
          </div>
          {/* {Email} */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              className="w-80 px-3 py-1 border rounded-md dark:bg-white outline-none "
              placeholder="Enter Your Email"
            />
          </div>
          {/* Password */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="email"
              className="w-80 px-3 py-1 border rounded-md dark:bg-white outline-none "
              placeholder="Enter Your Password"
            />
          </div>
          {/* Button */}
          <div className="my-4 flex justify-around">
            <button className="btn btn-secondary text-white">Sign Up</button>
            <p className="m-auto">
              Have a Account ? {" "}
              <button
                className="text-sky-400 underline cursor-pointer"
                onClick={()=>{document.getElementById("my_modal_3").showModal()}}
              >
                LogIn
                
              </button>{" "}
              <Login/>

            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingUp;