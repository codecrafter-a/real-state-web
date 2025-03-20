import React from "react";
import { useTranslation } from 'react-i18next';

const EditAgents = () => {
    const { t } = useTranslation();

    return (
        <div className="p-4 bg-white rounded-3 shadow-sm">
            <p className="w-100 text-center screen-1 border-bottom pb-3 mb-4">
                {t("addAgent.editAgent")}
            </p>
            <div className="overflow-y-auto overflow-x-hidden custom-scrollbar scroll-height">
                <div className="pe-3">
                    <div className="text-teal fs-4 fw-semibold mb-4">
                        {t("personalDetails")}
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
                    <div className="mt-5">
                        <button className="px-5 py-2 rounded-pill text-white bg-teal border-0">
                            {t("addAgent.updateButton")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditAgents;

