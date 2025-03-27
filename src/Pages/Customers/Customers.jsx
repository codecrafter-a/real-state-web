import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
// import { motion } from 'framer-motion';
import add_reaction from "../../assets/images/add_reaction.svg";
import search from "../../assets/images/search.svg";
import search_icon2 from "../../assets/images/search_icon2.svg";
import remove_icon from "../../assets/images/remove_icon.svg";
import action_icon1 from "../../assets/images/action_icon1.svg";
import action_icon2 from "../../assets/images/action_icon2.svg";
import ErrorIcon from "../../assets/images/ErrorIcon.svg";
// import check_tick from '../../assets/images/check_tick.svg';
import table_arrrow from "../../assets/images/table_arrrow.svg";
import RangeSlider from "../../Componant/Common/RangeSlider/RangeSlider";
import CustomButton from "../../Componant/Common/Button/Button";
import edit from '../../assets/images/edit.svg';
import deleteIcon from '../../assets/images/delete.svg';
import { Accordion, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useClientService } from "../../Services/ClientService";

const Customer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const [clients, setClients] = useState([]);

  const { getClients } = useClientService();

  useEffect(() => {
    const data = getClients();
    setClients(data);
  }, []);

  const [expandedRows, setExpandedRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState({});
  const [selectAll, setSelectAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const toggleRow = (index) => {
    setExpandedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const toggleCheckbox = (index) => {
    setSelectedRows((prev) => {
      const updated = { ...prev, [index]: !prev[index] };
      setSelectAll(Object.values(updated).every(Boolean)); // Check if all selected
      return updated;
    });
  };

  const toggleSelectAll = () => {
    const newState = !selectAll;
    setSelectAll(newState);
    const updatedSelection = {};
    clients.forEach((_, index) => {
      updatedSelection[index] = newState;
    });
    setSelectedRows(updatedSelection);
  };

  return (
    <>
      <div className="bg-white w-100 mx-auto pb-3 position-relative z-50 rounded-3 shadow-lg" >
        <div className="px-4">
          <h1 className="fs-4 font-semibold border-bottom border-[#EAEAEA] py-3 mb-4 text-success text-center d-none d-md-block">
            {t("all_cust")}
          </h1>
        </div>

        <div className="px-4">
          <form className="custom-scrollbar overflow-y-auto overflow-x-hidden " style={{ height: "594px" }}>
            <div className="me-4">
              <div className="mb-3 d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-outline-success d-flex align-items-center justify-content-center rounded-pill py-2 px-4 gap-2"
                  onClick={() => navigate(`/${lang}/customers/add-customers`)}
                >
                  <img src={add_reaction} alt="Add Client" />
                  {t("add_cust")}
                </button>
              </div>
              <div className="mb-4 position-relative w-75 border border-[#D6D6D6] rounded py-2 px-3">
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control border-0 p-0"
                    placeholder={t("filter_cust")}
                  />
                  <button className="btn p-0" type="button" aria-label="Search">
                    <img src={search} alt="Search" />
                  </button>
                </div>
              </div>
              <div className="mb-4 d-flex align-items-end gap-4">
                <div className="w-100">
                  <label className="mb-1 fw-semibold">{t("cust_filter_1")}</label>
                  <select className="form-select">
                    <option disabled selected>Select Option</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
                <div className="w-100">
                  <label className="form-label fw-semibold">{t("cust_serch")}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("cust_typing")}
                  />
                </div>
                <div className="w-100">
                  <label className="mb-1 fw-semibold">{t("cust_Property_type")}</label>
                  <select className="form-select">
                    <option disabled selected>Select Option</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
                <div className="w-100">
                  <label className="mb-1 fw-semibold">{t("cust_Property_condition")}</label>
                  <select className="form-select">
                    <option disabled selected>Select Option</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
                <div>
                  <label className="form-label fw-semibold">&nbsp;</label>
                  <button type="button" className="btn btn-success d-inline-flex align-items-center justify-content-center fw-medium text-white border-0 rounded-pill" style={{ boxShadow: '0 10px 8px rgba(0, 0, 0, 0.1)', padding: '5px 15px', minWidth: '146px', outline: 'none' }}>
                    {t("cust_search")}
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <div className="d-flex">
                    <div className="mb-4 d-flex align-items-center">
                      <button
                        type="button"
                        onClick={handleOpen}
                        className="btn btn-outline-success d-flex align-items-center justify-content-center rounded-pill py-2 px-3"
                      >
                        <img className="me-2" src={search_icon2} alt="Add Client" />
                        {t("advance_search")}
                      </button>

                      <ul className="list-unstyled d-flex m-0 align-items-center">
                        {Array.from({ length: 6 }, (_, i) => (
                          <li key={i} className="mx-2 bg-success bg-opacity-10 rounded-pill d-flex px-3 py-2 align-items-center gap-3">
                            {t(`cust_opt_${i + 1}`)}
                            <span>
                              <img src={remove_icon} alt="Remove" />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end gap-2">
                    <button
                      type="button"
                      className="btn btn-outline-success rounded-pill py-1 px-4"
                    >
                      {t("cust_delete")}
                    </button>
                    <button
                      type="button"
                      className="btn btn-success rounded-pill py-1 px-4 d-flex align-items-center justify-content-center gap-2"
                    >
                      <img src={action_icon1} alt="Sign Client" />
                      {t("auth_cust_sigin")}
                    </button>
                    <button
                      type="button"
                      className="btn btn-success rounded-pill py-1 px-4 d-flex align-items-center justify-content-center gap-2"
                    >
                      <img src={action_icon2} alt="Sign Owner" />
                      {t("auth_pro_Owner_sigin")}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <table className="table text-center d-none d-md-table">
                  <thead>
                    <tr>
                      <th className="table-head">
                        <div className="d-flex align-items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectAll}
                            onChange={toggleSelectAll}
                            className="form-check-input"
                          />
                          <span>{t("cust_tbl_column_name")}</span>
                        </div>
                      </th>
                      <th className="table-head">{t("cust_tbl_column_client_type")}</th>
                      <th className="table-head">{t("cust_tbl_column_client_phone")}</th>
                      <th className="table-head">{t("cust_tbl_column_client_email")}</th>
                      <th className="table-head">{t("cust_tbl_column_request_area")}</th>
                      <th className="table-head">{t("cust_tbl_column_status")}</th>
                      <th className="table-head"></th>
                    </tr>
                  </thead>
                  <tbody className="border border-[#E6E6E6] rounded-3">
                    {clients.map((client, index) => (
                      <React.Fragment key={index}>
                        <tr>
                          <td className="px-4 py-3">
                            <div className="d-flex align-items-center gap-2">
                              <input
                                type="checkbox"
                                checked={!!selectedRows[index]}
                                onChange={() => toggleCheckbox(index)}
                                className="form-check-input"
                              />
                              {client.name}
                            </div>
                          </td>
                          <td className="px-4 py-3">{client.type}</td>
                          <td className="px-4 py-3">{client.phone}</td>
                          <td className="px-4 py-3">{client.email}</td>
                          <td className="px-4 py-3">{client.location}</td>
                          <td className="px-4 py-3">
                            <span className="badge bg-warning">
                              {client.status}
                            </span>
                          </td>
                          <td className="text-center px-4 py-3">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                toggleRow(index);
                              }}
                              className="border-0 bg-transparent"
                            >
                              <img
                                src={table_arrrow}
                                alt="table_arrow"
                                className={`w-4 h-4 transition-transform ${expandedRows.includes(index) ? "rotate-180" : "rotate-0"}`}
                              />
                            </button>
                          </td>
                        </tr>
                        {expandedRows.includes(index) && (
                          <tr>
                            <td colSpan={7} className="px-4 py-3">
                              <div className="text-start d-flex align-items-center justify-content-between">
                                <div>
                                  <strong>{t("cust_property_type")}</strong> <p>{t("cust_property_type_value")}</p>
                                </div>
                                <div>
                                  <strong>{t("cust_Property_Condition")}</strong> <p>{t("cust_Property_Condition_value")}</p>
                                </div>
                                <div>
                                  <strong>{t("cust_no_rooms")}</strong> <p>{t("cust_no_rooms_value")}</p>
                                </div>
                                <div>
                                  <strong>{t("cust_apartment_size")}</strong> <p>{t("cust_apartment_size_value")}</p>
                                </div>
                                <div>
                                  <strong>{t("cust_floor")}</strong> <p>4,5</p>
                                </div>
                                <div>
                                  <strong>{t("cust_price")}</strong> <p>1000 - 3000 ₪</p>
                                </div>
                              </div>
                              <div className="text-start d-flex justify-content-between gap-4 mt-3">
                                <div>
                                  <strong>{t("cust_additional_comments")}</strong> <p className="text-wrap">{t("cust_additional_comments_value")}</p>
                                </div>
                                <div>
                                  <strong>{t("cust_additional_features")}</strong>
                                  <div className="d-flex flex-wrap gap-2 mt-2">
                                    {t("cust_additional_features_value")
                                      .split(',')
                                      .map((feature, index) => (
                                        <span key={index} className="custom-badge">
                                          {feature.trim()}
                                        </span>
                                      ))}
                                  </div>
                                </div>
                              </div>
                              <div className="text-start mt-3">
                                <strong>{t("recent_agreements")}</strong>
                                <p className="mb-1">{t("recent_agreements_value_1")}</p>
                                <p className="mb-1">{t("recent_agreements_value_2")}</p>
                              </div>
                              <div className="d-flex justify-content-between mt-3">
                                <CustomButton
                                  type="button"
                                  className="btn btn-outline-success rounded-pill py-1 px-4 d-flex align-items-center justify-content-center gap-2"
                                  children={' לכל ההסכמים  '}
                                />
                                <div className="d-flex align-items-center">
                                  <img src={edit} alt={'editbtn'} className="px-1" />
                                  <img src={deleteIcon} alt={'deletebtn'} className="px-1" style={{ cursor: 'pointer' }} onClick={handleShowModal} />
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </form>

          <Modal show={showModal} onHide={handleCloseModal} centered className="modal-container">
            <Modal.Header className="border-0 p-3 position-relative mt-4">
              <button
                type="button"
                className="btn-close position-absolute close-btn"
                onClick={handleCloseModal}
              ></button>
            </Modal.Header>

            <Modal.Body className="text-center justify-center pb-4">
              <div className="flex items-center justify-center">
                <img src={ErrorIcon} alt="ErrorIcon" />
              </div>
              <div>
                <p className="mt-4 mb-0 text-black fw-semibold fs-5">
                  אתם עומדים למחוק לקוח/ות
                </p>
                <p className="m-0 text-black fw-semibold fs-5">
                  האם לבצע מחיקה?
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer className="border-top-0 justify-content-center flex gap-3">
              <button className="btn btn-outline-success rounded-pill px-4" style={{ width: '153px', padding: '13px 0' }} onClick={handleCloseModal}>לא</button>
              <button className="btn btn-success rounded-pill px-4" style={{ width: '153px', padding: '13px 0' }}>כן</button>
            </Modal.Footer>
          </Modal>

          <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)} centered className="modal-container">
            <Modal.Header className="border-0 p-3 position-relative mt-4">
              <button
                type="button"
                className="btn-close position-absolute close-btn"
                onClick={() => setIsModalOpen(false)}
              ></button>
            </Modal.Header>

            <Modal.Body className="text-center justify-center px-5 p-4">
              <h2 className="text-2xl pb-3 font-semibold text-success text-center border-bottom mb-4">
                {t("addtional_filter")}
              </h2>
              <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
                <div className="col">
                  <label className="d-block text-secondary text-start fw-semibold fs-6 mb-1">
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
                  <label className="d-block text-secondary text-start fw-semibold fs-6 mb-1">
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
              <h3 className="text-base text-start font-semibold text-success mb-2">
                {t("addtional_feature")}
              </h3>
              <div className="d-flex flex-wrap gap-2 justify-content-start">
                {Array.from({ length: 9 }, (_, i) => (
                  <button key={i} className="bg-gray-200 px-3 py-1 rounded-pill text-secondary border-0">
                    {t(`addtional_feature_${i + 1}`)}
                  </button>
                ))}
              </div>
            </Modal.Body>

            <Modal.Footer className="border-top-0 justify-content-between gap-3 mb-3 px-4">
              <button className="btn btn-success text-white px-4 py-2 rounded-pill" onClick={() => setIsModalOpen(false)}>
                {t("cust_model_footer")}
              </button>
              <button className="btn btn-outline-success px-4 py-2 rounded-pill">
                {t("cust_model_footer1")}
              </button>
            </Modal.Footer>
          </Modal>

          <Accordion className="d-block p-0 d-md-none d-flex flex-column gap-3">
            {clients.map((row, index) => (
              <Accordion.Item
                eventKey={index.toString()}
                key={row.id}
                className="border-top-2 border-top rounded-3 border-start-4" style={{ borderLeft: "6px solid #2CAC74" }}
              >
                <Accordion.Header >
                  <div className="d-flex justify-content-between w-full">
                    <div className="d-flex">
                      <input
                        type="checkbox"
                        checked={!!selectedRows[index]}
                        onChange={() => toggleCheckbox(index)}
                        className="form-check-input"
                      />
                      <div className="ml-3">
                        <p className="mb-1">{row?.name}</p>
                        <p className="mb-1">{row?.type}</p>
                        <p className="mb-1">{row?.phone}</p>
                      </div>
                    </div>

                    <div className="mr-2">
                      <span className="badge bg-warning">
                        {row?.status}
                      </span>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body className="">
                  <div className="text-start">
                    <div>
                      <strong>{t("cust_property_type")}</strong> <p>{t("cust_property_type_value")}</p>
                    </div>
                    <div>
                      <strong>{t("cust_Property_Condition")}</strong> <p>{t("cust_Property_Condition_value")}</p>
                    </div>
                    <div>
                      <strong>{t("cust_no_rooms")}</strong> <p>{t("cust_no_rooms_value")}</p>
                    </div>
                    <div>
                      <strong>{t("cust_apartment_size")}</strong> <p>{t("cust_apartment_size_value")}</p>
                    </div>
                    <div>
                      <strong>{t("cust_floor")}</strong> <p>4,5</p>
                    </div>
                    <div>
                      <strong>{t("cust_price")}</strong> <p>1000 - 3000 ₪</p>
                    </div>
                  </div>
                  <div className="text-start">
                    <div>
                      <strong>{t("cust_additional_comments")}</strong> <p className="text-wrap">{t("cust_additional_comments_value")}</p>
                    </div>

                  </div>
                  <div className="text-start mt-3">
                    <strong>{t("recent_agreements")}</strong>
                    <p className="mb-1">{t("recent_agreements_value_1")}</p>
                    <p className="mb-1">{t("recent_agreements_value_2")}</p>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <CustomButton
                      type="button"
                      className="btn btn-outline-success rounded-pill py-1 px-4 d-flex align-items-center justify-content-center gap-2"
                      children={' לכל ההסכמים  '}
                    />
                    <div className="d-flex align-items-center">
                      <img src={edit} alt={'editbtn'} className="px-1" />
                      <img src={deleteIcon} alt={'deletebtn'} className="px-1" style={{ cursor: 'pointer' }} onClick={handleShowModal} />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};
export default Customer;
