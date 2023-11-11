import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = ({ categories }) => {
  console.log(categories, categories.length, 'nav');
  return (
    <nav>
      <div className="mainNav">
        <Link className="link" to="/">
          <img src={logo} alt="khabri img" className="logo" />
        </Link>
        <div className="linkGroup">
          {categories.length > 0 &&
            categories.map((category, idx) => (
              <span>
                <Link to={`/${category.category_name}`} className='cat_label'>{category.category_name}</Link>
              </span>
            ))}
        </div>

        {/* <div className="linkGroup">
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
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
