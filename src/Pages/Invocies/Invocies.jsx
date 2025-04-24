import React, { useState} from "react";
import { Col, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Tab from "../../Componant/Common/Tab/Tab";
import search from "../../assets/images/search.png";
import InvoicesTable from "./InvoicesTable";
import { IoIosArrowDown } from "react-icons/io";
import { useInvoiceServices } from "../../Services/InvoicesServices";
import Modal from "react-bootstrap/Modal";
import AddinvoicesIcon from "../../assets/images/addinvoices.png";
import pdfinstall from "../../assets/images/pdf.png";
const Invocies = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("all");
  const { getInvoiceService } = useInvoiceServices();
  const { getFilterInvoicesData } = useInvoiceServices();
  const AgentData = getInvoiceService();
  const [invoiceData, setInvoiceData] = useState(AgentData);
  const [clientName, setClientName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [untilDate, setUntilDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSearch = () => {
    const data = getFilterInvoicesData({ clientName, fromDate, untilDate });
    setInvoiceData(data);
  };
  const handleClick = () => setIsOpen(true);
  return (
    <>
      <Col className="bg-white shadow-lg rounded-3 my-3">
        <p className="py-3 mb-4 screen-1 text-center border-bottom d-none d-md-block">
          {t("invoice_title")}
        </p>
        <div className="w-100 border-bottom">
          <Nav variant="tabs" className=" pt-2">
            <Tab
              className={`border-0 text-center fs-5 text-nowrap fw-normal px-1 lh-1 text-md-start ${
                activeTab === "recent" ? "active-tab fw-bold" : ""
              }`}
              onClick={() => setActiveTab("recent")}
              children={t("invoice_tab_title2")}
              tab={true}
            />
            <Tab
              className={` border-0 text-center fs-5 fw-normal lh-1 text-md-start ${
                activeTab === "all" ? "active-tab fw-bold" : ""
              }`}
              onClick={() => setActiveTab("all")}
              children={t("invoice_tab_title1")}
              tab={true}
            />
          </Nav>
        </div>
        <div
          className="custom-scrollbar overflow-y-auto overflow-x-hidden px-3 mt-4"
          style={{ maxHeight: "594px" }}
        >
          {activeTab === "all" && (
            <>
              <div className=" d-flex justify-content-start ">
                <div className="border rounded-1 input-group responsive-width p-0">
                  <input
                    type="text"
                    className="form-control border-0 "
                    id="searchInput"
                    placeholder={t("invoice_placeholder")}
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                  <span className="input-group-text bg-transparent  border-0">
                    <img src={search} alt="search" />
                  </span>
                </div>
              </div>
              <div className="w-100 my-3 d-block d-md-none">
                  <label className="form-label fs-15 fw-semibold lh-1">
                    {t("agreement1_status")}
                  </label>
                  <select className="form-select">
                     <option>Genrated</option>
                     <option>Fail</option>
                     <option>Viewd</option>
                  </select>
                </div>
              <div className="row g-3 align-items-end my-3">
                <div className="col-6 col-md-3">
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

                <div className="col-6 col-md-3">
                  <label className="form-label fs-15 fw-semibold lh-1">
                    {t("until_date")}
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    value={untilDate}
                    onChange={(e) => setUntilDate(e.target.value)}
                  />
                </div>

                <div className="col-12 col-md-6 text-center text-md-end">
                  <button
                    className=" fs-17 lh-1 fw-semibold py-2 px-5 rounded-pill agent-btn-responsive2"
                    onClick={handleSearch}
                  >
                    {t("show_button")}
                  </button>
                </div>
              </div>

              <div className="d-md-none d-block">
                <p className=" fs-16 fw-semibold lh-1 my-2 text-center text-teal">
                  {t('additional_filters')}
                </p>
                <div className="justify-content-center d-flex">
                  <IoIosArrowDown />
                </div>
              </div>
              <div className=" py-4">
                <InvoicesTable data={invoiceData} handleClick={handleClick}/>
              </div>
            </>
          )}
          {activeTab === "recent" && (
            <div className="text-center py-4">
              <p>{t("no_invoices_page_show")}</p>
            </div>
          )}
        </div>
      </Col>
      <Modal
        show={isOpen}
        center
        className="modal-container "
        onClick={() => setIsOpen(false)}
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
                  <button className="fs-17 lh-1 fw-semibold mt-md-4  agent-btn-responsive2 w-50 py-2 mx-1 rounded-pill">
                    {t("all1_invoices")}
                  </button>
                  <button
                    className="fs-17 lh-1 fw-semibold mt-md-4  agent-btn-responsive2 w-50 py-2 mx-1 rounded-pill"
                  >
                    {t("download_invoice")}
                  </button>
                  <button
                    className="fs-17 lh-1 fw-semibold mt-md-4  agent-btn-responsive1 text-white w-50 py-2 mx-1 rounded-pill"
                  >
                    {t("register_transaction")}
                  </button>
                </div>
              </Modal.Body>
      </Modal>
    </>
  );
};

export default Invocies;
