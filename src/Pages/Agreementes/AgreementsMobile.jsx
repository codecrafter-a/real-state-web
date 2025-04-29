import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Nav } from "react-bootstrap";
import Tab from "../../Componant/Common/Tab/Tab";
import { motion } from "framer-motion";
import search from "../../assets/images/search.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import  pin  from "../../assets/images/pin.png";
import { Modal} from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import Toggle from "../../Componant/Common/Toggle/Toggle";
import { TbNotes } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import key from "../../assets/images/key_vertical.svg";
import { useAgreementServices } from "../../Services/AgreementServices";
import { IoIosArrowDown } from "react-icons/io";
import { TbMailForward } from "react-icons/tb";
import cancel from "../../assets/images/cancel.png";
import { HiOutlineDotsVertical } from "react-icons/hi";
import AddinvoicesIcon from "../../assets/images/addinvoices.png";
const ActionButtons = ({ type, icon, onClick }) => {


  const { t } = useTranslation();
  return (
    <div className="d-flex align-items-center justify-content-center justify-content-sm-start gap-3 p-2 bg-white">
      {(type === "genrated" || "sent" || "viewd") && (
        <>
          <div className="d-flex align-items-center gap-1">
            <TbMailForward className="fs-5" />
            <span className="text-wrap text-center fs-14 lh-1">
              {t("home_tab_r1_h1_l4")}
            </span>
          </div>
          {icon && (
            <div className="d-flex align-items-center gap-1">
              {icon} 
              <span className="text-wrap lh-1 fs-14" >{t("home_tab_r1_h1_l3")}</span>
            </div>
          )}
          <div className="d-flex align-items-center gap-2">
            <TbNotes className="fs-5"/>
              <span className="text-wrap text-center fs-14 lh-1" >
                {t("Agree_mobile_btn")}
              </span>
          </div>
          <div className="position-relative">
            <button className="border-0 bg-white d-flex align-items-center gap-2" onClick={onClick}>
              <HiOutlineDotsVertical size={18} />
              {t("home_tab_r1_h1_l1")}
            </button>
          </div> 
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
  const [show, setShow] = useState(false);

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
 const handleShow = () => setShow(true);

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

  useEffect(() => {
    console.log("Modal show state:", show);
  }, [show]);
  const borderColors = [
    { Generated: "#555555" },
    { sent: "#fef3c7" },
    { viewed: "#f87171" },
    { executed: "#10b981" },
    { registered: "#10b981" },
    { signin: "#10b981" },
  ];

  const handleModalClose = () => setAddInvoices(false);
  const handleInvoiceViewClick = () => navigate(`/${lang}/invoices`);

  return (
    <>
      <div className="d-block">
        <div className="bg-white border-2 rounded-2 mb-4 shadow">
          <div className="w-100 border-bottom">
            <Nav variant="tabs" className="mx-md-3 fs-15 pt-2">
              {["recent", "all"].map((tab) => (
                <div className="col-6 text-center" key={tab}>
                  <Tab
                    className={`border-0 fs-6 text-nowrap fw-normal px-1 lh-1 w-100 ${
                      activeTab === tab ? "active-tab fw-bold" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                    children={t(
                      tab === "recent" ? "recent_agreements" : "all_agreements"
                    )}
                    tab={true}
                  />
                </div>
              ))}
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

          {/* Filters Section */}
          <div className="d-block">
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
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div className="row mx-1">
                {["previous_month", "three_months", "half_year"].map(
                  (key, idx) => (
                    <div className="col-4" key={idx}>
                      <button className="agent-btn-responsive2 w-100 py-2 rounded-pill">
                        {t(key)}
                      </button>
                    </div>
                  )
                )}
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
                    onChange={(e) => setAddInvoices(e.target.checked)}
                  />
                  <label className="fs-6 fw-normal lh-1" htmlFor="toggleImages">
                    {t("invoice_issued")}
                  </label>
                </div>
              </div>
            </motion.div>
           
            <div className="justify-content-center d-flex">
              <button
                className="border-0 bg-white"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <IoIosArrowDown />
              </button>
            </div>
          </div>
        </div>
        {show && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{ zIndex: 1040, backgroundColor: "rgba(0,0,0,0.3)" }}
          onClick={() => setShow(false)}
        />
            )}
           <motion.div
        initial={{ y: "100%" }}
        animate={show ? { y: "0%" } : { y: "100%" }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="bottom-sheet position-fixed bg-white w-100 shadow"
        style={{
          zIndex: 1155,
          left: 0,
          bottom: 0,
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
        }}
      >
        {/* Drag Indicator */}
        <div className="drag-indicator bg-teal mx-auto mt-2"></div>

        {/* Options List */}
        <ul className="list-unstyled p-3 my-3">
          <li className="d-flex align-items-center  gap-2">
            <img src={pin} alt="pin" style={{width: "17px", height: "17px"}} />
            <span className="fs-6 lh-1 fw-normal">{t("copy_signature")}</span>
          </li>
          <li className="d-flex align-items-center my-3 gap-2">
            <img src={cancel} alt="cancel"  className="" />
            <span className="fs-6 lh-1 fw-normal">{t("cancel_signature")}</span>
          </li>
          <li className="d-flex align-items-center  gap-2">
            <RiDeleteBin6Line  className="" size={20}/>
            <span className="fs-6 lh-1 fw-normal">{t("delet_signature")}</span>
          </li>
        </ul>
           </motion.div>

        {activeTab === "all" && (
          <Accordion className="p-0 d-flex flex-column gap-3">
            {tableData.map((row, index) => {
              console.log(row.userID, "aaaaaaaaaaaaaaaaa");

              const borderColor = borderColors[index]
                ? Object.values(borderColors[index])[0]
                : "#000000";

              console.log("🚀 ~ borderColor:", borderColor);
              return (
                <Accordion.Item
                  eventKey={index.toString()}
                  key={row.id}
                  style={{
                    borderInlineStart: `6px solid ${borderColor}`,
                  }}
                  className="card mb-2 border-top"
                >
                  {console.log(row, "rowrowrowrowrow")}
                  <Accordion.Header>
                    <div className="d-flex align-items-center justify-content-between w-100 gap-2">
                      <div className="d-flex align-items-center flex-grow-1 gap-2">
                        <img
                          src={key}
                          alt="vertical key"
                          style={{
                            width: "30px",
                            height: "30px",
                            objectFit: "contain",
                          }}
                        />
                        <div>
                          <span className="fw-semibold fs-12 d-block" >
                            {row?.accountNumber} | {row?.date}
                          </span>
                          <p className="fw-bold fs-14 mb-0">
                            {t(row?.agreementName)} |{" "}
                            <span className="fw-semibold fs-12">
                              {t(row?.agreementType)}
                            </span>
                          </p>
                          <p className="fw-bold fs-12 my-0">
                            {t("sitem3")} :{" "}
                            <span className="fw-semibold fs-12">
                              {t(row?.clients)}
                            </span>
                          </p>
                          <p className="fw-bold fs-12 mb-0">
                            {t("br_commission")} :{" "}
                            <span className="fw-semibold fs-12">
                              {row?.commission}
                            </span>
                          </p>
                        </div>
                      </div>
                      <StatusBadge status={row?.status} />
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="p-0">
                    <div className="border-top px-2">
                      <div className="d-flex justify-content-center gap-1 w-100">
                        <ActionButtons
                          type={t(row?.actionType)}
                          icon={row?.icon}
                          onClick={handleShow}
                        />
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
          
          
        )}
         
      </div>
      
      {/* Add Invoices Modal */}
      <Modal
        show={addInvoices}
        centered
        className="modal-container"
        onHide={handleModalClose}
      >
        <Modal.Header closeButton className="border-0 p-3 mt-4" />
        <Modal.Body className="text-center p-4">
          <img src={AddinvoicesIcon} alt="success icon open" className="mb-3" />
          <h4 className="text-embed-500 fs-3 font-semibold pb-3">
            {t("invoice_success")}
          </h4>
          <div className="d-flex justify-content-center gap-2 flex-wrap">
            <button
              className="fs-5 fw-semibold agent-btn-responsive1 text-white w-50 py-2 rounded-pill"
              onClick={handleInvoiceViewClick}
            >
              {t("invoice_view")}
            </button>
            <button
              className="fs-5 fw-semibold agent-btn-responsive2 w-50 py-2 rounded-pill"
              onClick={handleModalClose}
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
