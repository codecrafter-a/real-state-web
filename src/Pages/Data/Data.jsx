import React, {useState} from 'react'
import {Row, Col } from "react-bootstrap";
import "../Data/Data.css";
import key_vertical from "../../assets/images/key_vertical.svg";
import garage_door from "../../assets/images/garage_door.svg";
import { Card } from 'react-bootstrap';
import calendarMonth from "../../assets/images/mobile_calendar.png";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CommonPieChart from '../../Componant/Common/PieChart/PieChart';
import user from '../../assets/images/user_icon.svg';
import home_work from '../../assets/images/home_work.svg';
import { useTranslation } from 'react-i18next';
import i18n from "i18next"; 
import { Nav } from "react-bootstrap";
const Data = () => {

  const { t } = useTranslation();
  const largeFont = i18n.language === "he" ? "16px" : "13px";
  const maxHeight = window.innerWidth > 768 ? "700px" : "70vh";
 const [activeTab, setActiveTab] = useState("all");

  const data = [
    { name: t("data_gra_subTitle1"), value: 15 },
    { name: t("data_gra_subTitle2"), value: 8 },
  ];
  const AggreementData = [
    { name:t("data_gra_litegrren"), value: 50 },
    { name: t("data_gra_green"), value: 30 },
    { name: t("data_gra_grey"), value: 20 },
    { name: t("data_gra_yellow"), value: 15 },
    { name: t("data_gra_red"), value: 10 },
  ];

  const AggrementCOLORS = ["#166D64", "#3AC2A3", "#CCCCCC", "#FF9900", "#FF3743"];

  const userData = [
    {title: "123", sub_title: "data_homework", name: home_work},
    {title: "356", sub_title: "data_user", name: user},
    {title: "150", sub_title: "data_garage", name: garage_door},
    {title: "175", sub_title: "data_key", name: key_vertical}, 
  ]

  const COLORS = ["#166D64", "#3AC2A3"];
  return (
          <Col>
            <p className="py-1 my-4 text-center screen-1 border-bottom">{t("data_title")}</p>
            <Nav variant="tabs" className="d-flex justify-content-center justify-content-md-start mx-md-3 pt-2 px-md-4 border-bottom">
              <Nav.Item>
                  <Nav.Link
                      className={`px-3 focus:!border-transparent hover:!border-transparent ${activeTab === "recent" ? "active-tab" : ""}`}
                      onClick={() => setActiveTab("recent")}
                  >
                      {t("data_tab2")}
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link
                      className={`px-3 focus:!border-transparent hover:!border-transparent ${activeTab === "all" ? "active-tab" : ""}`}
                      onClick={() => setActiveTab("all")}
                  >
                      {t("data_tab1")}
                  </Nav.Link>
              </Nav.Item>
            </Nav>
            <div className="custom-scrollbar overflow-y-auto overflow-x-hidden px-3 mt-4" style={{ maxHeight: maxHeight}}>
            {activeTab === "all" && (
              <>
            <Row className="d-flex flex-md-nowrap flex-wrap align-items-center py-3 justify-content-center">
              <Col className=' col-12 col-md-6'>
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
                  <div className='d-none d-md-block '><button className="text-center rounded-pill hr_btn px-2 w-auto mx-0">{t("data_btn_4")}</button></div>
                </div>
              </Col>
              <Col className=' col-12 col-md-6 '>
                <div className="d-flex my-2 my-md-0  fs-6 align-items-center mx-auto justify-content-md-end justify-content-center gap-2 gap-md-3" >
                  <button className="le_btn ">{t("data_btn_3")}</button>
                  <button className="hr_btn px-2 rounded-pill w-auto m-0">{t("data_btn_2")}</button>
                  <button className="text-center hr_btn px-2 rounded-pill w-auto m-0">{t("data_btn_1")}</button>
                </div>
              </Col>           
            </Row>
            <Row className='d-flex flex-md-nowrap flex-wrap align-items-center px-3 my-md-3 gap-4 justify-content-between'>
              <Col className='col-12 col-md-6 col-lg-4 flex-shrink-1'>
                <Row className=' bg-sec-100  rounded-2 shadow '>
                  <p className='screen-2 my-3 text-center text-md-start'>{t("data_hero_title_2")}</p>
                  <div className='d-flex align-items-center justify-content-center py-5'>
                    <div>
                      <p className=' card_title'>₪35,679</p>
                      <p className=' screen-4'>{t("data_sub_title22")}</p>
                    </div>
                    <vr className="mx-2 border-2 border-trnsperant vrline h-100 rounded-3" />
                    <div className='px-2'>
                      <p className=' card_title'>23</p>
                      <p  className=' screen-4'>{t("data_sub_title21")}</p>
                    </div>     
                  </div>
                </Row>
              </Col>
              <Col className=' col-12 col-md-6 col-lg-8'>
                <Row className=' bg-sec-100 rounded-md-2 shadow py-3'>
                  <p className='screen-2 '>{t("data_hero_title1")}</p>                 
                  <Col className='col-12 col-md-4'>
                    <CommonPieChart  data={data} colors={COLORS}/>
                  </Col>
                  <Col className="col-6 col-md-4">
                    <div className="bg-white shadow-sm border rounded-3 py-2 px-3 my-3 cursor-pointer text-center text-md-start">
                      <div className="d-flex flex-column-reverse flex-md-row justify-content-md-between align-items-center ">
                        <p className="screen-3" style={{fontsize: largeFont}}>{t("data_garage_title")}</p>
                        <img src={garage_door} alt="garage_door" className="mb-2" />
                      </div>
                      <div className="d-flex flex-column flex-md-row justify-content-md-start align-items-center  gap-md-3">
                        <div className='d-md-block d-flex justify-content-center align-items-center'>
                          <p className="screen-4">₪25,378</p>
                          <p className="screen-5">{t("data_garage_Subtitle2")}</p>
                        </div>
                        <div className='d-md-block d-flex justify-content-center align-items-center'>
                          <p className="screen-4">08</p>
                          <p className="screen-5">{t("data_garage_Subtitle1")}</p>
                        </div>     
                      </div>
                    </div>
                  </Col>
                  <Col className='col-6 col-md-4'>
                    <div className='bg-white boredr shadow-sm rounded-3 py-2 px-3 my-3 cursor-pointer text-center text-md-start'>
                      <div className='d-flex flex-column-reverse flex-md-row justify-content-md-between align-items-center'>                     
                        <p className='screen-3' style={{fontsize: largeFont}}>{t("data_key_title")}</p>
                        <img src={ key_vertical} alt="key card" className="mb-2" />
                      </div>
                      <div className='d-flex flex-column flex-md-row justify-content-md-start align-items-center  gap-md-3'>
                        <div className='d-md-block d-flex justify-content-center align-items-center'>
                          <p  className='screen-4 '>₪10,378</p>
                          <p  className='screen-5' style={{fontsize: largeFont}}>{t("data_key_subTitle2")}</p>
                        </div>
                        <div className='d-md-block d-flex justify-content-center align-items-center' >
                          <p className='screen-4 '>15</p>
                          <p  className='screen-5' style={{fontsize: largeFont}}>{t("data_key_subTitle1")}</p>
                        </div>
                      </div>
                    </div>
                  </Col>                   
                </Row>
              </Col>
            </Row>
            <Row className='d-flex flex-md-nowrap flex-wrap align-items-center px-3 my-md-3 gap-4 justify-content-between'>
              <Col className="col-12 col-md-6 col-lg-8 flex-shrink-1">
                <Row className="bg-sec-100 rounded-md-3 shadow px-3 py-3 ">
                  <p className="screen-2 text-end px-2 pb-3">{t("data_main_title2")}</p>
                  <div className="d-flex justify-content-center align-items-center my-2 py-3 mx-auto">
                    <CommonPieChart data={AggreementData} colors={AggrementCOLORS} />
                  </div>
                </Row>
              </Col>
              <Col className='col-12 col-md-6 col-lg-4'>
                <Row className=' bg-sec-100  rounded-md-2 shadow '>
                  <p className='screen-2 text-center text-md-end my-3'>{t("data_main_title1")}</p>
                  {userData.map((item) => {
                    return (<>
                        <Col xs={12} md={6} className="mb-3">
                          <Card className="border rounded-3 shadow-sm  cursor-pointer p-3">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className='d-flex justify-content-center flex-column'>
                                <h5 className="mb-0">{item.title}</h5>
                                <small className="text-muted" >{t(item.sub_title)}</small>
                              </div><img src={item.name} alt="garage_door"/>
                            </div>
                          </Card>
                        </Col>
                    </>);
                  })}
                </Row>
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
