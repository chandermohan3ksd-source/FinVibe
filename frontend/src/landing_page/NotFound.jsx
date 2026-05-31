import { Link } from "react-router-dom";

export default function NotFound(){
    return (
        <>
        <div className="container text-center mt-5">
            <div className="row">
                <h3 className="mt-3">404</h3> <br/>
                <h2>Kiaan couldn't find that page </h2>
                <p className="fs-5">We couldn’t find the page you were looking for.<br/>
                Visit <Link to="/" style={{textDecoration:"none"}}>Zerodha's home page</Link></p>
            </div>
        </div>
        </>
    )
}