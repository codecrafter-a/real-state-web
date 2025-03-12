import React, { useState } from "react";
import bodyBg from "../../assets/images/body_bg.webp";
import boryGroupRight from "../../assets/images/bory_group_right.png";
import boryGroupLeft from "../../assets/images/bory_group_left.png";
import search from "../../assets/images/search.png";
import remove_icon from "../../assets/images/remove_icon.svg";
import { Nav } from "react-bootstrap";
import AgreementsTable from "./AgreementsTable";
import { useTranslation } from "react-i18next";

const Agreements = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const { t } = useTranslation();

    return (
        <div>
                <h1 className="text-center text-success py-3 mb-4 border-bottom border-[#EAEAEA]">
                    {t("all_agreements")}
                </h1>
                <div className="overflow-auto custom-scrollbar" style={{ maxHeight: "594px" }}>
                    <div className="me-4">
                        <Nav variant="tabs" className="mb-3 border-bottom border-[#EAEAEA]">
                            <Nav.Item>
                                <Nav.Link className={`px-3 border-0 focus-ring-transparent hover-border-transparent ${activeTab === "all" ? "active-tab" : ""}`} onClick={() => setActiveTab("all")}>
                                    {t("all_agreements")}
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className={`px-3 border-0 focus-ring-transparent hover-border-transparent ${activeTab === "recent" ? "active-tab" : ""}`} onClick={() => setActiveTab("recent")}>
                                    {t("recent_agreements")}
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <div className="tab-content mt-3">
                            {activeTab === "all" && (
                                <div>
                                    <div className="mb-4 position-relative w-75 border border-[#D6D6D6] rounded py-2 px-3">
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

                                    <div className="mb-4 d-flex align-items-end gap-3">
                                        <div className="w-100">
                                            <label className="form-label">{t("from_date")}</label>
                                            <input type="date" className="form-control" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                                        </div>
                                        <div className="w-100">
                                            <label className="form-label">{t("until_date")}</label>
                                            <input type="date" className="form-control" value={toDate} onChange={(e) => setToDate(e.target.value)} />
                                        </div>
                                        <div className="w-100">
                                            <label className="form-label">{t("agreement_status")}</label>
                                            <select className="form-select">
                                                <option>{t("status_agreement")}</option>
                                                <option value="1">Option 1</option>
                                                <option value="2">Option 2</option>
                                                <option value="3">Option 3</option>
                                            </select>
                                        </div>
                                        <div className="w-100 d-flex align-items-center">
                                            <label className="me-2">{t("invoice_label")}</label>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="invoiceToggle" />
                                            </div>
                                        </div>
                                        <div>
                                            <button className="btn btn-outline-success rounded-pill px-5 py-2">{t("show_button")}</button>
                                        </div>
                                    </div>

                                    <div className="d-flex mb-5">
                                        <span className="d-flex align-items-center gap-3 py-2 px-3 rounded-pill" style={{ background: "#E9FAF4" }}>
                                            <span>{t("generated")}</span>
                                            <img src={remove_icon} alt="" className="img-fluid" style={{ width: "12px" }} />
                                        </span>
                                    </div>
                                    <div>
                                        <AgreementsTable />
                                    </div>
                                </div>
                            )}

                            {activeTab === "recent" && (
                                <div className="text-center py-4">
                                    <p>{t("no_recent_agreements")}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            <style>
                {`
                    .nav-tabs .nav-link {
                        color: #848484;
                        border-bottom: 2px solid transparent;
                        cursor: pointer;
                    }
                    .nav-tabs .nav-link.active-tab {
                        color: #00A6A4 !important;
                        border-bottom: 2px solid #00A6A4 !important;
                    }
                `}
            </style>
        </div>
    );
};

export default Agreements;
