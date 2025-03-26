import React from "react";
import { useTranslation } from "react-i18next";
import agentImage from "../../assets/images/agentImage.svg";
import { useNavigate, useParams } from "react-router-dom";

const Agents = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { lang } = useParams();

    return (
        <div className="p-4 bg-white rounded-3 shadow-sm">
            <p className="w-100 text-center screen-1 border-bottom pb-3 mb-5">
                {t("welcome_message")}
            </p>
            <div className="overflow-y-auto overflow-x-hidden custom-scrollbar scroll-height">
                <div className="pe-md-3">
                    <div className="d-flex flex-column text-center">
                        <p className="mb-0 fw-normal fs-md-4">{t("instructions_1")}</p>
                        <p className="mb-0 fw-normal fs-md-4">{t("instructions_2")}</p>
                        <p className="mb-0 fw-normal fs-md-4 mt-4">{t("free_plan")}</p>
                        <p className="mb-0 fw-normal fs-md-4">{t("upgrade_plan")}</p>
                    </div>
                    <div className="justify-content-center d-flex d-sm-none" style={{ marginTop: "70px" }}>
                        <img src={agentImage} alt="agentImage" />
                    </div>
                    <div className="d-flex justify-content-center flex-wrap gap-4" style={{ marginTop: "60px" }}>
                        <button className="hdr_btn py-2 rounded-pill px-5 border-0 me-0" onClick={() => navigate(`/${lang}/agents/add-agents`)}>{t("add_agent_button")}</button>
                        <button className="px-5 py-2 rounded-pill text-white bg-teal border-0">{t("upgrade_button")}</button>
                    </div>
                    <div className="justify-content-center d-none d-sm-flex" style={{ marginTop: "70px" }}>
                        <img src={agentImage} alt="agentImage" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agents;
