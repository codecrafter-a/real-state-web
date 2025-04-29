import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TbMailForward } from "react-icons/tb";
import { useTranslation } from "react-i18next";
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

const AgreementsTable = ({ handleOpen, selectedStatus, selectData }) => {
  const { t } = useTranslation();
  const borderColors = [
    { Generated: "#555555" },
    { sent: "#fef3c7" },
    { viewed: "#f87171" },
    { executed: "#10b981" },
    { registered: "#10b981" },
    { signin: "#10b981" },
  ];
  return (
    <div className="mt-4 ps-3">
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
            <th
              style={{ color: "#686868", lineHeight: "20px" }}
              className="fw-semibold fs-15"
            ></th>
          </tr>
        </thead>
        <tbody className="border ">
          {selectData.map((row, index) => {
            const borderColor = borderColors[index]
            ? Object.values(borderColors[index])[0]
            : "#000000";
            return (
              <>
                <tr key={index} className=" fw-normal fs-15 lh-1" style={{
                    borderInlineStart: `6px solid ${borderColor}`,
                  }} >
                  <td className="d-table-cell align-middle py-3" >
                    <div className="d-flex align-items-center gap-1 " >
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
                        <Dropdown className="d-flex bg-white align-items-center justify-content-center px-3">
                          <Dropdown.Toggle
                            as="div"
                            variant="light"
                            className="border-0  custom-dropdown-toggle d-flex align-items-center gap-1 cursor-pointer"
                          >
                            <HiOutlineDotsVertical size={18} />
                            {t("home_tab_r1_h1_l1")}
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            style={{ width: "100px" }}
                            className=" z-3 shadow d-flex flex-column py-2 gap-1 more-menu"
                          >
                            <Dropdown.Item
                              href="#/action-1"
                              className="d-flex align-items-center gap-1 m-2 p-0"
                            >
                              <img src={cancel} alt="cancel" />
                              <span className="fs-12 lh-1 fw-normal">
                                {t("cancel_signing_process")}
                              </span>
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-2"
                              className="d-flex align-items-center gap-2 m-2 p-0"
                            >
                              <RiDeleteBin2Line size={18} />
                              <span className="fs-12 lh-1 fw-normal">
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
                        <button
                          className="d-flex align-items-center border-0 bg-transparent  text-nowrap gap-1"
                          onClick={handleOpen}
                        >
                          <MdOutlineCheckCircleOutline size={18} />
                          {t("close_deal")}
                        </button>
                        <button className="d-flex align-items-center border-0 bg-transparent  text-nowrap gap-1">
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
                        <button className="d-flex border-0 bg-transparent align-items-center gap-1">
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
                        <button className="d-flex align-items-center border-0 bg-transparent gap-1">
                          <RiDeleteBin2Line size={18} />
                          {t("delete")}
                        </button>
                      </div>
                    </td>
                  )}
                  <td className="d-table-cell align-middle py-3"></td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
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
      style={{
        ...statusStyles[statusKey],
        minHeight: "28px",
        width: "123px",
      }}
    >
      {translatedStatus}
    </span>
  );
};

export default AgreementsTable;
