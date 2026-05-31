import {useNavigate} from "react-router-dom";

export default function OpenAccount(){
let navigate=useNavigate();
    return (
        <>
         <div className="container text-center mt-5">
            <div className="row">
                <h1 className="mt-3">Open a Zerodha account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className="btn btn-primary p-2 fs-5 mb-5" style={{width:"20%", margin:"0 auto"}}
                onClick={()=>{
                    navigate("/signup");
                }}
                >Sig up Now</button>
            </div>
        </div>
        </>
    )
}