import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import add_reaction from "../../assets/images/add_reaction.svg";
import search from "../../assets/images/search.svg";
import search_icon2 from "../../assets/images/search_icon2.svg";
import remove_icon from "../../assets/images/remove_icon.svg";
import action_icon1 from "../../assets/images/action_icon1.svg";
import action_icon2 from "../../assets/images/action_icon2.svg";
import ErrorIcon from "../../assets/images/ErrorIcon.svg";
import RangeSlider from "../../Componant/Common/RangeSlider/RangeSlider";
import { Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useClientService } from "../../Services/ClientService";
import close from "../../assets/images/ButtonClose.png";
import CustomerTable from "./CustomerTable";
const Customer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [propertyCondition, setPropertyCondition] = useState("");
  const [clientNameInput, setClientNameInput] = useState("");
  const [clientType, setClientType] = useState("");
  const [recent, setRecent] = useState("");
  const { getClientData,  filteredClients, setFilteredClients, } = useClientService();

  console.log(filteredClients, "getClientsgetClients");

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleOpen = () => {
    setIsModalOpen(true);
  };
  const handleClick = () => {
    const filtered = getClientData({
      clientName: clientNameInput,
      type1: clientType,
      property_type1: propertyType,
      location1: location,
      property_condition1: propertyCondition,
      recent_agreement: recent,
    });
    console.log("locatiodfkj", location);
    setFilteredClients(filtered);
  };

  console.log("handleCLick Event", propertyType);

  return (
    <>
      <div className="customer-container d-none d-md-block w-100 mx-auto pb-3 position-relative z-50 rounded-3 shadow-lg px-0">
        <p className="py-3 mb-4 screen-1 text-center border-bottom d-none d-md-block">
          {t("all_cust")}
        </p>
        <div>
          <div className="px-3">
            <form className="custom-scrollbar overflow-y-auto overflow-x-hidden scroll-height">
              <div className="px-3">
                <div className="mb-3 d-flex justify-content-end flex-wrap gap-3">
                  <button
                    type="button"
                    className="fs-17 lh-1 fw-semibold mt-md-4 agent-btn-responsive2 px-5 py-2 mx-1 rounded-pill align-items-center d-flex gap-1"
                    onClick={() => navigate(`/${lang}/customers/add-customers`)}
                  >
                    <img src={add_reaction} alt="Add Client" />
                    {t("add_cust")}
                  </button>
                </div>

                <div className="mb-4 position-relative border border-[#D6D6D6] rounded py-2 px-3 d-flex w-75">
                  <input
                    type="text"
                    className="form-control border-0 p-0 flex-grow-1"
                    placeholder={t("filter_cust")}
                    value={clientNameInput}
                    onChange={(e) => setClientNameInput(e.target.value)}
                  />
                  <button
                    className="btn border-0 p-0 ms-2"
                    type="button"
                    aria-label="Search"
                  >
                    <img src={search} alt="Search" />
                  </button>
                </div>

                <div className="mb-4 d-flex flex-nowrap align-items-center gap-3">
                  <div>
                    <label className="mb-1 fs-15 lh-1 fw-semibold">
                      {t("cust_filter_1")}
                    </label>
                    <select
                      className="form-select"
                      value={clientType}
                      onChange={(e) => setClientType(e.target.value)}
                    >
                      <option value="">Select Option</option>
                      <option value={t("type_cust_2")}>
                        {" "}
                        {t("type_cust_2")}
                      </option>
                      <option value="Location 2">auraaa</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 fs-15 lh-1 fw-semibold">
                      {t("cust_filter_2")}
                    </label>
                    <div className="position-relative border border-[#D6D6D6] rounded py-2 px-3 d-flex mx-auto">
                      <input
                        type="text"
                        className="form-control border-0 p-0 flex-grow-1"
                        placeholder={t("cust_filter_place_2")}
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                      <button
                        className="btn border-0 p-0 ms-2"
                        type="button"
                        aria-label="Search"
                      >
                        <img src={search} alt="Search" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 fs-15 lh-1 fw-semibold">
                      {t("cust_serch")}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={t("cust_typing")}
                      value={recent}
                      onChange={(e) => setRecent(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="mb-1 fs-15 lh-1 fw-semibold">
                      {t("cust_Property_type")}
                    </label>
                    <select
                      className="form-select"
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                    >
                      <option value="">All Property Types</option>
                      <option value={t("cust_property_type_value")}>
                        {t("cust_property_type_value")}
                      </option>
                      <option value="villa">{t("cust_property_villa")}</option>
                      <option value="studio">
                        {t("cust_property_studio")}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 fs-15 lh-1 fw-semibold">
                      {t("cust_Property_condition")}
                    </label>
                    <select
                      className="form-select"
                      value={propertyCondition}
                      onChange={(e) => setPropertyCondition(e.target.value)}
                    >
                      <option value="">Select Option</option>
                      <option value={t("cust_Property_Condition_value")}>
                        {t("cust_Property_Condition_value")}
                      </option>
                      <option value="Bad">Option 2</option>
                    </select>
                  </div>
                  <div className="d-flex ">
                    <button
                      type="button"
                      className="fs-17 lh-1 fw-semibold mt-md-4 w-20 agent-btn-responsive1 text-white py-2 mx-1 rounded-pill"
                      style={{
                        boxShadow: "0 10px 8px rgba(0, 0, 0, 0.1)",
                        minWidth: "146px",
                      }}
                      onClick={handleClick}
                    >
                      {t("cust_search")}
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <div>
                    <div className="d-flex align-items-center gap-3">
                      <ul className="list-unstyled d-flex flex-wrap justify-content-start m-0 align-items-center p-0 w-100">
                        <li>
                          <button
                            type="button"
                            onClick={handleOpen}
                            className="fs-17 lh-1 fw-semibold  agent-btn-responsive2 px-3  py-2 mx-1 rounded-pill align-items-center d-flex gap-1"
                          >
                            <img src={search_icon2} alt="Add Client" />
                            {t("advance_search")}
                          </button>
                        </li>
                        {Array.from({ length: 6 }, (_, i) => (
                          <li
                            key={i}
                            className="bg-success w-max bg-opacity-10 rounded-pill d-flex px-3 py-2 align-items-center gap-2 text-center"
                            style={{
                              margin: "5px",
                            }}
                          >
                            <div className="custom-text">
                              {t(`cust_opt_${i + 1}`)}
                            </div>
                            <span>
                              <img src={remove_icon} alt="Remove" />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="d-flex flex-wrap justify-content-end gap-2 mt-4">
                      <button
                        type="button"
                        className="fs-17 lh-1 fw-semibold mt-md-4 agent-btn-responsive2 px-5 py-1 mx-1 rounded-pill"
                      >
                        {t("cust_delete")}
                      </button>

                      <button
                        type="button"
                        className="fs-17 lh-1 gap-1 fw-bold mt-md-4 w-20 agent-btn-responsive1 text-white py-1 mx-1 rounded-pill d-flex align-items-center justify-content-center"
                      >
                        <img src={action_icon1} alt="Sign Client" />
                        <span className="custom-text-green">
                          {" "}
                          {t("auth_cust_sigin")}
                        </span>
                      </button>

                      <button
                        type="button"
                        className="fs-17 lh-1 gap-1 fw-bold mt-md-4 w-20 agent-btn-responsive1 text-white  py-1 mx-1 rounded-pill d-flex align-items-center justify-content-center"
                      >
                        <img src={action_icon2} alt="Sign Owner" />
                        <span className="custom-text-green">
                          {" "}
                          {t("auth_pro_Owner_sigin")}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <CustomerTable
                  handleShowModal={handleShowModal}
                  filteredClients={filteredClients}
                  setFilteredClients={setFilteredClients}
                />
              </div>
            </form>
          </div>
          <Modal
            show={showModal}
            onHide={handleCloseModal}
            centered
            className="modal-container top-modal-dialog"
          >
            <Modal.Header className="border-0 p-3 d-flex justify-content-end mt-4 ">
              <button
                type="button"
                className="btn p-0 border-0 bg-transparent"
                onClick={() => handleCloseModal(false)}
              >
                <img src={close} alt="close" />
              </button>
            </Modal.Header>

            <Modal.Body className="text-center justify-center pb-4">
              <div className="flex items-center justify-center">
                <img src={ErrorIcon} alt="ErrorIcon" />
              </div>
              <div>
                <p className="mt-4 mb-0 text-black fw-semibold fs-5">
                  {t("modal.deleteCustomerTitle")}
                </p>
                <p className="m-0 text-black fw-semibold fs-5">
                  {t("modal.deleteCustomerQuestion")}
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer className="border-top-0 justify-content-center flex-md-wrap d-flex gap-3">
              <button
                className="fs-17 lh-1 gap-1 fw-semibold  w-25 agent-btn-responsive1 text-white py-3 rounded-pill"
                style={{ width: "153px", padding: "13px 0" }}
              >
                {t("modal.yesButton")}
              </button>
              <button
                className="fs-17 lh-1 gap-1 fw-semibold w-25 agent-btn-responsive2 py-3 rounded-pill"
                style={{ width: "153px", padding: "13px 0" }}
                onClick={handleCloseModal}
              >
                {t("modal.noButton")}
              </button>
            </Modal.Footer>
          </Modal>
          <Modal
            show={isModalOpen}
            onClick={() => setIsModalOpen(false)}
            centered
            className="modal-container"
            dialogClassName="modal-dialog-bottom"
          >
            <Modal.Header className="border-0 p-3 d-flex justify-content-end mt-3">
              <button
                type="button"
                className="btn p-0 border-0 bg-transparent"
                onClick={() => setIsModalOpen(false)}
              >
                <img src={close} alt="close" />
              </button>
            </Modal.Header>
            <h3 className="py-3 px-2 mb-3 text-center screen-1  d-none d-md-block">
              {t("addtional_filter")}
              <hr className="border-secondary" />
            </h3>

            <Modal.Body className=" px-5 py-0 modal-body-scrollable" >
              <div className="d-block d-md-none">
                <div className="flex-grow-1 text-start">
                  <label className="mb-1 fs-15 lh-1 fw-semibold">
                    {t("cust_filter_1")}
                  </label>
                  <select className="form-select">
                    <option disabled selected>
                      Select Option
                    </option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
                <div className="flex-grow-1 text-start">
                  <label className="mb-1 fs-15 lh-1 fw-semibold ">
                    {t("cust_filter_2")}
                  </label>
                  <div className="position-relative border border-[#D6D6D6] rounded py-2 px-3 d-flex mx-auto">
                    <input
                      type="text"
                      className="form-control border-0 p-0 mb-0"
                      placeholder={t("cust_filter_place_2")}
                    />
                    <button
                      className="btn border-0 p-0 ms-2"
                      type="button"
                      aria-label="Search"
                    >
                      <img src={search} alt="Search" />
                    </button>
                  </div>
                </div>
                <div className="flex-grow-1 text-start">
                  <label className="form-label fs-15 lh-1 fw-semibold">
                    {t("cust_serch")}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("cust_typing")}
                  />
                </div>

                <div className="flex-grow-1 text-start">
                  <label className="mb-1 fs-15 lh-1 fw-semibold">
                    {t("cust_Property_type")}
                  </label>
                  <select className="form-select">
                    <option disabled selected>
                      Select Option
                    </option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>

                <div className="flex-grow-1 text-start">
                  <label className="mb-1 fs-15 lh-1 fw-semibold">
                    {t("cust_Property_condition")}
                  </label>
                  <select className="form-select">
                    <option disabled selected>
                      Select Option
                    </option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
                <div className="col">
                  <label className="d-block text-secondary text-start fs-15 lh-1 fw-semibold mb-1">
                    {t("cust_modal_no_rooms")}
                  </label>
                  <div className="position-relative d-flex align-items-center border rounded px-2 py-1">
                    <input
                      type="text"
                      placeholder="התחילו להקליד..."
                      className="w-100 border-0 text-secondary"
                    />
                    <button
                      className="btn btn-outline-none py-0"
                      type="button"
                      aria-label="Search"
                    >
                      <img src={search_icon2} alt="Search" />
                    </button>
                  </div>
                </div>
                <div className="col">
                  <label className="d-block text-secondary text-start  fs-15 lh-1 fw-semibold mb-1">
                    {t("floor")}
                  </label>
                  <select className="form-select">
                    <option></option>
                    <option>בחר</option>
                  </select>
                </div>
              </div>
              <div className="d-flex flex-column gap-4 mb-4">
                <RangeSlider label={t("cust_slider_label")} />
                <RangeSlider label={t("cust_slider_label2")} />
              </div>
              <h3 className="lh-1 fs-5  font-semibold text-teal mb-3">
                {t("addtional_feature")}
              </h3>
              <div className="d-flex flex-wrap gap-2 justify-content-start">
                {Array.from({ length: 9 }, (_, i) => (
                  <button
                    key={i}
                    className="bg-gray-200 px-3 py-1 rounded-pill text-secondary fs-15 fw-normal lh-1 border-0"
                  >
                    {t(`addtional_feature_${i + 1}`)}
                  </button>
                ))}
              </div>
            </Modal.Body>

            <Modal.Footer className="border-top-0 justify-content-between gap-3 mb-3 px-4">
              <button
                className="fs-17 lh-1 gap-1 fw-semibold mt-md-4 w-25 agent-btn-responsive2 py-2 mx-1 rounded-pill"
                onClick={() => setIsModalOpen(false)}
              >
                {t("cust_model_footer")}
              </button>
              <button className="fs-17 lh-1 gap-1 fw-semibold mt-md-4 w-25 agent-btn-responsive1 text-white  py-2 mx-1 rounded-pill">
                {t("cust_model_footer1")}
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};
export default Customer;
