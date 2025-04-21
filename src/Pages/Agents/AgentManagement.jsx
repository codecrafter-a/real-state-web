import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import person_add from "../../assets/images/person_add.svg";
import search from "../../assets/images/search.png";
import { RiDeleteBin2Line, RiBarChartFill } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import warningIcon from "../../assets/images/warningIcon.svg";
import AgentGraphModal from "./AgentGraphModal";
import i18n from "../../i18n";
import AgentServices from "../../Services/AgentServices";

const AgentManagement = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [showGraphModal, setShowGraphModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const agentData = AgentServices();
  const [filteredAgents, setFilteredAgents] = useState(agentData);

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    const filtered = agentData.filter(
      (agent) =>
        agent.name.toLowerCase().includes(term) ||
        agent.email.toLowerCase().includes(term) ||
        agent.phone.toLowerCase().includes(term)
    );
    setFilteredAgents(filtered);
  };

  return (
    <>
      <div className="pt-4 px-3 bg-white rounded-3 shadow-lg my-3">
        <p className="w-100 text-center screen-1 border-bottom pb-3 mb-4 d-none d-md-block">
          {t("agentManagement")}
        </p>
        <div className="overflow-y-auto overflow-x-hidden custom-scrollbar scroll-height">
          <div className="px-md-3">
            <div className="d-flex justify-content-start justify-content-md-end my-3   ">
              <button
                className="d-flex gap-1 align-items-center py-1 fs-12 px-4 text-teal bg-transparent border-teal rounded-pill fw-semibold"
                onClick={() => navigate(`/${i18n}/agents/add-agents`)}
              >
                <img src={person_add} alt="person_add" />
                {t("addNewAgent")}
              </button>
            </div>
            <div className="row px-1">
              <div className="col-12 col-md-8">
                <div className="mb-4 position-relative border border-[#D6D6D6] rounded py-2 px-3">
                  <div className="d-flex">
                    <input
                      type="text"
                      className="form-control border-0 p-0"
                      placeholder={t("searchPlaceholder")}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                      className="btn p-0"
                      type="button"
                      onClick={handleSearch}
                    >
                      <img src={search} alt="Search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex  justify-content-md-start justify-content-center">
              <div className="flex-column">
                <p className="text-black fs-6 fw-semibold">
                  {t("remainingSlots")}
                </p>
                <button className="hdr_btn border-0 px-4 me-0">
                  {t("upgradeNow")}
                </button>
              </div>
            </div>
            <div className="mt-4">
              <table className="table text-center d-none d-md-table">
                <thead>
                  <tr>
                    <th className="table-head">
                      {t("tableHeaders.agentNumber")}
                    </th>
                    <th className="table-head">
                      {t("tableHeaders.agentName")}
                    </th>
                    <th className="table-head">
                      {t("tableHeaders.commission")}
                    </th>
                    <th className="table-head">
                      {t("tableHeaders.agreementsSent")}
                    </th>
                    <th className="table-head">{t("tableHeaders.phone")}</th>
                    <th className="table-head">{t("tableHeaders.email")}</th>
                    <th className="table-head">{t("tableHeaders.actions")}</th>
                  </tr>
                </thead>
                <tbody className="border">
                  {filteredAgents.map((agent) => (
                    <tr key={agent.id}>
                      <td className="d-table-cell align-middle py-4">
                        {agent.agentNumber}
                      </td>
                      <td className="d-table-cell align-middle py-4">
                        {t(agent.name)}
                      </td>
                      <td className="d-table-cell align-middle py-4">
                        {agent.commission}
                      </td>
                      <td className="d-table-cell align-middle py-4">
                        {agent.agreements}
                      </td>
                      <td className="d-table-cell align-middle py-4">
                        {agent.phone}
                      </td>
                      <td className="d-table-cell align-middle py-4">
                        {agent.email}
                      </td>
                      <td className="d-table-cell align-middle py-4">
                        <div className="d-flex gap-3 justify-content-center align-items-center">
                          <button
                            className="py-1 px-3 text-teal bg-transparent border-teal rounded-pill fw-semibold"
                            onClick={() => setShowModal(true)}
                          >
                            {t("loginAsAgent")}
                          </button>
                          <span
                            className="cursor-pointer"
                            onClick={() => setShowGraphModal(true)}
                          >
                            <RiBarChartFill />
                          </span>
                          <span
                            className="cursor-pointer"
                            onClick={() =>
                              navigate(`/${lang}/agents/edit-agents`)
                            }
                          >
                            <MdOutlineModeEditOutline />
                          </span>
                          <span className="cursor-pointer">
                            <RiDeleteBin2Line />
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          centered
          className="modal-container"
        >
          <Modal.Header className="border-0 p-3 position-relative mt-4">
            <button
              type="button"
              className="btn-close position-absolute close-btn"
              onClick={() => setShowModal(false)}
            ></button>
          </Modal.Header>
          <Modal.Body className="text-center justify-center py-0">
            <div className="flex items-center justify-center">
              <img src={warningIcon} alt="warningIcon" />
            </div>
            <div className="my-4">
              <p className="text-black fw-semibold fs-5">
                {t("warningMessage")}
              </p>
              <p className="m-0 text-black fw-normal fs-5">
                {t("continuePrompt")}
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer className="border-top-0 justify-content-center flex gap-3 mt-2 mb-3">
            <button
              className="px-3 py-2 text-teal bg-transparent border-teal rounded-pill fw-semibold w-25"
              onClick={() => setShowModal(false)}
            >
              {t("yes")}
            </button>
            <button className="px-3 py-2  text-white bg-teal border-teal rounded-pill fw-semibold w-25">
              {t("no")}
            </button>
          </Modal.Footer>
        </Modal>
        <AgentGraphModal
          show={showGraphModal}
          handleClose={() => setShowGraphModal(false)}
        />
      </div>
    </>
  );
};

export default AgentManagement;
