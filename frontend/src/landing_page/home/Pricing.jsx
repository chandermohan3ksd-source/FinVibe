export default function Pricing(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1 className="fs-2 mb-3">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        <a href="" style={{textDecoration:"none"}}>Explore our products <i className="fa-solid fa-arrow-right-long"></i></a>
                    
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row mb-5">
                        <div className="col border text-center p-3">
                            <h1 className="mb-3"><i className="fa-solid fa-indian-rupee-sign" ></i>0</h1>
                            <p>Free equity delivery and <br/>direct mutual funds</p>
                        </div>
                        <div className="col border p-3 text-center">
                            <h1 className="mb-3"><i className="fa-solid fa-indian-rupee-sign"></i>20</h1>
                            <p>Intraday and F&Q</p>

                            
                        </div>

                    </div>
                </div>

            </div>
        </div>
        </>
    )
}