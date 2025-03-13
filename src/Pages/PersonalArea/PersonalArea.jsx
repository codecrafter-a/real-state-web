import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import companyLogo from "../../assets/images/company-logo.svg";
import { useTranslation } from "react-i18next";
import { Modal, Button } from "react-bootstrap";
import { FiCamera } from "react-icons/fi";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const PersonalArea = () => {
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        licenseNumber: '',
        phone: '',
        secondaryEmail: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <div className="p-4 bg-white rounded-3 shadow-sm">
            <p className="w-100 text-center screen-1 border-bottom py-3 mb-4">
                {t("personalArea.title")}
            </p>
            <div className="overflow-y-auto overflow-x-hidden custom-scrollbar" style={{ height: "660px" }}>
                <div className="pe-3">
                    <div className="d-flex flex-wrap gap-3 align-items-start">
                        <div className="d-flex flex-column flex-grow-1">
                            <div className="d-flex flex-wrap justify-content-between w-100 gap-4 align-items-center">
                                <div className="d-flex gap-5">
                                    <div className="d-flex align-items-center gap-5">
                                        <div className="position-relative">
                                            <div className="bg-white rounded-pill shadow-md d-flex justify-content-center align-items-center" style={{ width: '104px', height: '104px', border: '1px solid #D6D6D6' }}>
                                                <div className="d-flex flex-column align-items-center">
                                                    <div><img alt="icon" src={companyLogo} /></div>
                                                    <span style={{ color: "#ADADAD", fontSize: "12px" }}>{t("personalArea.logo")}</span>
                                                </div>
                                            </div>
                                            <div className="position-absolute rounded-pill d-flex justify-content-center align-items-center" onClick={handleShowModal} style={{ background: "#00A481", width: '35px', height: '35px', top: "34px", right: "-15px" }}>
                                                <FiPlus color="white" size={22} />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column my-auto text-nowrap">
                                            <span className="fs-5 d-flex fw-semibold" style={{ color: "#00A481" }}>{t("personalArea.name")}</span>
                                            <span className="fs-5 fw-semibold" style={{ color: "#00A481" }}>{t("personalArea.role")}</span>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-wrap gap-4 align-items-center">
                                        <div className="d-flex flex-wrap gap-4 align-items-center text-end">
                                            <div className="d-flex flex-column my-auto text-nowrap">
                                                <span className="fs-6 d-flex fw-semibold text-secondary">{t("personalArea.area_type")}</span>
                                                <span className="fs-5 text-dark">STARTER</span>
                                            </div>
                                            <div className="d-flex flex-column my-auto">
                                                <span className="fs-6 d-flex fw-semibold text-secondary">{t("personalArea.endDate")}</span>
                                                <span className="fs-5 text-dark">17.07.2023</span>
                                            </div>
                                            <div className="d-flex flex-column my-auto">
                                                <span className="fs-6 d-flex fw-semibold text-secondary">{t("personalArea.agreementsSentThisMonth")}</span>
                                                <span className="fs-5 text-dark d-flex">
                                                    <strong>10</strong>/50
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button className="hdr_btn border border-transparent">{t("personalArea.upgradeSubscription")}</button>
                                </div>
                            </div>

                            <button className="d-flex mt-5 text-primary fw-semibold text-decoration-underline border-0 bg-transparent">
                                {t("personalArea.invoicesReceived")}
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className="d-flex mt-5 fs-5 fw-semibold border-0 bg-transparent" style={{ color: "#00A481" }}>
                            {t("personalArea.personalDetails")}
                        </p>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <label className="fw-semibold">{t("personalArea.fullName")}</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fullName"
                                    placeholder={t("personalArea.name")}
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="fw-semibold">{t("personalArea.licenseNumber")}</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="licenseNumber"
                                    placeholder="1234567"
                                    value={formData.licenseNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="fw-semibold">{t("personalArea.phone")}</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    placeholder="0544-4692650"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-4">
                                <label className="fw-semibold">{t("personalArea.email")}</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="shirims@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <a href="#" className="text-primary d-block mt-1 fw-semibold">{t("personalArea.changeEmail")}</a>
                            </div>
                            <div className="col-md-4">
                                <label className="fw-semibold">{t("personalArea.password")}</label>
                                <div className="position-relative">
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="***********"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <span className="position-absolute top-0 end-0 mt-1 me-2">
                                        <FaEye />
                                    </span>
                                </div>
                                <a href="#" className="text-primary d-block mt-1 fw-semibold">{t("personalArea.changePassword")}</a>
                            </div>
                            <div className="col-md-4">
                                <label className="fw-semibold">{t("personalArea.secondaryEmail")}</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="secondaryEmail"
                                    placeholder="shirims1@gmail.com"
                                    value={formData.secondaryEmail}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <button className="btn btn-success px-4 fw-bold rounded-pill" style={{ width: '146px' }}>{t("personalArea.updateButton")}</button>
                        </div>
                    </div>
                </div>

            </div>
            <Modal show={showModal} onHide={handleCloseModal} centered className="custom-modal">
                <Modal.Header className="border-0 p-3 position-relative mt-4">
                    <button
                        type="button"
                        className="btn-close position-absolute"
                        style={{ left: "14px", top: "6px" }}
                        onClick={handleCloseModal}
                    ></button>
                </Modal.Header>

                <Modal.Body className="text-center p-4">
                    <h4 className="text-embed-500 fw-bold">{t("personalArea.modalTitle")}</h4>
                    <div className="d-flex justify-content-center gap-5 mt-4 mb-5">
                        <div className="text-center d-flex align-items-center justify-content-center flex-column">
                            <div className="rounded-circle p-4 d-flex align-items-center justify-content-center"
                                style={{ background: "#F3F5FF", width: "100px", height: "100px" }}>
                                <FiCamera size={48} className="text-embed-500" />
                            </div>
                            <p className="mt-2 text-black fw-semibold fs-5">{t("personalArea.galleryOption")}</p>
                        </div>

                        <div className="text-center">
                            <div className="rounded-circle p-4 d-flex align-items-center justify-content-center"
                                style={{ background: "#F3F5FF", width: "100px", height: "100px" }}>
                                <MdOutlineAddPhotoAlternate size={48} className="text-embed-500" />
                            </div>
                            <p className="mt-2 text-black fw-semibold fs-5">{t("personalArea.cameraOption")}</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default PersonalArea;