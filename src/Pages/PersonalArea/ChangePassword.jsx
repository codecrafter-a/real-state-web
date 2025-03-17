import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./PersonalArea.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ChangePassword = () => {
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="p-4 bg-white rounded-3 shadow-sm">
            <p className="w-100 text-center screen-1 border-bottom pb-3 mb-4">
                {t("changePassword")}
            </p>
            <div className="overflow-y-auto overflow-x-hidden custom-scrollbar scroll-height">
                <div className="pe-3">
                    <div>
                        <p className="d-flex mt-1 fs-5 fw-semibold border-0 bg-transparent text-teal">
                            {t("personalDetails")}
                        </p>
                        <div className="w-345">
                            <label className="fw-semibold">{t("previousPassword")}</label>
                            <div className="position-relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control"
                                    name="password"
                                    placeholder="***********"
                                />
                                <span className="position-absolute top-0 end-0 mt-2 me-2 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="w-345">
                            <label className="fw-semibold">{t("newPassword")}</label>
                            <div className="position-relative">
                                <input
                                    type={showNewPassword ? "text" : "password"}
                                    className="form-control"
                                    name="new-password"
                                    placeholder="***********"
                                />
                                <span className="position-absolute top-0 end-0 mt-2 me-2 cursor-pointer"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                >
                                    {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            <span className="text-primary d-block mt-1 fw-semibold text-decoration-underline cursor-pointer">
                                {t("generatePassword")}
                            </span>
                        </div>
                        <div className="mt-3 w-345">
                            <label className="fw-semibold">{t("confirmNewPassword")}</label>
                            <div className="position-relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    className="form-control"
                                    name="confirm-password"
                                    placeholder="***********"
                                />
                                <span className="position-absolute top-0 end-0 mt-2 me-2 cursor-pointer"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button className="btn btn-success px-4 fw-bold rounded-pill update-btn">
                            {t("password_email_update")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
