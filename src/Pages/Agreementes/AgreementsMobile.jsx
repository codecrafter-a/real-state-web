import React, {useState} from 'react'
import { useTranslation } from "react-i18next";
import { Nav } from "react-bootstrap";
import Tab from "../../Componant/Common/Tab/Tab";
import { motion } from "framer-motion";
import search from "../../assets/images/search.png";
import { Accordion } from "react-bootstrap";
import Toggle from "../../Componant/Common/Toggle/Toggle";
import key from "../../assets/images/key_vertical.svg";
import { useAgreementServices } from "../../Services/AgreementServices";
import { IoIosArrowDown } from "react-icons/io";


const AgreementsMobile = ({StatusBadge, ActionButtons, handletoggle, handleOpen, selectData}) => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState("all");
    const {  searchQuery, handleSearchChange } = useAgreementServices();
    const [isOpen, setIsOpen] = useState(false);
    
      const handleisopen = () => {
        setIsOpen((prev) => !prev);
      };
    
      
      const borderColors = {
        default: "#f87171",
        signed: "#10b981",
        executed: "#fdba74",
        registered: "#3b82f6",
        viewed: "#f87171",
      };
      
  return (
    <>
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
                    <Toggle defaultChecked type="checkbox" id="toggleImages" onChange={handletoggle}/>
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
          <Accordion className=" p-0 d-md-none d-flex flex-column gap-3 ">
          {selectData.map((row, index) => (
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
        style={{ width: "30px", height: "30px", objectFit: "contain" }}
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
        <span className="fw-semibold lh-1 fs-12">{t(row?.clients)}</span>
      </p>
      <p className="fw-bold fs-12 d-block mb-0">
        {t("br_commission")} :{" "}
        <span className="fw-semibold lh-1 fs-12">{row?.commission}</span>
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
  )
}

export default AgreementsMobile
