import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
      <nav>
        <div className="mainNav">
          {isMobile && (
            <>
              <Link className="link" to="/general">
                Navbar
              </Link>
              <button
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span>See </span>
              </button>
            </>
          )}
          <Link className='link' to="/general">
          <img src={logo} alt="khabri img" className="logo" />
          </Link>
          <div className="linkGroup">
            {/* <li>
              <Link className='link' to="/about">About</Link>
            </li> */}
            <div className="linkGroup1">
              <li>
                <Link className="link" to="/business">
                  Business
                </Link>
              </li>
              <li>
                <Link className="link" to="/entertainment">
                  Fun
                </Link>
              </li>
              <li>
                <Link className="link" to="/health">
                  Health
                </Link>
              </li>
            </div>
            <div className="linkGroup2">
              <li>
                <Link className="link" to="/science">
                  Science
                </Link>
              </li>
              <li>
                <Link className="link" to="/sports">
                  Sports
                </Link>
              </li>
              <li>
                <Link className="link" to="/technology">
                  Technology
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
