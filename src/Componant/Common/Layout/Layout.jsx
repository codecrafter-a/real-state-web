import React from 'react'
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Container, Row,} from "react-bootstrap";
import bodyBg from "../../../assets/images/body_bg.webp";
import left from "../../../assets/images/left-1.png";
import boryGroupRight from "../../../assets/images/bory_group_right.png";
 
const Layout = ({ children }) => {
  
  return (
    <div className="bg-white text-black text-base">
    <Header />
    <div className="layout_content">
      <Sidebar />
      <main className="main_content " >
        <Container  className="custom-container" fluid="sm" >
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
                <img src={boryGroupRight} alt="right bg icon" className="position-fixed"/>
              </div>
          </div>
          <Row className=" d-flex w-auto mx-auto  position-relative bg-white shadow-lg rounded-3 flex-wrap z-3">
            {children }
          </Row>
        </Container>
      </main>
    </div>
  </div>
  )
}

export default Layout;
