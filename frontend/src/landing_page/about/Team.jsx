export default function Team(){
    return (
        <>
        <div className="container p-3 mt-3">
            <div className="row border-top">
                <h1 className="text-center fs-2 mt-4 md-4">People</h1>
            </div>
            <div className="row">
                <div className="col-6 mt-5 text-center">
                    <img src="Media\Images\nithinKamath.jpg" alt="Nithinkamath Image" style={{
                        borderRadius:"100%",
                        width:"50%"
                    }}/>
                    <h3 className="mt-4 fs-5">Nithin Kamath</h3>
                    <h5 className="fs-6 text-muted">Founder,CEO</h5>
                </div>
                <div className="col-6 mt-4  p-5 text-muted" style={{
                    lineHeight:"1.9",
                    fontSize:"1.2em"
                }}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

<p>Playing basketball is his zen.</p>

<p>connect on <a href="" style={{textDecoration:"none"}}>Homepage</a>  / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
        
        </>
    )
}