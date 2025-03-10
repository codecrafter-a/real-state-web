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
            <div className="w-full absolute top-0 overflow-hidden z-0">
                <figure className="mb-0 top_bg_fig">
                    <img src={bodyBg} width="100%" alt="Background" />
                    <span className="absolute right-0 top-2">
                        <img src={boryGroupLeft} alt="left bg icon" />
                    </span>
                </figure>
                <div className="w-25">
                    <img src={boryGroupRight} alt="right bg icon" />
                </div>
            </div>

            <div className="min-h-[550px] bg-white max-w-full w-[1194px] my-0 mx-auto pb-6 relative z-50 rounded-2xl shadow-lg">
                <div className="px-6">
                    <h1 className="text-2xl font-semibold text-[#00A481] py-4 mb-7 border-b border-solid border-[#EAEAEA] text-center">
                        {t("all_agreements")}
                    </h1>
                </div>
                <div className="px-6 py-0">
                    <div className="h-[646px] overflow-y-scroll custom-scrollbar">
                        <div className="mr-7">
                            <Nav variant="tabs" className="d-flex px-3 pt-2 px-md-4 border-bottom">
                                <Nav.Item>
                                    <Nav.Link
                                        className={`px-3 focus:!border-transparent hover:!border-transparent ${activeTab === "all" ? "active-tab" : ""}`}
                                        onClick={() => setActiveTab("all")}
                                    >
                                        {t("all_agreements")}
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        className={`px-3 focus:!border-transparent hover:!border-transparent ${activeTab === "recent" ? "active-tab" : ""}`}
                                        onClick={() => setActiveTab("recent")}
                                    >
                                        {t("recent_agreements")}
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <div className="tab-content mt-4">
                                {activeTab === "all" && (
                                    <div>
                                        <div className="w-full d-flex">
                                            <div className="position-relative d-flex justify-between">
                                                <span className="position-absolute mt-3 px-3 end-0">
                                                    <img src={search} alt="" className="w-4 h-4" />
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control end-0"
                                                    placeholder={t("search_placeholder")}
                                                    style={{ width: "726px", height: "44px", borderRadius: "5px", border: "1px solid #D6D6D6" }}
                                                />
                                            </div>
                                        </div>

                                        <div className="row justify-center align-items-center mt-4">
                                            <div className="col fw-semibold">
                                                <label className="d-flex w-100">{t("from_date")}</label>
                                                <div className="form-control d-flex align-items-center">
                                                    <input
                                                        type="date"
                                                        className="border-0 w-100"
                                                        value={fromDate}
                                                        onChange={(e) => setFromDate(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col fw-semibold">
                                                <label className="d-flex w-100">{t("until_date")}</label>
                                                <div className="form-control d-flex align-items-center">
                                                    <input
                                                        type="date"
                                                        className="border-0 w-100"
                                                        value={toDate}
                                                        onChange={(e) => setToDate(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col fw-semibold">
                                                <label className="d-flex w-100">{t("agreement_status")}</label>
                                                <select className="form-select focus:!shadow-none">
                                                    <option>{t("status_agreement")}</option>
                                                    <option value="1">Option 1</option>
                                                    <option value="2">Option 2</option>
                                                    <option value="3">Option 3</option>
                                                </select>
                                            </div>
                                            <div className="col-auto d-flex align-items-center mt-3">
                                                <label className="form-check-label me-2">{t("invoice_label")}</label>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="invoiceToggle" />
                                                </div>
                                            </div>
                                            <div className="col-auto mt-3">
                                                <button className="btn btn-outline-success !rounded-full lh-1">{t("show_button")}</button>
                                            </div>
                                        </div>

                                        <div className="d-flex mt-4">
                                            <span
                                                className="bg-emerald-500 flex gap-4 py-2.5 px-3 rounded-[18px] h-10 align-items-center"
                                                style={{ backgroundColor: "#E9FAF4" }}
                                            >
                                                <span>{t("generated")}</span>
                                                <img src={remove_icon} alt="" className="w-3" />
                                            </span>
                                        </div>
                                        <div className="mt-11">
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
