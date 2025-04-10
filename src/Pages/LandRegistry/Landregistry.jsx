import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import search from "../../assets/images/search.png";
import { useTranslation } from "react-i18next";
import calendarMonth from "../../assets/images/mobile_calendar.png";
import Landregistrytable from "../LandRegistry/Landregistrytable";

const Landregistry = () => {
  const { t } = useTranslation();
  return (
    <>
      <Col className="bg-white shadow-lg rounded-3 my-3">
        <p className="py-3 mb-4 screen-1 text-center border-bottom d-none d-md-block">
          נכסים הרשומים בספר המקרקעין
        </p>
        <div
          className="custom-scrollbar overflow-y-auto overflow-x-hidden px-3 mt-4"
          style={{ maxHeight: "594px" }}
        >
          <div className=" d-flex justify-content-start my-2">
            <div className="border rounded-1 input-group responsive-width ">
              <input
                type="text"
                className="form-control border-0 "
                id="searchInput"
                placeholder={t("invoice_placeholder")}
              />
              <span className="input-group-text bg-transparent  border-0">
                <img src={search} alt="search" />
              </span>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-12 col-md-6 d-flex three button my-2 my-md-0 gap-2 align-items-center justify-content-center justify-content-md-start gap-md-3">
              <button className="agent-btn-responsive2 px-3 py-2 rounded-pill ">
                {t("data_btn_3")}
              </button>
              <button className="agent-btn-responsive2 px-4 py-2 rounded-pill">
                {t("data_btn_2")}
              </button>
              <button className="agent-btn-responsive2 px-3  py-2 rounded-pill">
                {t("data_btn_1")}
              </button>
            </div>
          </div>
          <div className="w-100 my-2">
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
                  <button className="text-center rounded-pill agent-btn-responsive1 text-white px-4  py-2">
                    {t("cust_search")}
                  </button>
                </div>
              </div>
            </Col>
          </div>
          <Landregistrytable />
        </div>
      </Col>
    </>
  );
};

export default Landregistry;
