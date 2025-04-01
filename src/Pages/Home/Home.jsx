import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

import { useTranslation } from 'react-i18next';

import "../Home/Home.css";
import group from "../../assets/images/group-2.png";
import Datacard from "../../Componant/Homedatacard/Datacard/Datacard";
import Homechart from "../../Componant/Homedatacard/Homechart/Homechart";
import i18n from "i18next";
import { motion } from "framer-motion";
import HomeTable from "../Home/HomeTable";
import { useHomeService } from "../../Services/Home";
import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const fontSize = i18n.language === "he" ? "15px" : "14px";

 const [homedatapage, sethomedatapage] = useState([]);
    const { getHomes } = useHomeService();
  
      useEffect(() => {
          const Homedata = getHomes();
          sethomedatapage(Homedata);
      }, []);
  return (
    <>
      <Col className="p-0 custom-col rounded-3">
        <p className="py-1 my-4 text-center screen-1 border-bottom pb-3 d-none d-md-block"> {t("home_title")} </p>
        <div className={`custom-scrollbar overflow-y-auto overflow-x-hidden px-3 scroll-height`}>
          <Row className=" align-items-center justify-content-between d-flex overflow-hidden">
            <Col xs={12} xl={6} className=" my-2">
              <div className="rounded-1 p-md-4 p-3 shadow my-3 box1_color">
                <div>
                  <p className="screen-2 mb-0">{t("home_block2_title")}</p>
                </div>
                <div className="d-flex align-items-center gap-md-5 gap-3">
                  <div>
                    <div className="py-3 w-100 h-auto shadow-md-lg">
                      <span className="table-head home-card-title">{t("home2_btn3_title")}</span>
                      <div className="fw-semibold home-card-subtitle">STARTER</div>
                    </div>
                  </div>

                  <div>
                    <div className="py-3 w-100 h-auto shadow-md-lg">
                      <span className="table-head home-card-title">{t("home2_btn2_title")}</span>
                      <div className="fw-semibold home-card-subtitle">17.07.2023</div>
                    </div>
                  </div>
                  <div>
                    <div className="py-3 w-100 h-auto shadow-md-lg">
                      <span className="table-head home-card-title">{t("home2_btn1_title")}</span>
                      <div className="fw-semibold home-card-subtitle">10/50</div>
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
                  <Col xs={12} sm={12} md={4} className="py-2 py-md-0 px-sm-2">
                    <button className="custom_btn py-3 px-2 w-100 d-flex h-auto gap-2 align-items-center bg-white" style={{ fontSize: fontSize }}>
                      <div className="justify-content-end">
                        <img src={group} alt="group" width={27} height={27}/>
                      </div>
                      <span>
                        {t("home1_btn3_title")}
                      </span>
                    </button>
                  </Col>
                  <Col xs={12} sm={12} md={4} className="py-2 py-md-0 px-sm-2">
                    <button className="custom_btn py-3 px-2 w-100 d-flex h-auto gap-2 align-items-center bg-white" style={{ fontSize: fontSize }}>
                      <div className="justify-content-end">
                        <img src={group} alt="group" width={27} height={27}/>
                      </div>
                      <span>
                        {t("home1_btn2_title")}
                      </span>
                    </button>
                  </Col>
                  <Col xs={12} sm={12} md={4} className="py-2 py-md-0 px-sm-2">
                    <button className="custom_btn py-3 px-2 w-100 d-flex h-auto gap-2 align-items-center bg-white" style={{ fontSize: fontSize }}>
                      <div className="justify-content-end">
                        <img src={group} alt="group" width={27} height={27}/>
                      </div>
                      <span>
                        {t("home1_btn1_title")}
                      </span>
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="px-2 mt-3">
            <Col className="col-12 box1_color mb-4">
              <div className="d-flex justify-content-between py-3">
                <span className="text-start pe-2 screen-2 pt-1">{t("home_accro_title")}</span>
                <button
                  type="button"
                  className="hr_btn rounded-pill fw-semibold px-sm-5 px-3 py-2"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {t("home_accro_btn")}
                </button>
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
                      <p className="screen-2 pb-3 text-end">{t("home_accro_gra_title")}</p>
                      <Homechart />
                    </div>
                  </motion.div>
                </div>
              )}
            </Col>
          </Row>
          <Row className="px-2">
            <Col className="col-12 box1_color">
              <div className="d-flex justify-content-between py-3 align-items-center">
                <span className="text-start screen-2">{t("home_accro_r_btn")}</span>
                <button
                  className=" hr_btn rounded-pill fw-semibold px-sm-5 px-3 py-2"
                  onClick={() => navigate(`/${lang}/agreements`)}
                >
                  {t("home_accro_l_btn")}
                </button>
              </div>
            </Col>
            <Col className="col-12 col-md-12 box1_color">
              <div className="my-3"><HomeTable /></div>
            </Col>
          </Row>
        </div>
      </Col>
    </>
  );
};

export default Home;
