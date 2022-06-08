

import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faGithub,  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"
export default function Footer(){
    return (
      
<div className='footer'>

<div className="social-container">
    

<a href="https://github.com/austinokari1998"
className="github social">
<FontAwesomeIcon icon={faGithub} size="2x" />
</a>

<a href="https://twitter.com/OkariAustin" className="twitter social">
<FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://twitter.com/OkariAustin"
className="instagram social">
<FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
<div className='copyR'>
<p>© 2022 Kennedy Austin Okari</p>
</div>
        </div>
        </div>
        

    )


}







/*import React from 'react';
import { CDBContainer, CDBLink, CDBBtn, CDBBox } from 'cdbreact';
import 'bootstrap/dist/css/bootstrap.css';


export default function Footer() {
  return (
      <div>
    <CDBContainer className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src="logo" width="30px" />
              <span className="ml-3 h5 font-weight-bold">Devwares</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
              We are creating High Quality Resources and tools to Aid developers during the
              developement of their projects
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Devwares
            </p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBLink href="/">Resources</CDBLink>
              <CDBLink href="/">About Us</CDBLink>
              <CDBLink href="/">Contact</CDBLink>
              <CDBLink href="/">Blog</CDBLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBLink href="/">Support</CDBLink>
              <CDBLink href="/">Sign Up</CDBLink>
              <CDBLink href="/">Sign In</CDBLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Products
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBLink href="/">Windframe</CDBLink>
              <CDBLink href="/">Loop</CDBLink>
              <CDBLink href="/">Contrast</CDBLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ width: '100%' }}
          className="mx-auto mt-4"
        >
          <small className="text-center" style={{ width: '50%' }}>
            &copy; Devwares, 2022. All rights reserved.
          </small>
          <CDBBtn flat color="dark" className="p-2">
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBContainer>
    </div>
  );
};*/