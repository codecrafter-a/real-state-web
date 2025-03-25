import React from "react";
import { useTranslation } from "react-i18next";
import { Form, Row, Col, Button } from "react-bootstrap";
import CustomInput from "../../../Componant/Common/Input/Custominput";
import key_vertical from "../../../assets/images/key_vertical.svg";
import garage_door from "../../../assets/images/garage_door.svg";
const Propertydetails = ({ setActiveTab }) => {
  const { t } = useTranslation();
  const service = [
    { list: t("pro_add_feture_1") },
    { list: t("pro_add_feture_2") },
    { list: t("pro_add_feture_3") },
    { list: t("pro_add_feture_4") },
    { list: t("pro_add_feture_5") },
    { list: t("pro_add_feture_6") },
    { list: t("pro_add_feture_7") },
    { list: t("pro_add_feture_8") },
    { list: t("pro_add_feture_9") },
    { list: t("pro_add_feture_10") },
  ];

  return (
    <div
      className="px-4 custom-scrollbar overflow-y-scroll overflow-x-hidden"
      style={{ maxHeight: "550px" }}
    >
      <Form>
        <h4 className="text-teal fs-5 fw-semibold lh-1 my-3 py-3 ">
          {t("pro_tab_title")}
        </h4>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Label className="fs-15 lh-1  fw-semibold">
              {t("pro_add_det_type")}
            </Form.Label>
            <CustomInput className="w-100 h-auto rounded" type="text" />
          </Col>
          <Col md={4}>
            <Form.Label className="fs-15 lh-1  fw-semibold">
              {t("pro_add_del_contidation")}
            </Form.Label>
            <CustomInput className="w-100 h-auto rounded" type="text" />
          </Col>
          <Col md={4}>
            <Form.Label className="fs-15 lh-1  fw-semibold">
              {t("pro_add_del_name")}
            </Form.Label>
            <CustomInput className="w-100 h-auto rounded" type="text" />
          </Col>
        </Row>

        <Row>
          <Col xs={6} md={4}>
            <Form.Label className="fs-15 lh-1  fw-semibold">
              {t("pro_add_del_floor")}
            </Form.Label>
            <CustomInput className="w-100 h-auto rounded" type="text" />
          </Col>
          <Col xs={6} md={4}>
            <Form.Label className="fs-15 lh-1  fw-semibold">
              {t("pro_add_del_area")}
            </Form.Label>
            <CustomInput className="w-100 h-auto rounded" type="text" />
          </Col>
        </Row>
      </Form>
      <Row className="mt-4">
        <Col xs={6} sm={4} md={3} lg={2} className="my-3 d-flex flex-column align-items-center">
          <div className="position-relative">
            <Form.Check type="checkbox" id="check1" className="d-none" />

            <Form.Label
              htmlFor="check1"
              className="d-flex flex-column align-items-center justify-content-center border  rounded-2 cursor-pointer p-2"
              style={{ width: "90px", height: "90px" }}
            >
              <span className="mb-2">
                <img src={key_vertical} alt="icon" className="img-fluid" />
              </span>
              <span className="fs-15 lh-1 fw-semibold text-teal">
                {t("pro_add_del_rent")}
              </span>
            </Form.Label>
          </div>

          <div className="mt-2 w-100 ">
            <Form.Label className="fs-15 lh-1 text-center fw-semibold">
              {t("pro_add_del_req_rent_price")}
            </Form.Label>
            <Form.Control type="text" className="form-control rounded" />
          </div>
        </Col>

        <Col xs={6} sm={4} md={3} lg={2} className="my-3 d-flex flex-column align-items-center">
          <div className="position-relative">
            <Form.Check type="checkbox" id="check2" className="d-none" />

            <Form.Label
              htmlFor="check2"
              className="d-flex flex-column align-items-center justify-content-center border rounded-3 cursor-pointer p-3 text-center"
              style={{ width: "90px", height: "90px" }}
            >
              <span className="mb-2">
                <img src={garage_door} alt="icon" className="img-fluid" />
              </span>
              <span className="fs-15 lh-1 fw-semibold text-teal">
                {t("pro_add_del_buy")}
              </span>
            </Form.Label>
          </div>
          <div className="mt-2 w-100 text-center">
            <Form.Label className="fs-15 lh-1 fw-semibold">
              {t("pro_add_del_req_buy_price")}
            </Form.Label>
            <Form.Control type="text" className="form-control rounded" />
          </div>
        </Col>
      </Row>
      <h4 className="text-teal d-none d-md-block fs-5 fw-semibold lh-1 my-3 py-3">
        {t("pro_add_del_select_add_future")}
      </h4>
      <ul className="list-unstyled">
        {service.map((item, index) => (
          <li
            key={index}
            className="rounded-pill d-inline-block me-2 mb-2 fs-15 bg-secondary bg-opacity-10"
          >
            <span className="font-normal py-1 px-3 text-center ">
              {item.list}
            </span>
          </li>
        ))}
      </ul>
      <Form.Group className="mt-3">
        <Form.Label className="fs-15 lh-1  fw-semibold">
          {t("pro_add_desctiption")}
        </Form.Label>
        <Form.Control
          as="textarea"
          placeholder={t("pro_add_des_placeholder")}
          rows={3}
        />
      </Form.Group>
      <div className="d-flex justify-content-center justify-content-md-between mt-4 pb-3">
        <Button
          onClick={() => setActiveTab(1)}
          className="agent-btn-responsive2 responsive-btn d-none d-md-block rounded-pill shadow-lg"
        >
          {t("Pro_add_pev_btn")}
        </Button>
        <Button
          onClick={() => setActiveTab(3)}
          className="responsive-btn agent-btn-responsive1  rounded-pill shadow-lg"
        >
          {t("pro_add_next_btn")}
        </Button>
      </div>
    </div>
  );
};

export default Propertydetails;
