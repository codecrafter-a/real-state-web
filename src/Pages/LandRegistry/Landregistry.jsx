import React, { useState } from "react";
import { Col } from "react-bootstrap";
import search from "../../assets/images/search.png";
import { useTranslation } from "react-i18next";
import Landregistrytable from "../LandRegistry/Landregistrytable";
import { useLandregistryServices } from "../../Services/LandregistryServices";
const Landregistry = () => {
  const { t } = useTranslation();
  const { getFilteredRegistryData } = useLandregistryServices();
  const { getRegistryData } = useLandregistryServices();
  const registerData = getRegistryData();

  const [clientName, setClientName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [untilDate, setUntilDate] = useState("");
  const [filteredData, setFilteredData] = useState(registerData);
  console.log(filteredData, "filteredData");

  const handleSearch = () => {
    const data = getFilteredRegistryData({ clientName, fromDate, untilDate });
    setFilteredData(data);
  };
  return (
    <>
      <Col className="bg-white shadow-lg rounded-3 my-3">
        <p className="py-3 mb-4 screen-1 text-center border-bottom d-none d-md-block">
          {t("registry_title")}{" "}
        </p>
        <div
          className="custom-scrollbar overflow-y-auto overflow-x-hidden px-3 mt-4"
          style={{ maxHeight: "594px" }}
        >
          <div className=" d-flex justify-content-start my-2">
            <div className="border rounded-1 input-group responsive-width ">
              <input
                type="text"
                className="form-control border-0 "
                id="searchInput"
                placeholder={t("invoice_placeholder")}
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
              <span className="input-group-text bg-transparent  border-0">
                <img src={search} alt="search" />
              </span>
            </div>
          </div>
          <div className="row  align-items-center d-flex justify-content-center  my-md-3 justify-content-md-start">
            <div className="col-4 col-md-2">
              <button className="agent-btn-responsive2 w-100   py-2 rounded-pill ">
                {t("data_btn_3")}
              </button>
            </div>
            <div className="col-4 col-md-2">
              <button className="agent-btn-responsive2 w-100 py-2 rounded-pill">
                {t("data_btn_2")}
              </button>
            </div>
            <div className="col-4 col-md-2 ">
              <button className="agent-btn-responsive2 w-100 py-2 rounded-pill">
                {t("data_btn_1")}
              </button>
            </div>
          </div>
          <div className="row g-3 align-items-end my-3">
            <div className="col-6 col-md-3">
              <label className="form-label fs-15 fw-semibold lh-1">
                {t("from_date")}
              </label>
              <input
                type="date"
                className="form-control"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>

            <div className="col-6 col-md-3">
              <label className="form-label fs-15 fw-semibold lh-1">
                {t("until_date")}
              </label>
              <input
                type="date"
                className="form-control"
                value={untilDate}
                onChange={(e) => setUntilDate(e.target.value)}
              />
            </div>

            <div className="col-12 col-md-6 text-center text-md-start ">
              <button
                className=" fs-17 lh-1 fw-semibold py-2 px-5 rounded-pill agent-btn-responsive1 text-white"
                onClick={handleSearch}
              >
                {t("show_button")}
              </button>
            </div>
          </div>
          <Landregistrytable data={filteredData} />
        </div>
      </Col>
    </>
  );
};

export default Landregistry;
