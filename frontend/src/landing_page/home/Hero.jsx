import { useNavigate } from "react-router-dom"
export default function Hero(){
    let navigate=useNavigate();
    return(
        <>
        <div className="container text-center">
            <div className="row">
                <img src="/Media/Images/homeHero.png" alt="hero images" className="mb-5" />
                <h1 className="mt-3">Invest in everything</h1>
                <p>Online platform to invest in stocks,derivatives, mutual funds, and more</p>
                <button className="btn btn-primary p-2 fs-5 mb-5" style={{width:"20%", margin:"0 auto"}}
                onClick={()=>{
                    navigate("/signup")
                }}>Signup Now</button>
            </div>
        </div>
        </>
    )
}