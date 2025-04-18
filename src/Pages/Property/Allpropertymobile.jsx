import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import add_home from "../../assets/images/add_home.svg";
import delet from "../../assets/images/delete.png";
import search from "../../assets/images/search.png";
import Toggle from "../../Componant/Common/Toggle/Toggle";
import { usePropertyservices } from "../../Services/PropertyServices";
import { Accordion } from "react-bootstrap";
import search_icon2 from "../../assets/images/search_icon2.svg";
import { IoIosArrowUp } from "react-icons/io";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import edit from "../../assets/images/edit.svg";
import deleteIcon from "../../assets/images/delete.svg";
import imagecard from "../../assets/images/imagesfolder.png";
const Allpropertymobile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const {dataPropertyServices,slides, filteredClients,setFilteredClients, setClientNameInput, clientNameInput, getClientData,} = usePropertyservices();
  useEffect(() => {
      setFilteredClients(dataPropertyServices);
    }, []);

    const handleClick = () => {
      const filtered = getClientData({
        clientName: clientNameInput,
      });
      console.log("locatiodfkj", filteredClients);
      setFilteredClients(filtered);
    };
  return (
    <>
    <div className="rounded-3">
     <div className="bg-white shadow-lg px-3 rounded-3">
        <div className="d-flex justify-content-between align-items-center">
          <button
            type="button"
            className="border-teal my-2 d-flex align-items-center justify-content-center rounded-pill py-1 px-4 search-button"
            onClick={() => navigate(`/${lang}/Property/add_property`)}
          >
            <div className="flex items-center justify-center">
              <img className="me-1" src={add_home} alt="Add Client" />
              {t("Add_Property")}{" "}
            </div>
          </button>
          <button
            type="button"
            className="border-teal my-2 d-flex align-items-center justify-content-center rounded-pill py-1 px-4 search-button"
          >
            <div className="flex items-center justify-center">
              <img className="me-1" src={delet} alt="Add Client" />
              {t("dletation")}{" "}
            </div>
          </button>
        </div>
        <div className="d-flex justify-content-center my-2">
          <div className="border rounded-1 input-group w-100 p-0">
            <input
              type="text"
              className="form-control border-0 my-0"
              id="searchInput"
              placeholder={t("prop_services")}
              value={clientNameInput}
              onChange={(e) => setClientNameInput(e.target.value)}
            />
            <button onClick={handleClick} className="input-group-text bg-transparent border-0">
              <img src={search} alt="search" />
            </button>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-between align-items-center my-4 w-100">
          <div className="flex-shrink-1 me-3 mb-3 mb-md-0">
            <button
              type="button"
              className="fs-17 lh-1 fw-semibold agent-btn-responsive1 bg-opacity-65 w-100 text-white py-1 px-3 rounded-pill d-flex align-items-center justify-content-center gap-2"
            >
              <img src={search_icon2} alt="Add Client" />
              {t("advance_search")}
            </button>
          </div>

          <div className="d-flex align-items-center gap-2">
            <Toggle defaultChecked={false} type="checkbox" id="toggleImages" />
            <label className="mb-0" htmlFor="toggleImages">
              {t("avaible_pro")}
            </label>
          </div>
        </div>
      </div>
    </div>
     
      <div className="mt-4 bg-white px-3 rounded-3">
        <Accordion className="d-flex flex-column gap-3">
          {filteredClients.map((client, index) => (
            <Accordion.Item
              eventKey={index.toString()}
              key={client.id}
              className="border-top-2 border-top rounded-3 border-start-4"
              style={{ borderLeft: "6px solid #2CAC74" }}
            >
              <Accordion.Header>
                <div className="d-flex flex-column justify-content-between w-100">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex ">
                      <input
                        type="checkbox"
                        className="form-check-input border-2 border-black mx-1"
                      />
                      <div className="ms-1">
                        <p className="mb-1 fw-semibold">
                          {client.property_address}
                        </p>
                        <p className="mb-1 fs-14 text-nowrap fw-normal">
                          {" "}
                          <span>{client.sale}</span> |{client.note}
                        </p>
                        <p className="mb-1 fs-14 text-nowrap fw-normal">
                          {t("3_rrom_new")}
                        </p>
                        <div className="d-flex align-items-center">
                          <div className=" d-flex flex-column">
                            <p className="mb-0 fw-bold fs-6">
                              {t("price_label")}
                            </p>
                            <p className="fw-semibold mb-0">{client.price}</p>
                          </div>
                          <span className="px-1 fw-lnormal fs-1 text-muted">
                            {" "}
                            |{" "}
                          </span>
                          <div className=" d-flex flex-column">
                            <p className="mb-0 fw-bold fs-6">
                              {t("all_owner")}
                            </p>
                            <p className="fw-semibold mb-0 text-nowrap">
                              {client.owner}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="me-2 d-flex align-items-center">
                      <span className="badge bg-warning">{client.status}</span>
                      <IoIosArrowUp className="mx-3" />
                    </div>
                  </div>
                  <div className="d-flex flex-wrap align-items-center my-2 gap-1">
                    {t("cust_additional_features_value")
                      .split(",")
                      .map((feature, index) => (
                        <span key={index} className="small-badge px-3">
                          {feature.trim()}
                        </span>
                      ))}
                  </div>
                  <p className="font-bold fs-14">{t("instrated")}</p>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div>
                  <h5 className="fs-15 lh-1 fw-bold d-flex align-items-center">
                    {t("genral_prop")}
                  </h5>
                  <p className="text-wrap fw-normal  mb-0 ">{t("4-room")}</p>
                  <p className="text-wrap fw-normal  mb-0 ">{t("2-child")}</p>
                </div>
                <Carousel data-bs-theme="dark" interval={null}>
                  {slides.map((slide, idx) => (
                    <Carousel.Item key={idx}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "1rem",
                          padding: "1rem",
                        }}
                      >
                        {slide.map((src, index) => (
                          <Image
                            key={index}
                            src={src}
                            className="img-fluid"
                            style={{
                              width: "210px",
                              height: "119px",
                              borderRadius: "8px",
                            }}
                          />
                        ))}
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
                <p className="fw-bold mb-0">{t("instrated")}</p>
                <p className="fw-semibold mb-0">{t("client_3")}</p>
                <p className="fw-semibold">{t("client_4")}</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <p className="text-decoration-underline">
                    {t("View_attech")}
                  </p>
                  <div className="d-flex align-items-center">
                    <img src={edit} alt={"editbtn"} className="px-1" />
                    <img
                      src={deleteIcon}
                      alt={"deletebtn"}
                      className="px-1"
                      style={{ cursor: "pointer" }}
                    />
                    <img src={imagecard} alt="imagecard" />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Allpropertymobile;
