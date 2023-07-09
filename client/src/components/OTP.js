import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function OTP() {

    const navigate = useNavigate();
    const[OTP, setOTP] = useState(null);
    
    const handleSubmit = async(e)=>{
        e.preventDefault();

        try {
        
        const response = await fetch(`http://localhost:3050/api/professors/verifyOTP?OTP=${OTP}`,
        {
            method:"GET",
            headers: {
                "Content-Type": "application/json",
            }
        }
        );

        if(response.status === 201){
            // OTP has been verified
            alert("OTP verified successfully");

            if(localStorage.getItem("isLoggedIn" === 'true')){
                navigate("/admin-dashboard")
            } else{
                // the user is not loggedin mean the OTP verify fot registering purpose.
            
                navigate("/");
                // render to the login page
            }            
        } else {
            // alert the user to enter valid otp

            alert(" Please enter the valid OTP");

        }
            
        } catch (error) {
            console.log("Error", error)
        }
    }


    
  return (
    
      <div class="flex justify-center mb-3">
        <label for="" class="form-label mb-2">Please verify the OTP</label>
        <input type="number"
        onChange={(e)=>{setOTP(e.target.value)}}
        class="form-control mb-1" name=""  placeholder="Enter the 6 digit otp"/>
        <small className='mb-4'>Please enter the OTP that has been sended to
            your registered email address. 
        </small>  
        <button onSubmit={handleSubmit} type="submit" class="btn btn-primary text-align-center">Button</button>  
      </div>
     
    
  )
}
