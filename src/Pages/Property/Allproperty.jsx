import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import add_home from "../../assets/images/add_home.svg";
import Toggle from "../../Componant/Common/Toggle/Toggle";
import search from "../../assets/images/search.png";
import search_icon2 from "../../assets/images/search_icon2.svg";
import remove_icon from "../../assets/images/remove_icon.svg";
import Propertytable from "./Propertytable";
import { usePropertyservices } from "../../Services/PropertyServices";
import { useNavigate, useParams } from "react-router-dom";
import  RangeSlider  from '../../Componant/Common/RangeSlider/RangeSlider';
import { Modal } from "react-bootstrap";
import close from "../../assets/images/ButtonClose.png";
const Allproperty = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const {
    location,
    setLocation,
    setClientNameInput,
    clientNameInput,
    setPropertytype,
    propertytype,
    getClientData,
    dataPropertyServices,
    setFilteredClients,
    filteredClients,
    sel,
    setSel,
    setProcondition,
    procondition,
  } = usePropertyservices();
  const handleClick = () => {
    const filtered = getClientData({
      clientName: clientNameInput,
      type1: sel,
      property_type1: propertytype,
      location1: location,
      property_condition1: procondition,
    });
    console.log("locatiodfkj", filteredClients);
    setFilteredClients(filtered);
  };
  useEffect(() => {
    setFilteredClients(dataPropertyServices);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(filteredClients, "asdsdsd");
  return (
    <>
      <div className="bg-white shadow-lg d-none d-md-block">
        <p className="w-100 text-center screen-1 border-bottom py-3 mb-4 d-none d-md-block">
          {t("All_Property")}
        </p>
        <div
          className="custom-scrollbar overflow-y-auto overflow-x-hidden px-3 mt-4"
          style={{ maxHeight: "594px" }}
        >
         <div className="d-flex justify-content-end">
  <button
    type="button"
    className="border-teal my-2 rounded-pill py-1 px-4 search-button"
    onClick={() => navigate(`/${lang}/Property/add_property`)}
  >
    <div className="d-flex align-items-center justify-content-center">
      <img className="me-1" src={add_home} alt="Add Client" />
      {t("Add_Property")}
    </div>
  </button>
</div>
          <div className="row align-items-center my-3">
            <div className="col-12 col-md-8">
              <div className="d-flex justify-content-start">
                <div className="border rounded-1 input-group w-100 p-0">
                  <input
                    type="text"
                    className="form-control border-0"
                    id="searchInput"
                    placeholder={t("prop_services")}
                    value={clientNameInput}
                    onChange={(e) => setClientNameInput(e.target.value)}
                  />
                  <span className="input-group-text bg-transparent border-0">
                    <img src={search} alt="search" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex align-items-center gap-3">
              <div className="d-flex align-items-center gap-2">
                <p className="mb-0">{t("missing_details")}</p>
                <Toggle
                  defaultChecked
                  type="checkbox"
                  id="toggleMissingDetails"
                />
              </div>
              <div className="d-flex align-items-center gap-2">
                <p className="mb-0">{t("available_assets")}</p>
                <Toggle
                  defaultChecked
                  type="checkbox"
                  id="toggleAvailableAssets"
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center my-3">
            <div className="mb-4 d-flex flex-nowrap align-items-center gap-3">
              <div>
                <label className="mb-1 fs-15 lh-1 fw-semibold">
                  {t("transition_type")}
                </label>
                <select
                  className="form-select"
                  value={sel}
                  onChange={(e) => setSel(e.target.value)}
                >
                  <option value="sdf">Select Option</option>
                  <option value={t("sale")}> {t("sale")}</option>
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
                  {t("cust_Property_type")}
                </label>
                <select
                  className="form-select"
                  value={propertytype}
                  onChange={(e) => setPropertytype(e.target.value)}
                >
                  <option value="">All Property Types</option>
                  <option value={t("all_property_type")}>
                    {t("all_property_type")}
                  </option>
                  <option value="villa">{t("cust_property_villa")}</option>
                  <option value="studio">{t("cust_property_studio")}</option>
                </select>
              </div>
              {/* <div>
                <label className="mb-1 fs-15 lh-1 fw-semibold">
                  {t("cust_Property_condition")}
                </label>
                <select
                  className="form-select"
                  value={procondition}
                  onChange={(e) => setProcondition(e.target.value)}
                >
                  <option value="">Select Option</option>
                  <option value={t("renovated")}>{t("renovated")}</option>
                  <option value="Bad">Option 2</option>
                </select>
              </div> */}
              <div className="pt-4">
                <p>
                   
                </p>
                <RangeSlider label={t("Price")} />
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
          </div>
          <div className="d-flex align-items-center gap-3 my-3">
            <ul className="list-unstyled d-flex flex-wrap justify-content-start m-0 align-items-center p-0 w-100">
              <li>
                <button
                  type="button"
                  className="fs-17 lh-1 fw-semibold  agent-btn-responsive2 px-3  py-2 mx-1 rounded-pill align-items-center d-flex gap-1"
                  onClick={() => setIsModalOpen(true)}
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
                  <div className="custom-text">{t(`cust_opt_${i + 1}`)}</div>
                  <span>
                    <img src={remove_icon} alt="Remove" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Propertytable filter={filteredClients} />
        </div>
      </div>
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
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                  <label className="d-block text-secondary text-start  fs-15 lh-1 fw-semibold mb-1">
                    {t("cust_modal_no_rooms")}
                  </label>
                  <select className="form-select">
                    <option></option>
                    <option>בחר</option>
                  </select>
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
              <div className="flex-grow-1 text-start w-50 my-4">
                  <label className="d-block text-secondary text-start  fs-15 lh-1 fw-semibold mb-1">
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
              <div className="d-flex flex-column gap-4 mb-4">
                {/* <RangeSlider label={t("cust_slider_label")} /> */}
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
    </>
  );
};

export default Allproperty;
