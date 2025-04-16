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
import { useNavigate, useParams } from "react-router-dom";
import Tab from "../../Componant/Common/Tab/Tab";
import { IoIosArrowDown } from "react-icons/io";
import { useAgreementServices } from "../../Services/AgreementServices";
import { TbMailForward } from "react-icons/tb";
import { Dropdown } from "react-bootstrap";
import cancel from "../../assets/images/cancel.png";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiDeleteBin2Line } from "react-icons/ri";
import AgreementsMobile from "./AgreementsMobile";
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
    searchQuery,
    selectedStatus,
    fromDate,
    toDate,
    handleStatusChange,
    handleRemoveStatus,
    handleSearchChange,
    setFromDate,
    setToDate,
    getAgreementData,
    setTableData,
    handleAgreeChange
  } = useAgreementServices();

  useEffect(() => { 
    setTableData(getAgreementData());
  }, []);
  console.log("formfataaauhdsf", fromDate);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const handleOpen = () => setRemoveData(true);
  const handleClose = () => setRemoveData(false);
  const handleClick = () => navigate(`/${lang}/invoices`);
  const handleRegistry = () => navigate(`/${lang}/landregistry`)
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
      <div className="d-flex align-items-center gap-2  p-2  bg-white">
        {(type === "genrated" || "sent" || "viewd") && (
          <>
            <div className="d-flex align-items-center gap-1">
              <TbMailForward />
              <span className="text-nowrap fs-14">{t("home_tab_r1_h1_l4")}</span>
            </div>
            {icon && (
              <div className="d-flex align-items-center gap-1">
                {icon}
                <span className="text-nowrap fs-14">{t("home_tab_r1_h1_l3")}</span>
              </div>
            )}
           
            <div className="position-relative">
              <Dropdown className="d-flex align-items-center">
                <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                  as="div"
                  variant="light"
                  className="border-0 bg-transparent custom-dropdown-toggle d-flex align-items-center gap-1 cursor-pointer"
                >
                  <HiOutlineDotsVertical size={18} />
                  {t("home_tab_r1_h1_l1")}
                </Dropdown.Toggle>

                <Dropdown.Menu 
                className="w_max"
                >
                  <Dropdown.Item
                    href="#/action-1"
                    className="d-flex align-items-center gap-1 m-2 p-0"
                  >
                    <img
                      src={cancel}
                      alt="cancel"
                      className="img-fluid"
                      style={{
                        width: "20px",
                        height: "20px",
                        objectFit: "contain",
                      }}
                    />
                    <span className="fs-15 lh-1 fw-normal">
                      {t("cancel_signing_process")}
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    className="d-flex align-items-center gap-2 m-2 p-0"
                  >
                    <RiDeleteBin2Line size={18} />
                    <span className="fs-15 lh-1 fw-normal">
                      {t("delete_agreement")}
                    </span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <span className="text-nowrap fs-14">{t("home_tab_r1_h1_l2")}</span>
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
                    <p className=" fs-16 fw-semibold lh-1 my-2 text-center text-teal">{t("additional_filters")}</p>
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
                    <button
                      className=" fs-17 lh-1 fw-semibold mt-md-4  agent-btn-responsive2 w-50 py-2 mx-1 rounded-pill "
                      onClick={handleAgreeChange}
                    >
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
                      selectedStatus={selectedStatus}
                      selectData={tableData}
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
                <div className="d-flex justify-content-center flex-wrap flex-md-nowrap justify-content-md-between gap-3">
                <button className="agent-btn-responsive1 w-50  rounded-pill px-3 py-2 fw-bold shadow-sm text-white" onClick={() =>
                      updateModalState({ addInvoices: false, isError: true })
                    }>
                    {t("modal_yes")}
                  </button>
                  <button
                    className="agent-btn-responsive2 w-50  rounded-pill px-3 py-2 fw-bold shadow-sm"
                    onClick={handleClose}
                  >
                    {t("modal_no")}
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
                <div className="d-flex justify-content-center justify-content-md-between flex-wrap flex-md-nowrap my-3">
                  <button
                    className="fs-5 lh-1 fw-semibold agent-btn-responsive1 text-white my-md-3 w-50 py-2 py-md-0 mx-1 rounded-pill"
                    // onClick={() =>
                    //   updateModalState({ addInvoices: false, isError: true })
                    // }
                    onClick={handleClick}
                  >
                    {t("invoice_view")}
                  </button>
                  <button
                    className="fs-5 lh-1 fw-semibold  py-2 my-3 agent-btn-responsive2 w-50  mx-1 rounded-pill "
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
                <div className="d-flex justify-content-center flex-wrap flex-md-nowrap justify-content-md-between my-3">
                  <button
                    className="fs-6 lh-1 fw-semibold  my-3 agent-btn-responsive1 text-white my-md-3 w-50 py-2 py-md-0 mx-1 rounded-pill"
                    onClick={() =>
                      updateModalState({ isError: false, restriction: true })
                    }
                  >
                    {t("yes_register")}
                  </button>
                  <button
                    className="fs-5 lh-1 fw-semibold  py-2 my-3 agent-btn-responsive2 w-50  mx-1 rounded-pill  "
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
                <div className="d-flex justify-content-center justify-content-md-between flex-wrap flex-md-nowrap my-3">
                  <button
                    className="fs-5 lh-1 fw-semibold  py-2 my-2 agent-btn-responsive1 text-white my-md-3 w-50  py-md-0  mx-1  rounded-pill"
                    onClick={() =>
                      updateModalState({ restriction: false, isInvoices: true })
                    }
                  >
                    {t("yes_register_transaction")}
                  </button>
                  <button
                    className="fs-5 lh-1 fw-semibold  py-2 my-3 agent-btn-responsive2 w-50  mx-1 rounded-pill "
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
                <div className="d-flex justify-content-md-between justify-content-center flex-wrap flex-md-nowrap my-3">
                  <button
                    className="fs-5 lh-1 fw-semibold py-2  agent-btn-responsive1 text-white my-md-3 w-50  py-md-0 mx-1  rounded-pill"
                    onClick={() =>
                      updateModalState({ isInvoices: false, isDocument: true })
                    }
                  >
                    {t("view_invoice")}
                  </button>
                  <button
                    className="fs-5 lh-1 fw-semibold  py-2 my-3 agent-btn-responsive2 w-50  mx-1 rounded-pill"
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
                <div className="d-flex justify-content-center flex-wrap flex-md-nowrap gap-2 my-3">
                  <button className="fs-17 lh-1 fw-semibold mt-md-4  agent-btn-responsive2 w-50 py-2 mx-1 rounded-pill" onClick={handleClick}>
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
                    onClick={handleRegistry}
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
      <AgreementsMobile 
      ActionButtons={ActionButtons}  
      StatusBadge={StatusBadge} 
      handletoggle={handleToggle} 
      handleOpen={handleOpen}
      selectData={tableData}
      />
    </>
  );
};

export default Agreements;
