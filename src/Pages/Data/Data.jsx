import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../Data/Data.css";
import key_vertical from "../../assets/images/key_vertical.svg";
import garage_door from "../../assets/images/garage_door.svg";
import { Card } from "react-bootstrap";
import calendarMonth from "../../assets/images/mobile_calendar.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import CommonPieChart from "../../Componant/Common/PieChart/PieChart";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Nav } from "react-bootstrap";
import { useDataService } from "../../Services/Data";

import Tab from "../../Componant/Common/Tab/Tab";
const Data = () => {
  const { t } = useTranslation();
  const largeFont = i18n.language === "he" ? "16px" : "13px";
  const [activeTab, setActiveTab] = useState("all");

  const { getData, getAgreementData, getUserData, getAgreementColors } =
    useDataService({
      until_data: "",
      form_data: "",
    });

  const COLORS = ["#166D64", "#3AC2A3"];
  const [pieData, setPieData] = useState([]);
  const [Agreement, setAgreement] = useState([]);
  const [UserData, setUserData] = useState([]);
  const [colorData, setColorData] = useState([]);

  useEffect(() => {
    const data = getData();
    setPieData(data);
    const Agreementdata = getAgreementData();
    setAgreement(Agreementdata);
    const cardUserdata = getUserData();
    setUserData(cardUserdata);
    const colors = getAgreementColors();
    setColorData(colors);
  }, []);
  return (
    <>
      <Col className="bg-white shadow-lg rounded-3 p-2 px-4">
        <p className="w-100 text-center screen-1 border-bottom py-3 mb-4 d-none d-md-block">
          {t("data_title")}
        </p>
        <div className="w-100 border-bottom">
          <Nav variant="tabs" className=" pt-2">
            <Tab
              className={`border-0 text-center fs-5 text-nowrap fw-normal px-1 lh-1 text-md-start ${
                activeTab === "recent" ? "active-tab fw-bold" : ""
              }`}
              onClick={() => setActiveTab("recent")}
              children={t("data_tab2")}
              tab={true}
            />
            <Tab
              className={` border-0 text-center text-nowrap fs-5 fw-normal lh-1 text-md-start ${
                activeTab === "all" ? "active-tab fw-bold" : ""
              }`}
              onClick={() => setActiveTab("all")}
              children={t("data_tab1")}
              tab={true}
            />
          </Nav>
        </div>
        <div
          className="custom-scrollbar overflow-y-auto overflow-x-hidden mt-4"
          style={{ maxHeight: "594px" }}
        >
          <div className="px-3">
            {activeTab === "all" && (
              <>
                <Row className=" align-items-center row py-3 justify-content-center">
                  <Col className=" col-12 col-md-6 d-flex flex-md-nowrap flex-wrap">
                    <div className="d-flex justify-content-center  align-items-center gap-3">
                      <div className="mb-md-4">
                        <Form.Label
                          htmlFor="basic-url"
                          className="  fw-semibold fs-15 lh-1"
                        >
                          {t("data_in_title")}
                        </Form.Label>
                        <InputGroup className="border rounded overflow-hidden">
                          <InputGroup.Text
                            id="basic-addon1"
                            className="bg-white rounded-0 border-start-0"
                          >
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
                        <Form.Label
                          htmlFor="basic-url "
                          className="fw-semibold fs-15 lh-1"
                        >
                          {t("data_in_title2")}
                        </Form.Label>
                        <InputGroup className="border rounded overflow-hidden">
                          <InputGroup.Text
                            id="basic-addon1"
                            className="bg-white rounded-0 border-start-0"
                          >
                            <img src={calendarMonth} alt="Calendar" />
                          </InputGroup.Text>
                          <Form.Control
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            className="border-0 shadow-none"
                          />
                        </InputGroup>
                      </div>
                      <div className="d-none d-md-block ">
                        <button className="text-center rounded-pill agent-button2 w-25 py-2">
                          {t("data_btn_4")}
                        </button>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-12 col-md-6">
                    <div className="d-flex threebutton my-2 my-md-0 gap-2 align-items-center justify-content-center justify-content-md-end gap-md-3">
                      <button className="agent-btn-responsive1 w-25  py-2 rounded-pill text-white">
                        {t("data_btn_3")}
                      </button>
                      <button className="agent-btn-responsive2 w-25 py-2 rounded-pill">
                        {t("data_btn_2")}
                      </button>
                      <button className="agent-btn-responsive2 w-25  py-2 rounded-pill">
                        {t("data_btn_1")}
                      </button>
                    </div>
                  </Col>
                </Row>
                <Row className="d-flex flex-md-nowrap flex-wrap align-items-center px-3  my-4 gap-md-4 justify-content-between">
                  <Col className="col-12 col-md-6 col-lg-5 flex-shrink-1 py-3">
                    <Row className=" bg-sec-100 rounded-2 shadow">
                      <p className="screen-2 my-3 text-center text-nowrap text-md-start">
                        {t("data_hero_title_2")}
                      </p>
                      <div className="d-flex align-items-center justify-content-center gap-3 my-5">
                        <div>
                          <p className=" card_title">₪35,679</p>
                          <p className=" screen-4">{t("data_sub_title22")}</p>
                        </div>
                        <vr className="mx-2 border-2 border-trnsperant vrline h-100 rounded-3" />
                        <div className="">
                          <p className=" card_title">23</p>
                          <p className=" screen-4">{t("data_sub_title21")}</p>
                        </div>
                      </div>
                    </Row>
                  </Col>
                  <Col className=" col-12 col-md-6 col-lg-7">
                    <Row className="bg-sec-100 rounded-2 shadow py-3">
                      <p className="screen-2 text-center text-md-start">
                        {t("data_hero_title1")}
                      </p>

                      <Row className="piedata gx-4">
                        {" "}
                        <Col
                          xs={12}
                          md={2}
                          className="d-flex flex-column justify-content-center"
                        >
                          <CommonPieChart data={pieData} colors={COLORS} />
                        </Col>
                        <Col xs={12} md={10}>
                          <Row>
                            <Col xs={12} lg={6} className="mb-3">
                              <div className="bg-white shadow-sm border rounded-3 py-2 px-3 cursor-pointer text-center text-md-start">
                                <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center">
                                  <p
                                    className="fw-semibold fs-5 lh-1 text-teal text-nowrap text-center text-md-start"
                                    style={{ fontSize: largeFont }}
                                  >
                                    {t("data_garage_title")}
                                  </p>
                                  <img
                                    src={garage_door}
                                    alt="garage_door"
                                    className="mb-2 img-fluid"
                                  />
                                </div>
                                <div className="d-flex flex-column flex-md-row justify-content-start align-items-center gap-2 gap-md-3">
                                  <div className="d-md-block d-flex justify-content-center align-items-center">
                                    <p className="screen-4 mb-0">₪25,378</p>
                                    <p className="screen-5 d-none d-md-block">
                                      {t("data_garage_Subtitle2")}
                                    </p>
                                  </div>
                                  <div className="d-md-block d-flex justify-content-center align-items-center">
                                    <p className="screen-4 mb-0">08</p>
                                    <p className="screen-5">
                                      {t("data_garage_Subtitle1")}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Col>

                            <Col xs={12} lg={6} className="mb-3">
                              <div className="bg-white border flex-grow-0 shadow-sm rounded-3 py-2 px-md-3 cursor-pointer text-center text-md-start">
                                <div className="d-flex flex-column-reverse flex-md-row justify-content-md-between align-items-center">
                                  <p className="fw-semibold fs-5 lh-1 text-teal text-nowrap text-center text-md-start">
                                    {t("data_key_title")}
                                  </p>
                                  <img
                                    src={key_vertical}
                                    alt="key card"
                                    className="mb-2"
                                  />
                                </div>
                                <div className="d-flex flex-column flex-md-row justify-content-md-start align-items-center gap-md-3">
                                  <div className="d-md-block d-flex justify-content-center align-items-center">
                                    <p className="screen-4 mb-0">₪10,378</p>
                                    <p className="screen-5 d-none d-md-block">
                                      {t("data_key_subTitle2")}
                                    </p>
                                  </div>
                                  <div className="d-md-block d-flex justify-content-center align-items-center">
                                    <p className="screen-4 mb-0">15</p>
                                    <p className="screen-5">
                                      {t("data_key_subTitle1")}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Row>
                  </Col>
                </Row>
                <div className=" row mb-5">
                  <div className="col-12 col-md-6 col-lg-7">
                    <div className="shadow bg-sec-100 rounded-2 my-5 d-flex justify-content-center gap-3 flex-column my-md-0 p-4">
                      <p className="fs-5 fw-bold lh-1 text-embed-500">
                        {t("data_main_title2")}
                      </p>
                      <div className="d-flex justify-content-center align-items-center gap-4 py-4">
                        <CommonPieChart data={Agreement} colors={colorData} />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-5">
                    <div className="shadow bg-sec-100 rounded-2 p-4">
                      <h5 className="fs-5 fw-bold lh-1 text-embed-500">
                        {t("Additional_data")}
                      </h5>
                      <Row className="g-3">
                        {UserData.map((item, index) => (
                          <Col key={index} xs={12} sm={6}>
                            <Card className="border-md border-0 bg-white rounded-3 shadow-sm cursor-pointer p-3">
                              <div className="d-flex align-items-center justify-content-between gap-2">
                                <div className="d-flex flex-column">
                                  <h5 className="mb-0 fw-bold">{item.title}</h5>
                                  <small className="fw-semibold fs-6 lh-base text-secondary text-nowrap">
                                    {t("data_homework")}
                                  </small>
                                </div>
                                <img
                                  src={item.name}
                                  alt="garage_door"
                                  className="img-fluid"
                                  style={{ maxWidth: "50px" }}
                                />
                              </div>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === "recent" && (
              <div className="text-center py-4">
                <p>{t("no_recent_agreements")}</p>
              </div>
            )}
          </div>
        </div>
      </Col>
      {/** mobile Screen on */}
      {/* <div className="d-block d-md-none ">
        <div className=" border-2 rounded-3 bg-light mb-4 shadow p-3">
          <div className="w-100 border-bottom">
            <Nav variant="tabs" className="mx-md-3 fs-15 pt-2 ">
              <div className="col-6 text-center">
                <Tab
                  className={`border-0 fs-6 text-nowrap fw-normal px-1 lh-1 w-100 ${
                    activeTab === "recent" ? "active-tab fw-bold" : ""
                  }`}
                  onClick={() => setActiveTab("recent")}
                  children={t("data_tab2")}
                  tab={true}
                />
              </div>
              <div className="col-6 text-center">
                <Tab
                  className={`border-0 fs-6 text-nowrap fw-normal px-1 lh-1 w-100 ${
                    activeTab === "all" ? "active-tab fw-bold" : ""
                  }`}
                  onClick={() => setActiveTab("all")}
                  children={t("data_tab1")}
                  tab={true}
                />
              </div>
            </Nav>
          </div>
          {activeTab === "all" && (
            <>
              <div className="row py-3">
                <div className="col-12 ">
                  <div className="d-flex threebutton my-3 gap-2 align-items-center justify-content-center">
                    <button className="agent-btn-responsive1 w-33  py-1 rounded-pill text-white">
                      {t("data_btn_3")}
                    </button>
                    <button className="agent-btn-responsive2 w-33 py-1 rounded-pill">
                      {t("data_btn_2")}
                    </button>
                    <button className="agent-btn-responsive2 w-33  py-1 rounded-pill">
                      {t("data_btn_1")}
                    </button>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex justify-content-center  align-items-center gap-3">
                    <div className="">
                      <Form.Label
                        htmlFor="basic-url"
                        className="  fw-semibold fs-15 lh-1"
                      >
                        {t("data_in_title")}
                      </Form.Label>
                      <InputGroup className="border rounded overflow-hidden">
                        <InputGroup.Text
                          id="basic-addon1"
                          className="bg-white rounded-0 border-start-0"
                        >
                          <img src={calendarMonth} alt="Calendar" />
                        </InputGroup.Text>
                        <Form.Control
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          className="border-0 shadow-none mb-0"
                        />
                      </InputGroup>
                    </div>
                    <div className="">
                      <Form.Label
                        htmlFor="basic-url "
                        className="fw-semibold fs-15 lh-1"
                      >
                        {t("data_in_title2")}
                      </Form.Label>
                      <InputGroup className="border rounded overflow-hidden">
                        <InputGroup.Text
                          id="basic-addon1"
                          className="bg-white rounded-0 border-start-0"
                        >
                          <img src={calendarMonth} alt="Calendar" />
                        </InputGroup.Text>
                        <Form.Control
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          className="border-0 shadow-none mb-0"
                        />
                      </InputGroup>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="my-5">
                    <p className="screen-2 my-3 text-center  ">
                      {t("data_hero_title_2")}
                    </p>
                    <div className="d-flex align-items-center justify-content-center gap-3">
                      <div>
                        <p className="fw-semibold lh-1 mb-0  card_title">
                          ₪35,679
                        </p>
                        <p className=" screen-4 ">{t("data_sub_title22")}</p>
                      </div>
                      <div className=" mx-2 border-2 py-30 rounded-3 vrline "></div>
                      <div className="">
                        <p className="fw-semibold  mb-0 lh-1 card_title">23</p>
                        <p className=" screen-4">{t("data_sub_title21")}</p>
                      </div>
                    </div>
                  </div>
                  <CommonPieChart data={pieData} colors={COLORS} />
                  <div className="row my-3">
                    <div className="col-5 d-flex align-items-center justify-content-center">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src={garage_door}
                          alt="garage_door"
                          className="img-fluid mb-2"
                        />
                        <p
                          className="fw-bold lh-sm text-teal mb-1"
                          style={{ fontSize: "1rem" }}
                        >
                          {t("data_garage_title")}
                        </p>
                        <p className="fs-2 fw-semibold text-dark lh-1 mb-1">
                          ₪25,378
                        </p>
                        <p className="screen-5 mb-0">
                          <span className="fw-semibold fs-3 text-black px-1 lh-1">
                            08
                          </span>
                          {t("data_garage_Subtitle2")}
                        </p>
                      </div>
                    </div>
                    <div className="col-2 d-flex justify-content-center"><div className="border-start border-2 h-100"></div></div>
                    <div className="col-5 d-flex align-items-center justify-content-center">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src={key_vertical}
                          alt="key icon"
                          className="img-fluid mb-2"
                        />
                        <p className="fw-bold lh-sm fs-15 text-teal mb-1">
                          {t("data_key_title")}
                        </p>
                        <p className="fs-2 fw-semibold text-dark lh-1 mb-1">
                          ₪10,281
                        </p>
                        <p className="screen-5 mb-0">
                          <span className="fw-semibold fs-3 text-black px-1 lh-1">
                            15
                          </span>
                          {t("data_key_subTitle1")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="border-2 rounded-3 bg-light mb-4 shadow p-3">
            <p className="fs-5 fw-bold lh-1 text-center text-embed-500 pt-3">{t("data_main_title2")}</p>
            <div className="d-flex justify-content-center align-items-center ">
              <CommonPieChart data={Agreement} colors={colorData} />
            </div>
        </div>
        <div className="border-2 rounded-3 bg-light mb-4 shadow p-3">
          <h5 className="fs-5 fw-bold lh-1 text-center text-embed-500">{t("Additional_data")}</h5>
          <div className="row">
            <div className="col-6">
              <div className="d-flex flex-column align-items-center gap-2">
                <h3 className="text-teal fw-bold fs-1 mb-0">123</h3>
                <p className="fs-17 fw-semibold lh-1">{t("data_homework")}</p>
              </div>
            </div> 
            <div className="col-6">
                <div className="d-flex gap-2 flex-column align-items-center justify-content-start">
                   <div className="d-flex gap-2">
                     <img src={garage_door}
                        alt="garage_door"
                        className="img-fluid mb-2" /> 
                      <p className="fw-semibold fs-2 lh-1 mb-0">150</p> 
                      <p className="fw-semibold fs-15 lh-1 mb-0"> {t("pro_add_del_buy")}</p>                               
                   </div>
                   <div className="d-flex gap-2">
                      <img src={key_vertical}
                        alt="garage_door"
                        className="img-fluid mb-2" /> 
                      <p className="fw-semibold fs-2 lh-1 mb-0">175</p> 
                      <p className="fw-semibold fs-15 lh-1 mb-0">{t("pro_add_del_rent")}</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Data;
