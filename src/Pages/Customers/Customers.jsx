import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import body_bg from "../../assets/images/body_bg.webp";
import bory_group_right from "../../assets/images/bory_group_right.png";
import bory_group_left from "../../assets/images/bory_group_right.png";
import add_reaction from "../../assets/images/add_reaction.svg";
import search from "../../assets/images/search.svg";
import search_icon2 from "../../assets/images/search_icon2.svg";
import remove_icon from "../../assets/images/remove_icon.svg";
import action_icon1 from "../../assets/images/action_icon1.svg";
import action_icon2 from "../../assets/images/action_icon2.svg";
import ErrorIcon from "../../assets/images/ErrorIcon.svg";
// import check_tick from '../../assets/images/check_tick.svg';
import table_arrrow from "../../assets/images/table_arrrow.svg";
import CustomModal from "../../Componant/Common/Modal/CustomeModal";
import RangeSlider from "../../Componant/Common/RangeSlider/RangeSlider";
import CustomButton from "../../Componant/Common/Button/Button";
import edit from '../../assets/images/edit.svg';
import deleteIcon from '../../assets/images/delete.svg';
import { Modal } from "react-bootstrap";

const Customer = () => {
  const { t } = useTranslation();
  const clients = [
    {
      name: t("cust_name_1"),
      type: t("type_cust_1"),
      phone: t("phone_cust_1"),
      email: t("email_cust_1"),
      location: t("location_cust_1"),
      status: t("status_cust_1"),
      statusColor: "bg-blue-200 text-blue-600",
    },
    {
      name: t("cust_name_2"),
      type: t("type_cust_2"),
      phone: t("054-4692650"),
      email: t("shirims@gmail.com"),
      location: t("location_cust_2"),
      status: t("status_cust_2"),
      statusColor: "bg-red-200 text-red-600",
    },
  ];

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
      <div className="position-absolute w-100 top-0 z-0 overflow-hidden">
        <figure className="mb-0">
          <img src={body_bg} width="100%" alt="Background" />
          <span className="position-absolute top-0 start-0 mt-2">
            <img src={bory_group_left} alt="Left Icon" />
          </span>
        </figure>
        <div>
          <img src={bory_group_right} alt="Right Icon" />
        </div>
      </div>

      <div className="bg-white w-100 mx-auto pb-3 position-relative z-50 rounded-3 shadow-lg" style={{ maxWidth: '1194px' }}>
        <div className="px-4">
          <h1 className="fs-4 font-semibold border-bottom border-[#EAEAEA] py-3 mb-4 text-success text-center">
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
                  <button className="btn p-0" type="button">
                    <img src={search} alt="Search" />
                  </button>
                </div>
              </div>
              <div className="mb-4 d-flex align-items-end gap-4">
                <div className="w-100">
                  <label className="mb-1 fw-semibold">{t("cust_filter_1")}</label>
                  <select className="form-select">
                    <option />
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
                    <option />
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
                <div className="w-100">
                  <label className="mb-1 fw-semibold">{t("cust_Property_condition")}</label>
                  <select className="form-select">
                    <option />
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
                        <li className="mx-2 bg-success bg-opacity-10  rounded-pill d-flex px-3 py-2 align-items-center gap-3">
                          {t("cust_opt_1")}
                          <span>
                            <img src={remove_icon} alt="Remove" />
                          </span>
                        </li>
                        <li className="mx-2 bg-success bg-opacity-10  rounded-pill d-flex px-3 py-2 align-items-center gap-3">
                          {t("cust_opt_2")}
                          <span>
                            <img src={remove_icon} alt="Remove" />
                          </span>
                        </li>
                        <li className="mx-2 bg-success bg-opacity-10  rounded-pill d-flex px-3 py-2 align-items-center gap-3">
                          {t("cust_opt_3")}
                          <span>
                            <img src={remove_icon} alt="Remove" />
                          </span>
                        </li>
                        <li className="mx-2 bg-success bg-opacity-10  rounded-pill d-flex px-3 py-2 align-items-center gap-3">
                          {t("cust_opt_4")}
                          <span>
                            <img src={remove_icon} alt="Remove" />
                          </span>
                        </li>
                        <li className="mx-2 bg-success bg-opacity-10  rounded-pill d-flex px-3 py-2 align-items-center gap-3">
                          {t("cust_opt_5")}
                          <span>
                            <img src={remove_icon} alt="Remove" />
                          </span>
                        </li>
                        <li className="mx-2 bg-success bg-opacity-10  rounded-pill d-flex px-3 py-2 align-items-center gap-3">
                          {t("cust_opt_6")}
                          <span>
                            <img src={remove_icon} alt="Remove" />
                          </span>
                        </li>
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
                <table className="table ">
                  <thead>
                    <tr>
                      <th className="px-4 py-3">
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
                      <th className="px-4 py-3">{t("cust_tbl_column_client_type")}</th>
                      <th className="px-4 py-3">{t("cust_tbl_column_client_phone")}</th>
                      <th className="px-4 py-3">{t("cust_tbl_column_client_email")}</th>
                      <th className="px-4 py-3">{t("cust_tbl_column_request_area")}</th>
                      <th className="px-4 py-3">{t("cust_tbl_column_status")}</th>
                      <th className="px-4 py-3"></th>
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
                              <div className="text-start">
                                <p>
                                  <strong>{t("cust_property_type")}</strong> {t("cust_property_type_value")}
                                </p>
                                <p>
                                  <strong>{t("cust_Property_Condition")}</strong> {t("cust_Property_Condition_value")}
                                </p>
                                <p>
                                  <strong>{t("cust_no_rooms")}</strong> {t("cust_no_rooms_value")}
                                </p>
                                <p>
                                  <strong>{t("cust_apartment_size")}</strong> {t("cust_apartment_size_value")}
                                </p>
                                <p>
                                  <strong>{t("cust_floor")}</strong> 4,5
                                </p>
                                <p>
                                  <strong>{t("cust_price")}</strong> 1000 - 3000 ₪
                                </p>
                              </div>
                              <div className="d-flex justify-content-between">
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

          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header className="border-0 p-3 position-relative mt-4">
              <button
                type="button"
                className="btn-close position-absolute close-btn"
                onClick={handleCloseModal}
              ></button>
            </Modal.Header>

            <Modal.Body className="text-center pb-4">
              <img src={ErrorIcon} alt="ErrorIcon" />
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

          {isModalOpen && (
            <CustomModal
              show={isModalOpen}
              handleClose={() => setIsModalOpen(false)}
              footer={t("cust_model_footer")}
              footer1={t("cust_model_footer1")}
            >
              <div className="max-w-xl mx-auto px-4 bg-white rounded-md w-100" style={{ maxWidth: "36rem" }}>
                <h2 className="text-2xl pb-3 font-semibold text-success text-center border-bottom mb-4">
                  {t("addtional_filter")}
                </h2>
                <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
                  <div className="col">
                    <label className="d-block text-secondary text-start fw-semibold fs-6 mb-1">{t("cust_modal_no_rooms")}</label>
                    <div className="position-relative d-flex align-items-center border rounded px-2 py-1">
                      <input
                        type="text"
                        placeholder="התחילו להקליד..."
                        className="w-100 border-0 text-secondary"
                      />
                      <button className="btn btn-outline-none py-0" type="button">
                        <img src={search_icon2} alt="Search" />
                      </button>
                    </div>
                  </div>
                  <div className="col">
                    <label className="d-block text-secondary text-start fw-semibold fs-6 mb-1">{t("floor")}</label>
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
                <div className="d-flex flex-wrap gap-2 mb-4 justify-content-start">
                  <button className="bg-gray-200 px-3 py-1 rounded-pill text-secondary border-0">
                    {t("addtional_feature_1")}
                  </button>
                  <button className="bg-gray-200 px-3 py-1 rounded-pill text-secondary border-0">
                    {t("addtional_feature_2")}
                  </button>
                  <button className="bg-gray-200 px-3 py-1 rounded-pill text-secondary border-0">
                    {t("addtional_feature_3")}
                  </button>
                  <button className="bg-gray-200 px-3 py-1 rounded-pill text-secondary border-0">
                    {t("addtional_feature_4")}
                  </button>
                  <button className="bg-gray-200 px-3 py-1 rounded-pill text-secondary border-0">
                    {t("addtional_feature_5")}
                  </button>
                  <button className="bg-gray-200 px-3 py-1 rounded-pill text-secondary border-0">
                    {t("addtional_feature_6")}
                  </button>
                  <button className="bg-gray-200 px-3 py-1 rounded-pill text-secondary border-0">
                    {t("addtional_feature_7")}
                  </button>
                  <button className="bg-gray-200 px-3 py-1 rounded-pill text-secondary border-0">
                    {t("addtional_feature_8")}
                  </button>
                  <button className="bg-gray-200 px-3 py-1 rounded-pill text-secondary border-0">
                    {t("addtional_feature_9")}
                  </button>
                </div>
              </div>
            </CustomModal>
          )}
        </div>
      </div>
    </>
  );
};
export default Customer;
