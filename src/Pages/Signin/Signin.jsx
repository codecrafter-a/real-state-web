import React, { useState, useEffect } from 'react'
import '../Signin/Signin.css';
import g10 from '../../assets/images/g10.png';
import {Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import i18n from "i18next";
import { useTranslation } from 'react-i18next';
const Signin = () => {

    const [licenseNumber, setLicenseNumber] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate(); 

     const { t } = useTranslation();

    
     const handleLogin = () => {
      if (licenseNumber.trim() !== "") {
        localStorage.setItem("isAuthenticated", "true");
        window.dispatchEvent(new Event("storage")); 
        setIsAuthenticated(true);
        setTimeout(() => {
          navigate(`/${i18n.language}/home`);
        }, 1000); 
      }
    };

    useEffect(() => {
        const lang = i18n.language || "he"; 
        const savedAuthStatus = localStorage.getItem("isAuthenticated");
        if (savedAuthStatus === "true") {
          setIsAuthenticated(true);
          navigate(`/${lang}/home`);
        }
      }, [navigate]);

      console.log("lincecc number", licenseNumber);

      
  return (
    <>
     {!isAuthenticated ? (
  <>
      <Col className="col-12">
          <div>
            <p className="py-4 my-4 text-center screen-1 fw-bold">
               {t("sign_in_title")}
            </p>
            <h5 className="screen-2 text-center">
              {t("sign_in_h5_0")}
              <br /> {t("sign_in_h5_1")}
              <br /> {t("sign_in_h5_2")}
              <br /> {t("sign_in_h5_3")}
            </h5>
            <p className="screen-2 text-center py-3 fw-bold">{t("sign_in_subtitle")}</p>
            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column gap-3 w-100" style={{ maxWidth: "400px" }}>
               <img src={g10} alt="" className="w-100 d-block d-sm-none" />
                <p className="screen-5 text-start text-md-center">{t("sign_in_in_label")}</p>
                <input
                  type="number"
                  placeholder= {t("sign_in_in_placeholder")}
                  className="py-2 px-3 border border-secondary border-opacity-25 rounded-1 w-100"
                  value={licenseNumber}
                  onChange={(e) => setLicenseNumber(e.target.value)}
                  required
                />
                <button className="mx-auto hdr_btn w-50 text-white" onClick={handleLogin}>
                  <span className="text-decoration-none text-white ">{t("sign_in_btn")}</span>
                </button>
                <img src={g10} alt="" className="w-100 d-none d-sm-block" />
              </div>
            </div>
          </div>
      </Col>
  </>
) : null}
    </> 
  )
}

export default Signin
