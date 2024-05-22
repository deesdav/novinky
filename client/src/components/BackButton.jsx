

import { Link } from "react-router-dom";
 
export default function BackButton(){

    return (
        <>
            <Link className="no-underline" to={"/"}>
                <p className="go-back-btn">
                    Jít zpět 🡨
                </p>
            </Link>
        </>
    )
}