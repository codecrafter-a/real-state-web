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
  const [removeData, setRemoveData] = useState(false);
  const [modalState, setModalState] = useState({
    addInvoices: false,
    isError: false,
    restriction: false,
    isInvoices: false,
    isDocument: false,
  });

  const {
    tableData,
    agreeData,
    searchQuery,
    selectedStatus,
    fromDate,
    toDate,
    handleStatusChange,
    handleRemoveStatus,
    handleSearchChange,
    handleData,
    setFromDate,
    setToDate,
    getAgreementData,
    setTableData
  } = useAgreementServices();

  useEffect(() => {
    setTableData(getAgreementData());
  }, []);

  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleOpen = () => setRemoveData(true);
  const handleClose = () => setRemoveData(false);
  const handleClick = () => navigate("/:lang/invoices");

  const updateModalState = (updatedValues) => {
    setModalState((prev) => ({
      ...prev,
      ...updatedValues,
    }));
  };

  const handleToggle = (e) => {
    if (e.target.checked) {
      updateModalState({ addInvoices: true });
    }
  };

  const handleCloseall = () => {
    setModalState({
      addInvoices: false,
      isError: false,
      restriction: false,
      isInvoices: false,
      isDocument: false,
    });
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

  return (
    <>
      <div className="px-4 my-3 my-md-0 bg-white d-none d-md-block rounded-3 shadow-lg">
        <h3 className="py-3 mb-4 screen-1 text-center border-bottom d-none d-md-block">
          {t("all_agreements")}
        </h3>
        <div className="overflow-y-auto overflow-x-hidden custom-scrollbar scroll-height">
          <div className="me-4">
            <div className="w-100 border-bottom">
              <Nav variant="tabs" className=" pt-2">
                <Tab
                  className={` border-0 text-center fs-5 fw-normal lh-1 text-md-start ${
                    activeTab === "all" ? "active-tab fw-bold" : ""
                  }`}
                  onClick={() => setActiveTab("all")}
                  children={t("all_agreements")}
                  tab={true}
                />
                <Tab
                  className={`border-0 text-center fs-5 text-nowrap fw-normal px-1 lh-1 text-md-start ${
                    activeTab === "recent" ? "active-tab fw-bold" : ""
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
                            className="form-control fs-17 fw-semibold lh-1  border-0 p-0"
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
                  <div className="mb-4 d-md-flex flex-wrap flex-lg-nowrap align-items-center justify-content-around gap-3 d-none">
                    <div className="w-100">
                      <label className="form-label fs-15 fw-semibold lh-1">
                        {t("from_date")}
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                      />
                    </div>
                    <div className="w-100">
                      <label className="form-label fs-15 fw-semibold lh-1">
                        {t("until_date")}
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                      />
                    </div>
                    <div className="w-100">
                      <label className="form-label fs-15 fw-semibold lh-1">
                        {t("agreement_status")}
                      </label>
                      <select
                        className="form-select"
                        value={selectedStatus}
                        onChange={handleStatusChange}
                      >
                        <option>{t("status_agreement")}</option>
                        <option value="Generated">
                          {t("status2.generated")}
                        </option>
                        <option value="Sent">{t("status2.sent")}</option>
                        <option value="Viewed">{t("status2.viewed")}</option>
                        <option value="Signed">{t("status2.signed")}</option>
                      </select>
                    </div>
                    <div className="w-100 d-flex align-items-center mt-md-4 gap-3">
                      <label className="fs-17 fw-semibold lh-1">
                        {t("invoice_label")}
                      </label>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input "
                          type="checkbox"
                          id="invoiceToggle"
                          onChange={handleToggle}
                          checked={
                            modalState.addInvoices ||
                            modalState.isError ||
                            modalState.restriction ||
                            modalState.isInvoices ||
                            modalState.isDocument
                          }
                        />
                      </div>
                    </div>
                    <button className=" fs-17 lh-1 fw-semibold mt-md-4  agent-btn-responsive2 w-50 py-2 mx-1 rounded-pill " onClick={handleData}>
                      {t("show_button")}
                    </button>
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
                      fromDate={fromDate}
                      agreeData={agreeData}
                      toDate={toDate}
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
              className="modal-container"
            >
              <Modal.Header className="border-0 p-3 position-relative mt-4">
                <button
                  type="button"
                  className="btn-close position-absolute close-btn"
                ></button>
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
              show={modalState.addInvoices}
              className="modal-container"
              centered
              onClick={() => updateModalState({ addInvoices: false })}
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
                <div className="d-flex justify-content-center  my-3">
                  <button
                    className="fs-5 lh-1 fw-semibold mt-md-4  agent-btn-responsive1 text-white w-50 py-2 mx-1 rounded-pill"
                    onClick={() =>
                      updateModalState({ addInvoices: false, isError: true })
                    }
                  >
                    {t("invoice_view")}
                  </button>
                  <button
                    className="fs-5 lh-1 fw-semibold mt-md-4  agent-btn-responsive2 w-50 py-2 mx-1 rounded-pill "
                    onClick={() => updateModalState({ addInvoices: false })}
                  >
                    {t("invoice_all")}
                  </button>
                </div>
              </Modal.Body>
            </Modal>
            <Modal
              show={modalState.isError}
              centered
              className="modal-container"
              onClick={() => updateModalState({ isError: false })}
            >
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
                    className="fs-5 lh-1 fw-semibold mt-md-4  agent-btn-responsive1 text-white w-50 py-2 mx-1 rounded-pill"
                    onClick={() =>
                      updateModalState({ isError: false, restriction: true })
                    }
                  >
                    {t("yes_register")}
                  </button>
                  <button
                    className="fs-5 lh-1 fw-semibold mt-md-4  agent-btn-responsive2 w-50 py-2 mx-1 rounded-pill "
                    onClick={() => updateModalState({ isError: false })}
                  >
                    {t("no_now")}
                  </button>
                </div>
              </Modal.Body>
            </Modal>
            <Modal
              show={modalState.restriction}
              centered
              className="modal-container"
              onClick={() => updateModalState({ restriction: false })}
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
                    className="fs-5 lh-1 fw-semibold mt-md-4  agent-btn-responsive1 text-white w-50 py-2 px-3 mx-1 rounded-pill"
                    onClick={() =>
                      updateModalState({ restriction: false, isInvoices: true })
                    }
                  >
                    {t("yes_register_transaction")}
                  </button>
                  <button
                    className="fs-5 lh-1 fw-semibold mt-md-4  agent-btn-responsive2 w-50 py-2 mx-1 rounded-pill "
                    onClick={() => updateModalState({ restriction: false })}
                  >
                    {t("no_now")}
                  </button>
                </div>
              </Modal.Body>
            </Modal>
            <Modal
              show={modalState.isInvoices}
              centered
              className="modal-container"
              onClick={() => updateModalState({ isInvoices: false })}
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
                    className="fs-5 lh-1 fw-semibold mt-md-4  agent-btn-responsive1 text-white w-50 py-2 mx-1 rounded-pill"
                    onClick={() =>
                      updateModalState({ isInvoices: false, isDocument: true })
                    }
                  >
                    {t("view_invoice")}
                  </button>
                  <button
                    className="fs-5 lh-1 fw-semibold mt-md-4  agent-btn-responsive2 w-50 py-2 mx-1 rounded-pill"
                    onClick={() => updateModalState({ isInvoices: false })}
                  >
                    {t("all_invoices")}
                  </button>
                </div>
              </Modal.Body>
            </Modal>
            <Modal
              show={modalState.isDocument}
              center
              className="modal-container "
              onClick={() => updateModalState({ isDocument: false })}
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
                <div className="d-flex justify-content-center flex-nowrap gap-2 my-3">
                  <button className="fs-17 lh-1 fw-semibold mt-md-4  agent-btn-responsive2 w-50 py-2 mx-1 rounded-pill">
                    {t("all1_invoices")}
                  </button>
                  <button
                    className="fs-17 lh-1 fw-semibold mt-md-4  agent-btn-responsive2 w-50 py-2 mx-1 rounded-pill"
                    onClick={handleCloseall}
                  >
                    {t("download_invoice")}
                  </button>
                  <button
                    className="fs-17 lh-1 fw-semibold mt-md-4  agent-btn-responsive1 text-white w-50 py-2 mx-1 rounded-pill"
                    onClick={handleClick}
                  >
                    {t("register_transaction")}
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
            <Nav variant="tabs" className="mx-md-3 fs-15 pt-2 ">
              <div className="col-6 text-center">
                <Tab
                  className={`border-0 fs-6 text-nowrap fw-normal px-1 lh-1 w-100 ${
                    activeTab === "recent" ? "active-tab fw-bold" : ""
                  }`}
                  onClick={() => setActiveTab("recent")}
                  children={t("recent_agreements")}
                  tab={true}
                />
              </div>
              <div className="col-6 text-center">
                <Tab
                  className={`border-0 fs-6 text-nowrap fw-normal px-1 lh-1 w-100 ${
                    activeTab === "all" ? "active-tab fw-bold" : ""
                  }`}
                  onClick={() => setActiveTab("all")}
                  children={t("all_agreements")}
                  tab={true}
                />
              </div>
            </Nav>
          </div>
          <div className="row px-1">
            <div className="col-12 col-md-8">
              <div className="m-3 position-relative border border-[#D6D6D6] rounded py-2 px-3">
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
          <Accordion className="d-block p-0 scroll-height d-md-none d-flex flex-column gap-3 my-2 overflow-y-auto overflow-x-hidden custom-scrollbar">
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