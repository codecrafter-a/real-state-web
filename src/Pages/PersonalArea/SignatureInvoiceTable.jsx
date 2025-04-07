import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import { FiEye } from "react-icons/fi";
import { LuDownload } from "react-icons/lu";
import "./PersonalArea.css";

const SignatureInvoiceTable = ({ searchTerm, Todate, Fromdate , isDateFilter}) => {
    console.log(searchTerm, "searchTerm")
    
    const { t } = useTranslation();

    const tableData = [
        { id: 1, invoice: "1234567", date: "06.06.24", clients: t("invoice_clients_Name"), subject: t("paymentForService"), amount: "3348 ₪" },
        { id: 2, invoice: "1234567", date: "06.06.24", clients: t("invoice_clients_Name"), subject: t("paymentForService"), amount: "3348 ₪" },
        { id: 3, invoice: "1234567", date: "06.06.24", clients: t("invoice_clients_Name"), subject: t("paymentForService"), amount: "3348 ₪" },
        { id: 4, invoice: "1234567", date: "06.06.24", clients: t("invoice_clients_Name"), subject: t("paymentForService"), amount: "3348 ₪" },
        { id: 5, invoice: "1234567", date: "06.06.24", clients: t("invoice_clients_Name"), subject: t("paymentForService"), amount: "3348 ₪" },
        { id: 6, invoice: "1234567", date: "06.06.24", clients: t("invoice_clients_Name"), subject: t("paymentForService"), amount: "3348 ₪" },
    ];

    const filteredData = tableData.filter((item) => {
        const term = searchTerm?.toLowerCase() || "";
        const name = item.clients?.toLowerCase?.() || "";
        console.log("itemsdadd", item);
        let matchesDate = true;
        if (isDateFilter) {
        const [day, month, shortYear] = item.date.split(".");
        const fullYear = `20${shortYear}`;
        const itemDate = new Date(`${fullYear}-${month}-${day}`); 
        const fromDateObj = Fromdate ? new Date(Fromdate) : null;
        const toDateObj = Todate ? new Date(Todate) : null;
        if (fromDateObj && toDateObj) {
          matchesDate = itemDate >= fromDateObj && itemDate <= toDateObj;
        } else if (fromDateObj) {
          matchesDate = itemDate >= fromDateObj;
        } else if (toDateObj) {
          matchesDate = itemDate <= toDateObj;
        }
    }
      
      
        const matchesSearch = name.includes(term);
      
        return matchesSearch && matchesDate;
      });
    return (
        <>
            <div className="mt-4 d-md-block d-none">
                <div className="table-responsive">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th className="table-head">{t("invoiceNumber")}</th>
                                <th className="table-head">{t("date")}</th>
                                <th className="table-head">{t("clients")}</th>
                                <th className="table-head">{t("invoice_subject")}</th>
                                <th className="table-head">{t("amount")}</th>
                                <th className="table-head">{t("actions")}</th>
                            </tr>
                        </thead>
                        <tbody className="border">
                            {filteredData.map((row) => (
                                <tr key={row.id}>
                                    <td className="d-table-cell align-middle py-4">{row.invoice}</td>
                                    <td c lassName="d-table-cell align-middle py-4">{row.date}</td>
                                    <td className="d-table-cell align-middle py-4">{row.clients}</td>
                                    <td className="d-table-cell align-middle py-4">{row.subject}</td>
                                    <td className="d-table-cell align-middle py-4">{row.amount}</td>
                                    <td className="d-table-cell align-middle py-4">
                                        <div className="d-flex gap-4 justify-content-center">
                                            <div className="d-flex align-items-center gap-1">
                                                <FiEye />
                                                <span>{t("view")}</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-1">
                                                <LuDownload />
                                                <span>{t("download")}</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="d-md-none d-block">
                <div className="accordion d-flex flex-column gap-3 mt-3" id="invoiceAccordion">
                    {tableData.map((row, index) => (
                        <div key={index} className="accordion-item rounded-3 overflow-hidden border">
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button className={`accordion-button align-items-start text-dark ${index === 0 ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded={index === 0} aria-controls={`collapse${index}`}>
                                    <div className="d-flex flex-column gap-2 w-100">
                                        <h4><u>{row.invoice}</u> | {row.date}</h4>
                                        <div><b>{t("for")}: </b> {row.clients}</div>
                                    </div>
                                </button>
                            </h2>
                            <div id={`collapse${index}`} className={`accordion-collapse collapse position-relative mt-n2 ${index === 0 ? "show" : ""}`} data-bs-parent="#invoiceAccordion">
                                <div className="accordion-body pt-0 mt-n1">
                                    <p className="mb-0"><b>{t("subject")}:</b> {row.subject}</p>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-0"><b>{t("amount")}:</b> {row.amount}</p>
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

export default SignatureInvoiceTable;

