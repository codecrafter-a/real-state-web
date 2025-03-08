import React, { useState, useEffect } from 'react'
import bodyBg from "../../assets/images/body_bg.webp";
import left from "../../assets/images/left-1.png";
import boryGroupRight from "../../assets/images/bory_group_right.png";
import '../Signin/Signin.css';
import g10 from '../../assets/images/g10.png';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
const Signin = () => {

    const [licenseNumber, setLicenseNumber] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate(); 

    useEffect(() => {
        const savedAuthStatus = localStorage.getItem("isAuthenticated");
        if (savedAuthStatus === "true") {
          setIsAuthenticated(true);
        }
      }, []);

      console.log("lincecc number", licenseNumber);

      const handleLogin = () => {
        if (licenseNumber.trim() !== "") {
          localStorage.setItem("isAuthenticated", "true");
          setIsAuthenticated(true);
          navigate("he/home");
        }
      };

  return (
    <>
     {!isAuthenticated ? (
  <>
    <div className="position-absolute w-100 overflow-x-hidden top-0 z-0">
      <figure className="mb-0  ">
        <img src={bodyBg} className=" responsive-img" alt="Background" />
        <span className="position-absolute top-0 end-0">
          <img src={left} alt="left bg icon" className=''/>
        </span>
      </figure>
      <div className="bgbelow_icons">
        <img src={boryGroupRight} alt="right bg icon" className=' d-none d-sm-block' />
      </div>
    </div>

    <Container className="container contain-sm mx-auto justify-content-center position-relative bg-white shadow-lg rounded-3 p-4">
      <Row className="row d-flex w-100   scrollbar-content scrollbar-left flex-wrap px-md-5 px-3 z-3">
        <Col className="col-12">
          <div>
            <p className="py-4 my-4 text-center screen-1 fw-bold">
              ברוכים הבאים לממשק למתווך של חתימה ירוקה!
            </p>
            <h5 className="screen-2 text-center">
              כאן תוכלו לנהל את כל הסכמי העסק שלכם בקלות וביעילות
              <br /> המערכת מאפשרת לכם לשלוח הסכמים שונים, להקים נכסים, לקוחות, סוכנים, להפיק
              <br /> חשבוניות, לעקוב אחר עמלות, לבצע התאמות בין נכס ללקוח, לשלוח הודעות עדכון
              <br /> ללקוחות פוטנציאליים ועוד.
            </h5>
            <p className="screen-2 text-center py-3 fw-bold">והכל במקום אחד!</p>
            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column gap-3 w-100" style={{ maxWidth: "400px" }}>
               <img src={g10} alt="" className="w-100 d-block d-sm-none" />
                <p className="screen-5 text-start text-md-center">רגע לפני שמתחילים נא הקלידו מספר רישיון תיווך</p>
                <input
                  type="number"
                  placeholder="ספרות בלבד"
                  className="py-2 px-3 border border-secondary border-opacity-25 rounded-1 w-100"
                  value={licenseNumber}
                  onChange={(e) => setLicenseNumber(e.target.value)}
                />
                <button className="mx-auto hdr_btn w-50 text-white" onClick={handleLogin}>
                  <a href="/" className="text-decoration-none text-white ">המשיכו</a>
                </button>
                <img src={g10} alt="" className="w-100 d-none d-sm-block" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </>
) : null}
    </> 
  )
}

export default Signin
