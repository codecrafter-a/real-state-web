import React from "react";
import { useTranslation } from "react-i18next";
import add_home from "../../assets/images/add_home.svg";
import Toggle from "../../Componant/Common/Toggle/Toggle";
import search from "../../assets/images/search.png";
import search_icon2 from "../../assets/images/search_icon2.svg";
import remove_icon from "../../assets/images/remove_icon.svg";
import Propertytable from "./Propertytable";

const Allproperty = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-white shadow-lg d-none d-md-block">
        <p className="w-100 text-center screen-1 border-bottom py-3 mb-4 d-none d-md-block">
          {t("All_Property")}
        </p>
        <button
          type="button"
          className="border-teal my-2 d-flex align-items-center justify-content-center rounded-pill py-1 px-4 search-button"
        >
          <div className="flex items-center justify-center">
            <img className="me-1" src={add_home} alt="Add Client" />
            {t("Add_Property")}{" "}
          </div>
        </button>
        <div className="row align-items-center my-3">
          <div className="col-12 col-md-8">
            <div className="d-flex justify-content-start">
              <div className="border rounded-1 input-group w-100 p-0">
                <input
                  type="text"
                  className="form-control border-0"
                  id="searchInput"
                  placeholder={t("prop_services")}
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
              <select className="form-select">
                <option value="">Select Option</option>
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
              <select className="form-select">
                <option value="">All Property Types</option>
                <option value={t("cust_property_type_value")}>
                  {t("cust_property_type_value")}
                </option>
                <option value="villa">{t("cust_property_villa")}</option>
                <option value="studio">{t("cust_property_studio")}</option>
              </select>
            </div>
            <div>
              <label className="mb-1 fs-15 lh-1 fw-semibold">
                {t("cust_Property_condition")}
              </label>
              <select className="form-select">
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
        <Propertytable />
      </div>
    </>
  );
};

export default Allproperty;
