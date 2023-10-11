import React from "react";
import SignUp from "./SignUp";

const SignUpPopup = ({onClose}) => {
    return (
        <div className="popup">
            <div className="popup-inner">
                <button onClick={onClose} className="close-btn">X</button>
                <SignUp/>
            </div>
        </div>
    );
}

export default SignUpPopup;