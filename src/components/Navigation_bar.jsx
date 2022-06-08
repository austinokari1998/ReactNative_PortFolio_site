import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faGithub,  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './Nav_bar.css';
import { Card } from "react-bootstrap";
export default function Nav_Bar(){
  return (
    
    <Card border='info'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
     <a className="navbar-brand" href="/Projects">
    Projects
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
         
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/About">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Blogs
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="/hostels">
                Action
              </a>
              <a className="dropdown-item" href="/hostels">
                Another action
              </a>
              <a className="dropdown-item" href="/hostels">
                Something else here
              </a>
            </div>
          </li>
            
          
        </ul>
      </div>
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
</div>

    </nav>
    </Card>
  );
};

