import React, {useState} from "react";
import "./PersonalArea.css";
import search from "../../assets/images/search.png";
import SignatureInvoiceTable from "./SignatureInvoiceTable";
import { useTranslation } from "react-i18next";

const SignatureInvoice = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [isDateFilter, setIsDateFilter] = useState(false);

   const dateFilter = () => {
    setIsDateFilter(true)
   }
  return (
    <div className="p-md-4 custom-col rounded-3">
      <p className="w-100 text-center screen-1 border-bottom pb-3 mb-4 d-none d-md-block">
        {t("signature_invoice")}
      </p>
      <div className="overflow-y-auto overflow-x-hidden custom-scrollbar scroll-height">
        <div className="pe-md-3">
          <div className=" d-flex justify-content-start my-3">
            <div className="border rounded-1 input-group bg-white responsive-width ">
              <input
                type="text"
                className="form-control border-0 "
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
          <div className="mb-4 align-items-end gap-3 d-md-flex d-none">
            <div className="w-25">
              <label className="form-label">{t("from_date")}</label>
              <input type="date" className="form-control" 
               value={fromDate}
               onChange={(e) => setFromDate(e.target.value)}
              />
            </div>
            <div className="w-25">
              <label className="form-label">{t("to_date")}</label>
              <input type="date" className="form-control"
               value={toDate}
               onChange={(e) => setToDate(e.target.value)}
              />
            </div>
            <div>
              <button className="btn btn-outline-success rounded-pill px-4 py-2 w-103" onClick={dateFilter}>
                {t("show_button")}
              </button>
            </div>
          </div>
          <SignatureInvoiceTable  searchTerm={searchTerm} Fromdate={fromDate} Todate={toDate} isDateFilter={isDateFilter}/>
        </div>
      </div>
    </div>
  );
};

export default SignatureInvoice;
