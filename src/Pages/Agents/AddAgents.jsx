import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import SuccessIcon from "../../assets/images/SuccessIcon.svg";
import { useNavigate, useParams } from "react-router-dom";

const AddAgents = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { lang } = useParams();
    const [showPassword, setShowPassword] = useState(false);
    const [passwordVerify, setPasswordVerify] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="p-4 bg-white rounded-3 shadow-sm">
            <p className="w-100 text-center screen-1 border-bottom pb-3 mb-4">
                {t("addAgent.title")}
            </p>
            <div className="overflow-y-auto overflow-x-hidden custom-scrollbar scroll-height">
                <div className="pe-3">
                    <div className="text-teal fs-4 fw-semibold mb-4">
                        {t("addAgent.personalDetails")}
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <label className="fw-semibold">{t("addAgent.fullName")}</label>
                            <input type="text" className="form-control" name="fullName" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <label className="fw-semibold">{t("addAgent.phone")}</label>
                            <input type="number" className="form-control" name="number" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <label className="fw-semibold">{t("addAgent.email")}</label>
                            <input type="email" className="form-control" name="email" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <label className="fw-semibold">{t("addAgent.licenseNo")}</label>
                            <input type="text" className="form-control" name="licenseNo" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <label className="fw-semibold">{t("addAgent.password")}</label>
                            <div className="position-relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control"
                                    name="password"
                                />
                                <span
                                    className="position-absolute top-0 end-0 mt-2 me-2 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            <span className="text-primary d-block mt-1 fw-semibold text-decoration-underline cursor-pointer">
                                {t("addAgent.generatePassword")}
                            </span>
                        </div>
                        <div className="col-md-4">
                            <label className="fw-semibold">{t("addAgent.confirmPassword")}</label>
                            <div className="position-relative">
                                <input
                                    type={passwordVerify ? "text" : "password"}
                                    className="form-control"
                                    name="password"
                                />
                                <span
                                    className="position-absolute top-0 end-0 mt-2 me-2 cursor-pointer"
                                    onClick={() => setPasswordVerify(!passwordVerify)}
                                >
                                    {passwordVerify ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            <span className="d-block mt-1 fw-medium" style={{ fontSize: "14px" }}>
                                {t("addAgent.passwordNote")}
                            </span>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button className="px-5 py-2 rounded-pill text-white bg-teal border-0" onClick={handleShowModal}>
                            {t("addAgent.addButton")}
                        </button>
                    </div>
                </div>
            </div>
            <Modal show={showModal} onHide={handleCloseModal} centered className="modal-container">
                <Modal.Header className="border-0 p-3 position-relative mt-4">
                    <button type="button" className="btn-close position-absolute close-btn" onClick={handleCloseModal}></button>
                </Modal.Header>
                <Modal.Body className="text-center justify-center py-0">
                    <div className="flex items-center justify-center">
                        <img src={SuccessIcon} alt="SuccessIcon" />
                    </div>
                    <div className="text-teal fs-4 fw-semibold my-4">{t("addAgent.agent_added_successfully")}</div>
                    <div className="my-4">
                        <p className="mb-0 text-black fw-semibold fs-5">
                            {t("addAgent.subscription_limit_reached")}
                        </p>
                        <p className="m-0 text-black fw-normal fs-5">
                            {t("addAgent.upgrade_subscription")}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer className="border-top-0 justify-content-center flex gap-3 mt-2 mb-3">
                    <button className="hdr_btn py-2 px-5 border-0 me-0" onClick={() => navigate(`/${lang}/agent-management`)}>
                        {t("addAgent.upgrade_now")}
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddAgents;

