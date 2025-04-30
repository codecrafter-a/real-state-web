import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import search from "../../assets/images/search.svg";
import key_vertical from "../../assets/images/key_vertical.svg";
import add_reaction from "../../assets/images/add_reaction.svg";
import add_home from "../../assets/images/add_home.svg";
import { Modal, InputGroup, Form } from "react-bootstrap";
import successIcon from "../../assets/images/success_icon.svg";
import Accordion from "react-bootstrap/Accordion";
import whatsapp from "../../assets/images/wa, whatsapp, message, communication, chat.svg";
import gyiphy from "../../assets/images/celebration.gif";
import close from '../../assets/images/close_small.png';
import Toggle from "../../Componant/Common/Toggle/Toggle";
import sms from "../../assets/images/sms.svg";
 import email from "../../assets/images/email.svg";
 import group from "../../assets/images/Group 2538.png";
const Property_ownermobile = () => {
    const { t } = useTranslation();
      const [isView, setIsView] = useState(false);
      const [showSuccess, setShowSuccess] = useState(false);
      const [sentSuccess, setSentSuccess] = useState(false);
      const [showDetails, setShowDetails] = useState(false);
      const [propertySection, setPropertySection] = useState(false);
      const [genrateSuccess, setGenrateSuccess] = useState(false);
    
      const handlePropertysection = () => {
        setPropertySection(true);
      }
    
      const handlecloseProperty = () => {
        setPropertySection(false);
      }
    
      const handleSearchClick = () => {
        setShowDetails(true); 
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
       <div className="bg-transperant">
        <div className="row custom-scrollbar overflow-y-auto overflow-x-hidden">
          <div className="col-12">
            <div className="card  p-3 border  rounded-3 overflow-hidden  rounded-3 bg-light mb-4">
              <div className="form_group mb-2 mb-xl-0 d-flex justify-content-between">
                <h5 className=" text-embed-500 fs-5 fw-semibold lh-1 mb-4">{t("client_details")}</h5>
                <button
                  type="button"
                  className="agent-btn-responsive2 w-50 bg-transperant h-50 py-2  d-flex align-items-center justify-content-center  rounded-pill"
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <img className="me-1" src={add_reaction} alt="Add Client" />
                    <span className="fs-17 fw-semibold lh-1">
                    {t("add_cust")}{" "}
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
                    {t("Add_Property")}{" "}
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
                        <div className="my-2"><img src={key_vertical} alt="key vertical" /></div>
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
                      <Form.Control type="number" className="w-100" value="30" />
                    </div>
                    <div>
                      <span className="fw-semibold">{t("rental_months")}</span>
                      <Form.Control type="number" className="w-100" value="12" />
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
          <div className="col-12 my-3">
            <div className='d-flex flex-column  flex-wrap-reverse'>
              <div className="d-flex align-items-center ">
                <Toggle
                  defaultChecked={true}
                  type={"checkbox"}
                  id="toggleImages"
                />
                <label className="fs-6 fw-normal lh-1" htmlFor="">
                  {t("send_property_attachments")}
                </label>
              </div>
              <div className="d-flex align-items-center">
                <Toggle
                  defaultChecked={false}
                  type={"checkbox"}
                  id="toggleImages"
                />
                <label className="fs-6 fw-normal lh-1" htmlFor="">
                  {t("send_images")}
                </label>
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
              <button className=" agent-btn-responsive2 w-50 bg-transperant h-25 py-1 shadow rounded-pill" onClick={() => setGenrateSuccess(true)}>
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
        className="modal-container"
      >
        <Modal.Header className="d-flex justify-content-end align-items-center border-0">
          <button type="button" className="btn-close m-0 fs-5" data-bs-dismiss="modal" aria-label="Close" onClick={() => setIsView(false)}></button>
        </Modal.Header>
        <Modal.Body className="p-4 overflow-y-auto custom-scrollbar"
          style={{ height: "655px" }} >
          <div className="text-center">
            <img
              src={successIcon}
              alt="Success"
              className="mx-auto w-20 h-20 mb-3"
            />
            <h4 className="text-embed-500 fs_25 font-semibold">
              {t("age_report_title")}
            </h4>
            <p className="fs_25 font-semibold">{t("age_report_question")}</p>
          </div>
          {/* Options Section */}
          <div className="options-container m-auto" >
            <div className="option-item rounded-3 my-3">
              <Accordion defaultActiveKey={null} className="custom-accordion">
                <Accordion.Item eventKey="0 " className="custom-header border-teal-100">
                  <Accordion.Header className="bg-teal-100">
                    <div className="d-flex justify-content-between w-100">
                      <div className=" d-flex align-items-center">
                        <img src={whatsapp} alt="whatsapp" />
                        <span className="ps-2 text-start fs_15">
                          {t("age_send_whatsapp")}
                        </span>
                      </div>
                      <input
                        className="form-check-input border border-black bg-white"
                        type="checkbox"
                      />
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="bg-teal-100">
                    <ul className="fw-bold px-4" style={{ listStyleType: "disc" }}>
                      <li>{t("age_send_whatsapp_point_1")}</li>
                      <li>{t("age_send_whatsapp_point_2")}</li>
                      <li>{t("age_send_whatsapp_point_3")}</li>
                    </ul>
                    <p className="mt-3 fw-bold ">
                      {t("age_send_whatsapp_description")}
                    </p>
                    <div className="row justify-content-center text-center mt-4 align-items-center">
                      <div className="col-md-4 px-2">
                        <div className="rounded p-2 bg-white  shadow-md">
                          <h3 className="text-embed-500 fs-2 fw-bold">150</h3>
                          <p className="mb-0 text-embed-500">
                            {t("age_send_whatsapp_message")}
                          </p>
                          <p className="text-embed-500">
                            {t("age_send_whatsapp_message_info")}
                          </p>
                        </div>
                      </div>

                      <div className="col-md-4 px-2">
                        <div className="rounded shadow-md p-1 bg-white">
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

                      <div className="col-md-4 px-2">
                        <div className="rounded p-2 bg-white shadow-sm">
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
              <Accordion defaultActiveKey={null} className="custom-accordion">
                <Accordion.Item eventKey="0 " className="custom-header border-teal-100">
                  <Accordion.Header className="bg-teal-100">
                    <div className="d-flex justify-content-between w-100">
                      <div className=" d-flex align-items-center">
                        <img src={sms} alt="whatsapp" />
                        <span className="ps-2 text-start fs_15">
                          {t("age_send_whatsapp")}
                        </span>
                      </div>
                      <input
                        className="form-check-input border border-black bg-white"
                        type="checkbox"
                      />
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="bg-teal-100">
                    <ul className="fw-bold px-4" style={{ listStyleType: "disc" }}>
                      <li>{t("age_send_whatsapp_point_1")}</li>
                      <li>{t("age_send_whatsapp_point_2")}</li>
                      <li>{t("age_send_whatsapp_point_3")}</li>
                    </ul>
                    <p className="mt-3 fw-bold ">
                      {t("age_send_whatsapp_description")}
                    </p>
                    <div className="row justify-content-center text-center mt-4 align-items-center">
                      <div className="col-md-4 px-2">
                        <div className="rounded p-2 bg-white  shadow-md">
                          <h3 className="text-embed-500 fs-2 fw-bold">150</h3>
                          <p className="mb-0 text-embed-500">
                            {t("age_send_whatsapp_message")}
                          </p>
                          <p className="text-embed-500">
                            {t("age_send_whatsapp_message_info")}
                          </p>
                        </div>
                      </div>

                      <div className="col-md-4 px-2">
                        <div className="rounded shadow-md p-1 bg-white">
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

                      <div className="col-md-4 px-2">
                        <div className="rounded p-2 bg-white shadow-sm">
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
              <Accordion defaultActiveKey={null} className="custom-accordion">
                <Accordion.Item eventKey="0 " className="custom-header border-teal-100">
                  <Accordion.Header className="bg-teal-100">
                    <div className="d-flex justify-content-between w-100">
                      <div className=" d-flex align-items-center">
                        <img src={email} alt="whatsapp" />
                        <span className="ps-2 text-start fs_15">
                          {t("viaEmail")}
                        </span>
                      </div>
                      <input
                        className="form-check-input border border-black bg-white"
                        type="checkbox"
                      />
                    </div>
                  </Accordion.Header>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="option-item rounded-3 my-3">
              <Accordion defaultActiveKey={null} className="custom-accordion">
                <Accordion.Item eventKey="0 " className="custom-header border-teal-100">
                  <Accordion.Header className="bg-teal-100">
                    <div className="d-flex justify-content-between w-100">
                      <div className=" d-flex align-items-center">
                        <img src={group} alt="whatsapp" />
                        <span className="ps-2 text-start fs_15">
                          {t("group")}
                        </span>
                      </div>
                      <input
                        className="form-check-input border border-black bg-white"
                        type="checkbox"
                      />
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="bg-teal-100">
                    <p className="mt-3 fw-bold">Helllo</p> 
                    <ul className="fw-bold px-4" style={{ listStyleType: "disc" }}>
                      <li>{t("age_send_whatsapp_point_1")}</li>
                      <li>{t("age_send_whatsapp_point_2")}</li>
                      <li>{t("age_send_whatsapp_point_3")}</li>
                    </ul>
                    <p className="mt-3 fw-bold ">
                      {t("age_send_whatsapp_description")}
                    </p>
                    <div className="row justify-content-center text-center mt-4 align-items-center">
                      <div className="col-md-4 px-2">
                        <div className="rounded p-2 bg-white  shadow-md">
                          <h3 className="text-embed-500 fs-2 fw-bold">150</h3>
                          <p className="mb-0 text-embed-500">
                            {t("age_send_whatsapp_message")}
                          </p>
                          <p className="text-embed-500">
                            {t("age_send_whatsapp_message_info")}
                          </p>
                        </div>
                      </div>

                      <div className="col-md-4 px-2">
                        <div className="rounded shadow-md p-1 bg-white">
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

                      <div className="col-md-4 px-2">
                        <div className="rounded p-2 bg-white shadow-sm">
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
          </div>
          <div className="text-center mt-4 d-flex flex-wrap flex-md-nowrap justify-content-center">
            <button
              className="agent-btn-responsive1 h-25 w-50 py-2 rounded-pill text-white"
              onClick={handleIsShow}
            >
              {t("age_btn_send")}
            </button>
            <button className="btn btn-link text-muted ">
              {t("age_btn_link")}
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showSuccess} onHide={() => setShowSuccess(false)} centered className="modal-container">
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
        <Modal.Header className="d-flex justify-content-end align-items-center border-0">
          <button type="button" className="btn-close m-0 fs-5" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowSuccess(false)}></button>
        </Modal.Header>
        <Modal.Body className="p-4 text-center position-relative z-3">
          <img
            src={successIcon}
            alt="Success"
            className="mx-auto mb-3"
            style={{ width: "80px", height: "80px" }}
          />
          <div>
            <p className="fs-4 text-teal fw-semibold mb-0">
              {t("age_cust_review")}
            </p>
            <h4 className="fs-4 text-teal fw-semibold mb-0">
              {t("age_cust_status")}
            </h4>
          </div>
        </Modal.Body>

        <Modal.Footer className="justify-content-center border-top-0 mb-3 gap-4">
          <button
            className="btn bg-teal text-white rounded-pill px-4 py-2 fw-bold shadow-sm m-0"
            onClick={handleSentSuccess}
          >
            {t("age_cust_reconciliation_report")}
          </button>
          <button
            className="btn btn-outline-success rounded-pill px-5 py-2 fw-bold shadow-sm m-0"
            onClick={() => setShowSuccess(false)}
          >
            {t("age_cust_agreement")}
          </button>
        </Modal.Footer>
      </Modal>
      <Modal show={sentSuccess} onHide={() => setSentSuccess(false)} centered className="modal-container">
        <div className="position-absolute top-0 start-50  translate-middle-x mt-5 z-2">
          <img
            src={gyiphy}
            alt="gyiphy"
            className="img-fluid object-fit-cover w-full h-auto"
            style={{ marginTop: "-100px" }}
          />
        </div>
        <Modal.Header className="d-flex justify-content-end align-items-center border-0">
          <button type="button" className="btn-close m-0 fs-5" data-bs-dismiss="modal" aria-label="Close" onClick={() => setSentSuccess(false)}></button>
        </Modal.Header>
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
            <h4 className="fs-3 text-teal fw-semibold">
              {t("age_cust_agreement_status")}
            </h4>
            <p className="fs-3 text-teal fw-semibold">
              {t("age_cust_status")}
            </p>
          </div>
          <div className="text-center  mt-4 d-flex justify-content-center">
            <button
              className="agent-btn-responsive1 w-50 py-2 rounded-pill text-white"
              onClick={() => setSentSuccess(false)}
            >
              {t("Customert_btn_description")}
            </button>
          </div>
        </Modal.Body>
      </Modal>
       <Modal
              show={genrateSuccess}
              onHide={() => setGenrateSuccess(false)}
              centered
              className="modal-container"
            >
              <div className="position-absolute top-0 start-50 translate-middle-x mt-5 z-2">
                <img
                  src={gyiphy}
                  alt="gyiphy"
                  className="img-fluid object-fit-cover w-full h-auto"
                  style={{ marginTop: "-100px" }}
                />
              </div>
              <Modal.Header className="d-flex justify-content-end align-items-center border-0">
                <button
                  type="button"
                  className="btn-close m-0 fs-5"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setGenrateSuccess(false)}
                ></button>
              </Modal.Header>
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
                  <h4 className="fs-3 text-teal fw-semibold">
                    {t("age_cust_agreement_status")}
                  </h4>
                  <p className="fs-3 text-teal fw-semibold">{t("sent")}</p>
                </div>
                <div className="text-center mt-4">
                  <button
                    className="btn bg-teal text-white rounded-pill px-4 py-2 fw-bold shadow-sm w-75"
                    onClick={() =>setGenrateSuccess(false)}
                  >
                    {t("Customert_btn_description")}
                  </button>
                </div>
              </Modal.Body>
            </Modal>
    </>
  )
}

export default Property_ownermobile
