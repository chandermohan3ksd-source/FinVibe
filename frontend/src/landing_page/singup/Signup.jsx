import { useState } from "react";
import "./signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Signup(){
const navigate=useNavigate();
    let [formdata,SetFormData]=useState({
        email:"",
        username:"",
        password:""
    });
    let [msg,setMsg]=useState("");
  let handleOnchange=(event)=>{
    SetFormData({
        ...formdata,
        [event.target.id]: event.target.value
    })
}
     const handleSubmit=async(event)=>{
         event.preventDefault();
          try{
           const res= await axios.post("https://backend-wmsa.onrender.com/signup",formdata);
           setMsg(res.data.message);
              SetFormData({username:"",password:"",email:""})
           setTimeout(() => {
            navigate("/login",{
              state:{message:"Signup successful! Please login."}
            })
   }, 1000);
  
          } catch(er){
              SetFormData({username:"",password:"",email:""})
            setMsg(er.response.data.message)
            setTimeout(() => {
      setMsg("");
   }, 3000);
          };
    };
    return (
       <>
       {msg && (
        <div className="d-flex justify-content-center mt-2">
          <div className="alert alertMsg alert-warning alert-dismissible fade show" role="alert">
      {msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
        </div>
    
       )}
       <div className="container">
        <div className="row text-center mt-5">
            <h2>Open a free demat and trading account online</h2>
            <p className="mt-3 fs-5 text-muted">Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
        </div>
        <div className="row mt-5">
            <div className="col-6">
                <img src="Media\Images\singupPage.svg" alt="signupimages"/>
            </div>
            <div className="col-6 mt-5">
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" name="email" onChange={handleOnchange} value={formdata.email} required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="username" className="form-label">Username</label>
    <input type="text" className="form-control" id="username" name="username" onChange={handleOnchange} value={formdata.username}required/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password"  onChange={handleOnchange} value={formdata.password}required/>
  </div>
  <div className="d-flex justify-content-center mt-4">
  <button type="submit" className="btn btn-primary text-center mt-1 border-rounded" 
  style={
    {
      width:"60%",
      borderRadius:"30px",
      padding:"8px 0px"
    }}>Signup</button>
  </div>
  <div className="mt-3 text-center">
    <span>Already have a Account ? </span>
    <Link to="/login" className="text-decoration-none">Login</Link>
  </div>
</form>
            </div>
        </div>
       </div>
       
       </>
       
    
    )
}
