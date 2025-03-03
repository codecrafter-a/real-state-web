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
// import check_tick from '../../assets/images/check_tick.svg';

import table_arrrow from "../../assets/images/table_arrrow.svg";
import CustomModal from "../../Componant/Common/Modal/CustomeModal";
import RangeSlider from "../../Componant/Common/RangeSlider/RangeSlider";
// import edit from '../../assets/images/edit.svg';
// import deleteIcon  from '../../assets/images/delete.svg';

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
    <div>
      <div className="absolute w-full top-0 z-0 overflow-hidden">
        <figure className="mb-0 top_bg_fig">
          <img src={body_bg} width="100%" alt="Background" />
          <span className="bgupper_icons">
            <img src={bory_group_left} alt="Left Icon" />
          </span>
        </figure>
        <div className="bgbelow_icons">
          <img src={bory_group_right} alt="Right Icon" />
        </div>
      </div>
      <div className="main_wrapper">
        <div className="main_wrap_hdr">
          <h1 className="text-2xl font-semibold border-b border-gray-300 py-4 mb-7 text-[#00A481] text-center">
              {t("all_cust")}
          </h1>
        </div>
        <div className="main_wrap_body p-0">
          <form className="form_custom">
            <div className="internal_scroll mCustomScrollbar">
              <div className="form_group mb-2 mb-xl-0 flex justify-end">
                <button
                  type="button"
                  className="border-[1px] text-xl flex items-center justify-center shadow-lg border-emerald-500 rounded-3xl text-emerald-500 py-2 hover:bg-[#55CD85] hover:text-white min-w-44 px-4"
                >
                  <div className="flex items-center justify-center">
                    <img className="me-1" src={add_reaction} alt="Add Client" />
                     {t("add_cust")}{" "}
                  </div>
                </button>
              </div>
              <div className="mb-6 relative w-[66%]">
                <div className="input-group input_grp_cus">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("filter_cust")}
                  />
                  <button className="btn" type="button">
                    <img src={search} alt="Search" />
                  </button>
                </div>
              </div>
              <div className="row form_group row_customers">
                <div className="col">
                  <label className="form-label">
                    {t("cust_filter_1")}
                  </label>
                  <select className="form-select">
                    <option />
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
                <div className="col">
                  <label className="form-label">{t("cust_serch")}</label>
                  <div className="input-group input_grp_cus">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={t("cust_typing")}
                    />
                    <button className="btn" type="button">
                      <img src={search} alt="Search" />
                    </button>
                  </div>
                </div>
                <div className="col">
                  <label className="form-label">{t("cust_Property_type")}</label>
                  <select className="form-select">
                    <option />
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
                <div className="col">
                  <label className="form-label">{t("cust_Property_condition")}</label>
                  <select className="form-select">
                    <option />
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
                <div className="col-auto">
                  <label className="form-label d-block">&nbsp;</label>
                  <button type="button" className="btn_cmn btn_cmn_40">
                    {t("cust_search")}
                  </button>
                </div>
              </div>
              <div className="form_group group_ad_search">
                <div className="adv_search_row">
                  <div className="flex">
                    <div className="form_group flex items-center mb-6  text-end">
                      <button
                        type="button"
                        onClick={handleOpen}
                        className="border-[1px] shadow-lg flex items-center justify-center text-lg border-emerald-500 rounded-3xl text-emerald-500 py-1  hover:bg-[#55CD85] hover:text-white min-w-44 px-4"
                      >
                        <img
                          className="me-1"
                          src={search_icon2}
                          alt="Add Client"
                        />
                        {t("advance_search")}
                      </button>

                      <ul className=" w-full flex m-0 items-center">
                        <li className="mx-2 bg-emerald-500 bg-opacity-10 bordre-[1px] rounded-pill flex px-4 py-1">
                          {t("cust_opt_1")}{" "}
                          <span className="my-2 px-2 ">
                            <img src={remove_icon} alt="Remove" />
                          </span>
                        </li>
                        <li className=" mx-2 bg-emerald-500 bg-opacity-10 bordre-[1px] rounded-pill flex px-4 py-1">
                          {t("cust_opt_2")}{" "}
                          <span className="my-2 px-2 ">
                            <img src={remove_icon} alt="Remove" />
                          </span>
                        </li>
                        <li className="mx-2 bg-emerald-500 bg-opacity-10 bordre-[1px] rounded-pill flex px-4 py-1">
                          {t("cust_opt_3")}{" "}
                          <span className="my-2 px-2 ">
                            <img src={remove_icon} alt="Remove" />
                          </span>
                        </li>
                        <li className="mx-2 bg-emerald-500 bg-opacity-10 bordre-[1px] rounded-pill flex px-4 py-1">
                          {t("cust_opt_4")}{" "}
                          <span className="my-2 px-2">
                            <img src={remove_icon} alt="Remove" />
                          </span>
                        </li>
                        <li className="mx-2 bg-emerald-500 bg-opacity-10 bordre-[1px] rounded-pill flex px-4 py-1">
                          {t("cust_opt_5")}{" "}
                          <span className="my-2 px-2 ">
                            <img src={remove_icon} alt="Remove" />
                          </span>
                        </li>
                        <li className="mx-2 bg-emerald-500 bg-opacity-10 bordre-[1px] rounded-pill flex px-4 py-1">
                          {t("cust_opt_6")}{" "}
                          <span className="my-2 px-2">
                            <img src={remove_icon} alt="Remove" />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className=" flex justify-end gap-2">
                    <button
                      type="button"
                      className="border-[1px] shadow-lg text-lg border-emerald-500 rounded-3xl text-emerald-500 py-1  hover:bg-[#55CD85] hover:text-white min-w-28 px-4"
                    >
                      {t("cust_delete")}
                    </button>
                    <button
                      type="button"
                      className="border-[1px] shadow-lg text-lg border-emerald-500 rounded-3xl text-white py-1 bg-emerald-500  hover:bg-[#55CD85] hover:text-white min-w-28 px-4 flex items-center justify-center gap-2"
                    >
                      <img
                        className="me-1"
                        src={action_icon1}
                        alt="Sign Client"
                      />
                      {t("auth_cust_sigin")}
                    </button>
                    <button
                      type="button"
                      className="border-[1px] shadow-lg text-lg border-emerald-500 rounded-3xl text-white py-1 bg-emerald-500  hover:bg-[#55CD85] hover:text-white min-w-28 px-4 flex items-center justify-center gap-2"
                    >
                      <img
                        className="me-1"
                        src={action_icon2}
                        alt="Sign Owner"
                      />
                      {t("auth_pro_Owner_sigin")}
                    </button>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="w-full border border-gray-300 rounded-md">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-right w-[14%]">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectAll}
                            onChange={toggleSelectAll}
                            className="h-4 w-4 accent-blue-500"
                          />
                          <span>{t("cust_tbl_column_name")}</span>
                        </div>
                      </th>
                      <th className="px-4 py-2 text-right w-[16%]">{t("cust_tbl_column_client_type")}</th>
                      <th className="px-4 py-2 text-right w-[16%]">{t("cust_tbl_column_client_phone")}</th>
                      <th className="px-4 py-2 text-right w-[16%]">{t("cust_tbl_column_client_email")}</th>
                      <th className="px-4 py-2 text-right w-[16%]">
                        {t("cust_tbl_column_request_area")}
                      </th>
                      <th className="px-4 py-2 text-right w-[16%]">
                        {t("cust_tbl_column_status")}
                      </th>
                      <th className="px-4 py-2 w-[4%]"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map((client, index) => (
                      <React.Fragment key={index}>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-2">
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={!!selectedRows[index]}
                                onChange={() => toggleCheckbox(index)}
                                className='w-4 h-4 border-2 rounded-md flex items-center justify-center 
                            checke border-teal-500 bg-white"'
                              />
                              <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  stroke-width="1"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                              {client.name}
                            </div>
                          </td>
                          <td className="px-4 py-2">{client.type}</td>
                          <td className="px-4 py-2">{client.phone}</td>
                          <td className="px-4 py-2">{client.email}</td>
                          <td className="px-4 py-2">{client.location}</td>
                          <td className="px-4 py-2">
                            <span className="bg-yellow-300 px-3 py-1 rounded-md">
                              {client.status}
                            </span>
                          </td>
                          <td className="text-center">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                toggleRow(index);
                              }}
                            >
                              <img
                                src={table_arrrow}
                                alt="table_arrow"
                                className={`w-4 h-4 transition-transform duration-300 ${
                                  expandedRows.includes(index)
                                    ? "rotate-180"
                                    : "rotate-0"
                                }`}
                              />
                            </button>
                          </td>
                        </tr>
                        {expandedRows.includes(index) && (
                          <tr className="bg-gray-50 ">
                            <td colSpan={7} className="px-6 py-4">
                              <div className="text-right">
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
          {isModalOpen && (
            <CustomModal
              show={isModalOpen}
              handleClose={() => setIsModalOpen(false)}
              footer={t("cust_model_footer")}
              footer1={t("cust_model_footer1")}
            >
              <div className="max-w-xl mx-auto px-6 bg-white  rounded-md w-full">
                <h2 className="text-2xl pb-3 font-semibold text-emerald-600 text-center border-b mb-4">
                  {t("addtional_filter")}
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-600 text-start font-semibold text-md mb-1">
                    {t("cust_modal_no_rooms")}
                    </label>
                    <div className="relative flex items-center border border-gray-300 rounded-md px-1 py-2">
                      <input
                        type="text"
                        placeholder="התחילו להקליד..."
                        className="w-full outline-none text-gray-700"
                      />
                      <img
                        src={search_icon2}
                        alt="Search"
                        className="w-6 h-6 text-gray-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-600 text-start font-semibold  text-md mb-1">
                    {t("floor")}
                    </label>
                    <select className="w-full border outline-none border-gray-300 rounded-md px-3 py-2 text-gray-700">
                      <option></option>
                      <option>בחר</option>
                    </select>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4 mb-4">
                  <RangeSlider label={t("cust_slider_label")} />
                  <RangeSlider label={t("cust_slider_label2")} />
                </div>
                <h3 class="text-base text-start font-semibold text-emerald-600 mb-2">
                  {t("addtional_feature")}
                </h3>
                <div class="flex flex-wrap gap-2 mb-6 justify-start">
                  <button class="bg-gray-200 px-3 py-1 rounded-full text-gray-700">
                    {t("addtional_feature_1")}
                  </button>
                  <button class="bg-gray-200 px-4 py-1 rounded-full text-gray-700">
                    {t("addtional_feature_2")}
                  </button>
                  <button class="bg-gray-200 px-4 py-1 rounded-full text-gray-700">
                    {t("addtional_feature_3")}
                  </button>
                  <button class="bg-gray-200 px-4 py-1 rounded-full text-gray-700">
                    {t("addtional_feature_4")}
                  </button>
                  <button class="bg-gray-200 px-4 py-1 rounded-full text-gray-700">
                    {t("addtional_feature_5")}
                  </button>
                  <button class="bg-gray-200 px-4 py-1 rounded-full text-gray-700">
                    {t("addtional_feature_6")}
                  </button>
                  <button class="bg-gray-200 px-4 py-1 rounded-full text-gray-700">
                    {t("addtional_feature_7")}
                  </button>
                  <button class="bg-gray-200 px-4 py-1 rounded-full text-gray-700">
                    {t("addtional_feature_8")}
                  </button>
                  <button class="bg-gray-200 px-4 py-1 rounded-full text-gray-700">
                    {t("addtional_feature_9")}
                  </button>
                </div>
              </div>
            </CustomModal>
          )}
        </div>
      </div>
    </div>
  );
};
export default Customer;
