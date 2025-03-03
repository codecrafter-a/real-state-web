import React from 'react';
import logo from '../../../assets/images/logo.svg';
import userIcon from '../../../assets/images/user_icon.svg';
import '../Header/header.css'

const Header = () => {
  return (
    <header className="header_main">
      <section className="haeder_top">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto">
            <a className="logo_main" href="/">
              <img src={logo} width="158px" height="30px" alt="logo" />
            </a>
          </div>
          <div className="col-auto">
            <ul className="hdt_top_menu d-flex align-items-center">
              <li className="user_dd dropdown">
                <a href="/" class="dropdown-toggle" type="button" id="dd_user" data-bs-toggle="dropdown" aria-expanded="false">
                  <div className=' flex justify-center'><img src={userIcon} alt="gfdgdg"/>שירי נקבלי | STARTER </div> 
                </a>
                <ul className="dropdown-menu" aria-labelledby="dd_user">
                  <li><a className="dropdown-item" href="/">Profile</a></li>
                  <li><a className="dropdown-item" href="/">Settings</a></li>
                  <li><a className="dropdown-item" href="/">Log Out</a></li>
                </ul>
              </li>
              <li className="hdr_btn">
                <a href="/">שידרוג מנוי</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
