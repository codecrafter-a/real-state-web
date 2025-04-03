import React from "react";
import { Modal } from "react-bootstrap";
import key_vertical from "../../assets/images/key_vertical.svg";
import garage_door from "../../assets/images/garage_door.svg";
import CommonPieChart from "../../Componant/Common/PieChart/PieChart";
import { useTranslation } from 'react-i18next';

const AgentGraphModal = ({ show, handleClose }) => {
    const { t } = useTranslation();
    const data = [
        { name: t("home_accro_in5"), value: 15 },
        { name: t("home_accro_in4"), value: 8 },
    ];
    const COLORS = ["#3AC2A3", "#166D64"];

    const AgentData = [
        { name: t("data_gra_litegrren"), value: 50 },
        { name: t("data_gra_green"), value: 30 },
        { name: t("data_gra_grey"), value: 20 },
        { name: t("data_gra_yellow"), value: 15 },
        { name: t("data_gra_red"), value: 10 },
    ];

    const AgentCOLORS = ["#166D64", "#3AC2A3", "#CCCCCC", "#FF9900", "#FF3743"];
    return (
        <Modal show={show} onHide={handleClose} centered className="agent-modal-container">
            <Modal.Header className="border-0 p-3 position-relative mt-4">
                <button type="button" className="btn-close position-absolute close-btn" onClick={handleClose}></button>
            </Modal.Header>
            <Modal.Body className="text-center py-0">
                <h5 className="fw-semibold">{t("dashboard_title")}</h5>
                <div className="mt-4 box1_color p-3 rounded-2">
                    <div className="d-flex align-items-center justify-content-center">
                        <div>
                            <h5 className="fw-bold text-teal">{t("commissions_and_deals")}</h5>

                            <div className="d-flex align-items-center justify-content-center gap-4 mt-4">
                                <div>
                                    <p className="mb-0 text-teal fs-1 fw-semibold">
                                        ₪35,659
                                    </p>
                                    <p className="mb-0 fw-semibold text-dark fs-5">{t("commission")}</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div style={{ height: "87px", width: "4px", background: "linear-gradient(to bottom, #009EA6, #75D976)" }}
                                    ></div>
                                </div>
                                <div>
                                    <p className="mb-0 text-teal fs-1 fw-semibold">23</p>
                                    <p className="mb-0 fw-semibold text-dark fs-5">{t("deals")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 box1_color p-3 rounded-2">
                    <div className="d-flex align-items-center">
                        <div className="w-100">
                            <h5 className="fw-bold text-teal text-center">{t("buy_sell_transactions")}</h5>
                            <div className="d-flex mt-4">
                                <div className="d-flex w-100 justify-content-between">
                                <div className="d-flex align-items-center gap-4">
                                    <CommonPieChart data={data} colors={COLORS} />
                                </div>
                                    <div className="">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img src={garage_door} alt="door card" />
                                        </div>
                                        <p className='pt-2 mb-0 fs-5 text-teal font-semibold'>{t("buy_transactions")}</p>
                                        <div className='d-flex gap-1 align-items-end'>
                                            <p className='text-end mb-0 fs-3 font-semibold text-black'>25,378</p>
                                            <p className='text-end mb-0 pb-1 fs-5'>₪</p>
                                        </div>
                                        <div className='d-flex gap-1 align-items-end'>
                                            <p className='text-end mb-0 fs-3 font-semibold text-black'>08</p>
                                            <p className='text-end mb-0 pb-1 fs-5'>{t("deals")}</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img src={key_vertical} alt="key card" />
                                        </div>
                                        <p className='pt-2 mb-0 fs-5 text-teal font-semibold' >{t("rental_transactions")}</p>
                                        <div className='d-flex gap-1 align-items-end'>
                                            <p className='text-end mb-0 fs-3 font-semibold text-black'>10,378</p>
                                            <p className='text-end mb-0 pb-1 fs-5'>₪</p>
                                        </div>
                                        <div className='d-flex gap-1 align-items-end'>
                                            <p className='text-end mb-0 fs-3 font-semibold text-black'>15</p>
                                            <p className='text-end mb-0 pb-1 fs-5'>{t("deals")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-4 box1_color p-3 rounded-2">
                    <h5 className="fw-bold text-teal text-center">{t("total_agreements_by_status")}</h5>
                    <div className="mt-3 d-flex gap-4">
                        <CommonPieChart data={AgentData} colors={AgentCOLORS} />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="border-top-0 justify-content-center">
                <button className="px-4 py-2 text-white bg-teal border-teal rounded-pill fw-semibold mb-5" onClick={handleClose}>
                    {t("full_dashboard")}
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default AgentGraphModal;
