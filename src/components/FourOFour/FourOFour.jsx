import {NavLink} from "react-router";
import "./FourOFour.css";

function FourOFour(params) {
    return(
        <>
            <div>
                <h1 className="FourOFour">404</h1>
                <p className="FourOFour">{params.error_masage}</p>
                <span className="FourOFour">
                    Back to our <NavLink to="/">Homepage</NavLink>
                </span>
            </div>
        </>
    )
}

export default FourOFour;
