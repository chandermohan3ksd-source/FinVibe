import { useState } from "react";
import "./login.css";
import axios from "axios";
export default function Login(){
  let[loginData,setLoginData]=useState({
     email:"",
     password:""
  });
  let [msg,setMsg]=useState("");
  let [error,setError]=useState({
    email:"",
    password:""
  });

  let handleOnchange=(e)=>{
   setLoginData({
    ...loginData,
    [e.target.id]:e.target.value
   });  
   setError({
    ...error,
   [e.target.id]:""
  })
  }
  let handleSubmit=async(e)=>{
    e.preventDefault();
    setMsg("");
    setLoginData({email:"",password:""});
    setError({email:"",password:""});
    try{
       let res=await axios.post("https://backend-wmsa.onrender.com/login",loginData);
    setMsg(res.data.message);
    if(res.data.token){
    setTimeout(()=>{
      setMsg("");
    window.location.href = `http://localhost:5174/?token=${res.data.token}&username=${res.data.username}`;
    },2000)
    }
   
    console.log(res.data);
    }catch(er){
    setLoginData({email:"",password:""});
      let backendError=er.response.data.message;
      if(backendError === "Email Not Registered Please Signp!"){
        setError({email:backendError,password:""})
      }else if(backendError === "Wrong Password !!"){
        setError({email:"",password:backendError})
      }else{
        setMsg(backendError);
        setTimeout(()=>{
          setMsg("")
        },3000)
      }
    
    }
   
  }
    return (
        <>
        {
          msg && (
            <div className="d-flex justify-content-center mt-2">
               <div class="alertMsg alert alert-warning alert-dismissible fade show" role="alert">
  {msg}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
            </div>
           
          )
        }
        <div className="loginForm">
     <form id="loForm" onSubmit={handleSubmit}>
      <div className="text-center mb-3">
   <img src="Media/Images/kitelogo.png" alt="Logo" style={{width:"25%"}}/>
   <h3 className="mb-5 fw-normal mt-3">Login to Zerodha</h3>
      </div>
      <div className="mt-5">
        <div className="mb-3 formField">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className={`form-control ${error.email ? "is-invalid" : ""}`} id="email" onChange={handleOnchange} value={loginData.email}required/>
    {
      error.email && (
        <div className="invalid-feedback">{error.email}</div>
      )
    }
  </div>
  <div className="mb-3 formField">
    <label htmlFor="password" className="form-label" >Password</label>
    <input type="password" className={`form-control ${error.password ? "is-invalid" : ""}`} id="password" onChange={handleOnchange} value={loginData.password} required/>
     {
      error.password && (
        <div className="invalid-feedback">{error.password}</div>
      )
    }
  </div>
      </div>
       
  <button type="submit" className="btn btn-primary">Login</button>
</form>
        </div>
        
        </>
    )
};
