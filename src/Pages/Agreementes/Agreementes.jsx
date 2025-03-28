import React, { useState, useEffect } from "react";
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
import Tab from "../../Componant/Common/Tab/Tab";
import { IoIosArrowDown } from "react-icons/io";
import { useAgreementServices } from "../../Services/AgreementServices";
import { Accordion } from "react-bootstrap";
import key from "../../assets/images/key_vertical.svg";
import { TbMailForward } from "react-icons/tb";
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
  const [tableData, setTableData] = useState([]);
  const { getAgreementData } = useAgreementServices();

  useEffect(() => {
    const data = getAgreementData();
    setTableData(data);
  }, []);
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

  const ActionButtons = ({ type, icon }) => {
    const { t } = useTranslation();
    return (
      <div className="d-flex align-items-center gap-3 p-2 bg-white">
        {(type === "genrated" || "sent" || "viewd") && (
          <>
            <div className="d-flex align-items-center gap-1">
              <TbMailForward />
              <span>{t("home_tab_r1_h1_l4")}</span>
            </div>
            {icon && (
              <div className="d-flex align-items-center gap-1">
                {icon}
                <span>{t("home_tab_r1_h1_l3")}</span>
              </div>
            )}
            <span>{t("home_tab_r1_h1_l2")}</span>
            <span>{t("home_tab_r1_h1_l1")}</span>
          </>
        )}
      </div>
    );
  };

  const StatusBadge = ({ status }) => {
    const { t } = useTranslation();

    const statusMap = {
      Generated: "הופק",
      Sent: "נשלח",
      Viewed: "נצפה",
      Signed: "נחתם",
      "Signed and Executed": "נחתם ויצא לפועל",
      "Signed and Registered": "נחתם ונרשם",
    };

    const translatedStatus = t(status);

    const statusKey = statusMap[translatedStatus] || translatedStatus;

    const statusStyles = {
      הופק: { backgroundColor: "#f3f4f6", color: "#6b7280" },
      נשלח: { backgroundColor: "#fef3c7", color: "#d97706" },
      נצפה: { backgroundColor: "#fee2e2", color: "#dc2626" },
      נחתם: { backgroundColor: "#ecfdf5", color: "#10b981" },
      "נחתם ויצא לפועל": { backgroundColor: "#ecfdf5", color: "#10b981" },
      "נחתם ונרשם": { backgroundColor: "#ecfdf5", color: "#10b981" },
    };

    return (
      <span
        className="px-4 my-auto text-center fw-semibold rounded-pill d-flex align-items-center justify-content-center"
        style={{
          ...statusStyles[statusKey],
          minHeight: "28px",
          width: "123px",
        }}
      >
        {translatedStatus}
      </span>
    );
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const handleStatusChange = (e) => setSelectedStatus(e.target.value);
  const handleRemoveStatus = () => setSelectedStatus(""); // Remove selected status
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <>
      <div className="px-4 my-3 my-md-0 bg-white d-none d-md-block rounded-3">
        <h3 className="py-1 my-4 text-center screen-1 border-bottom ">
          {t("all_agreements")}
        </h3>
        <div
          className="overflow-y-auto overflow-x-hidden custom-scrollbar"
          style={{ maxHeight: "594px" }}
        >
          <div className="me-4">
            <div className="w-100 border-bottom">
              <Nav variant="tabs" className="mx-md-3 pt-2">
                <Tab
                  className={` border-0 text-center text-md-start ${
                    activeTab === "all" ? "active-tab" : ""
                  }`}
                  onClick={() => setActiveTab("all")}
                  children={t("all_agreements")}
                  tab={true}
                />
                <Tab
                  className={`border-0 text-center text-md-start ${
                    activeTab === "recent" ? "active-tab" : ""
                  }`}
                  onClick={() => setActiveTab("recent")}
                  children={t("recent_agreements")}
                  tab={true}
                />
              </Nav>
            </div>
            <div className="tab-content mt-3 ">
              {activeTab === "all" && (
                <div className="">
                  <div className="row px-1">
                    <div className="col-12 col-md-8">
                      <div className="mb-4 position-relative border border-[#D6D6D6] rounded py-2 px-3">
                        <div className="d-flex">
                          <input
                            type="text"
                            className="form-control border-0 p-0"
                            placeholder={t("search_placeholder_all")}
                            value={searchQuery}
                            onChange={handleSearchChange}
                          />
                          <button className="btn" type="button">
                            <img src={search} alt="Search" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-md-none d-block">
                    <p className=" fs-16 fw-semibold lh-1 my-2 text-center text-teal">
                      פילטרים נוספים
                    </p>
                    <div className="justify-content-center d-flex">
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <div className="mb-4 d-md-flex align-items-end gap-3 d-none">
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
                      <select
                        className="form-select"
                        value={selectedStatus}
                        onChange={handleStatusChange}
                      >
                        <option>{t("status_agreement")}</option>
                        <option value="Generated">Generated</option>
                        <option value="Sent">Sent</option>
                        <option value="Viewed">Viewed</option>
                        <option value="Signed">Signed</option>
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

                  {selectedStatus && (
                    <div className="d-flex mb-5">
                      <span
                        className="d-flex align-items-center gap-3 py-2 px-3 rounded-pill"
                        style={{ background: "#E9FAF4" }}
                      >
                        <span>
                          {selectedStatus === "1"
                            ? "Generated"
                            : selectedStatus === "2"
                            ? "Sent"
                            : selectedStatus === "3"
                            ? "Viewed"
                            : "Signed"}
                        </span>
                        <img
                          src={remove_icon}
                          alt="Remove"
                          className="img-fluid"
                          style={{ width: "12px", cursor: "pointer" }}
                          onClick={handleRemoveStatus}
                        />
                      </span>
                    </div>
                  )}
                  <div>
                    <AgreementsTable
                      handleOpen={handleOpen}
                      searchQuery={searchQuery}
                      selectedStatus={selectedStatus}
                    />
                  </div>
                </div>
              )}
              {activeTab === "recent" && (
                <div className="text-center py-4">
                  <p>{t("no_recent_agreements")}</p>
                </div>
              )}
            </div>
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
                  {t("modal_success")}
                </h4>
                <p className="fs-5 font-semibold pb-3">{t("modal_invoice")}</p>
                <div className="d-flex justify-content-between gap-3">
                  <button
                    className="agent-btn-responsive2 w-50 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm"
                    onClick={handleClose}
                  >
                    {t("modal_no")}
                  </button>
                  <button className="agent-btn-responsive1 w-50 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm text-white">
                    {t("modal_yes")}
                  </button>
                </div>
              </Modal.Body>
            </Modal>
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
                  {t("invoice_success")}
                </h4>
                <div className="d-flex justify-content-between my-3">
                  <button
                    className="agent-button2 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm"
                    onClick={() => setAddInvoices(false)}
                  >
                    {t("invoice_all")}
                  </button>
                  <button
                    className="agent-button1 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm text-white"
                    onClick={handleToggleClose}
                  >
                    {t("invoice_view")}
                  </button>
                </div>
              </Modal.Body>
            </Modal>
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
                <p className="text-danger fs-4 fw-semibold">
                  {t("error_title")}
                </p>
                <p className="fs-4 fw-semibold py-3">{t("error_message")}</p>
                <p className="fs-4 text-embed-500 fw-semibold pb-3">
                  {t("error_question")}
                </p>
                <div className="d-flex justify-content-between my-3">
                  <button
                    className="agent-button2 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm"
                    onClick={() => setIserror(false)}
                  >
                    {t("no_now")}
                  </button>
                  <button
                    className="agent-button1 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm text-white"
                    onClick={handleRegitrication}
                  >
                    {t("yes_register")}
                  </button>
                </div>
              </Modal.Body>
            </Modal>
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
                  <img
                    src={businessicon}
                    alt="success icon open"
                    className=""
                  />
                </div>
                <h4 className="text-embed-500 fs-3 font-semibold pb-3">
                  {t("registriction_title")}
                </h4>
                <div className="d-flex justify-content-between my-3">
                  <button
                    className="agent-button2 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm"
                    onClick={() => setRegistriction(false)}
                  >
                    {t("no_now")}
                  </button>
                  <button
                    className="agent-button1 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm text-white"
                    onClick={handleSucessInvoices}
                  >
                    {t("yes_register_transaction")}
                  </button>
                </div>
              </Modal.Body>
            </Modal>
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
                  {t("invoice1_success")}
                </p>
                <p className="py-2 fs-4 font-semibold">{t("next_charge")}</p>
                <h4 className="text-embed-500 fs-3 font-semibold pb-3">
                  {t("invoice_generated")}
                </h4>
                <div className="d-flex justify-content-between my-3">
                  <button
                    className="agent-button2 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm"
                    onClick={() => setIsInvoices(false)}
                  >
                    {t("all_invoices")}
                  </button>
                  <button
                    className="agent-button1 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm text-white"
                    onClick={handleDocument}
                  >
                    {t("view_invoice")}
                  </button>
                </div>
              </Modal.Body>
            </Modal>
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
                <h4 className="fs-3 font-semibold pb-3">
                  {t("invoice1_number")}
                </h4>
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <img src={pdfinstall} alt="install pdf" />
                </div>
                <div className="d-flex justify-content-center flex-wrap gap-2 my-3">
                  <button
                    className="agent-button1 rounded-pill px-3 py-2 fs-6 fw-semibold shadow-sm text-white"
                    onClick={handleClick}
                  >
                    {t("register_transaction")}
                  </button>
                  <button className="agent-button2 rounded-pill px-3 py-2 fs-6 fw-semibold shadow-sm">
                    {t("all1_invoices")}
                  </button>
                  <button
                    className="agent-button2 rounded-pill px-3 py-2 fs-6 fw-semibold shadow-sm"
                    onClick={() => setIsDocument(false)}
                  >
                    {t("download_invoice")}
                  </button>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
      {/** Mobile Screen */}

      <div className="d-block d-md-none">
        <div className="bg-white border-2 rounded-2 mb-4 shadow">
          <div className="w-100 border-bottom">
            <Nav variant="tabs" className="mx-md-3 fs-15 pt-2">
              <Tab
                className={`border-0 text-center ${
                  activeTab === "recent" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("recent")}
                children={t("recent_agreements")}
                tab={true}
              />
              <Tab
                className={` border-0 text-center  ${
                  activeTab === "all" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("all")}
                children={t("all_agreements")}
                tab={true}
              />
            </Nav>
          </div>
          <div className="row px-1">
            <div className="col-12 col-md-8">
              <div className="m-3 position-relative border border-[#D6D6D6] rounded py-2  px-3">
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control border-0 p-0"
                    placeholder={t("search_placeholder_all")}
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <button className="btn" type="button">
                    <img src={search} alt="Search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="d-md-none d-block">
            <p className=" fs-6 fw-semibold lh-1 my-2 text-center text-teal">
              פילטרים נוספים
            </p>
            <div className="justify-content-center d-flex">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        {activeTab === "all" && (
          <Accordion
            className="d-block p-0 d-md-none d-flex flex-column gap-3 my-2 overflow-y-auto overflow-x-hidden custom-scrollbar"
            style={{ height: "594px" }}
          >
            {tableData.map((row, index) => (
              <Accordion.Item
                eventKey={index.toString()}
                key={row.id}
                className="border-top-2 border-top rounded-3 mx-1 border-start-4 overflow-visible"
                style={{ borderLeft: "6px solid #2CAC74" }}
              >
                <Accordion.Header>
                  <div className="">
                    <div className=" d-flex align-items-center">
                      <div className="p-1">
                        <img
                          src={key}
                          alt="vertical key"
                          className="img-fluid w-75 h-75"
                        />
                      </div>
                      <div>
                        <span className="fw-semibold fs-12 d-block">
                          {" "}
                          {row?.accountNumber} | {row?.date}
                        </span>
                        <p className="fw-bold fs-14 d-block mb-0">
                          {" "}
                          {t(row?.agreementName)} |{" "}
                          <span className="fw-semibold lh-1 fs-12">
                            {t(row?.agreementType)}
                          </span>
                        </p>
                        <p className="fw-bold  fs-12 d-block my-0">
                          {t("home_tab_h4")} :{" "}
                          <span className="fw-semibold lh-1 fs-12">
                            {t(row?.clients)}
                          </span>
                        </p>
                        <p className="fw-bold fs-12 d-block mb-0">
                          {t("home_tab_h5")} :{" "}
                          <span className="fw-semibold lh-1 fs-12">
                            {row?.commission}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="my-2">
                      <StatusBadge status={t(row?.status)} />
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="p-2 ">
                    <div className="d-flex justify-content-around  w-100">
                      <ActionButtons
                        type={t(row?.actionType)}
                        icon={row?.icon}
                        onDelete={handleOpen}
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        )}
      </div>
    </>
  );
};

export default Agreements;
