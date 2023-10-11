import React, { useState } from 'react';
import SignInPopup from './SignIn/SignInPopup';
import SignUpPopup from './SignUp/SignUpPopup';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBInputGroup,
  MDBBtn
} from 'mdb-react-ui-kit';
import './SignIn/SignIn.css';

const NavBar = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
    setShowSignUp(false);
  }
  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
    setShowSignIn(false);
  }
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand>Navbar</MDBNavbarBrand>
            <MDBInputGroup className='d-flex w-auto mb-2'>
            <div>
              <MDBBtn outline onClick={toggleSignIn} className='m-2'>Sign In</MDBBtn>
              <MDBBtn outline onClick={toggleSignUp}>Sign Up</MDBBtn>
           </div>
            </MDBInputGroup>
        </MDBContainer>
      </MDBNavbar>
      <div>
        {showSignIn && <SignInPopup onClose={toggleSignIn} />}  
        {showSignUp && <SignUpPopup onClose={toggleSignUp} />}
      </div>
    </>
  );
}

export default NavBar;
