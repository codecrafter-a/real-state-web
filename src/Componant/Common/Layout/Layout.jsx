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

const Layout = ({ children }) => {

  return (
    <div className="bg-white text-black text-base">
      <Header />
      <div className="d-flex w-100">
        <Sidebar />
        <main className="main_content flex-grow-1 position-relative" >
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
        <Row className="d-flex justify-content-between text-center py-2 bg-light fixed-bottom">
          <Col xs={2}>
            <img src={iconHome} alt="home icon" className="text-teal" />
            <div className="fs-6 fw-semibold">עמוד הבית</div>
          </Col>
          <Col xs={2}>
            <img src={userkey} alt="home icon" className="text-teal" />
            <div className="fs-6 fw-semibold">החתמת מתעניין</div>
          </Col>
          <Col xs={2}>
            <img src={userhouse} alt="action icon " />
            <div className="fs-6 fw-semibold">החתמת בעל נכס</div>
          </Col>
          <Col xs={2}>
            <img src={usercontact} alt="action icon " />
            <div className="fs-6 fw-semibold">שית"פ בין מתווכים</div>
          </Col>
          <Col xs={2}>
            <img src={document} alt="action icon " />
            <div className="fs-6 fw-semibold">כל ההסכמים</div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Layout;
