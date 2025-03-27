import React, { useEffect, useState } from 'react'
import { Row, Col } from "react-bootstrap";
import "../Data/Data.css";
import key_vertical from "../../assets/images/key_vertical.svg";
import garage_door from "../../assets/images/garage_door.svg";
import { Card } from 'react-bootstrap';
import calendarMonth from "../../assets/images/mobile_calendar.png";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CommonPieChart from '../../Componant/Common/PieChart/PieChart';
// import user from '../../assets/images/user_icon.svg';
// import home_work from '../../assets/images/home_work.svg';
import { useTranslation } from 'react-i18next';
import i18n from "i18next";
import { Nav } from "react-bootstrap";
import { useDataService } from "../../Services/Data";

import Tab from '../../Componant/Common/Tab/Tab';
const Data = () => {

  const { t } = useTranslation();
  const largeFont = i18n.language === "he" ? "16px" : "13px";
  const [activeTab, setActiveTab] = useState("all");


  const { getData, getAgreementData, getUserData, getAgreementColors } = useDataService();

  const COLORS = ["#166D64", "#3AC2A3"];
  const [pieData, setPieData] = useState([]);
  const [Agreement, setAgreement] = useState([]);
  const [UserData, setUserData] = useState([]);
  const [colorData, setColorData] = useState([]);

  console.log("🚀 ~ Data ~ pieData:", pieData)
  useEffect(() => {
    const data = getData();
    setPieData(data);
    const Agreementdata = getAgreementData();
    setAgreement(Agreementdata);
    const cardUserdata = getUserData();
    setUserData(cardUserdata);
    const colors = getAgreementColors()
    setColorData(colors)
  }, []);
  return (
    <Col className='bg-white shadow-lg rounded-3'>
      <p className="py-1 my-4 text-center screen-1 border-bottom d-none d-md-block">{t("data_title")}</p>
      <div className='w-100 border-bottom'>
        <Nav variant="tabs" className="mx-md-3 pt-2">
          <Tab
            className={`border-0 text-center text-md-start ${activeTab === "recent" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("recent")}
            children={t("data_tab2")}
            tab={true}
          />
          <Tab
            className={` border-0 text-center text-md-start ${activeTab === "all" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("all")}
            children={t("data_tab1")}
            tab={true}
          />
        </Nav>
      </div>
      <div className="custom-scrollbar overflow-y-auto overflow-x-hidden px-1 mt-4" >
        {activeTab === "all" && (
          <>
            <Row className=" align-items-center py-3 justify-content-center">
              <Col className=' col-12 col-md-6 d-flex flex-md-nowrap flex-wrap'>
                <div className='d-flex justify-content-center  align-items-center gap-2 gap-md-4'>
                  <div className="mb-md-4">
                    <Form.Label htmlFor="basic-url">{t("data_in_title")}</Form.Label>
                    <InputGroup className="border rounded overflow-hidden">
                      <InputGroup.Text id="basic-addon1" className="bg-white rounded-0 border-start-0">
                        <img src={calendarMonth} alt="Calendar" />
                      </InputGroup.Text>
                      <Form.Control
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        className="border-0 shadow-none"
                      />
                    </InputGroup>
                  </div>
                  <div className="mb-md-4">
                    <Form.Label htmlFor="basic-url">{t("data_in_title2")}</Form.Label>
                    <InputGroup className="border rounded overflow-hidden">
                      <InputGroup.Text id="basic-addon1" className="bg-white rounded-0 border-start-0">
                        <img src={calendarMonth} alt="Calendar" />
                      </InputGroup.Text>
                      <Form.Control
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        className="border-0 shadow-none"
                      />
                    </InputGroup>
                  </div>
                  <div className='d-none d-md-block '><button className="text-center rounded-pill agent-button2 w-40 py-1">{t("data_btn_4")}</button></div>
                </div>
              </Col>
              <Col className="col-12 col-md-6">
                <div className="d-flex threebutton my-2 my-md-0 gap-2 align-items-center justify-content-center justify-content-md-end gap-md-3">
                  <button className="agent-btn-responsive1 w-100 w-md-40 py-1 rounded-pill text-white">
                    {t("data_btn_3")}
                  </button>
                  <button className="agent-btn-responsive2 w-100 w-md-40 py-1 rounded-pill">
                    {t("data_btn_2")}
                  </button>
                  <button className="agent-btn-responsive2 w-100 w-md-40 py-1 rounded-pill">
                    {t("data_btn_1")}
                  </button>
                </div>
              </Col>

            </Row>
            <Row className='d-flex flex-md-nowrap flex-wrap align-items-center px-2  my-4 gap-md-4 justify-content-between'>
              <Col className='col-12 col-md-6 col-lg-4 flex-shrink-1'>
                <Row className=' bg-sec-100 rounded-2 shadow'>
                  <p className='screen-2 my-3 text-center text-md-start'>{t("data_hero_title_2")}</p>
                  <div className='d-flex align-items-center justify-content-center py-5'>
                    <div>
                      <p className=' card_title'>₪35,679</p>
                      <p className=' screen-4'>{t("data_sub_title22")}</p>
                    </div>
                    <vr className="mx-2 border-2 border-trnsperant vrline h-100 rounded-3" />
                    <div className='px-2'>
                      <p className=' card_title'>23</p>
                      <p className=' screen-4'>{t("data_sub_title21")}</p>
                    </div>
                  </div>
                </Row>
              </Col>
              <Col className=' col-12 col-md-6 col-lg-8'>
                <Row className=' bg-sec-100 rounded-2 shadow py-3'>
                  <p className='screen-2  text-center text-md-start'>{t("data_hero_title1")}</p>

                  <div className='piedata'>
                    <Col className='col-12 col-md-4'>
                      <CommonPieChart data={pieData} colors={COLORS} />
                    </Col>
                    <div className='datacard'>
                      <Col >
                        <div className="bg-white shadow-sm border rounded-3 py-2 px-3 my-3 cursor-pointer text-center text-md-start">
                          <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center">
                            <p
                              className="screen-3 text-center text-md-start"
                              style={{ fontSize: largeFont }} // Fixed typo
                            >
                              {t("data_garage_title")}
                            </p>
                            <img src={garage_door} alt="garage_door" className="mb-2 img-fluid" />
                          </div>
                          <div className="d-flex flex-column flex-md-row justify-content-start align-items-center gap-2 gap-md-3">
                            <div className="d-flex flex-column align-items-center text-center text-md-start">
                              <p className="screen-4">₪25,378</p>
                              <p className="screen-5 d-none d-md-block">{t("data_garage_Subtitle2")}</p>
                            </div>
                            <div className="d-flex flex-column align-items-center text-center text-md-start">
                              <p className="screen-4">08</p>
                              <p className="screen-5 ">{t("data_garage_Subtitle1")}</p>
                            </div>
                          </div>
                        </div>
                      </Col>

                      <Col >
                        <div className='bg-white border shadow-sm rounded-3 py-2 px-md-3 my-3 cursor-pointer text-center text-md-start'>
                          <div className='d-flex flex-column-reverse flex-md-row justify-content-md-between align-items-center'>
                            <p className='screen-3  text-center text-md-start' style={{ fontsize: largeFont }}>{t("data_key_title")}</p>
                            <img src={key_vertical} alt="key card" className="mb-2" />
                          </div>
                          <div className='d-flex flex-column flex-md-row justify-content-md-start align-items-center  gap-md-3'>
                            <div className='d-md-block d-flex justify-content-center align-items-center'>
                              <p className='screen-4 '>₪10,378</p>
                              <p className='screen-5 d-none d-md-block' style={{ fontsize: largeFont }}>{t("data_key_subTitle2")}</p>
                            </div>
                            <div className='d-md-block d-flex justify-content-center align-items-center' >
                              <p className='screen-4 '>15</p>
                              <p className='screen-5' style={{ fontsize: largeFont }}>{t("data_key_subTitle1")}</p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
            <Row className='d-flex flex-md-nowrap flex-wrap align-items-center px-2 px-md-3 my-md-3 gap-4 justify-content-between'>
              <Col className="col-12 col-md-6 col-lg-8 flex-shrink-1">
                <Row className="bg-sec-100 rounded-3 shadow px-3  ">
                  <p className="screen-2  px-2 py-3 text-center text-md-start">{t("data_main_title2")}</p>
                  <div className="d-flex justify-content-center align-items-center my-2 py-3 mx-md-auto">
                    <CommonPieChart data={Agreement} colors={colorData} />
                  </div>
                </Row>
              </Col>
              <Col className=''>
                <Row className=' bg-sec-100  rounded-2 shadow d-md-flex d-none'>
                  <p className='screen-2 text-center text-md-start my-2'>{t("data_main_title1")}</p>
                  {UserData.map((item) => {
                    return (<>
                      <Col className="mb-3">
                        <Card className="border-md border-0 rounded-3 shadow-sm cursor-pointer p-3">
                          <div className="d-flex align-items-center justify-content-between gap-2">
                            <div className="d-flex flex-column">
                              <h5 className="mb-0 fw-bold">{item.title}</h5>
                              <small className="text-muted">{t(item.sub_title)}</small>
                            </div>
                            <img src={item.name} alt="garage_door" className="img-fluid" style={{ maxWidth: "50px" }} />
                          </div>
                        </Card>
                      </Col>

                    </>);
                  })}
                </Row>
                <div className="d-flex justify-content-center d-block d-md-none">
                  <Card className="shadow-lg rounded-3 additionalData  bg-sec-100 text-center text-md-end border-0" >
                    <h5 className="fw-bold text-teal">{t("data_main_title1")}</h5>
                    <Row className="align-items-center text-center">
                      <Col xs={6} className="d-flex flex-column align-items-center gap-2">
                        <div className="d-flex align-items-center gap-2">
                          <span className="fw-bold">קנייה</span>
                          <span className="fw-bold">150</span>
                          <img src={garage_door} alt="Garage Door" width={24} />
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <span className="fw-bold">השכרה</span>
                          <span className="fw-bold">175</span>
                          <img src={key_vertical} alt="Key" width={24} />
                        </div>
                      </Col>
                      <Col xs={6} className="d-flex flex-column align-items-center">
                        <h2 className="text-teal fw-bold">123</h2>
                        <p className="mb-0 fw-normal">נכסים במערכת</p>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Col>
            </Row>
          </>
        )}
        {activeTab === "recent" && (
          <div className="text-center py-4">
            <p>{t("no_recent_agreements")}</p>
          </div>
        )}
      </div>

    </Col>
  )
}

export default Data
