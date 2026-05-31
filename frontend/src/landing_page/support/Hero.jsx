import "./Support.css";
export default function Hero(){
    return (
        <>
        <section className="container-fluid" id="supportContainer">
            <div className="p-5 mb-3" id="supportTitle">
                <h4>Support Portal</h4>
                <a href="">Track Tikect</a>
            </div>
            <div className="row" id="mainRowContainer">
                <div className="col-5 p-3 mb-3">
                    <h2>Search an answer or browse help topics to create a ticket</h2>
                    <input  placeholder="Eg:how do i activate F&Q, why is my order getting rejected..."/> <br/>
                    <a href="">Track account opening</a>
                    <a href="">Track segment activation</a> <br/>
                    <a href="">Intraday</a>
                    <a href="">margins</a>
                    <a href="">Kite user manual</a>
                </div>
                <div className="col-2"></div>
                <div className="col-5 mb-5" id="featuredContainer">
                    <h2>Featured</h2>
                    <ol type="1">
                        <li>
                            <a href="">Current Takeovers and Delisting -January 2026</a>
                        </li>
                        <li>
                            <a href="">Latest Intraday Levergas -MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
        </>
    )
}