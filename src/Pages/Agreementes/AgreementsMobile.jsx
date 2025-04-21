import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Nav } from "react-bootstrap";
import Tab from "../../Componant/Common/Tab/Tab";
import { motion } from "framer-motion";
import search from "../../assets/images/search.png";
import { Accordion } from "react-bootstrap";
import Toggle from "../../Componant/Common/Toggle/Toggle";
import { useNavigate, useParams } from "react-router-dom";
import key from "../../assets/images/key_vertical.svg";
import { useAgreementServices } from "../../Services/AgreementServices";
import { IoIosArrowDown } from "react-icons/io";
import { TbMailForward } from "react-icons/tb";
import { Dropdown } from "react-bootstrap";
import cancel from "../../assets/images/cancel.png";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiDeleteBin2Line } from "react-icons/ri";
import AddinvoicesIcon from "../../assets/images/addinvoices.png";
import Modal from "react-bootstrap/Modal";
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
              <span className="text-nowrap fs-14">
                {t("home_tab_r1_h1_l3")}
              </span>
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

              <Dropdown.Menu className="w_max">
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

const AgreementsMobile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const [activeTab, setActiveTab] = useState("all");
  const {
    tableData,
    searchQuery,
    handleSearchChange,
    getAgreementData,
    setTableData,
  } = useAgreementServices();
  const [isOpen, setIsOpen] = useState(false);
  const [addInvoices, setAddInvoices] = useState(false);
  const updateModalState = (value) => {
    setAddInvoices(value);
  };
  const handleToggle = (e) => {
    updateModalState(e.target.checked);
  };

  const handleClick = () => navigate(`/${lang}/invoices`);
  const handleInvoice = () => setAddInvoices(true);
  const handleisopen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const fetchAgreementData = async () => {
      try {
        const data = await getAgreementData();
        setTableData(data);
      } catch (error) {
        console.error("Failed to fetch agreement data:", error);
      }
    };
  
    fetchAgreementData();
  }, []);
  const borderColors = {
    default: "#f87171",
    signed: "#10b981",
    executed: "#fdba74",
    registered: "#3b82f6",
    viewed: "#f87171",
  };

  return (
    <>
      <div className="d-block ">
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
          <div className=" d-block">
            <p className="fs-6 fw-semibold lh-1 my-2 text-center text-teal">
              {t("more_filters")}
            </p>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={
                isOpen
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div className="d-block">
                <div className="row mx-1">
                  <div className="col-4">
                    <button className="agent-btn-responsive1 w-100 py-2 rounded-pill text-white">
                      {t("previous_month")}
                    </button>
                  </div>
                  <div className="col-4">
                    <button className="agent-btn-responsive2 w-100 py-2 rounded-pill">
                      {t("three_months")}
                    </button>
                  </div>
                  <div className="col-4">
                    <button className="agent-btn-responsive2 w-100 py-2 rounded-pill">
                      {t("half_year")}
                    </button>
                  </div>
                </div>
                <div className="w-100 px-3 my-3">
                  <label className="form-label fs-15 fw-semibold lh-1">
                    {t("agreement1_status")}
                  </label>
                  <select className="form-select">
                    <option>Genrated</option>
                    <option>Fail</option>
                    <option>Viewd</option>
                  </select>
                </div>
                <div className="row px-3">
                  <div className="col-6">
                    <label className="form-label fs-15 fw-semibold lh-1">
                      {t("to_date1")}
                    </label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-6">
                    <label className="form-label fs-15 fw-semibold lh-1">
                      {t("from_date1")}
                    </label>
                    <input type="date" className="form-control" />
                  </div>
                </div>
                <div className="w-100 px-3">
                  <div className="d-flex align-items-center">
                    <Toggle
                      defaultChecked
                      checked={addInvoices}
                      type="checkbox"
                      id="toggleImages"
                      onChange={handleToggle}
                    />
                    <label
                      className="fs-6 fw-normal lh-1"
                      htmlFor="toggleImages"
                    >
                      {t("invoice_issued")}
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="justify-content-center d-flex">
              <button className="border-0 bg-white" onClick={handleisopen}>
                <IoIosArrowDown />
              </button>
            </div>
          </div>
        </div>
        {activeTab === "all" && (
          <Accordion className=" p-0  d-flex flex-column gap-3 ">
            {tableData.map((row, index) => (
              <Accordion.Item
                eventKey={index.toString()}
                key={row.id}
                style={{
                  borderInlineStart: `6px solid ${
                    borderColors[row.actionType] || "#f87171"
                  }`,
                }}
                className=" card mb-2 border-top"
              >
                <Accordion.Header>
                  <div className="d-flex align-items-center justify-content-between w-100 gap-2">
                    <div className="d-flex align-items-center flex-grow-1 gap-2">
                      <div className="p-1">
                        <img
                          src={key}
                          alt="vertical key"
                          className="img-fluid"
                          style={{
                            width: "30px",
                            height: "30px",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                      <div>
                        <span className="fw-semibold fs-12 d-block">
                          {row?.accountNumber} | {row?.date}
                        </span>
                        <p className="fw-bold fs-14 d-block mb-0">
                          {t(row?.agreementName)} |{" "}
                          <span className="fw-semibold lh-1 fs-12">
                            {t(row?.agreementType)}
                          </span>
                        </p>
                        <p className="fw-bold fs-12 d-block my-0">
                          {t("sitem3")} :{" "}
                          <span className="fw-semibold lh-1 fs-12">
                            {t(row?.clients)}
                          </span>
                        </p>
                        <p className="fw-bold fs-12 d-block mb-0">
                          {t("br_commission")} :{" "}
                          <span className="fw-semibold lh-1 fs-12">
                            {row?.commission}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 my-2">
                      <StatusBadge status={row?.status} />
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body className="p-0">
                  <div className="border-top px-2 ">
                    <div className="d-flex justify-content-center gap-1 w-100">
                      <ActionButtons
                        type={t(row?.actionType)}
                        icon={row?.icon}
                        onDelete={handleInvoice}
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        )}
      </div>
      <Modal
        show={addInvoices}
        className="modal-container"
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
            <img src={AddinvoicesIcon} alt="success icon open" className="" />
          </div>
          <h4 className="text-embed-500 fs-3 font-semibold pb-3">
            {t("invoice_success")}
          </h4>
          <div className="d-flex justify-content-center justify-content-md-between flex-wrap flex-md-nowrap my-3">
            <button
              className="fs-5 lh-1 fw-semibold agent-btn-responsive1 text-white my-md-3 w-50 py-2 py-md-0 mx-1 rounded-pill"
              onClick={handleClick}
            >
              {t("invoice_view")}
            </button>
            <button
              className="fs-5 lh-1 fw-semibold  py-2 my-3 agent-btn-responsive2 w-50  mx-1 rounded-pill "
              onClick={() => setAddInvoices(false)}
            >
              {t("invoice_all")}
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AgreementsMobile;
