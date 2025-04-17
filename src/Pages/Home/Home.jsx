import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../Home/Home.css";
import userkey from "../../assets/images/user-key.png";
import usercontact from "../../assets/images/user-contect.png";
import userhouse from "../../assets/images/user-house.png";
import Datacard from "../../Componant/Homedatacard/Datacard/Datacard";
import Homechart from "../../Componant/Homedatacard/Homechart/Homechart";
import i18n from "i18next";
import { motion } from "framer-motion";
import HomeTable from "../Home/HomeTable";
import { useHomeService } from "../../Services/Home";
import { useNavigate, useParams } from "react-router-dom";
import CommonPieChart from "../../Componant/Common/PieChart/PieChart";
import StackedBarChart from "../../Componant/Common/BarChart/BarChart";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const fontSize = i18n.language === "he" ? "15px" : "14px";

  const [homedatapage, sethomedatapage] = useState([]);
  const [userdata, setUserdata] = useState([]);
  const [agrreedata, setAgreedata] = useState([]);
  const [agreecolor, setAgreecolor] = useState([]);
    const { getHomes, getUserData, getAgreementData, getAgreementColors } =
    useHomeService();

  useEffect(() => {
    const Homedata = getHomes();
    sethomedatapage(Homedata);
    const Userdata = getUserData();
    setUserdata(Userdata);
    const Agreedata = getAgreementData();
    setAgreedata(Agreedata);
    const AgreeColor = getAgreementColors();
    setAgreecolor(AgreeColor);
  }, []);

  const barChartdata = [
    {
      name: t("Haim"),
      value: 37000,
      green: 15000,
      gray: 12000,
      red: 7000,
      orange: 3000,
    },
    {
      name: t("Shiri"),
      value: 37000,
      green: 15000,
      gray: 12000,
      red: 7000,
      orange: 3000,
    },
    {
      name: t("Liran"),
      value: 36000,
      green: 14000,
      gray: 11000,
      red: 7000,
      orange: 4000,
    },
    {
      name: t("Israel"),
      value: 35000,
      green: 13000,
      gray: 11000,
      red: 7000,
      orange: 4000,
    },
    {
      name: t("Ori"),
      value: 32000,
      green: 12000,
      gray: 10000,
      red: 6000,
      orange: 4000,
    },
    {
      name: t("Rami"),
      value: 15000,
      green: 6000,
      gray: 5000,
      red: 3000,
      orange: 2000,
    },
    {
      name: t("Moshe"),
      value: 15000,
      green: 6000,
      gray: 5000,
      red: 3000,
      orange: 2000,
    },
  ];

  return (
    <>
      <Col className="p-0 custom-col rounded-3">
        <p className="py-1 my-4 text-center screen-1 border-bottom pb-3 d-none d-md-block">
          {" "}
          {t("home_title")}{" "}
        </p>
        <div className="px-3">
          <div
            className={`custom-scrollbar overflow-y-auto overflow-x-hidden px-3 scroll-height`}
          >
            <Row className=" align-items-center justify-content-between d-flex overflow-hidden">
              <Col xs={12} lg={6} className=" my-2">
                <div className="rounded-1 p-md-4 p-3 shadow my-3 box1_color">
                    <div className="d-none d-md-block"> <p className="screen-2 mb-0">{t("home_block2_title")}</p></div>

                    <div className="d-flex d-md-none justify-content-between align-items-center">
                      <div>
                        <p className="screen-2 mb-0">{t("cust_name_1")}</p>
                        <span className="fs-15 fw-bold lh-1 text-teal">
                          {t("personalArea.role")}
                        </span>
                      </div>
                      <button className="agent-btn-responsive1 text-white px-3 w-50 fw-semibold py-2 rounded-pill">
                        {t("personalArea.upgradeSubscription")}
                      </button>
                    </div>
                  <div className="d-flex align-items-center gap-md-5 gap-3">
                    <div>
                      <div className="py-3 w-100 h-auto shadow-md-lg">
                        <span className="table-head home-card-title">
                          {t("home2_btn3_title")}
                        </span>
                        <div className="fw-semibold home-card-subtitle">
                          STARTER
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="py-2 w-100 h-auto shadow-md-lg">
                        <span className="table-head home-card-title">
                          {t("home2_btn2_title")}
                        </span>
                        <div className="fw-semibold home-card-subtitle">
                          17.07.2023
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="py-2 w-100 h-auto shadow-md-lg">
                        <span className="text-nowrap ls-minus table-head home-card-title">
                          {t("home2_btn1_title")}
                        </span>
                        <div className="fw-semibold home-card-subtitle">
                          10/50
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} xl={6} className="d-none d-md-block  my-3">
                <div className="rounded-1 p-4 shadow my-3 box1_color">
                  <div>
                    <p className="screen-2">{t("home_block1_title")}</p>
                  </div>
                  <Row className="d-flex justify-content-center">
                    <Col
                      xs={12}
                      sm={12}
                      md={4}
                      className="py-2 py-md-0 px-sm-2"
                    >
                      <div
                        className="agent-button2 rounded-2 p-2 gap-2 text-center py-3 d-flex fs-14 lh-1  fw-semibold  justify-content-center  align-items-center cursor-pointer"
                        onClick={() => navigate(`/${lang}/broker`)}
                        style={{ fontSize: fontSize }}
                      >
                        <img src={userkey} alt="group" />
                        <span>{t("home1_btn3_title")}</span>
                      </div>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={4}
                      className="py-2 py-md-0 px-sm-2"
                    >
                      <div
                        className="agent-button2 rounded-2 p-2 gap-2 py-3 d-flex fs-14 lh-1 text-center justify-content-center  fw-semibold  align-items-center cursor-pointer"
                        onClick={() => navigate(`/${lang}/property_owner`)}
                        style={{ fontSize: fontSize }}
                      >
                        <img src={userhouse} alt="group" />
                        <span>{t("home1_btn2_title")}</span>
                      </div>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={4}
                      className="py-2 py-md-0 px-sm-2"
                    >
                      <div
                        className="agent-button2 rounded-2 p-2 gap-1 py-3 text-center d-flex fs-14 lh-1  justify-content-center  fw-semibold  align-items-center cursor-pointer"
                        onClick={() => navigate(`/${lang}/broker_between`)}
                        style={{ fontSize: fontSize }}
                      >
                        <img src={usercontact} alt="group" />
                        <span>{t("home1_btn1_title")}</span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row className="px-2 mt-3">
              <Col className="col-12 box1_color mb-4">
                <div className="d-flex justify-content-between py-3">
                  <span className="text-start pe-2 screen-2 pt-1">
                    {t("home_accro_title")}
                  </span>
                  <button
                    type="button"
                    className="hr_btn rounded-pill fw-semibold px-sm-5 px-3 py-2"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {t("home_accro_btn")}
                  </button>
                </div>

                {isOpen ? 
                  <div>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={
                        isOpen
                          ? { height: "auto", opacity: 1 }
                          : { height: 0, opacity: 0 }
                      }
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className=" row">
                        <div className="col-12 col-md-6 col-lg-8">
                          <div className="border bg-white rounded-2 my-4 my-md-0 p-4">
                            <p className="fs-5 fw-bold lh-1 text-embed-500">
                              {t("data_main_title2")}
                            </p>
                            <div className="d-flex justify-content-center align-items-center mt-5 mx-md-auto">
                              <CommonPieChart
                                data={agrreedata}
                                colors={agreecolor}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                          <div className=" border bg-white rounded-2 p-4">
                            <h5 className="fs-5 fw-bold lh-1 text-embed-500">
                              {t("Additional_data")}
                            </h5>
                            <Row className="g-3">
                              {userdata.map((item, index) => (
                                <Col key={index} xs={12} sm={6}>
                                  <Card className="border-md border-0 bg-light rounded-3 shadow-sm cursor-pointer py-2 px-2">
                                    <div className="d-flex align-items-center justify-content-between gap-2">
                                      <div className="d-flex flex-column">
                                        <h5 className="mb-0 fw-bold">
                                          {item.title}
                                        </h5>
                                        <small className="text-muted">
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
                      <div className=" row mt-4">
                        <div className="col-12 col-md-6 col-lg-8">
                          <div className="border bg-white rounded-2 my-4 my-md-0 p-4">
                            <p className="fs-5 fw-bold lh-1 text-embed-500">
                              {t("data_main_title2")}
                            </p>
                            <div className="d-flex justify-content-center align-items-center mx-md-auto">
                              <StackedBarChart data={barChartdata} />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                          <div className=" border bg-white rounded-2 p-4 h-100">
                            <h5 className="fs-5 fw-bold lh-1 text-embed-500">
                              {t("Additional_data")}
                            </h5>
                            <Row className="g-3">
                              {userdata.map((item, index) => (
                                <Col key={index} xs={12} sm={6}>
                                  <Card className="border-md border-0 bg-light rounded-3 shadow-sm cursor-pointer py-2 px-2">
                                    <div className="d-flex align-items-center justify-content-between gap-2">
                                      <div className="d-flex flex-column">
                                        <h5 className="mb-0 fw-bold">
                                          {item.title}
                                        </h5>
                                        <small className="text-muted">
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

                      <Row className="py-3">
                        {homedatapage.map((item, index) => (
                          <Datacard
                            key={index}
                            amount={t(item.amount)}
                            text={t(item.text)}
                            icon={item.icon}
                          />
                        ))}
                      </Row>
                      <div className="px-md-3 pb-3">
                        <p className="screen-2 pb-3 text-end">
                          {t("home_accro_gra_title")}
                        </p>
                        <Homechart />
                      </div>
                    </motion.div>
                  </div>
                 : null}
              </Col>
            </Row>
            <Row className="px-2">
              <Col className="col-12 box1_color">
                <div className="d-flex justify-content-between py-3 align-items-center">
                  <span className="text-start screen-2">
                    {t("home_accro_r_btn")}
                  </span>
                  <button
                    className=" hr_btn rounded-pill fw-semibold px-sm-5 px-3 py-2"
                    onClick={() => navigate(`/${lang}/agreements`)}
                  >
                    {t("home_accro_l_btn")}
                  </button>
                </div>
              </Col>
              <Col className="col-12 col-md-12 box1_color">
                <div className="my-3">
                  <HomeTable />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Home;
