import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import search from "../../assets/images/search.svg";
import key_vertical from "../../assets/images/key_vertical.svg";  
import add_reaction from "../../assets/images/add_reaction.svg";
import add_home from "../../assets/images/add_home.svg";
import { Modal, InputGroup, Form } from "react-bootstrap";
import Next from "../../assets/images/Next.jpg";
import sms from "../../assets/images/sms.svg";
import email from "../../assets/images/email.svg";
import group from "../../assets/images/Group 2538.png";
import successIcon from "../../assets/images/success_icon.svg";
import Accordion from "react-bootstrap/Accordion";
import whatsapp from "../../assets/images/wa, whatsapp, message, communication, chat.svg";
import gyiphy from "../../assets/images/giphy 1.png";
import close from '../../assets/images/close_small.png';
const Property_owner = () => {
  const { t } = useTranslation();
  const [isView, setIsView] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [propertySection, setPropertySection] = useState(false);
  
  const handlePropertysection = () => {
      setPropertySection(true);
    }
  
  const handlecloseProperty = () => {
      setPropertySection(false);
    }
  
  const handleSearchClick = () => {
      setShowDetails(true); // Show the details when the search button is clicked
    };
  
  const handleSearchClose = () => {
      setShowDetails(false);
    }
  const handleView = () => {
    setIsView(true);
  };
  const handleSentSuccess = () => {
    setShowSuccess(false);
    setSentSuccess(true);
  };
  const handleIsShow = () => {
    setIsView(false);
    setShowSuccess(true);
  };

  return (
    <>
      <div className="bg-white shadow-lg d-none d-md-block">
        <p className="w-100 text-center screen-1 border-bottom py-3 mb-4 d-none d-md-block">
          {t("Property_own_title")}
        </p>
        <div
          className="row custom-scrollbar overflow-y-auto overflow-x-hidden px-4"
          style={{ maxHeight: "594px" }}
        >
          <div className="col-12">
          <div className="card p-3 border  rounded-3 mb-4">
            <div className="form_group mb-2 mb-xl-0 d-flex justify-content-between">
              <h5 className=" text-embed-500 fw-semibold fs-5 lh-1 mb-4 ">{t("age_details")}</h5>
              <button
                type="button"
                className="border text-xl mt-2 d-flex align-items-center justify-content-center shadow-lg rounded-pill py-1 px-4 search-button"
              >
                <div className="flex items-center justify-center">
                  <img className="me-1" src={add_reaction} alt="Add Client" />
                  {"add_cust"}{" "}
                </div>
              </button>
            </div>
            <div className="mb-3">
              <label for="searchInput" className="form-label fw-semibold">
                {t("age_details_title")}
              </label>
              <div className="border border-[#D6D6D6] rounded w-75 px-3">
                <div className="d-flex">
                  <input
                   onChange={handleSearchClick}
                    type="text"
                    className="form-control border-0 p-0"
                    placeholder={t("age_title_placeholder")}
                  />
                  <button className="btn" type="button">
                    <img src={search} alt="Search" />
                  </button>
                </div>
              </div>
            </div>
            {showDetails && (
              <>
                <div className="border rounded w-full px-3">
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-col">
                      <label>{t('broker_name')}</label>
                      <input
                        type="text"
                        className="form-control border-0 p-0"
                        placeholder="Shirims@gmail.com | 054-4692650"
                        values=""
                      />
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                      <button className="btn " type="button" onClick={handleSearchClose}>
                        <img src={close} alt="Search" />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          </div>
          <div className="col-12">
          <div className="card p-3 border  rounded-3 mb-4">
            <div className="form_group mb-2 mb-xl-0 d-flex justify-content-between">
              <h5 className="  text-embed-500 fw-semibold fs-5 lh-1 mb-4 ">{t("age_pro_section")}</h5>
              <button
                type="button"
                className="border text-xl mt-2 d-flex align-items-center justify-content-center shadow-lg rounded-pill py-1 px-4 search-button"
              >
                <div className="flex items-center justify-center">
                  <img className="me-1" src={add_home} alt="Add Client" />
                  {"add_cust"}{" "}
                </div>
              </button>
            </div>
            <div className="mb-3">
              <label for="searchInput" className="form-label fw-semibold">
                {t("age_pro_section_title")}
              </label>
              <div className="border border-[#D6D6D6] rounded w-75 px-3">
                <div className="d-flex">
                  <input
                    onChange={handlePropertysection}
                    type="text"
                    className="form-control border-0 p-0"
                    placeholder={t("age_pro_asset_address")}
                  />
                  <button className="btn" type="button">
                    <img src={search} alt="Search" />
                  </button>
                </div>
              </div>
            </div>
            {propertySection && (
              <>
                <div className="border rounded w-full px-3">
                  <div className="d-flex flex-row justify-content-between">
                    
                    <div className="d-flex flex-row align-item-center gap-2">
                    <div className="my-2"><img src={key_vertical}  alt="key vertical"/></div>
                    <div>
                    <label>{t('property_br_address')}</label>
                      <input
                        type="text"
                        className="form-control border-0 p-0"
                        placeholder="שכירות : 5000 לחודש"
                        values=""
                      />
                    </div>
                      
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                      <button className="btn " type="button" onClick={handlecloseProperty}>
                        <img src={close} alt="Search" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 justify-content-start">
                  <div className=" mt-4"> 
                  <InputGroup className="w-auto">
                      <Form.Select className="text-center">
                        <option>%</option>
                        <option>₪</option>
                      </Form.Select>
                  </InputGroup>
                  </div>
                  
                  <div className="mx-0">
                    <span className=" fw-semibold">{t("br_commission")}</span>
                    <Form.Control type="number" className="t w-100" defaultValue="30" />
                  </div>
                  <div>
                    <span className= "fw-semibold">{t("rental_months")}</span>
                    <Form.Control type="number" className=" w-100" defaultValue="12" />
                  </div>
                </div>
              </>
            )}
          </div>
          </div>
          <div className="col-12">
            <div className="card p-3 border  rounded-3 mb-4">
              <h5 className=" text-embed-500 fw-semibold fs-5 lh-1 mb-4 ">{t("age_note")}</h5>
              <div className=" px-2 pb-2">
                <textarea
                  className="form-control"
                  placeholder={t("age_note_placeholder")}
                  rows="4"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex gap-3 pb-3 ">
              <button
                className="agent-button1  rounded-pill px-5 py-2 fw-bold shadow-sm text-white"
                onClick={handleView}
              >
                {t("age_btn_send")}
              </button>
              <button className=" agent-button2 rounded-pill px-4 py-2 fw-bold">
                {t("age_btn_send_without")}
              </button>
              <button className=" agent-button2 rounded-pill px-5 py-1 fw-bold">
                {t("age_btn_view")}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/** Mobile Screen avaible */}
      <div className="bg-transperant  d-block d-md-none">
        <div className="row custom-scrollbar overflow-y-auto overflow-x-hidden"  style={{ maxHeight: "594px" }}>
         <div className="col-12">
            <div className="card  p-3 border  rounded-3 overflow-hidden  rounded-3 bg-light mb-4">
              <div className="form_group mb-2 mb-xl-0 d-flex justify-content-between">
                <h5 className=" text-embed-500 fs-5 fw-semibold lh-1 mb-4">
                  {t("age_details")}
                </h5>
                <button
                  type="button"
                  className="agent-btn-responsive2 w-50 bg-transperant h-50 py-2  d-flex align-items-center justify-content-center  rounded-pill"
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <img className="me-1" src={add_reaction} alt="Add Client" />
                    <span className="fs-17 fw-semibold lh-1">
                      {"add_cust"}{" "}
                    </span>
                  </div>
                </button>
              </div>
              <div className="mb-3">
                <label for="searchInput" className="form-label fw-semibold">
                  {t("age_details_title")}
                </label>
                <div className="border border-[#D6D6D6] bg-white rounded w-full px-3">
                  <div className="d-flex">
                    <input
                      type="text"
                      onChange={handleSearchClick}
                      className="form-control border-0 p-0"
                      placeholder={t("age_title_placeholder")}
                    />
                    <button className="btn" type="button">
                      <img src={search} alt="Search" />
                    </button>
                  </div>
                </div>
              </div>
              {showDetails && (
              <>
                <div className="border rounded w-full px-3">
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-col">
                      <label>{t('broker_name')}</label>
                      <input
                        type="text"
                        className="form-control border-0 p-0"
                        placeholder="Shirims@gmail.com | 054-4692650"
                        values=""
                      />
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                      <button className="btn " type="button" onClick={handleSearchClose}>
                        <img src={close} alt="Search" />
                      </button>
                    </div>
                  </div>
                </div>

              </>
            )}
            </div>
           
          </div>
          <div className="col-12">
            <div className="card p-3 border bg-light rounded-3 mb-4">
              <div className="form_group mb-2 mb-xl-0 d-flex justify-content-between">
                <h5 className="text-embed-500 fw-semibold fs-5 lh-1 mb-4">
                  {t("age_pro_section")}
                </h5>
                <button
                  type="button"
                  className="agent-btn-responsive2 w-50 bg-transperant h-50 py-2  d-flex align-items-center justify-content-center  rounded-pill "
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <img className="me-1" src={add_home} alt="Add Client" />
                    {"add_cust"}{" "}
                  </div>
                </button>
              </div>
              <div className="mb-3">
                <label for="searchInput" className="form-label fw-semibold">
                  {t("age_pro_section_title")}
                </label>
                <div className="border border-[#D6D6D6] bg-white rounded w-full px-3">
                  <div className="d-flex">
                    <input
                     onChange={handlePropertysection}
                      type="text"
                      className="form-control border-0 p-0"
                      placeholder={t("age_pro_asset_address")}
                    />
                    <button className="btn" type="button">
                      <img src={search} alt="Search" />
                    </button>
                  </div>
                </div>
              </div>
              {propertySection && (
              <>
                <div className="border rounded w-full px-3">
                  <div className="d-flex flex-row justify-content-between">
                    
                    <div className="d-flex flex-row align-item-center gap-2">
                    <div className="my-2"><img src={key_vertical}  alt="key vertical"/></div>
                    <div>
                    <label>{t('property_br_address')}</label>
                      <input
                        type="text"
                        className="form-control border-0 p-0"
                        placeholder="שכירות : 5000 לחודש"
                        values=""
                      />
                    </div>
                      
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                      <button className="btn " type="button" onClick={handlecloseProperty}>
                        <img src={close} alt="Search" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 justify-content-start">
                  <div className=" mt-4"> 
                  <InputGroup className="w-auto">
                      <Form.Select className="text-center">
                        <option>%</option>
                        <option>₪</option>
                      </Form.Select>
                  </InputGroup>
                  </div>
                  
                  <div className="mx-0">
                    <span className=" fw-semibold">{t("br_commission")}</span>
                    <Form.Control type="number" className="t w-100" value="30" />
                  </div>
                  <div>
                    <span className= "fw-semibold">{t("rental_months")}</span>
                    <Form.Control type="number" className=" w-100" value="12" />
                  </div>
                </div>
              </>
            )}
            </div>
          </div>
          <div className="col-12">
            <div className="card p-3 border bg-light rounded-3 mb-4">
              <h5 className=" text-embed-500 fw-semibold fs-5 lh-1  mb-4">{t("age_note")}</h5>
              <div className=" px-2 pb-2">
                <textarea
                  className="form-control"
                  placeholder={t("age_note_placeholder")}
                  rows="4"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex gap-2 pb-3 ">
              <button
                className="agent-btn-responsive1 text-white w-25 bg-transperant h-25 py-1 rounded-pill "
                onClick={handleView}
              >
                {t("age_btn_send")}
              </button>
              <button className=" agent-btn-responsive2 w-50 bg-transperant h-25 py-1 shadow rounded-pill">
                {t("age_btn_send_without")}
              </button>
              <button className="  agent-btn-responsive2 w-25 bg-transperant h-25 py-1 shadow rounded-pill">
                {t("age_btn_view")}
              </button>
            </div>
          </div>
        </div>
      </div>


      <Modal
        show={isView}
        onHide={() => {
          setIsView(false);
        }}
        centered
      >
        <Modal.Header closeButton className=" border-0">
          <img src={Next} alt="next btn" className="" />
        </Modal.Header>
        <Modal.Body className="p-4">
          <div className="text-center">
            <img
              src={successIcon}
              alt="Success"
              className="mx-auto w-20 h-20 mb-3"
            />
            <h4 className="text-embed-500 fs-3 font-semibold">
              {t("age_report_title")}
            </h4>
            <p className="fs-5 font-semibold">{t("age_report_question")}</p>
          </div>
          {/* Options Section */}
          <div className="options-container">
            <div className="option-item rounded-3 my-3">
              <Accordion defaultActiveKey={null} className="custom-accordion">
                <Accordion.Item eventKey="0 " className="custom-header">
                  <Accordion.Header className=" bg-success-subtle">
                    <div className="d-flex justify-content-between w-100">
                      <div className=" d-flex align-items-center">
                        <img src={whatsapp} alt="whatsapp" />
                        <span className="ps-2 text-start fs-5">
                          {t("age_send_whatsapp")}
                        </span>
                      </div>
                      <input
                        className="form-check-input border border-black bg-white"
                        type="checkbox"
                      />
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="bg-success-subtle">
                    <ul className="fw-bold ">
                      <li>{t("age_send_whatsapp_point_1")}</li>
                      <li>{t("age_send_whatsapp_point_2")}</li>
                      <li>{t("age_send_whatsapp_point_3")}</li>
                    </ul>
                    <p className="mt-3 fw-bold ">
                      {t("age_send_whatsapp_description")}
                    </p>
                    {/* Pricing Cards */}
                    <div className="row justify-content-center text-center mt-4">
                      <div className="col-md-3 ">
                        <div className="border rounded p-2 bg-white  shadow-sm">
                          <h3 className="text-embed-500 fs-2 fw-bold">150</h3>
                          <p className="mb-0 text-embed-500">
                            {t("age_send_whatsapp_message")}
                          </p>
                          <p className="text-embed-500">
                            {t("age_send_whatsapp_message_info")}
                          </p>
                        </div>
                      </div>

                      <div className="col-md-3 ">
                        <div className="border rounded shadow-sm p-1 bg-white">
                          <p className="mb-0 text-embed-500">
                            {t("age_send_whatsapp_cost")}
                          </p>
                          <h3 className="text-embed-500 fs-2 fw-bold">100</h3>
                          <p className="mb-0 text-embed-500">
                            {t("age_send_whatsapp_message")}
                          </p>
                          <p className=" text-embed-500">
                            {t("age_send_whatsapp_message_info2")}
                          </p>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="border rounded p-2 bg-white shadow-sm">
                          <h3 className="text-embed-500 fs-2 fw-bold">50</h3>
                          <p className="mb-0 text-embed-500">
                            {t("age_send_whatsapp_message")}
                          </p>
                          <p className="text-embed-500">
                            {t("age_send_whatsapp_message_info3")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="option-item rounded-3 my-3">
              <Accordion defaultActiveKey={null} className="custom-accordion ">
                <Accordion.Item eventKey="0" className="custom-header">
                  <Accordion.Header className=" bg-success-subtle">
                    <div className="d-flex justify-content-between w-100">
                      <div className=" d-flex align-items-center">
                        <img src={sms} alt="whatsapp" />
                        <span className=" ps-2 text-start fs-5">
                          {t("age_send_text_message")}
                        </span>
                      </div>
                      <input
                        className="form-check-input border border-black bg-white"
                        type="checkbox"
                      />
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="custom-body bg-success-subtle">
                    <ul className="list-unstyled">
                      <li>{t("age_send_text_message_point_1")}</li>
                      <li>{t("age_send_text_message_point_2")}</li>
                      <li>{t("age_send_text_message_point_3")}</li>
                    </ul>
                    <p className="mt-3">
                      {t("age_send_text_message_description")}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="option-item rounded-3 my-3">
              <Accordion defaultActiveKey={null} className="custom-accordion ">
                <Accordion.Item eventKey="0" className="custom-header">
                  <Accordion.Header className=" bg-success-subtle">
                    <div className="d-flex justify-content-between w-100">
                      <div className=" d-flex align-items-center">
                        <img src={email} alt="whatsapp" />
                        <span className="ps-2 text-start fs-5">
                          {t("age_send_message_email")}
                        </span>
                      </div>
                      <input
                        className="form-check-input border border-black bg-white"
                        type="checkbox"
                      />
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="custom-body bg-success-subtle">
                    <ul className="list-unstyled">
                      <li>{t("age_send_email_message_point_1")}</li>
                      <li>{t("age_send_email_message_point_2")}</li>
                      <li>{t("age_send_email_message_point_3")}</li>
                    </ul>
                    <p className="mt-3">
                      {t("age_send_email_message_description")}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="option-item rounded-3 my-3">
              <Accordion defaultActiveKey={null} className="custom-accordion ">
                <Accordion.Item eventKey="0" className=" custom-header">
                  <Accordion.Header className=" bg-success-subtle">
                    <div className="d-flex justify-content-between w-100">
                      <div className=" d-flex align-items-center">
                        <img src={group} alt="whatsapp" />
                        <span className="ps-2 text-start fs-5">
                          {t("age_send_message_whatsapp_share")}
                        </span>
                      </div>
                      <input
                        className="form-check-input border border-black bg-white"
                        type="checkbox"
                      />
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="bg-success-subtle">
                    <ul className="list-unstyled">
                      <li>{t("age_send_message_whatsapp_share_pont_1")}</li>
                      <li>{t("age_send_message_whatsapp_share_pont_2")}</li>
                      <li>{t("age_send_message_whatsapp_share_pont_3")}</li>
                    </ul>
                    <p className="mt-3">
                      {t("age_send_message_whatsapp_share_description")}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="text-center mt-4 d-flex flex-col">
            <button
              className="agent-button1 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm text-white"
              onClick={handleIsShow}
            >
              {t("age_btn_send")}
            </button>
            <button className="btn btn-link text-muted mt-2">
              {t("age_btn_link")}
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showSuccess} onHide={() => setShowSuccess(false)} centered>
        <div
          className="position-absolute top-0 start-50 translate-middle-x mt-5 z-2"
          style={{ pointerEvents: "none" }}
        >
          <img
            src={gyiphy}
            alt="gyiphy"
            className="img-fluid w-full object-fit-cover"
            style={{ marginTop: "-100px" }}
          />
        </div>
        <Modal.Header closeButton className="border-0" />
        <Modal.Body className="p-4 text-center position-relative z-3">
          <img
            src={successIcon}
            alt="Success"
            className="mx-auto mb-3"
            style={{ width: "80px", height: "80px" }}
          />
          <div>
            <p className="fs-3 text-success fw-semibold">
              {t("age_cust_review")}
            </p>
            <h4 className="fs-3 text-success fw-semibold">
              {t("age_cust_status")}
            </h4>
          </div>
        </Modal.Body>

        <Modal.Footer className="justify-content-center">
          <button
            className="btn btn-outline-success rounded-pill px-4 py-2 fw-bold shadow-sm"
            onClick={handleSentSuccess}
          >
            {t("age_cust_reconciliation_report")}
          </button>
          <button
            className="btn btn-success rounded-pill px-4 py-2 fw-bold shadow-sm"
            onClick={() => setShowSuccess(false)}
          >
            {t("age_cust_agreement")}
          </button>
        </Modal.Footer>
      </Modal>
      <Modal show={sentSuccess} onHide={() => setSentSuccess(false)} centered>
        <div className="position-absolute top-0 start-50  translate-middle-x mt-5 z-2">
          <img
            src={gyiphy}
            alt="gyiphy"
            className="img-fluid object-fit-cover w-full h-auto"
            style={{ marginTop: "-100px" }}
          />
        </div>
        <Modal.Header closeButton className="border-0 position-relative z-2" />
        <Modal.Body className="p-4 position-relative z-2">
          <div className="text-center">
            <div className="d-flex justify-content-center">
              <img
                src={successIcon}
                alt="Success"
                className="img-fluid mb-3"
                style={{ width: "80px", height: "80px" }}
              />
            </div>
            <h4 className="fs-3 text-success fw-semibold">
              {t("age_cust_agreement_status")}
            </h4>
            <p className="fs-5 text-secondary fw-semibold">
              {t("age_cust_status")}
            </p>
          </div>
          <div className="text-center mt-4">
            <button
              className="btn btn-success rounded-pill px-4 py-2 fw-bold shadow-sm"
              onClick={() => setSentSuccess(false)}
            >
              {t("age_btn_description")}
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Property_owner;
