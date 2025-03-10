import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import bodyBg from "../../assets/images/body_bg.webp";
import left from "../../assets/images/left-1.png";
import boryGroupRight from "../../assets/images/bory_group_right.png";
import "../Data/Data.css";
import calendarMonth from "../../assets/images/calendar_month.svg";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const Data = () => {
  return (
    <Container  className="custom-container" >
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
        <Row className=" d-flex w-auto mx-auto  position-relative bg-white shadow-lg rounded-3  scrollbar-content scrollbar-left flex-wrap px-md-5 z-3">
          <Col className="py-2">
            <p className="py-2 my-4 text-center container-fluid screen-1 border-b-2">
            נתונים
            </p>
            <Row className="my-2 align-items-center d-flex px-md-0 px-2 ">
              <Col className=' col-12 col-md-6 '>
                <div className='d-flex justify-content-start'>
                  <button className="text-center hr_btn">חצי שנה אחרונה</button>
                  <button className=" hr_btn">3 חודשים אחרונים</button>
                  <button className='le_btn'>חודש קודם</button>
                </div>
              </Col>
              <Col className=' col-12 col-md-6'>
                <div className='d-flex justify-content-start align-items-center'>
                  <div className=''><button className="text-center hr_btn">הצגה</button></div>
                  <div className="text-end mb-4" dir="ltr"> 
                    <Form.Label htmlFor="basic-url">עד תאריך</Form.Label>
                    <InputGroup className="border border-gray-200  rounded">
                      <InputGroup.Text id="basic-addon1 "  className=' bg-white border-0 px-1'><img src={calendarMonth} alt="Calendar" /></InputGroup.Text>
                      <Form.Control
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        className=' border-0'
                      />
                    </InputGroup>
                  </div> 
                  <div className="text-end px-2 mb-4" dir="ltr">
                    <Form.Label htmlFor="basic-url">מתאריך</Form.Label>
                    <InputGroup className="border border-gray-200  rounded">
                      <InputGroup.Text id="basic-addon1 "  className=' bg-white border-0 px-1'><img src={calendarMonth} alt="Calendar" /></InputGroup.Text>
                      <Form.Control
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        className=' border-0'
                      />
                    </InputGroup>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className='my-2 align-items-center d-flex px-md-0 px-2 '>
              <Col className=' col-12 col-sm-12 col-md-6 col-lg-8'>
                <Row className='' >  
                  
                </Row>
              </Col>
              <Col className='col-12 col-sm-12 col-md-6 col-lg-4'></Col>
            </Row>
          </Col>
        </Row>
    </Container>
  )
}

export default Data
