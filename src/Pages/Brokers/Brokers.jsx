import React, { useState } from "react";
import { useTranslation } from 'react-i18next'
import "../Brokers/Brokers.css";
import key_vertical from "../../assets/images/key_vertical.svg";
import garage_door from "../../assets/images/garage_door.svg";
import add_reaction from "../../assets/images/add_reaction.svg";
import add_home from "../../assets/images/add_home.svg";
import search from "../../assets/images/search.svg";
import CustomModal from "../../Componant/Common/Modal/CustomeModal";
import Next from "../../assets/images/Next.jpg";
import CustomInput from "../../Componant/Common/Input/Custominput";
import successIcon from '../../assets/images/success_icon.svg';
import Accordion from 'react-bootstrap/Accordion';
import whatsapp from '../../assets/images/wa, whatsapp, message, communication, chat.svg';
import { Modal} from "react-bootstrap";
import sms from '../../assets/images/sms.svg'
import email from '../../assets/images/email.svg';
import group from '../../assets/images/Group 2538.png';
import gyiphy from '../../assets/images/giphy 1.png'


const Brokers = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isView, setIsView] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleOpen = () => { setIsOpen(true); };
  const handleShow = () => { setIsShow(true); };
  const handleView = () => { setIsView(true) };
  const handleSentSuccess = () => {
    setShowSuccess(false);
    setSentSuccess(true);
  }
  const handleIsShow = () => {
    setIsView(false);
    setShowSuccess(true)
  };

  return (
    <>
      <div className="px-3">
          <p className="py-1 my-4 text-center screen-1 border-bottom">{t("age_main_title")}</p>
        <div className="custom-scrollbar overflow-y-auto overflow-x-hidden px-4" style={{ maxHeight: "594px" }}>
          <div className="card p-3 border rounded-3 mb-4">
            <h5 className=" text-embed-500 mb-4">
              {t("age_type_com_distribution")}
            </h5>
            <form>
              <div className="mb-3 form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="commission"
                  id="sharedPool"
                  defaultChecked
                />
                <label
                  className="form-check-label fw-bold"
                  htmlFor="sharedPool"
                >
                  {t("age_comm_type_1")}
                </label>
              </div>

              <div className="mb-3 form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="commission"
                  id="eachGetsOwn"
                />
                <label className="form-check-label" htmlFor="eachGetsOwn">
                  {t("age_comm_type_2")}
                </label>
              </div>

              <div className="mb-3 form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="commission"
                  id="buyerPaysSeller"
                />
                <label className="form-check-label" htmlFor="buyerPaysSeller">
                  {t("age_comm_type_3")}
                </label>
              </div>

              <div className="mb-3 form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="commission"
                  id="other"
                />
                <label className="form-check-label" htmlFor="other">
                  {t("age_comm_type_4")}
                </label>
              </div>
            </form>
          </div>
          <div className="card p-3 border  rounded-3 mb-4">
            <h5 className=" text-embed-500 mb-4">{t("age_tran_type")}</h5>
            <div className=" d-flex justify-content-start align-items-center gap-3">
              <div className="border-2 rounded-2 p-2 iconbox iconbox ">
                <img src={key_vertical} alt="" className="ms-3" />
                <span className="fs-5 fw-normal lh-base text-center px-1">
                  {t("age_tran_type_1")}
                </span>
              </div>
              <div className="border-2 rounded-2 p-2 iconbox iconbox">
                <img src={garage_door} alt="" className="ms-3" />
                <span className="fs-5 fw-normal lh-base text-center px-2">
                  {t("age_tran_type_2")}
                </span>
              </div>
            </div>
          </div>
          <div className="card p-3 border  rounded-3 mb-4">
            <div className="form_group mb-2 mb-xl-0 d-flex justify-content-between">
              <h5 className=" text-embed-500 mb-4">{t("age_details")}</h5>
              <button
                type="button"
                className="border text-xl mt-2 d-flex align-items-center justify-content-center shadow-lg rounded-pill py-1 px-4 search-button"
                onClick={handleOpen}
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
              <div className="input-group w-75">
                <input
                  type="text"
                  className="form-control border-end-0"
                  id="searchInput"
                  placeholder={t("age_title_placeholder")}
                />
                <span className="input-group-text text-success bg-transparent border-1 border-start-0">
                  <img src={search} alt="search" />
                </span>
              </div>
            </div>
          </div>
          <div className="card p-3 border  rounded-3 mb-4">
            <div className="form_group mb-2 mb-xl-0 d-flex justify-content-between">
              <h5 className=" text-embed-500 mb-4">{t("age_pro_section")}</h5>
              <button
                type="button"
                onClick={handleShow}
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
              <div className="input-group w-75">
                <input
                  type="text"
                  className="form-control border-end-0"
                  id="searchInput"
                  placeholder={t("age_pro_asset_address")}
                />
                <span className="input-group-text text-success bg-transparent border-1 border-start-0">
                  <img src={search} alt="search" />
                </span>
              </div>
            </div>
          </div>
          <div className="card p-3 border  rounded-3 mb-4">
            <h5 className=" text-embed-500 mb-4">{t("age_note")}</h5>
            <div className=" px-2 pb-2">
              <textarea
                className="form-control"
                placeholder={t("age_note_placeholder")}
                rows="4"
              ></textarea>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="form-check form-switch">
              <input
                className="form-check-input bg-embed-500 border-0"
                type="checkbox"
                id="toggleImages"
                defaultChecked
              />
              <label className="fs-5 fw-normal lh-1" htmlFor="">
                {t("age_photos")}
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input bg-embed-500"
                type="checkbox"
                id="toggleDocs"
              />
              <label className="fs-5 fw-normal lh-1" htmlFor="">
                {t("age_pro_attech")}
              </label>
            </div>
          </div>
          <div className="d-flex gap-3 pb-3 ">
            <button className="agent-button1  rounded-pill px-5 py-2 fw-bold shadow-sm text-white" onClick={handleView}>
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
      {isOpen && (
        <div className="w-100">
          <CustomModal
            show={isOpen}
            onClick={handleOpen}
            handleClose={() => setIsOpen(false)}
            header={<img src={Next} alt="next btn" />}
          >
            <h5 className=" text-embed-500 mb-2 fs-3 text-center">
              {t("age_quick_add_model_title")}
            </h5>
            <p className="fs-5S font-normal text-center">
              {t("age_quick_add_model_description")}
            </p>
            <div className="d-flex flex-row justify-center">
              <form className=" w-100">
                <div className="container-fluid">
                  <div className="mb-3 w-100">
                    <label
                      htmlFor="email"
                      className="form-label fw-bold text-start d-block mb-1"
                    >
                      {t("age_quick_add_email")}
                    </label>
                    <CustomInput
                      type="email"
                      className="form-control w-100"
                      id="email"
                      required
                    />
                  </div>

                  <div className="mb-3 w-100">
                    <label
                      htmlFor="phone"
                      className="form-label fw-bold text-start d-block mb-1"
                    >
                      {t("age_quick_add_phone")}
                    </label>
                    <CustomInput
                      type="tel"
                      className="form-control w-100"
                      id="phone"
                      required
                    />
                  </div>

                  <div className="mb-3 w-100">
                    <label
                      htmlFor="fullname"
                      className="form-label fw-bold text-start d-block mb-1"
                    >
                      {t("age_quick_add_name")}
                    </label>
                    <CustomInput
                      type="text"
                      className="form-control w-100"
                      id="fullname"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className=" my-4">
              <button className="agent-button1  rounded-pill px-5 py-2 fw-bold shadow-sm text-white" onClick={() => setIsOpen(false)}>
                {t("age_btn_add")}
              </button>
            </div>
          </CustomModal>
        </div>
      )}
      <div className="w-100">
          <CustomModal
            show={isShow}
            onClick={handleShow}
            handleClose={() => setIsShow(false)}
            header={<img src={Next} alt="next btn" width="32px" height='32px' />}
          >
            <h5 className=" text-embed-500 mb-2 fs-3 text-center">
              {t("age_quick_add_new_property")}
            </h5>
            <p className="fs-5S font-normal text-center">
              {t("age_quick_add_new_property_subtitle")}
            </p>
            <div className="d-flex flex-row justify-center">
              <form>
                <div className=" mb-3">
                  <label
                    for="email"
                    className="form-label fw-bold text-start d-block mb-1"
                  >
                    {t("age_new_property_city")}
                  </label>
                  <CustomInput
                    type={"email"}
                    className={"w-100"}
                    id={"email"}
                    required
                  />
                </div>

                <div className=" mb-3">
                  <label
                    for="phone"
                    className="form-label fw-bold text-start d-block mb-1"
                  >
                    {t("age_new_property_street")}
                  </label>
                  <CustomInput
                    type={"tel"}
                    className={"w-100"}
                    id={"phone"}
                    required
                  />
                </div>
                <div className="d-flex  justify-content-center">
                  <div className="row g-3 align-items-center">
                    <div className="col-md-6">
                      <label
                        for="apartmentNumber"
                        className="form-label text-start fw-bold  d-block"
                      >
                        {t("age_new_property_apartment_number")}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="apartmentNumber"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label
                        for="buildingNumber"
                        className="form-label fw-bold text-start d-block"
                      >
                        {t("age_new_property_building_number")}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="buildingNumber"
                        required
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className=" my-4">
              <button className="agent-button1  rounded-pill px-5 py-2 fw-bold shadow-sm text-white" onClick={() => setIsOpen(false)}>
                {t("age_btn_add")}
              </button>
            </div>
          </CustomModal>
      </div>
      <Modal show={isView} onHide={() => { setIsView(false) }} centered className="custom-modal">
        <Modal.Header closeButton className=" border-0">
          <img src={Next} alt="next btn" className="" />
        </Modal.Header>
        <Modal.Body className="p-4">
          <div className="text-center">
            <img src={successIcon} alt="Success" className="mx-auto w-20 h-20 mb-3" />
            <h4 className="text-embed-500 fs-3 font-semibold">{t("age_report_title")}</h4>
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
                        <span className="ps-2 text-start fs-5">{t("age_send_whatsapp")}</span>
                      </div>
                      <input className="form-check-input border border-black bg-white" type="checkbox" />
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
                          <p className="mb-0 text-embed-500">{t("age_send_whatsapp_message")}</p>
                          <p className="text-embed-500">{t("age_send_whatsapp_message_info")}</p>
                        </div>
                      </div>

                      <div className="col-md-3 ">
                        <div className="border rounded shadow-sm p-1 bg-white">
                          <p className="mb-0 text-embed-500">{t("age_send_whatsapp_cost")}</p>
                          <h3 className="text-embed-500 fs-2 fw-bold">100</h3>
                          <p className="mb-0 text-embed-500">{t("age_send_whatsapp_message")}</p>
                          <p className=" text-embed-500">{t("age_send_whatsapp_message_info2")}</p>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="border rounded p-2 bg-white shadow-sm">
                          <h3 className="text-embed-500 fs-2 fw-bold">50</h3>
                          <p className="mb-0 text-embed-500">{t("age_send_whatsapp_message")}</p>
                          <p className="text-embed-500">{t("age_send_whatsapp_message_info3")}</p>
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
                        <span className=" ps-2 text-start fs-5">{t("age_send_text_message")}</span>
                      </div>
                      <input className="form-check-input border border-black bg-white" type="checkbox" />
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
                        <span className="ps-2 text-start fs-5">{t("age_send_message_email")}</span>
                      </div>
                      <input className="form-check-input border border-black bg-white" type="checkbox" />
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
                        <span className="ps-2 text-start fs-5">{t("age_send_message_whatsapp_share")}</span>
                      </div>
                      <input className="form-check-input border border-black bg-white" type="checkbox" />
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
            <button className="agent-button1 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm text-white" onClick={handleIsShow}>
              {t("age_btn_send")}
            </button>
            <button className="btn btn-link text-muted mt-2">{t("age_btn_link")}</button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
          show={showSuccess}
          onHide={() => setShowSuccess(false)}
          centered
          className="custom-modal"
        >
      
          <div
            className="position-absolute top-0 start-50 translate-middle-x mt-5 z-2"
            style={{ pointerEvents: 'none' }}
          >
            <img 
              src={gyiphy} 
              alt="gyiphy" 
              className="img-fluid w-full object-fit-cover" 
              style={{ marginTop: '-100px' }}
            />
          </div>
          <Modal.Header closeButton className="border-0" />
          <Modal.Body className="p-4 text-center position-relative z-3">
            <img 
              src={successIcon} 
              alt="Success" 
              className="mx-auto mb-3" 
              style={{ width: '80px', height: '80px' }} 
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
       <Modal
          show={sentSuccess}
          onHide={() => setSentSuccess(false)}
          centered
          className="custom-modal"
        >
          <div className="position-absolute top-0 start-50 translate-middle-x mt-5 z-2">
            <img 
              src={gyiphy} 
              alt="gyiphy" 
              className="img-fluid object-fit-cover w-full h-auto" 
              style={{ marginTop: '-100px'}} 
            />
          </div>
          <Modal.Header closeButton className="border-0 position-relative z-2" />
          <Modal.Body className="p-4 position-relative z-2">
            <div className="text-center">
              <img 
                src={successIcon} 
                alt="Success" 
                className="img-fluid mb-3" 
                style={{ width: '80px', height: '80px' }} 
              />
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

export default Brokers;
