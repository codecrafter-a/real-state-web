import React from "react";
import "./PersonalArea.css";
import search from "../../assets/images/search.png";
import SignatureInvoiceTable from "./SignatureInvoiceTable";
import { useTranslation } from "react-i18next";

const SignatureInvoice = () => {
    const { t } = useTranslation();

    return (
        <div className="p-md-4 custom-col rounded-3">
            <p className="w-100 text-center screen-1 border-bottom pb-3 mb-4 d-none d-md-block">
                {t("signature_invoice")}
            </p>
            <div className="overflow-y-auto overflow-x-hidden custom-scrollbar scroll-height">
                <div className="pe-md-3">
                    <div className="mb-4 position-relative w-75 border border-[#D6D6D6] rounded py-2 px-3 d-md-flex d-none">
                        <div className="d-flex">
                            <input
                                type="text"
                                className="form-control border-0 p-0"
                                placeholder={t("search_placeholder")}
                            />
                            <button className="btn p-0" type="button">
                                <img src={search} alt="Search" />
                            </button>
                        </div>
                    </div>
                    <div className="mb-4 align-items-end gap-3 d-md-flex d-none">
                        <div className="w-25">
                            <label className="form-label">{t("from_date")}</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="w-25">
                            <label className="form-label">{t("to_date")}</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div>
                            <button className="btn btn-outline-success rounded-pill px-4 py-2 w-103">
                                {t("show")}
                            </button>
                        </div>
                    </div>
                    <SignatureInvoiceTable />
                </div>
            </div>
        </div>
    );
};

export default SignatureInvoice;
