import { useNavigate } from "react-router-dom"
export default function Universe(){
    let navigate=useNavigate();
    return (
        <>
        <div className="container mt-5">
            <div className="text-center">
                <h2>The Zerodha Universe</h2>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row" style={{marginTop:"100px"}}>
                <div className="col-4">
                    <img src="Media/Images/zerodhaFundhouse.png" alt="zerodha Fund house" style={{width:"50%"}}/>
                    <p className="text-small text-muted mt-2" style={{padding:"0 90px 0px 10px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                 <div className="col-4">
                    <img src="Media/Images/sensibullLogo.svg" alt="zerodha Fund house" style={{width:"50%"}}/>
                    <p className="text-small text-muted mt-2" style={{padding:"0 90px 0px 10px"}}>Options trading platform that lets you <br/> create strategies, analyze positions, and examine data points like open interest, FII/DII, and more. </p>
                </div>
                <div className="col-4">
                    <img src="Media/Images/tijori.svg" alt="zerodha Fund house" style={{width:"30%"}}/>
                    <p className="text-small text-muted mt-2" style={{padding:"0 90px 0px 10px"}}>Investment research platform <br/>that offers detailed insights on stocks, <br/>sectors, supply chains, and more.</p>
                </div>
                
            </div>
             <div className="row mt-5">
                <div className="col-4">
                    <img src="Media/Images/streakLogo.png" alt="zerodha Fund house" style={{width:"35%"}}/>
                    <p className="text-small text-muted mt-2" style={{padding:"0 90px 0px 10px"}}>Systematic trading platform <br/>that allows you to create and backtest <br/>strategies without coding.</p>
                </div>
                 <div className="col-4">
                    <img src="Media/Images/smallcaseLogo.png" alt="zerodha Fund house" style={{width:"50%"}}/>
                    <p className="text-small text-muted mt-2" style={{padding:"0 90px 0px 10px"}}>Thematic investing platform <br/>that helps you invest in diversified <br/>baskets of stocks on ETFs.</p>
                </div>
                <div className="col-4">
                    <img src="Media/Images/dittoLogo.png" alt="zerodha Fund house" style={{width:"30%"}}/>
                    <p className="text-small text-muted mt-2" style={{padding:"0 90px 0px 10px"}}>Personalized advice on life <br/>and health insurance. No spam <br/>and no mis-selling.</p>
                </div>
                <button className="btn btn-primary p-2 fs-5 mb-5 mt-5" style={{width:"20%", margin:"0 auto"}} onClick={()=>{
                    navigate("/signup");
                }}>Sign up for free</button>

            </div>
                

        </div>
        </>
    )
}