import React, { useState } from "react";
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
  const clients = [
    {
      name: "שירי נקבלי",
      type: "מתעניין בשכירות",
      phone: "054-4692650",
      email: "shirims@gmail.com",
      location: "חיפה, קריות, נשר",
      status: "טופס נחתם",
      statusColor: "bg-blue-200 text-blue-600",
    },
    {
      name: "שירי נקבלי",
      type: "מתעניין בשכירות",
      phone: "054-4692650",
      email: "shirims@gmail.com",
      location: "חיפה, קריות, נשר",
      status: "טופס",
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
            כל הלקוחות
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
                    הוספת לקוח{" "}
                  </div>
                </button>
              </div>
              <div className="mb-6 relative w-[66%]">
                <div className="input-group input_grp_cus">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="חפשו לקוח לפי שם / טלפון /מייל "
                  />
                  <button className="btn" type="button">
                    <img src={search} alt="Search" />
                  </button>
                </div>
              </div>
              <div className="row form_group row_customers">
                <div className="col">
                  <label className="form-label">
                    לקוח מתעניין ב../ סוג לקוח
                  </label>
                  <select className="form-select">
                    <option />
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
                <div className="col">
                  <label className="form-label">איזור מגורים מבוקש</label>
                  <div className="input-group input_grp_cus">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="התחילו להקליד"
                    />
                    <button className="btn" type="button">
                      <img src={search} alt="Search" />
                    </button>
                  </div>
                </div>
                <div className="col">
                  <label className="form-label">סוג הנכס</label>
                  <select className="form-select">
                    <option />
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
                <div className="col">
                  <label className="form-label">מצב הנכס</label>
                  <select className="form-select">
                    <option />
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
                <div className="col-auto">
                  <label className="form-label d-block">&nbsp;</label>
                  <button type="button" className="btn_cmn btn_cmn_40">
                    חיפוש
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
                        חיפוש מתקדם
                      </button>

                      <ul className=" w-full flex m-0 items-center">
                        <li className="mx-2 bg-emerald-500 bg-opacity-10 bordre-[1px] rounded-pill flex px-4 py-1">
                          מתעניין בשכירות{" "}
                          <span className="my-2 px-2 ">
                            <img src={remove_icon} alt="Remove" />
                          </span>
                        </li>
                        <li className=" mx-2 bg-emerald-500 bg-opacity-10 bordre-[1px] rounded-pill flex px-4 py-1">
                          חיפה{" "}
                          <span className="my-2 px-2 ">
                            <img src={remove_icon} alt="Remove" />
                          </span>
                        </li>
                        <li className="mx-2 bg-emerald-500 bg-opacity-10 bordre-[1px] rounded-pill flex px-4 py-1">
                          נשר{" "}
                          <span className="my-2 px-2 ">
                            <img src={remove_icon} alt="Remove" />
                          </span>
                        </li>
                        <li className="mx-2 bg-emerald-500 bg-opacity-10 bordre-[1px] rounded-pill flex px-4 py-1">
                          קריות{" "}
                          <span className="my-2 px-2">
                            <img src={remove_icon} alt="Remove" />
                          </span>
                        </li>
                        <li className="mx-2 bg-emerald-500 bg-opacity-10 bordre-[1px] rounded-pill flex px-4 py-1">
                          נשר{" "}
                          <span className="my-2 px-2 ">
                            <img src={remove_icon} alt="Remove" />
                          </span>
                        </li>
                        <li className="mx-2 bg-emerald-500 bg-opacity-10 bordre-[1px] rounded-pill flex px-4 py-1">
                          קריות{" "}
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
                      מחיקה
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
                      החתמת מתעניין
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
                      החתמת בעל נכס
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
                          <span>שם העמודה</span>
                        </div>
                      </th>
                      <th className="px-4 py-2 text-right w-[16%]">סוג לקוח</th>
                      <th className="px-4 py-2 text-right w-[16%]">טלפון</th>
                      <th className="px-4 py-2 text-right w-[16%]">דוא”ל</th>
                      <th className="px-4 py-2 text-right w-[16%]">
                        איזור מבוקש
                      </th>
                      <th className="px-4 py-2 text-right w-[16%]">
                        סטטוס מסמך אחרון
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
                                  <strong>סוג הנכס:</strong> דירה בבניין, דירת ג
                                </p>
                                <p>
                                  <strong>מצב הנכס:</strong> חדש, משופץ
                                </p>
                                <p>
                                  <strong>מספר חדרים:</strong> 3,4,5
                                </p>
                                <p>
                                  <strong>גודל דירה:</strong> 100 - 300 מ”ר
                                </p>
                                <p>
                                  <strong>קומה:</strong> 4,5
                                </p>
                                <p>
                                  <strong>מחיר:</strong> 1000 - 3000 ₪
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
              footer={"ניקוי פילטרים "}
              footer1={"סינון "}
            >
              <div className="max-w-xl mx-auto px-6 bg-white  rounded-md w-full">
                <h2 className="text-2xl pb-3 font-semibold text-emerald-600 text-center border-b mb-4">
                  סנונים נוספים
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-600 text-start font-semibold text-md mb-1">
                      מספר חדרים
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
                      קומה
                    </label>
                    <select className="w-full border outline-none border-gray-300 rounded-md px-3 py-2 text-gray-700">
                      <option></option>
                      <option>בחר</option>
                    </select>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4 mb-4">
                  <RangeSlider label={'גודל (מ"ר)'} />
                  <RangeSlider label={"מחיר (ש״ח)"} />
                </div>
                <h3 class="text-base text-start font-semibold text-emerald-600 mb-2">
                  מאפיינים נוספים
                </h3>
                <div class="flex flex-wrap gap-2 mb-6 justify-start">
                  <button class="bg-gray-200 px-3 py-1 rounded-full text-gray-700">
                    כניסה מיידית
                  </button>
                  <button class="bg-gray-200 px-4 py-1 rounded-full text-gray-700">
                    כניסה גמישה
                  </button>
                  <button class="bg-gray-200 px-4 py-1 rounded-full text-gray-700">
                    מחסן
                  </button>
                  <button class="bg-gray-200 px-4 py-1 rounded-full text-gray-700">
                    מעלית
                  </button>
                  <button class="bg-gray-200 px-4 py-1 rounded-full text-gray-700">
                    גישה לנכים
                  </button>
                  <button class="bg-gray-200 px-4 py-1 rounded-full text-gray-700">
                    מרפסת
                  </button>
                  <button class="bg-gray-200 px-4 py-1 rounded-full text-gray-700">
                    מזגן
                  </button>
                  <button class="bg-gray-200 px-4 py-1 rounded-full text-gray-700">
                    חניה
                  </button>
                  <button class="bg-gray-200 px-4 py-1 rounded-full text-gray-700">
                    ממד
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
