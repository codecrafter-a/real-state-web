import React from 'react'
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import bodyBg from "../../../assets/images/body_bg.webp";
import left from "../../../assets/images/left-1.png";
import boryGroupRight from "../../../assets/images/bory_group_right.png";
import iconHome from '../../../assets/images/icon_home.svg';
import userkey from '../../../assets/images/user-key.png';
import usercontact from '../../../assets/images/user-contect.png';
import userhouse from '../../../assets/images/user-house.png';
import document from '../../../assets/images/menu_icon2.png';
import { useTranslation } from 'react-i18next';

const Layout = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white text-black text-base">
      <Header />
      <div className="d-flex w-100">
        <Sidebar />
        <main className="main_content flex-grow-1 position-relative " >
          <Container fluid="sm" >
            <div className="position-absolute w-100 h-50 overflow-hidden top-0 start-0 z-0">
              <figure className="mb-0 h-100 w-100 position-relative">
                <img
                  src={bodyBg}
                  className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
                  alt="Background"
                />
                <span className="position-absolute top-0 end-0">
                  <img src={left} alt="Left BG Icon" className="img-fluid" />
                </span>
              </figure>
              <div className="right-bg-icon ">
                <img src={boryGroupRight} alt="right bg icon" className="position-fixed" />
              </div>
            </div>
            <Row className=" d-flex w-auto mx-auto  position-relative bg-white shadow-lg rounded-3 flex-wrap z-3">
              {children}
            </Row>
          </Container>
        </main>
      </div>
      <div className='d-block d-lg-none'>
        <Row xs={10} className="d-flex justify-content-between text-center p-2 bg-white fixed-bottom gx-1 border-top border-secondary-subtle">
          <Col xs={2} className='d-flex flex-column align-items-center justify-content-center'>
            <img src={iconHome} alt="home icon" className="text-teal" />
            <div className="fs-6 fw-semibold">{t("mobile_home")}</div>
          </Col>
          <Col xs={2} className='d-flex flex-column align-items-center justify-content-center'>
            <img src={userkey} alt="home icon" className="text-teal" />
            <div className="fs-6 fw-semibold">{t("interested_signing")}</div>
          </Col>
          <Col xs={2} className='d-flex flex-column align-items-center justify-content-center'>
            <img src={userhouse} alt="action icon " />
            <div className="fs-6 fw-semibold">{t("owner_signing")}</div>
          </Col>
          <Col xs={2} className='d-flex flex-column align-items-center justify-content-center'>
            <img src={usercontact} alt="action icon " />
            <div className="fs-6 fw-semibold">{t("broker_collaboration")}</div>
          </Col>
          <Col xs={2} className='d-flex flex-column align-items-center justify-content-center'>
            <img src={document} alt="action icon " />
            <div className="fs-6 fw-semibold">{t("mobile_agreements")}</div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Layout;
