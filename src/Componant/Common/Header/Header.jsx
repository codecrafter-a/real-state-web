import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../../assets/images/logo.svg';
import userIcon from '../../../assets/images/user_icon.svg';
import '../Header/header.css'
import { FiAlignJustify } from "react-icons/fi";
import OffCanvas from '../OffCanvas/OffCanvas';
import Sidebar from '../Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import i18n from "i18next";
import AuthenticationService from '../../../Services/AuthenticationService';

const Header = () => {
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen ] = useState(window.innerWidth < 768);
  const [show, setShow] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    AuthenticationService.logout();
    navigate(`/${i18n.language}/signin`)
  }

  useEffect(() => {
    const handleStoreChange = () => {
      const authToken =  AuthenticationService.getAuthenticated();
      setIsAuthenticated(!!authToken);
      if (!authToken) {
        navigate(`/${i18n.language}/signin`);
      }
    };
    handleStoreChange();
    window.addEventListener("storage", handleStoreChange);
    return () => {
      window.removeEventListener("storage", handleStoreChange);
    };
  }, [i18n.language, navigate]);



  return (
    <>
     {isAuthenticated && 
       <header className={`header_main z-[1000]  `}>
       <section className="haeder_top">
         <div className="row d-flex justify-content-md-between flex-md-row-reverse">
           <div className='col-md-auto col-4  '>
           {
              isOpen ? (<>
              <OffCanvas 
                 setToggle={setToggle}
                 show={show}
                 setShow={setShow}
                 buttonText={<FiAlignJustify className='text-teal' style={{ width: '34px', height: '34px'}} />}
                 titleContent={
                  <div className="col-auto">
                   <ul className="hdt_top_menu  align-items-center gap-4">
                     <li className="user_dd dropdown">
                       <a href="/" class="dropdown-toggle" type="button" id="dd_user" data-bs-toggle="dropdown" aria-expanded="false">
                         <div className=' flex justify-center'><img src={userIcon} alt="gfdgdg" />{t("starter")} </div>
                       </a>
                       <ul className="dropdown-menu" aria-labelledby="dd_user">
                         <li><a className="dropdown-item" href="/">Profile</a></li>
                         <li><a className="dropdown-item" href="/">Settings</a></li>
                         <li><button  className="dropdown-item" onClick={handleLogout}>Log Out</button></li>
                       </ul>
                     </li>
                     <li className="hdr_btn">
                       {t("update")}
                     </li>
                   </ul>
                  </div>}
                  bodyContent={<div className="custom-scrollbar overflow-y-auto overflow-x-hidden">
                   <Sidebar isToggle={toggle} setShow={setShow} />
                 </div>}
              />
              </>) : (<>
                 <div className="col-auto">
                   <ul className="hdt_top_menu d-flex align-items-center gap-4">
                     <li className="user_dd dropdown">
                       <a href="/" class="dropdown-toggle" type="button" id="dd_user" data-bs-toggle="dropdown" aria-expanded="false">
                         <div className=' flex justify-center'><img src={userIcon} alt="gfdgdg" />{t("starter")} </div>
                       </a>
                       <ul className="dropdown-menu" aria-labelledby="dd_user">
                         <li><a className="dropdown-item" href="/">Profile</a></li>
                         <li><a className="dropdown-item" href="/">Settings</a></li>
                         <li ><button  className="dropdown-item" onClick={handleLogout}>Log Out</button></li>
                       </ul>
                     </li>
                     <li className="hdr_btn">
                       {t("update")}
                     </li>
                   </ul>
                 </div>
              </>)
           }
           </div>
           <div className="col-auto ">
             <a className="logo_main text-center" href="/">
               <img src={logo} width="158px" height="30px" alt="logo" />
             </a>
           </div>   
         </div>
       </section>
     </header>
     }
    </>
    
  );
};

export default Header;
