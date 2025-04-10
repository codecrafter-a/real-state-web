import React, {  useState } from "react";
import { useTranslation } from "react-i18next";
// import { motion } from 'framer-motion';
import add_reaction from "../../assets/images/add_reaction.svg";
import search from "../../assets/images/search.svg";
import white_search_icon from "../../assets/images/white-search-icon.svg";
import { IoIosArrowUp } from "react-icons/io";
import CustomButton from "../../Componant/Common/Button/Button";
import edit from "../../assets/images/edit.svg";
import deleteIcon from "../../assets/images/delete.svg";
import { Accordion } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useClientService } from "../../Services/ClientService";


const CustomerMobile = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { lang } = useParams();
    const [clients, setClients] = useState([]);
    const { getClients,  getClientData } = useClientService(searchTerm);
    const clientFiltered = getClients();
    const [selectAll, setSelectAll] = useState(false);
    const [showModal, setShowModal] = useState(false);
     const [selectedRows, setSelectedRows] = useState({});
     const [searchTerm, setSearchTerm] = useState("");

    
      const handleShowModal = () => setShowModal(true);
      const toggleCheckbox = (index) => {
        setSelectedRows((prev) => {
          const updated = { ...prev, [index]: !prev[index] };
          const allSelected = Object.values(updated).length === clients.length &&
                              Object.values(updated).every(Boolean);
      
          setSelectAll(allSelected);
          return updated;
        });
      };
      const filterdClients = clients.filter(
        (client) =>
          (client.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
          (client.email || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
          (client.phone || "").toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      
    
  return (
    <>
        <div className="d-block d-lg-none ">
        <div className="bg-white p-3 rounded-3">
          <div className="d-flex justify-content-between align-items-center pt-3">
            <button
              type="button"
              className="btn btn-outline-success d-flex align-items-center fs-15 justify-content-center rounded-pill py-1  gap-2"
              onClick={() => navigate(`/${lang}/customers/add-customers`)}
            >
              <img src={add_reaction} alt="Add Client" />
              {t("add_cust")}
            </button>
            <button
              type="button"
              className="btn btn-outline-success rounded-pill py-1 px-4 d-flex align-items-center"
            >
              <img
                src={deleteIcon}
                alt={"deletebtn"}
                className="pr-1"
                style={{ cursor: "pointer" }}
              />
              {t("cust_delete")}
            </button>
          </div>
          <div className="my-4 position-relative border border-[#D6D6D6] rounded py-2 px-3 d-flex w-100 w-md-75 mx-auto">
            <input
              type="text"
              className="form-control border-0 p-0 flex-grow-1 mb-0"
              placeholder={t("filter_cust")}
            //   onChange={(e) => setSearchTerm(e.target.value)}
            //   value={searchTerm}
            />
            <button
              className="btn border-0 p-0 ms-2"
              type="button"
              aria-label="Search"
            >
              <img src={search} alt="Search" />
            </button>
          </div>
          <div>
            <button
              type="button"
            //   onClick={handleOpen}
              className="btn btn_cmn d-flex align-items-center justify-content-center rounded-pill py-2 px-3"
            >
              <img className="me-2" src={white_search_icon} alt="Add Client" />
              {t("advance_search")}
            </button>
          </div>
        </div>

        <div className="mt-4 bg-white p-3 rounded-3">
          <Accordion className="d-flex flex-column gap-3">
            {filterdClients.map((row, index) => (
              <Accordion.Item
                eventKey={index.toString()}
                key={row.id}
                className="border-top-2 border-top rounded-3 border-start-4"
                style={{ borderLeft: "6px solid #2CAC74" }}
              >
                <Accordion.Header>
                  <div className="d-flex justify-content-between w-100">
                    <div className="d-flex">
                      <input
                        type="checkbox"
                        checked={!!selectedRows[index]}
                        onChange={() => toggleCheckbox(index)}
                        className="form-check-input border-2 border-black  mx-1"
                      />
                      <div className="ml-3">
                        <p className="mb-1">{row?.name}</p>
                        <p className="mb-1">{row?.type}</p>
                        <p className="mb-1">{row?.phone}</p>
                      </div>
                    </div>

                    <div className="mr-2 d-flex h-25">
                      <span className="badge bg-warning">{row?.status}</span>
                      <IoIosArrowUp className="mx-3"/>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body className="">
                  <div className="">
                    <div>
                      <strong>{t("cust_property_type")}</strong>{" "}
                      <p>{t("cust_property_type_value")}</p>
                    </div>
                    <div>
                      <strong>{t("cust_Property_Condition")}</strong>{" "}
                      <p>{t("cust_Property_Condition_value")}</p>
                    </div>
                    <div>
                      <strong>{t("cust_no_rooms")}</strong>{" "}
                      <p>{t("cust_no_rooms_value")}</p>
                    </div>
                    <div>
                      <strong>{t("cust_apartment_size")}</strong>
                      <p>{t("cust_apartment_size_value")}</p>
                    </div>
                    <div>
                      <strong>{t("cust_floor")}</strong> <p>4,5</p>
                    </div>
                    <div>
                      <strong>{t("cust_price")}</strong> <p>1000 - 3000 ₪</p>
                    </div>
                  </div>
                  <div className="">
                    <div>
                      <strong>{t("cust_additional_comments")}</strong>{" "}
                      <p className="text-wrap">
                        {t("cust_additional_comments_value")}
                      </p>
                    </div>
                  </div>
                  <div className=" mt-3">
                    <strong>{t("recent_agreements")}</strong>
                    <p className="mb-1">{t("recent_agreements_value_1")}</p>
                    <p className="mb-1">{t("recent_agreements_value_2")}</p>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <CustomButton
                      type="button"
                      className="btn btn-outline-success rounded-pill py-1 px-4 d-flex align-items-center justify-content-center gap-2"
                      children={" לכל ההסכמים  "}
                    />
                    <div className="d-flex align-items-center">
                      <img src={edit} alt={"editbtn"} className="px-1" />
                      <img
                        src={deleteIcon}
                        alt={"deletebtn"}
                        className="px-1"
                        style={{ cursor: "pointer" }}
                        onClick={handleShowModal}
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  )
}

export default CustomerMobile
