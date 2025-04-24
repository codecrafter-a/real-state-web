import React from "react";
import SignatureInvoiceServices from "../../Services/SignatureInvoiceServices";
import { useTranslation } from "react-i18next";
import search from "../../assets/images/search.png";
import { FiEye } from "react-icons/fi";
const SignatureInvoiceMobile = () => {
  const { t } = useTranslation();
  const {
    searchTerm,
    setSearchTerm,
    fromDate,
    setFromDate,
    toDate,
    setToDate,
    setIsDateFilter,
    filteredData,
  } = SignatureInvoiceServices();

  const dateFilter = () => {
    setIsDateFilter(true);
  };
  return (
    <>
     <div className="px-3 ">
     <div className=" p-3 bg-white rounded-3 shadow-lg my-3">
        <div className=" d-flex justify-content-start py-2">
          <div className="border rounded-1 input-group bg-white responsive-width ">
            <input
              type="text"
              className="form-control border-0 pb-0"
              id="searchInput"
              placeholder={t("search_placeholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="input-group-text bg-transparent  border-0">
              <img src={search} alt="search" />
            </span>
          </div>
        </div>
        <div className="mb-4 align-items-end gap-3 d-flex d-none">
          <div className="w-25">
            <label className="form-label">{t("from_date")}</label>
            <input
              type="date"
              className="form-control"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div className="w-25">
            <label className="form-label">{t("to_date")}</label>
            <input
              type="date"
              className="form-control"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
          <div>
            <button
              className="btn btn-outline-success rounded-pill px-4 py-2 w-103"
              onClick={dateFilter}
            >
              {t("show_button")}
            </button>
          </div>
        </div>
      </div>
     </div>
     
      <div className="d-block">
        <div
          className="accordion d-flex flex-column gap-3 mt-3"
          id="invoiceAccordion"
        >
          {filteredData.map((row, index) => (
            <div
              key={index}
              className="accordion-item rounded-3 overflow-hidden border"
            >
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button align-items-start text-dark ${
                    index === 0 ? "" : "collapsed"
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={index === 0}
                  aria-controls={`collapse${index}`}
                >
                  <div className="d-flex flex-column gap-2 w-100">
                    <h4>
                      <u>{row.invoice}</u> | {row.date}
                    </h4>
                    <div>
                      <b>{t("for")}: </b> {row.clients}
                    </div>
                  </div>
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse position-relative mt-n2 ${
                  index === 0 ? "show" : ""
                }`}
                data-bs-parent="#invoiceAccordion"
              >
                <div className="accordion-body pt-0 mt-n1">
                  <p className="mb-0">
                    <b>{t("subject")}:</b> {row.subject}
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0">
                      <b>{t("amount")}:</b> {row.amount}
                    </p>
                    <div className="d-flex gap-1 align-items-center">
                      <FiEye />
                      <span>{t("view")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SignatureInvoiceMobile;
