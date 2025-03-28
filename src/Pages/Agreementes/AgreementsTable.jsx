import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TbMailForward } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useAgreementServices } from "../../Services/AgreementServices";
import { Accordion } from "react-bootstrap";
import key from "../../assets/images/key_vertical.svg";
const AgreementsTable = ({ handleOpen, searchQuery, selectedStatus }) => {
  console.log(" ~ AgreementsTable ~ selectedStatus:", selectedStatus);

  const { t } = useTranslation();
  const [tableData, setTableData] = useState([]);
  const { getAgreementData } = useAgreementServices();

  useEffect(() => {
    const data = getAgreementData();
    setTableData(data);
  }, []);

  const statusKeyToEnglish = {
    home_tab_r1_h2: "Generated",
    home_tab_r2_h2: "Sent",
    home_tab_r3_h2: "Viewed",
    home_tab_r4_h2: "Signed",
    home_tab_r5_h2: "Signed and Executed",
    home_tab_r6_h2: "Signed and Registered",
  };

  const filteredData = tableData.filter((row) => {
    // Search filter
    const matchesSearchQuery = t(row.agreementName)
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    // Status filter
    let matchesStatus = true;
    if (selectedStatus) {
      const rowStatusEnglish = statusKeyToEnglish[row.status] || row.status;
      matchesStatus =
        rowStatusEnglish.toLowerCase() === selectedStatus.toLowerCase();
    }

    return matchesSearchQuery && matchesStatus;
  });

  return (
    <div className="mt-4 ">
      <table className="table text-center d-none d-md-table">
        <thead>
          <tr>
            <th style={{ color: "#686868", fontWeight: "600" }}>
              {t("home_tab_h7")}
            </th>
            <th style={{ color: "#686868", fontWeight: "600" }}>
              {t("home_tab_h6")}
            </th>
            <th style={{ color: "#686868", fontWeight: "600" }}>
              {t("home_tab_h5")}
            </th>
            <th style={{ color: "#686868", fontWeight: "600" }}>
              {t("home_tab_h4")}
            </th>
            <th style={{ color: "#686868", fontWeight: "600" }}>
              {t("home_tab_h3")}
            </th>
            <th style={{ color: "#686868", fontWeight: "600" }}>
              {t("home_tab_h2")}
            </th>
            <th style={{ color: "#686868", fontWeight: "600" }}>
              {t("home_tab_h1")}
            </th>
          </tr>
        </thead>
        <tbody className="border">
          {filteredData.map((row, index) => (
            <TableRow key={index} data={row} handleOpen={handleOpen} />
          ))}
        </tbody>
      </table>
      <Accordion className="d-block p-0 d-md-none d-flex flex-column gap-3 ">
        {tableData.map((row, index) => (
          <Accordion.Item
            eventKey={index.toString()}
            key={row.id}
            className="border-2  border-top rounded-3 overflow-visible"
          >
            <Accordion.Header>
              <div className="">
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
                      {" "}
                      {row?.accountNumber} | {row?.date}
                    </span>
                    <p className="fw-bold fs-14 d-block mb-0">
                      {" "}
                      {t(row?.agreementName)} |{" "}
                      <span className="fw-semibold lh-1 fs-12">
                        {t(row?.agreementType)}
                      </span>
                    </p>
                    <p className="fw-bold  fs-12 d-block my-0">
                      {t("home_tab_h4")} :{" "}
                      <span className="fw-semibold lh-1 fs-12">
                        {t(row?.clients)}
                      </span>
                    </p>
                    <p className="fw-bold fs-12 d-block mb-0">
                      {t("home_tab_h5")} :{" "}
                      <span className="fw-semibold lh-1 fs-12">
                        {row?.commission}
                      </span>
                    </p>
                  </div>
                </div>
                <StatusBadge status={t(row?.status)} />
              </div>
            </Accordion.Header>
            <Accordion.Body className="p-0">
              <div className="border-top p-2 ">
                <div className="d-flex justify-content-around  w-100">
                  <ActionButtons type={t(row?.actionType)} icon={row?.icon} onDelete={handleOpen} />
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};
const ActionButtons = ({ type, icon, onDelete }) => {
  const { t } = useTranslation();
  return (
    <div className="d-flex align-items-center gap-3 p-2 bg-white mx-auto">
      {type === "default" && (
        <>
          <div className="d-md-flex align-items-center gap-1 cursor-pointer">
            <TbMailForward />
            <span className=" fs-12 fs-md-15 fw-normal lh-1">{t("home_tab_r1_h1_l4")}</span>
          </div>
          <div className="d-sm-flex align-items-center gap-1 cursor-pointer">
            {icon}
            <span  className="fs-md-15 fs-12 fw-normal lh-1">{t("home_tab_r1_h1_l3")}</span>
          </div>
          <button
            className="d-sm-flex align-items-center border-0 bg-transparent gap-1 cursor-pointer"
            onClick={onDelete}
          >
            <MdOutlineDeleteForever />
            <span className="fs-12 fs-md-15 fw-normal lh-1" >{t("age_delet")}</span>
          </button>
          <span  className="fs-12 fs-md-15 fw-normal lh-1">{t("home_tab_r1_h1_l2")}</span>
          <span  className="fs-12 fs-md-15 fw-normal lh-1">{t("home_tab_r1_h1_l1")}</span>
        </>
      )}
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const { t } = useTranslation();

  const statusMap = {
    Generated: "הופק",
    Sent: "נשלח",
    Viewed: "נצפה",
    Signed: "נחתם",
    "Signed and Executed": "נחתם ויצא לפועל",
    "Signed and Registered": "נחתם ונרשם",
  };

  const translatedStatus = t(status);

  const statusKey = statusMap[translatedStatus] || translatedStatus;

  const statusStyles = {
    הופק: { backgroundColor: "#f3f4f6", color: "#6b7280" },
    נשלח: { backgroundColor: "#fef3c7", color: "#d97706" },
    נצפה: { backgroundColor: "#fee2e2", color: "#dc2626" },
    נחתם: { backgroundColor: "#ecfdf5", color: "#10b981" },
    "נחתם ויצא לפועל": { backgroundColor: "#ecfdf5", color: "#10b981" },
    "נחתם ונרשם": { backgroundColor: "#ecfdf5", color: "#10b981" },
  };

  return (
    <span
      className="px-4 my-auto text-center fw-semibold rounded-pill d-flex align-items-center justify-content-center"
      style={{ ...statusStyles[statusKey], minHeight: "28px", width: "123px" }}
    >
      {translatedStatus}
    </span>
  );
};

const TableRow = ({ data, handleOpen }) => {
  const { t } = useTranslation();
  const {
    status,
    commission,
    clients,
    agreementType,
    date,
    agreementName,
    actionType,
    icon,
  } = data;
  return (
    <tr>
      <td className="d-table-cell align-middle py-3">{t(agreementName)}</td>
      <td className="d-table-cell align-middle py-3">{date}</td>
      <td className="d-table-cell align-middle py-3">{t(agreementType)}</td>
      <td className="d-table-cell align-middle py-3">{t(clients)}</td>
      <td className="d-table-cell align-middle py-3">{commission}</td>
      <td className="d-table-cell align-middle py-3">
        <StatusBadge status={t(status)} />
      </td>
      <td className="d-table-cell align-middle py-3">
        <ActionButtons type={t(actionType)} icon={icon} onDelete={handleOpen} />
      </td>
    </tr>
  );
};

export default AgreementsTable;
