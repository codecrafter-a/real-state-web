import React, { useState } from "react";
import search from "../../assets/images/search.png";
import remove_icon from "../../assets/images/remove_icon.svg";
import { Nav } from "react-bootstrap";
import AgreementsTable from "./AgreementsTable";
import { useTranslation } from "react-i18next";
import Modal from "react-bootstrap/Modal";
import successIcon from "../../assets/images/success_icon.svg";
import AddinvoicesIcon from "../../assets/images/addinvoices.png";
import sadicon from "../../assets/images/sad.png";
import businessicon from "../../assets/images/book_2.png";
import pdfinstall from "../../assets/images/pdf.png";
import { useNavigate } from "react-router-dom";
const Agreements = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [removeData, setRemoveData] = useState(false);
  const [addInvoices, setAddInvoices] = useState(false);
  const [registriction, setRegistriction] = useState(false);
  const [isInvoices, setIsInvoices] = useState(false);
  const [iserror, setIserror] = useState(false);
  const [isDocument, setIsDocument] = useState(false);
  const { t } = useTranslation();

  const handleOpen = () => {
    setRemoveData(true);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/:lang/invoices");
  };

  const handleClose = () => {
    setRemoveData(false);
  };
  const handleToggle = (e) => {
    setAddInvoices(e.target.checked);
  };

  const handleToggleClose = () => {
    setAddInvoices(false);
    setIserror(true);
  };

  const handleRegitrication = () => {
    setIserror(false);
    setRegistriction(true);
  };

  const handleSucessInvoices = () => {
    setRegistriction(false);
    setIsInvoices(true);
  };

  const handleDocument = () => {
    setIsInvoices(false);
    setIsDocument(true);
  };

  return (
    <div className="px-4 bg-white shadow-lg rounded-3">
      <h1 className="text-center text-success py-3 mb-4 border-bottom border-[#EAEAEA] d-lg-block d-md-block d-none">
        {t("all_agreements")}
      </h1>
      <div
        className="overflow-auto custom-scrollbar"
        style={{ maxHeight: "594px" }}
      >
        <div className="me-4">
          <Nav variant="tabs" className="mb-3 border-bottom border-[#EAEAEA]">
            <Nav.Item>
              <Nav.Link
                className={`px-3 border-0 focus-ring-transparent hover-border-transparent ${
                  activeTab === "all" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("all")}
              >
                {t("all_agreements")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={`px-3 border-0 focus-ring-transparent hover-border-transparent ${
                  activeTab === "recent" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("recent")}
              >
                {t("recent_agreements")}
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <div className="tab-content mt-3">
            {activeTab === "all" && (
              <div>
                <div className="mb-4 position-relative w-75 border border-[#D6D6D6] rounded py-2 px-3">
                  <div className="d-flex">
                    <input
                      type="text"
                      className="form-control border-0 p-0"
                      placeholder={t("search_placeholder")}
                    />
                    <button className="btn p-0" type="button">
                      <img src={search} alt="Search" />
                    </button>
                  </div>
                </div>

                <div className="mb-4 d-flex align-items-end gap-3">
                  <div className="w-100">
                    <label className="form-label">{t("from_date")}</label>
                    <input
                      type="date"
                      className="form-control"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                    />
                  </div>
                  <div className="w-100">
                    <label className="form-label">{t("until_date")}</label>
                    <input
                      type="date"
                      className="form-control"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                    />
                  </div>
                  <div className="w-100">
                    <label className="form-label">
                      {t("agreement_status")}
                    </label>
                    <select className="form-select">
                      <option>{t("status_agreement")}</option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </select>
                  </div>
                  <div className="w-100 d-flex align-items-center">
                    <label className="me-2">{t("invoice_label")}</label>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="invoiceToggle"
                        onChange={handleToggle}
                      />
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-outline-success rounded-pill px-5 py-2">
                      {t("show_button")}
                    </button>
                  </div>
                </div>

                <div className="d-flex mb-5">
                  <span
                    className="d-flex align-items-center gap-3 py-2 px-3 rounded-pill"
                    style={{ background: "#E9FAF4" }}
                  >
                    <span>{t("generated")}</span>
                    <img
                      src={remove_icon}
                      alt=""
                      className="img-fluid"
                      style={{ width: "12px" }}
                    />
                  </span>
                </div>
                <div>
                  <AgreementsTable handleOpen={handleOpen} />
                </div>
              </div>
            )}

            {activeTab === "recent" && (
              <div className="text-center py-4">
                <p>{t("no_recent_agreements")}</p>
              </div>
            )}
          </div>
          {/** Delete Data modal */}
          <Modal
            show={removeData}
            onClick={() => setRemoveData(false)}
            centered
          >
            <Modal.Header className="border-0 p-3 position-relative mt-4">
              <button type="button" className="btn-close"></button>
            </Modal.Header>
            <Modal.Body className="text-center p-4">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <img src={successIcon} alt="success icon open" className="" />
              </div>
              <h4 className="text-embed-500 fs-3 font-semibold">
                העסקה נסגרה בהצלחה!
              </h4>
              <p className="fs-5 font-semibold pb-3">האם תרצו להפיק חשבונית?</p>
              <div className="d-flex justify-content-between">
                <button
                  className="agent-button2 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm "
                  onClick={handleClose}
                >
                  לא
                </button>
                <button className="agent-button1 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm text-white">
                  כן
                </button>
              </div>
            </Modal.Body>
          </Modal>
          {/** invoice add success */}
          <Modal
            show={addInvoices}
            centered
            onClick={() => setAddInvoices(false)}
          >
            <Modal.Header className="border-0 p-3 position-relative mt-4">
              <button
                type="button"
                className="btn-close position-absolute close-btn"
              ></button>
            </Modal.Header>
            <Modal.Body className="text-center p-4">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <img
                  src={AddinvoicesIcon}
                  alt="success icon open"
                  className=""
                />
              </div>
              <h4 className="text-embed-500 fs-3 font-semibold pb-3">
                החשבונית הופקה בהצלחה
              </h4>
              <div className="d-flex justify-content-between my-3">
                <button
                  className="agent-button2 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm "
                  onClick={() => setAddInvoices(false)}
                >
                  לכל החשבוניות
                </button>
                <button
                  className="agent-button1 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm text-white"
                  onClick={handleToggleClose}
                >
                  לצפייה בחשבונית
                </button>
              </div>
            </Modal.Body>
          </Modal>
          {/** danger modal */}
          <Modal show={iserror} centered onClick={() => setIserror(false)}>
            <Modal.Header className="border-0 p-3 position-relative mt-4">
              <button
                type="button"
                className="btn-close position-absolute close-btn"
              ></button>
            </Modal.Header>
            <Modal.Body className="text-center p-4">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <img src={sadicon} alt="success icon open" className="" />
              </div>
              <p className="text-danger fs-4 fw-semibold ">
                ראינו שאינכם רשומים <br />
                לשירות הפקת החשבוניות שלנו
              </p>
              <p className=" fs-4 fw-semibold py-3">
                תוכלו להנות מהפקת חשבוניות מהירה מתוך המערכת בתוספת של רק X ש"ח
                בחודש
              </p>
              <p className=" fs-4 text-embed-500 fw-semibold pb-3">
                מעוניינים להירשם <br /> ולהפיק חשבונית באופן מיידי?
              </p>
              <div className="d-flex justify-content-between my-3">
                <button
                  className="agent-button2 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm "
                  onClick={() => setIserror(false)}
                >
                  לא כרגע
                </button>
                <button
                  className="agent-button1 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm text-white"
                  onClick={handleRegitrication}
                >
                  כן, רשמו אותי והפיקו לי חשבונית
                </button>
              </div>
            </Modal.Body>
          </Modal>
          {/** Business Modal */}
          <Modal
            show={registriction}
            centered
            onClick={() => setRegistriction(false)}
          >
            <Modal.Header className="border-0 p-3 position-relative mt-4">
              <button
                type="button"
                className="btn-close position-absolute close-btn"
              ></button>
            </Modal.Header>
            <Modal.Body className="text-center p-4">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <img src={businessicon} alt="success icon open" className="" />
              </div>
              <h4 className="text-embed-500 fs-3 font-semibold pb-3">
                האם תרצו לרשום את העסקה בספר המקרקעין?
              </h4>
              <div className="d-flex justify-content-between my-3">
                <button
                  className="agent-button2 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm "
                  onClick={() => setRegistriction(false)}
                >
                  לא כרגע
                </button>
                <button
                  className="agent-button1 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm text-white"
                  onClick={handleSucessInvoices}
                >
                  כן, רשמו את העסקה
                </button>
              </div>
            </Modal.Body>
          </Modal>
          {/* genrate success invoices */}
          <Modal
            show={isInvoices}
            onClick={() => setIsInvoices(false)}
            centered
          >
            <Modal.Header className="border-0 p-3 position-relative mt-4">
              <button
                type="button"
                className="btn-close position-absolute close-btn"
              ></button>
            </Modal.Header>
            <Modal.Body className="text-center p-4">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <img
                  src={AddinvoicesIcon}
                  alt="success icon open"
                  className=""
                />
              </div>
              <p className="text-embed-500 fs-4 font-semibold">
                מצויין! רשמנו אותך לשירות שלנו
              </p>
              <p className="py-2 fs-4 font-semibold ">
                 בחיוב הקרוב תחוייבו בX ₪
              </p>
              <h4 className="text-embed-500 fs-3 font-semibold pb-3">
                החשבונית הופקה בהצלחה
              </h4>
              <div className="d-flex justify-content-between my-3">
                <button
                  className="agent-button2 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm "
                  onClick={() => setIsInvoices(false)}
                >
                  לכל החשבוניות
                </button>
                <button
                  className="agent-button1 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm text-white"
                  onClick={handleDocument}
                >
                  לצפייה בחשבונית
                </button>
              </div>
            </Modal.Body>
          </Modal>
          {/* Invoices Pdf download modal */}
          <Modal
            show={isDocument}
            onClick={() => setIsDocument(false)}
            centered
            className="agreement-container"
          >
            <Modal.Header className="border-0 p-3 position-relative mt-4">
              <button
                type="button"
                className="btn-close position-absolute close-btn"
              ></button>
            </Modal.Header>
            <Modal.Body className="text-center p-4">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <img
                  src={AddinvoicesIcon}
                  alt="success icon open"
                  className=""
                />
              </div>
              <h4 className="fs-3 font-semibold pb-3">חשבונית מספר 234568</h4>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <img src={pdfinstall} alt="install pdf" />
              </div>
              <div className="d-flex justify-content-center flex-wrap gap-2 my-3">
                <button
                  className="agent-button1 rounded-pill px-3 py-2 fs-6 fw-semibold shadow-sm text-white"
                  onClick={handleClick}
                >
                  רישום עסקה בספר המקרקעין
                </button>
                <button className="agent-button2 rounded-pill px-3 py-2 fs-6 fw-semibold shadow-sm">
                  לכל החשבוניות
                </button>
                <button
                  className="agent-button2 rounded-pill px-3 py-2 fs-6 fw-semibold shadow-sm"
                  onClick={() => setIsDocument(false)}
                >
                  להורדת חשבונית מקור
                </button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Agreements;
