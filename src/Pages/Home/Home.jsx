import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import { useTranslation } from 'react-i18next';

import "../Home/Home.css";
import group from "../../assets/images/group-2.png";
import indication from "../../assets/images/Indication-Arrow.png";
import Datacard from "../../Componant/Homedatacard/Datacard/Datacard";
import Homechart from "../../Componant/Homedatacard/Homechart/Homechart";
import i18n from "i18next";
import { motion } from "framer-motion";
import HomeTable from "../Home/HomeTable";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const fontSize = i18n.language === "he" ? "15px" : "10px";

  const dataList = [
    { amount: "₪10,000", text: "home_accro_in1", icon: indication },
    { amount: "₪15,000", text: "home_accro_in2", icon: indication },
    { amount: "₪20,000", text: "home_accro_in3", icon: indication },
    { amount: "₪8,000", text: "home_accro_in4", icon: indication },
    { amount: "₪12,500", text: "home_accro_in5", icon: indication },
    { amount: "₪18,000", text: "home_accro_in6", icon: indication },
  ];

  return (
    <>
          <Col className="py-2">
            <p className="py-1 my-4 text-center container-fluid screen-1  border-bottom">
                {t("home_title")}
            </p>
            <div className="overflow-auto custom-scrollbar" style={{ maxHeight: "594px" }}>
            <Row className="my-2 align-items-center d-flex px-md-0 px-2 ">
              <Col xs={12} md={6} className="mb-3 pe-2">
                <div className="rounded-1 p-4  box1_color">
                  <div className="pb-4">
                    <p className="screen-2 text-end">{t("home_block1_title")}</p>
                  </div>
                  <Row className="d-flex justify-content-center">
                    <Col
                      xs={12}
                      sm={12}
                      md={4}
                      className="px-1 py-2 py-md-0 px-sm-2"
                    >
                      <button className="custom_btn px-3 w-100 d-flex h-auto justify-content-between shadow-lg align-items-center" style={{fontSize: fontSize }}>
                        <span className="text-start pe-2">
                        {t("home1_btn1_title")}
                        </span>
                        <div className="ps-2 justify-content-end">
                          <img src={group} alt="group" className="w-full h-auto" />
                        </div>
                      </button>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={4}
                      className="px-1 py-2 py-md-0 px-sm-2"
                    >
                      <button className="custom_btn px-3 py-2 w-100  d-flex h-auto justify-content-between shadow-lg align-items-center" style={{fontSize: fontSize }}>
                        <span className="text-start pe-2">
                          {t("home1_btn2_title")}
                        </span>
                        <div className="ps-2 justify-content-end">
                          <img src={group} alt="group" />
                        </div>
                      </button>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={4}
                      className="px-1 py-2 py-md-0 px-sm-2"
                    >
                      <button className="custom_btn px-3 w-100 d-flex h-auto justify-content-between shadow-lg align-items-center" style={{fontSize: fontSize }}>
                        <span className="text-start pe-2">
                          {t("home1_btn3_title")}
                        </span>
                        <div className="ps-2 justify-content-end">
                          <img src={group} alt="group" />
                        </div>
                      </button>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xs={12} md={6} className="mb-3 ps-2">
                <div className="rounded-1 p-4 box1_color">
                  <div className="pb-4">
                    <p className="screen-2 text-end">{t("home_block2_title")}</p>
                  </div>
                  <Row className="d-flex justify-content-center">
                    <Col xs={12} sm={12} md={4} className="px-1 py-2 py-md-0 ">
                      <div className="px-2 w-100 h-auto shadow-md-lg text-end bg-white">
                        <span className="screen-5" style={{fontSize: fontSize }}>{t("home2_btn1_title")}</span>
                        <div className="screen-4">10/50</div>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={4} className="px-1 py-2 py-md-0 ">
                      <div className="px-2 w-100 h-auto shadow-md-lg text-end bg-white">
                        <span className="screen-5" style={{fontSize: fontSize }}>{t("home2_btn2_title")}</span>
                        <div className="screen-4">17.07.2023</div>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={4} className="px-1 py-2 py-md-0">
                      <div className="px-2 w-100 h-auto shadow-md-lg text-end bg-white">
                        <span className="screen-5" style={{fontSize: fontSize }}>{t("home2_btn3_title")}</span>
                        <div className="screen-4">STARTER</div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row className=" px-md-3 px-2 my-2  box1_color">
              <Col className="col-12 col-md-12">
                <div className="d-flex justify-content-between py-3">
                  <button
                    className=" hr_btn"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                     {t("home_accro_l_btn")}
                  </button>
                  <span className="text-start pe-2 screen-2 pt-1">{t("home_accro_r_btn")}</span>
                </div>

                {isOpen && ( 
                  <div>
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                    >
                        <Row>

                        </Row>
                        <Row className="py-3">
                            {dataList.map((item, index) => (
                                <Datacard
                                key={index}
                                amount={t(item.amount)}
                                text={t(item.text)}
                                icon={item.icon}
                                />
                            ))}
                        </Row>
                        <div className="px-md-3">
                        <p className="screen-2 pb-3 text-end">{t("home_accro_gra_title")}</p>
                        <Homechart />
                        </div>
                    </motion.div>
                  </div>
                )}
              </Col>
            </Row>
            <Row>
              <Col className="col-12 col-md-12 d-flex px-md-3 align-items-center box1_color">
                <div className="my-3 px-1 ">
                  <HomeTable />
                </div>
              </Col>
            </Row>
            </div>
          </Col>
    </>
  );
};

export default Home;
