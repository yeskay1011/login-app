import React from "react";
import SignIn from "./SignIn";

const SignInPopup = ({ onClose }) => {
    return (
        <div className="popup">
            <div className="popup-inner">
                <button onClick={onClose} className="close-btn">X</button>
                <SignIn />
            </div>
        </div>
    );
}

export default SignInPopup;