import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TbMailForward } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useAgreementServices } from "../../Services/AgreementServices";
import { Accordion } from "react-bootstrap";
import key from "../../assets/images/key_vertical.svg";
import iconHome from "../../assets/images/icon_home.svg";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdAttach } from "react-icons/io";
import { FaRegFile } from "react-icons/fa6";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";
import { LuBookMinus } from "react-icons/lu";
import { Dropdown } from "react-bootstrap";
import cancel from "../../assets/images/cancel.png";


const AgreementsTable = ({
  handleOpen,
  searchQuery,
  selectedStatus,
  selectData,
  fromDate,
  toDate,
  agreeData,
}) => {
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

  const borderColors = {
    default: "#f87171",
    signed: "#10b981",
    executed: "#fdba74",
    registered: "#3b82f6",
    viewed: "#f87171",
  };

  const filteredData = tableData.filter((row) => {
    // Search filter (match agreementName OR clients)
    const matchesSearchQuery =
      t(row.agreementName).toLowerCase().includes(searchQuery.toLowerCase()) ||
      t(row.clients).toLowerCase().includes(searchQuery.toLowerCase());

    // Status filter
    let matchesStatus = true;
    if (selectedStatus) {
      const rowStatusEnglish = statusKeyToEnglish[row.status] || row.status;
      matchesStatus =
        rowStatusEnglish.toLowerCase() === selectedStatus.toLowerCase();
    }

    let matchesDate = true;

    if (selectData) {
      if (fromDate && toDate && agreeData) {
        const rowDate = new Date(row.date);
        const from = new Date(fromDate);
        const to = new Date(toDate);
        matchesDate = rowDate >= from && rowDate <= to;
      } else if (fromDate) {
        matchesDate = new Date(row.date) >= new Date(fromDate);
      } else if (toDate) {
        matchesDate = new Date(row.date) <= new Date(toDate);
      }
    }

    return matchesSearchQuery && matchesStatus && matchesDate;
  });

  return (
    <div className="mt-4 ">
      <table className="table text-center d-none d-md-table">
        <thead>
          <tr>
            <th
              style={{ color: "#686868", lineHeight: "20px" }}
              className=" fw-semibold fs-15 "
            >
              {t("home_tab_h7")}
            </th>
            <th
              style={{ color: "#686868", lineHeight: "20px" }}
              className="fw-semibold fs-15"
            >
              {t("home_tab_h6")}
            </th>
            <th
              style={{ color: "#686868", lineHeight: "20px" }}
              className="fw-semibold fs-15"
            >
              {t("home_tab_h5")}
            </th>
            <th
              style={{ color: "#686868", lineHeight: "20px" }}
              className="fw-semibold fs-15"
            >
              {t("home_tab_h4")}
            </th>
            <th
              style={{ color: "#686868", lineHeight: "20px" }}
              className="fw-semibold fs-15"
            >
              {t("home_tab_h3")}
            </th>
            <th
              style={{ color: "#686868", lineHeight: "20px" }}
              className="fw-semibold fs-15"
            >
              {t("home_tab_h2")}
            </th>
            <th
              style={{ color: "#686868", lineHeight: "20px" }}
              className="fw-semibold fs-15"
            >
              {t("home_tab_h1")}
            </th>
          </tr>
        </thead>
        <tbody className="border">
          {filteredData.map((row, index) => (
            <tr key={index} className=" fw-normal fs-15 lh-1">
              <td className="d-table-cell align-middle py-3">
                <div className="d-flex align-items-center gap-1">
                  <img
                    src={iconHome}
                    alt="home icon"
                    className="text-teal h-auto"
                    style={{ width: "18px" }}
                  />
                  {t(row.agreementName)}
                </div>
              </td>
              <td className="d-table-cell align-middle py-3">{row.date}</td>
              <td className="d-table-cell align-middle py-3">
                {t(row.agreementType)}
              </td>
              <td className="d-table-cell align-middle py-3">
                {t(row.clients)}
              </td>
              <td className="d-table-cell align-middle py-3">
                {row.commission}
              </td>
              <td className="d-table-cell align-middle py-3">
                <StatusBadge status={t(row.status)} />
              </td>

              {(row.status === "home_tab_r3_h2" ||
                row.status === "home_tab_r2_h2" ||
                row.status === "home_tab_r1_h2") && (
                <td className="d-table-cell align-middle py-3">
                  <div className="d-flex align-items-center gap-3 p-2 bg-white">
                    <div className="d-flex align-items-center gap-1">
                      <TbMailForward size={18} />
                      <span>{t("home_tab_r1_h1_l4")}</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <FaWhatsapp />
                      <span>{t("home_tab_r1_h1_l3")}</span>
                    </div>
                    <span className="d-flex align-items-center ">
                      <IoMdAttach size={18} />
                      {t("home_tab_r1_h1_l2")}
                    </span>
                    <Dropdown className="d-flex align-items-center">
                      <Dropdown.Toggle
                        as="div"
                        variant="light"
                        className="border-0 bg-transparent custom-dropdown-toggle d-flex align-items-center gap-1 cursor-pointer"
                      >
                        <HiOutlineDotsVertical size={18} />
                        {t("home_tab_r1_h1_l1")}
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="w_max more-menu">
                        <Dropdown.Item
                          href="#/action-1"
                          className="d-flex  align-items-center gap-1 m-2 p-0"
                        >
                          <img src={cancel} alt="cancel" />
                          <span className="fs-15 lh-1 fw-normal">
                            {t("cancel_signing_process")}
                          </span>
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-2"
                          className="d-flex align-items-center gap-2 m-2 p-0"
                        >
                          <RiDeleteBin2Line size={18} />
                          <span className="fs-15 lh-1 fw-normal">
                            {t("delete_agreement")}
                          </span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </td>
              )}
              {row.status === "home_tab_r4_h2" && (
                <td className="d-table-cell align-middle py-3">
                  <div className="d-flex align-items-center gap-3 p-2 bg-white">
                    <div className="d-flex align-items-center text-nowrap gap-1">
                      <FaRegFile size={18} />
                      <span>{t("open_agreement")}</span>
                    </div>
                    <div className="d-flex align-items-center text-nowrap gap-1">
                      <TbMailForward size={18} />
                      <span>{t("send_copy")}</span>
                    </div>
                    <span className="d-flex align-items-center text-nowrap gap-1">
                      <MdOutlineCheckCircleOutline size={18} />
                      {t("close_deal")}
                    </span>
                    <button
                      className="d-flex align-items-center border-0 bg-transparent  text-nowrap gap-1"
                      onClick={handleOpen}
                    >
                      <RiDeleteBin2Line size={18} />
                      {t("delete")}
                    </button>
                  </div>
                </td>
              )}
              {row.status === "home_tab_r5_h2" && (
                <td className="d-table-cell align-middle py-3">
                  <div className="d-flex align-items-center gap-3 p-2 bg-white">
                    <div className="d-flex align-items-center gap-1">
                      <TbMailForward size={18} />
                      <span>{t("send_copy")}</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <LuBookMinus size={18} />
                      <span>{t("register_land")}</span>
                    </div>
                    <button
                      className="d-flex border-0 bg-transparent align-items-center gap-1"
                      onClick={handleOpen}
                    >
                      <RiDeleteBin2Line size={18} />
                      {t("delete")}
                    </button>
                  </div>
                </td>
              )}
              {row.status === "home_tab_r6_h2" && (
                <td className="d-table-cell align-middle py-3">
                  <div className="d-flex align-items-center gap-3 p-2 bg-white">
                    <div className="d-flex align-items-center gap-1">
                      <TbMailForward size={18} />
                      <span>{t("send_copy")}</span>
                    </div>
                    <button
                      className="d-flex align-items-center border-0 bg-transparent gap-1"
                      onClick={handleOpen}
                    >
                      <RiDeleteBin2Line size={18} />
                      {t("delete")}
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <Accordion className=" p-0 d-md-none d-flex flex-column gap-3 ">
        {tableData.map((row, index) => (
          <Accordion.Item
            eventKey={index.toString()}
            key={row.id}
            style={{
              borderInlineStart: `6px solid ${
                borderColors[row.actionType] || "#f87171"
              }`,
            }}
            className="border-2  border-top rounded-3 overflow-visible"
          > 
            <Accordion.Header id="accordionDropdown"></Accordion.Header>
            <label aria-label="accordionDropdown"  as="div" className="d-flex align-items-center">
              <div className="d-flex align-items-center gap-2">
                <img
                  src={key}
                  alt="vertical key"
                  className="img-fluid"
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "contain",
                  }}
                />
                <div>
                  <span className="fw-semibold fs-12 d-block">
                    {row?.accountNumber} | {row?.date}
                  </span>
                  <p className="fw-bold fs-14 d-block mb-0">
                    {t(row?.agreementName)} |{" "}
                    <span className="fw-semibold lh-1 fs-12">
                      {t(row?.agreementType)}
                    </span>
                  </p>
                  <p className="fw-bold fs-12 d-block my-0">
                    {t("home_tab_h4")} :{" "}
                    <span className="fw-semibold lh-1 fs-12">
                      {t(row?.clients)}
                    </span>
                  </p>
                  <p className="fw-bold fs-12 d-block mb-0">
                    {t("br_commission")}
                    <span className="fw-semibold lh-1 fs-12">
                      {row?.commission}
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <StatusBadge status={t(row?.status)} />
              </div>
            </label>
            <Accordion.Body className="p-0">
              <div className="border-top p-2 ">
                <div className="d-flex justify-content-around  w-100">
                  <ActionButtons
                    type={t(row?.actionType)}
                    icon={row?.icon}
                    onDelete={handleOpen}
                  />
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
    <div className="d-flex align-items-center gap-2 p-2 bg-white ">
      {type === "default" && (
        <>
          <div className="d-md-flex align-items-center gap-1 cursor-pointer">
            <TbMailForward />
            <span className=" fs-12 fs-md-15 fw-normal lh-1">
              {t("home_tab_r1_h1_l4")}
            </span>
          </div>
          <div className="d-sm-flex align-items-center gap-1 cursor-pointer">
            {icon}
            <span className="fs-md-15 fs-12 fw-normal lh-1">
              {t("home_tab_r1_h1_l3")}
            </span>
          </div>
          <button
            className="d-sm-flex align-items-center border-0 bg-transparent gap-1 cursor-pointer"
            onClick={onDelete}
          >
            <MdOutlineDeleteForever />
            <span className="fs-12 fs-md-15 fw-normal lh-1">
              {t("age_delet")}
            </span>
          </button>
          <span className="fs-12 fs-md-15 fw-normal lh-1">
            {t("home_tab_r1_h1_l2")}
          </span>
          <span className="fs-12 fs-md-15 fw-normal lh-1">
          {t("home_tab_r1_h1_l1")}
          </span>
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

export default AgreementsTable;
