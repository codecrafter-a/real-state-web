import React from "react";
import { useTranslation } from "react-i18next";
import "./PersonalArea.css";

const ChangeEmail = () => {
    const { t } = useTranslation();
    return (
        <div className="p-4 bg-white rounded-3 shadow-sm">
            <p className="w-100 text-center screen-1 border-bottom pb-3 mb-4 d-none d-md-block">
                {t("changeEmail")}
            </p>
            <div>
                <div className={`d-flex flex-column justify-content-md-start justify-content-between pe-md-3 overflow-y-auto overflow-x-hidden custom-scrollbar ${window.innerWidth >= 768 ? 'scroll-height' : 'password-scroll'}`}>
                    <div>
                        <div>
                            <p className="d-flex mt-1 fs-5 fw-semibold border-0 bg-transparent text-teal d-none d-md-block">
                                {t("personalDetails")}
                            </p>
                            <div className="w-345">
                                <label className="fw-semibold">{t("previousEmail")}</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="shirims1@gmail.com"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="w-345">
                                <label className="fw-semibold">{t("newEmail")}</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="new-email"
                                />
                            </div>
                            <div className="mt-3 w-345">
                                <label className="fw-semibold">{t("confirmNewEmail")}</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="confirm-email"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 d-flex justify-content-md-start justify-content-center">
                        <button className="btn btn-success px-4 fw-bold rounded-pill">{t("password_email_update")}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangeEmail;