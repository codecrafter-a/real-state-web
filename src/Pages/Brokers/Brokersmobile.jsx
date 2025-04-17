import React, {useState} from 'react'
import { useTranslation } from "react-i18next";
import key_vertical from "../../assets/images/key_vertical.svg";
import add_reaction from "../../assets/images/add_reaction.svg";
import add_home from "../../assets/images/add_home.svg";
import search from "../../assets/images/search.svg";
import successIcon from "../../assets/images/success_icon.svg";
import Accordion from "react-bootstrap/Accordion";
import whatsapp from "../../assets/images/wa, whatsapp, message, communication, chat.svg";
import { Modal, Form, InputGroup, Button, Row, Col } from "react-bootstrap";
// import sms from "../../assets/images/sms.svg";
// import email from "../../assets/images/email.svg";
// import group from "../../assets/images/Group 2538.png";
import gyiphy from "../../assets/images/celebration.gif";
import Toggle from "../../Componant/Common/Toggle/Toggle";
import close from "../../assets/images/close_small.png";
import Next from "../../assets/images/Next.jpg";


const Brokersmobile = () => {
    const { t } = useTranslation();
     const [isOpen, setIsOpen] = useState(false);
      const [isShow, setIsShow] = useState(false);
      const [isView, setIsView] = useState(false);
      const [showSuccess, setShowSuccess] = useState(false);
      const [sentSuccess, setSentSuccess] = useState(false);
      const [showDetails, setShowDetails] = useState(false);
      const [propertySection, setPropertySection] = useState(false);
    
      const handlePropertysection = () => {
        setPropertySection(true);
      };
    
      const handlecloseProperty = () => {
        setPropertySection(false);
      };
    
      const handleSearchClick = () => {
        setShowDetails(true); 
      };
    
      const handleSearchClose = () => {
        setShowDetails(false);
      };
    
      const handleOpen = () => {
        setIsOpen(true);
      };
      const handleShow = () => {
        setIsShow(true);
      };
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
     <div className="bg-transperant ">
        <div
          className="row custom-scrollbar overflow-y-auto overflow-x-hidden"
          style={{ maxHeight: "594px" }}
        >
          <div className="col-12">
            <div className="card  p-3 border  rounded-3 overflow-hidden  rounded-3 bg-light mb-4">
              <div className="form_group mb-2 mb-xl-0 d-flex justify-content-between">
                <h5 className=" text-embed-500 fs-5 fw-semibold lh-1 mb-4">
                  {t("customer_detail")}
                </h5>
                <button
                  type="button"
                  className="agent-btn-responsive2 w-50 bg-transperant h-50 py-2  d-flex align-items-center justify-content-center  rounded-pill"
                  onClick={handleShow}
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
                        <label>{t("broker_name")}</label>
                        <input
                          type="text"
                          className="form-control border-0 p-0"
                          placeholder="Shirims@gmail.com | 054-4692650"
                          values=""
                        />
                      </div>
                      <div className="d-flex flex-row justify-content-end">
                        <button
                          className="btn "
                          type="button"
                          onClick={handleSearchClose}
                        >
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
                        <div className="my-2">
                          <img src={key_vertical} alt="key vertical" />
                        </div>
                        <div>
                          <label>{t("property_br_address")}</label>
                          <input
                            type="text"
                            className="form-control border-0 p-0"
                            placeholder="שכירות : 5000 לחודש"
                            values=""
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-end">
                        <button
                          className="btn "
                          type="button"
                          onClick={handlecloseProperty}
                        >
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
                      <Form.Control
                        type="number"
                        className="t w-100"
                        defaultValue="30"
                      />
                    </div>
                    <div>
                      <span className="fw-semibold">{t("rental_months")}</span>
                      <Form.Control
                        type="number"
                        className=" w-100"
                        defaultValue="12"
                      />
                    </div>
                  </div>
                </>
              )}
              <div className="d-flex align-items-center">
                <Toggle
                  defaultChecked={false}
                  type={"checkbox"}
                  id="toggleImages"
                />
                <label className="fs-6 fw-normal lh-1" htmlFor="">
                  {t("lable1")}
                </label>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card p-3 border bg-light rounded-3 mb-4">
              <h5 className=" text-embed-500 fw-semibold fs-5 lh-1  mb-4">
                {t("age_note")}
              </h5>
              <div className=" px-2 pb-2">
                <textarea
                  className="form-control"
                  placeholder={t("age_note_placeholder")}
                  rows="4"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-12 my-2">
            <div className="d-flex align-items-center">
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
          <div className="col-12">
            <div className="d-flex gap-2 pb-3 ">
              <button
                className="agent-btn-responsive1 text-white w-25 bg-transperant h-25 py-1 rounded-pill "
                onClick={handleView}
              >
                {t("age_btn_send")}
              </button>
              <button
                className=" agent-btn-responsive2 w-50 bg-transperant h-25 py-1 shadow rounded-pill"
                onClick={() => setSentSuccess(true)}
              >
                {t("age_btn_send_without")}
              </button>
              <button className="  agent-btn-responsive2 w-25 bg-transperant h-25 py-1 shadow rounded-pill">
                {t("age_btn_view")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal show={isOpen} centered className="modal-container">
        <Modal.Header className="d-flex justify-content-between align-items-center border-0">
          <button className="border-0">
            <img src={Next} alt="next btn" className="" />
          </button>
          <button
            type="button"
            className="btn-close m-0 fs-5"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => setIsOpen(false)}
          ></button>
        </Modal.Header>

        <Modal.Body>
          <h5 className="text-embed-500 mb-2 fs-3 text-center">
            {t("age_quick_add_model_title")}
          </h5>
          <p className="fs-5 font-normal text-center">
            {t("age_quick_add_model_description")}
          </p>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">
                {t("age_quick_add_email")}
              </Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">
                {t("age_quick_add_phone")}
              </Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">
                {t("age_quick_add_name")}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                required
              />
            </Form.Group>
          </Form>
          <div className=" d-flex justify-content-center">
            <Button
              className="fs-17 lh-1 fw-semibold mt-md-4  agent-btn-responsive1 text-white w-50 py-2 mx-1 rounded-pill"
              onClick={() => setIsOpen(false)}
            >
              {t("age_btn_add")}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={isShow} centered>
        <Modal.Header className="d-flex justify-content-between align-items-center border-0">
          <button className="border-0">
            <img src={Next} alt="next btn" className="" />
          </button>
          <button
            type="button"
            className="btn-close m-0 fs-5"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => setIsShow(false)}
          ></button>
        </Modal.Header>

        <Modal.Body>
          <h5 className="text-embed-500 mb-2 fs-3 text-center">
            {t("age_quick_add_new_property")}
          </h5>
          <p className="fs-5 font-normal text-center">
            {t("age_quick_add_new_property_subtitle")}
          </p>

          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="fw-bold">
                {t("age_new_property_city")}
              </Form.Label>
              <Form.Control type="email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label className="fw-bold">
                {t("age_new_property_street")}
              </Form.Label>
              <Form.Control type="tel" required />
            </Form.Group>

            <Row className="g-3 align-items-center">
              <Col md={6}>
                <Form.Group controlId="apartmentNumber">
                  <Form.Label className="fw-bold">
                    {t("age_new_property_apartment_number")}
                  </Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="buildingNumber">
                  <Form.Label className="fw-bold">
                    {t("age_new_property_building_number")}
                  </Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <div className=" d-flex justify-content-center">
            <Button
              className="fs-17 lh-1 fw-semibold mt-md-4  agent-btn-responsive1 text-white w-50 py-2 mx-1 rounded-pill"
              onClick={() => setIsShow(false)}
            >
              {t("age_btn_add")}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={isView}
        onHide={() => setIsView(false)}
        centered
        dialogClassName="responsive-modal"
      >
        <Modal.Header className="d-flex justify-content-end align-items-center border-0">
          <button
            type="button"
            className="btn-close m-0 fs-5"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => setIsView(false)}
          ></button>
        </Modal.Header>
        <Modal.Body
          className="p-4 overflow-y-auto custom-scrollbar"
          style={{ height: "655px" }}
        >
          <div className="text-center">
            <img src={successIcon} alt="Success" className="mx-auto mb-3" />
            <h4 className="text-embed-500 fs_25 font-semibold">
              {t("age_report_title")}
            </h4>
            <p className="fs_25 font-semibold">{t("age_report_question")}</p>
          </div>

          <div
            className="options-container mx-auto w-100"
            style={{ maxWidth: "417px" }}
          >
            {[whatsapp,].map((icon, idx) => (
              <div className="option-item rounded-3 my-3" key={idx}>
                <Accordion defaultActiveKey={null} className="custom-accordion">
                  <Accordion.Item
                    eventKey="0"
                    className="custom-header border-teal-100"
                  >
                    <Accordion.Header className="bg-teal-100">
                      <div className="d-flex justify-content-between w-100">
                        <div className="d-flex align-items-center gap-2">
                          <img src={icon} alt="icon" />
                          <span className="ps-2 text-start fs_15">
                            {t(
                              `age_send_${
                                [
                                  "whatsapp",
                                  "text_message",
                                  "message_email",
                                  "message_whatsapp_share",
                                ][idx]
                              }`
                            )}
                          </span>
                        </div>
                        <input
                          className="form-check-input border border-black bg-white"
                          type="checkbox"
                        />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body className="bg-teal-100">
                      <ul className="px-4  fw-bold">
                        {[1, 2, 3].map((num) => (
                          <li key={num}>
                            {t(
                              `age_send_${
                                [
                                  "whatsapp",
                                  "text_message",
                                  "email_message",
                                  "message_whatsapp_share",
                                ][idx]
                              }_point_${num}`
                            )}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 fw-bold">
                        {t(
                          `age_send_${
                            [
                              "whatsapp",
                              "text_message",
                              "email_message",
                              "message_whatsapp_share",
                            ][idx]
                          }_description`
                        )}
                      </p>

                      {idx === 0 && (
                        <div className="row justify-content-center text-center mt-4 align-items-center">
                          {[150, 100, 50].map((val, colIdx) => (
                            <div
                              className="col-md-4 col-12 mb-3 px-2"
                              key={colIdx}
                            >
                              <div className="rounded p-2 bg-white shadow-md ">
                                <h3 className="text-embed-500 fs-2 fw-bold">
                                  {val}
                                </h3>
                                <p className="mb-0 text-embed-500">
                                  {t("age_send_whatsapp_message")}
                                </p>
                                <p className="text-embed-500">
                                  {t(
                                    `age_send_whatsapp_message_info${
                                      colIdx === 0 ? "" : colIdx + 1
                                    }`
                                  )}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            ))}
          </div>

          <div className="text-center mt-4 d-flex flex-wrap flex-md-nowrap">
            <button
              className="agent-button1 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm text-white"
              onClick={handleIsShow}
            >
              {t("age_btn_send")}
            </button>
            <button className="btn btn-link text-muted mx-auto mt-2">
              {t("age_btn_link")}
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={showSuccess}
        onHide={() => setShowSuccess(false)}
        centered
        className="modal-container"
      >
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
          <button
            type="button"
            className="btn-close m-0 fs-5"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => setShowSuccess(false)}
          ></button>
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
      <Modal
        show={sentSuccess}
        onHide={() => setSentSuccess(false)}
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
            onClick={() => setSentSuccess(false)}
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
            <p className="fs-3 text-teal fw-semibold">{t("age_cust_status")}</p>
          </div>
          <div className="text-center mt-4">
            <button
              className="btn bg-teal text-white rounded-pill px-4 py-2 fw-bold shadow-sm w-75"
              onClick={() => setSentSuccess(false)}
            >
              {t("age_btn_description")}
            </button>
          </div>
        </Modal.Body>
      </Modal>
    
    </>
  )
}

export default Brokersmobile
