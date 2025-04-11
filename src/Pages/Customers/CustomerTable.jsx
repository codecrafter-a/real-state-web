import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useClientService } from "../../Services/ClientService";
import table_arrrow from "../../assets/images/table_arrrow.svg";
import CustomButton from "../../Componant/Common/Button/Button";
import edit from "../../assets/images/edit.svg";
import deleteIcon from "../../assets/images/delete.svg";
const CustomerTable = ({
  handleShowModal,
  filteredClients,
  setFilteredClients,
}) => {
  const { t } = useTranslation();
  const { getClients } = useClientService();
  const [expandedRows, setExpandedRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState({});
  const [selectAll, setSelectAll] = useState(false);

  console.log(filteredClients, "clientsclientsclients");

  const toggleRow = (index) => {
    setExpandedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleCheckbox = (index) => {
    setSelectedRows((prev) => {
      const updated = { ...prev, [index]: !prev[index] };
      const allSelected =
        filteredClients.length > 0 &&
        filteredClients.every((_, idx) => updated[idx]);
      setSelectAll(allSelected);
      return updated;
    });
  };
  useEffect(() => {
    const fetchedClients = getClients();
    setFilteredClients(fetchedClients);
  }, []);

  const toggleSelectAll = () => {
    const newState = !selectAll;
    setSelectAll(newState);
    const updatedSelection = {};
    filteredClients.forEach((_, index) => {
      updatedSelection[index] = newState;
    });
    setSelectedRows(updatedSelection);
  };

  return (
    <>
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
              <th className="table-head">
                {t("cust_tbl_column_client_phone")}
              </th>
              <th className="table-head">
                {t("cust_tbl_column_client_email")}
              </th>
              <th className="table-head">
                {t("cust_tbl_column_request_area")}
              </th>
              <th className="table-head">{t("cust_tbl_column_status")}</th>
              <th className="table-head"></th>
            </tr>
          </thead>
          <tbody className="border border-[#E6E6E6] rounded-3">
            {filteredClients.map((client, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className="px-4 py-3">
                    <div className="d-flex align-items-center gap-2">
                      <input
                        type="checkbox"
                        checked={!!selectedRows[index]}
                        onChange={() => toggleCheckbox(index)}
                        className="form-check-input "
                      />
                      {client.name}
                    </div>
                  </td>
                  <td className="px-4 py-3">{client.type}</td>
                  <td className="px-4 py-3">{client.phone}</td>
                  <td className="px-4 py-3">{client.email}</td>
                  <td className="px-4 py-3">{client.location}</td>
                  <td className="px-4 py-3">
                    <span className="badge bg-warning">{client.status}</span>
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
                        className={`w-4 h-4 transition-transform ${
                          expandedRows.includes(index)
                            ? "rotate-180"
                            : "rotate-0"
                        }`}
                      />
                    </button>
                  </td>
                </tr>
                {expandedRows.includes(index) && (
                  <tr>
                    <td colSpan={7} className="px-4 py-2">
                      <div className=" d-flex align-items-center justify-content-between">
                        <div>
                          <h5 className="fs-15 lh-1 fw-semibold d-flex align-items-center">
                            {t("cust_property_type")}
                          </h5>
                          <p className="text-wrap mb-0">
                            {t("cust_property_type_value")}
                          </p>
                        </div>
                        <div>
                          <h5 className="fs-15 lh-1 fw-semibold d-flex align-items-center">
                            {t("cust_Property_Condition")}
                          </h5>{" "}
                          <p className="text-wrap mb-0">
                            {t("cust_Property_Condition_value")}
                          </p>
                        </div>
                        <div>
                          <h5 className="fs-15 lh-1 fw-semibold d-flex align-items-center">
                            {t("cust_no_rooms")}
                          </h5>{" "}
                          <p className="text-wrap mb-0">
                            {t("cust_no_rooms_value")}
                          </p>
                        </div>
                        <div>
                          <h5 className="fs-15 lh-1 fw-semibold d-flex align-items-center">
                            {t("cust_apartment_size")}
                          </h5>{" "}
                          <p className="text-wrap mb-0">
                            {t("cust_apartment_size_value")}
                          </p>
                        </div>
                        <div>
                          <h5 className="fs-15 lh-1 fw-semibold d-flex align-items-center">
                            {t("cust_floor")}
                          </h5>{" "}
                          <p className="text-wrap mb-0">4,5</p>
                        </div>
                        <div>
                          <h5 className="fs-15 lh-1 fw-semibold d-flex align-items-center">
                            {t("cust_price")}
                          </h5>
                          <p className="text-wrap mb-0">1000 - 3000 ₪</p>
                        </div>
                      </div>
                      <div className="align-items-center d-flex justify-content-between gap-4 mt-3">
                        <div>
                          <h5 className="fs-15 lh-1 fw-semibold d-flex align-items-center">
                            {t("cust_additional_comments")}
                          </h5>{" "}
                          <p className="text-wrap fw-normal  mb-0 text-start">
                            {t("cust_additional_comments_value")}
                          </p>
                        </div>
                        <div>
                          <h5 className="fs-15 lh-1 fw-semibold d-flex align-items-center">
                            {t("cust_additional_features")}
                          </h5>
                          <div className="d-flex flex-nowrap align-items-center gap-2 mt-2">
                            {t("cust_additional_features_value")
                              .split(",")
                              .map((feature, index) => (
                                <span key={index} className="custom-badge ">
                                  {feature.trim()}
                                </span>
                              ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 d-flex justify-content-start align-item-center">
                        <div className="d-flex flex-column align-item-center">
                          <h5 className="fs-15 lh-1 fw-semibold mb-2 d-flex align-items-center">
                            {t("recent_agreements")}
                          </h5>
                          <ul className="list-unstyled mb-0 text-start">
                            <li className="mb-1">
                              {t("recent_agreements_value_1")}
                            </li>
                            <li>{t("recent_agreements_value_2")}</li>
                          </ul>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center my-3">
                        <CustomButton
                          type="button"
                          className="fs-17 lh-1 fw-semibold  agent-btn-responsive2 w-20 py-2 mx-1 rounded-pill"
                          children={t("all_agreements")}
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
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
      </table>
      
    </>
  );
};

export default CustomerTable;
