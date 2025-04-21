import React, { useState } from "react";
import search from "../../assets/images/search.png";
import { useTranslation } from "react-i18next";
import { useLandregistryServices } from "../../Services/LandregistryServices";
import { Accordion } from "react-bootstrap";
import key from "../../assets/images/key_vertical.svg";

const Landregistry_mobile = () => {
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
      <div className="bg-white shadow-lg rounded-3 my-3">
        <div className="custom-scrollbar overflow-y-auto overflow-x-hidden px-3 mt-4">
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
          <div className="row align-items-center d-flex justify-content-center  ">
            <div className="col-4">
              <button className="agent-btn-responsive2 w-100   py-2 rounded-pill ">
                {t("data_btn_3")}
              </button>
            </div>
            <div className="col-4 ">
              <button className="agent-btn-responsive2 text-nowrap fs-14 w-100 py-2 rounded-pill">
                {t("data_btn_2")}
              </button>
            </div>
            <div className="col-4 ">
              <button className="agent-btn-responsive2 w-100 py-2 rounded-pill">
                {t("data_btn_1")}
              </button>
            </div>
          </div>
          <div className="row g-3 align-items-end my-3">
            <div className="col-6 ">
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

            <div className="col-6">
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

            <div className="col-12 col-md-6 text-center  ">
              <button
                className=" fs-17 lh-1 fw-semibold py-2 px-5 rounded-pill agent-btn-responsive1 text-white"
                onClick={handleSearch}
              >
                {t("show_button")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Accordion className="d-block p-0 d-flex flex-column gap-3 px-2">
        {filteredData.map((row, index) => (
          <Accordion.Item
            eventKey={index.toString()}
            key={row.id}
            className="border-top-2 border-top rounded-3 border-start-4   "
          >
            <Accordion.Header>
              <div className="d-flex justify-content-between gap-2">
                <div className="d-flex">
                  <div className=" d-flex align-items-center">
                    <div className="p-1">
                      <img
                        src={key}
                        alt="vertical key"
                        className="img-fluid w-75 h-75"
                      />
                    </div>
                    <div>
                      <span className="fw-semibold fs-12 d-block">
                        {row?.agreementDate}
                      </span>
                      <p className="fw-bold fs-14 d-block   text-teal  mb-0">
                        <span className="text-decoration-underline">
                          {t(row.propertyName)}
                        </span>{" "}
                        |{" "}
                        <span className="text-black text-decoration-none  ">
                          {t(row.agreementType)}
                        </span>
                      </p>
                      <p className="fw-bold  fs-12 d-block my-0">
                        {t("registry.clients_label")} :{" "}
                        <span className="fw-semibold lh-1 fs-12">
                          {t(row?.clients)} | {t(row?.phoneNumber)}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <button className="agent-btn-responsive2 h-25 w-50 py-2 mt-3  rounded-pill">
                  {" "}
                  {t("download_agreement")}
                </button>
              </div>
            </Accordion.Header>
            <Accordion.Body className="p-0">
              <div className="px-3 border-bottom">
                <p className="m-0">
                  <strong>{t("for")}:</strong> {t(row?.agreementType)}
                </p>
                <p className="m-0">
                  <strong>{t("registry.clients_label")}:</strong>{" "}
                  {t(row?.clients)}
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  )
}

export default Landregistry_mobile
