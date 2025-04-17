import React, {useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import add_home from "../../assets/images/add_home.svg";
import delet from "../../assets/images/delete.png";
import search from "../../assets/images/search.png";
import Toggle from "../../Componant/Common/Toggle/Toggle";
import { usePropertyservices } from "../../Services/PropertyServices";
import { Accordion } from "react-bootstrap";
import search_icon2 from "../../assets/images/search_icon2.svg";
import CustomButton from "../../Componant/Common/Button/Button";
import { IoIosArrowUp } from "react-icons/io";
const Allpropertymobile = () => {
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

    // useEffect(() => {
    //       const fetchedClients = getClients();
    //       setFilteredClients(fetchedClients);
    //     }, []);
  return (
    <>
      <div className="bg-white shadow-lg rounded-3">
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
              // value={clientNameInput}
              // onChange={(e) => setClientNameInput(e.target.value)}
            />
            <span className="input-group-text bg-transparent border-0">
              <img src={search} alt="search" />
            </span>
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
      <div className="mt-4 bg-white p-3 rounded-3">
        <Accordion className="d-flex flex-column gap-3">
          {dataPropertyServices.map((client, index) => (
            <Accordion.Item
              eventKey={index.toString()}
              key={client.id}
              className="border-top-2 border-top rounded-3 border-start-4"
              style={{ borderLeft: "6px solid #2CAC74" }}
            >
              <Accordion.Header>
                <div className="d-flex justify-content-between w-100">
                  <div className="d-flex">
                    <input
                      type="checkbox"
                      className="form-check-input border-2 border-black mx-1"
                    />
                    <div className="ms-1">
                      <p className="mb-1 fw-semibold">{client.property_address}</p>
                      <p className="mb-1 fs-14 text-nowrap fw-normal"> <span>{client.sale}</span> |{client.note}</p>
                      <p className="mb-1 fs-14 text-nowrap fw-normal">{t("3_rrom_new")}</p>
                      <div className="d-flex align-items-center">
                        <div className=" d-flex flex-column align-items-center">
                           <p className="mb-0 fw-bold fs-6">{t("price_label")}</p>
                           <p className="fw-semibold mb-0">{client.price}</p>
                        </div> 
                        <span className="px-1 fw-lnormal fs-1 text-muted"> | </span>
                        <div className=" d-flex flex-column align-items-center">
                            <p className="mb-0 fw-bold fs-6">{t("all_owner")}</p>
                            <p className="fw-semibold mb-0 text-nowrap">{client.owner}</p>
                        </div>
                       </div>
                    </div>
                  
                    
                  </div>
                  <div className="me-2 d-flex align-items-center">
                    <span className="badge bg-warning">{client.status}</span>
                    <IoIosArrowUp className="mx-3" />
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div>
                  <strong>{t("cust_property_type")}</strong>
                  <p>{t("cust_property_type_value")}</p>

                  <strong>{t("cust_Property_Condition")}</strong>
                  <p>{t("cust_Property_Condition_value")}</p>

                  <strong>{t("cust_no_rooms")}</strong>
                  <p>{t("cust_no_rooms_value")}</p>

                  <strong>{t("cust_apartment_size")}</strong>
                  <p>{t("cust_apartment_size_value")}</p>

                  <strong>{t("cust_floor")}</strong>
                  <p>4,5</p>

                  <strong>{t("cust_price")}</strong>
                  <p>1000 - 3000 ₪</p>

                  <strong>{t("cust_additional_comments")}</strong>
                  <p className="text-wrap">{t("cust_additional_comments_value")}</p>

                  <div className="mt-3">
                    <strong>{t("recent_agreements")}</strong>
                    <p className="mb-1">{t("recent_agreements_value_1")}</p>
                    <p className="mb-1">{t("recent_agreements_value_2")}</p>
                  </div>
                </div>

                <div className="d-flex justify-content-between mt-3">
                  <CustomButton
                    type="button"
                    className="btn btn-outline-success rounded-pill py-1 px-4 d-flex align-items-center justify-content-center gap-2"
                  >
                    {"לכל ההסכמים"}
                  </CustomButton>

                  {/* <div className="d-flex align-items-center">
                    {/* <img src={editIcon} alt="Edit" className="px-1" /> 
                    <img
                      src={deleteIcon}
                      alt="Delete"
                      className="px-1"
                    //   style={{ cursor: "pointer" }}
                    //   onClick={handleShowModal}
                    />
                  </div> */}
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
