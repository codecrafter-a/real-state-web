import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import { FiEye } from "react-icons/fi";
import { LuDownload } from "react-icons/lu";
import "./PersonalArea.css";

const SignatureInvoiceTable = ( { filteredData } ) => {
    const { t } = useTranslation();
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
        </>
    );
};

export default SignatureInvoiceTable;

