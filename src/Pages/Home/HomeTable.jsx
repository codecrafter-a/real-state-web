import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TbMailForward } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import garagedoor from "../../assets/images/small door.png";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import house from "../../assets/images/garage_door.svg";
import { GoPerson } from "react-icons/go";
import { useAgreementServices } from "../../Services/AgreementServices";
import iconHome from "../../assets/images/icon_home.svg";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdAttach } from "react-icons/io";
import { FaRegFile } from "react-icons/fa6";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";
import { LuBookMinus } from "react-icons/lu";
import { Dropdown, Modal } from "react-bootstrap";
import cancel from "../../assets/images/cancel.png";
import successIcon from "../../assets/images/success_icon.svg";
import { useNavigate } from "react-router-dom";

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
      className=" text-center fw-semibold rounded-pill d-flex align-items-center justify-content-center"
      style={{ ...statusStyles[statusKey], minHeight: "28px" }}
    >
      {translatedStatus}
    </span>
  );
};

const HomeTable = () => {
  const navigate = useNavigate()
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const [tableData, setTableData] = useState([]);
  const { getAgreementData } = useAgreementServices();

  useEffect(() => {
    const data = getAgreementData();
    setTableData(data);
  }, []);

  const borderColors = {
    default: "#f87171",
    signed: "#10b981",
    executed: "#fdba74",
    registered: "#3b82f6",
    viewed: "#f87171",
  };
  const [removeData, setRemoveData] = useState(false);
  const handleOpen = () => {
    setRemoveData(true);
  };

  return (
    <div className="mt-4">
      <div className="table-responsive">
        <table className="table text-center d-none d-md-table">
          <thead>
            <tr>
              <th className="table-head px-4 py-3">{t("home_tab_h7")}</th>
              <th className="table-head px-4 py-3">{t("home_tab_h6")}</th>
              <th className="table-head px-4 py-3">{t("home_tab_h5")}</th>
              <th className="table-head px-4 py-3">{t("home_tab_h4")}</th>
              <th className="table-head px-0 py-3">{t("home_tab_h3")}</th>
              <th className="table-head px-4 py-3">{t("home_tab_h2")}</th>
              <th className="table-head px-4 py-3">{t("home_tab_h1")}</th>
            </tr>
          </thead>
          <tbody className="border">
            {tableData.map((row, index) => (
              <tr key={index} className=" fw-normal fs-15 lh-1">
                <td className="d-table-cell align-middle py-3">
                  <div className="d-flex align-items-center gap-1 text-auto">
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

                {(row.status == "home_tab_r3_h2" ||
                  row.status == "home_tab_r2_h2" ||
                  row.status == "home_tab_r1_h2") && (
                  <td className="d-table-cell align-middle py-3">
                    <div className="d-flex align-items-center gap-2 p-2 bg-white">
                      <div className="d-flex align-items-center gap-1 text-auto">
                        <span>
                          <TbMailForward size={18} />
                        </span>
                        <span>{t("home_tab_r1_h1_l4")}</span>
                      </div>
                      <div className="d-flex align-items-center gap-1 text-auto">
                        <span>
                          <FaWhatsapp size={18} />
                        </span>
                        <span>{t("home_tab_r1_h1_l3")}</span>
                      </div>
                      <span className="d-flex align-items-center gap-1 text-auto">
                        <span>
                          <IoMdAttach size={18} />
                        </span>
                        <span>{t("home_tab_r1_h1_l2")}</span>
                      </span>
                      <Dropdown className="d-flex align-items-center ">
                        <Dropdown.Toggle
                          as="div"
                          variant="light"
                          className="border-0 bg-transparent custom-dropdown-toggle d-flex align-items-center gap-1 cursor-pointer"
                        >
                          <HiOutlineDotsVertical size={18} />
                          {t("home_tab_r1_h1_l1")}
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ width: '200px' }} className=" z-3 shadow d-flex flex-column py-2 gap-1">
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
                {row.status == "home_tab_r4_h2" && (
                  <td className="d-table-cell align-middle py-3">
                    <div className="d-flex align-items-center gap-3 p-2 bg-white">
                      <div className="d-flex align-items-center gap-1 text-auto">
                        <span>
                          <FaRegFile size={16} />
                        </span>
                        <span>{t("open_agreement")}</span>
                      </div>
                      <div className="d-flex align-items-center gap-1 text-auto">
                        <span>
                          <TbMailForward size={18} />
                        </span>
                        <span>{t("send_copy")}</span>
                      </div>
                      <button
                        className="d-flex align-items-center border-0 bg-transparent  text-nowrap gap-1"
                        onClick={handleOpen}
                      >
                        <MdOutlineCheckCircleOutline size={18} />
                        {t("close_deal")}
                      </button>
                      <div className="d-flex align-items-center gap-1 text-auto">
                        <span>
                          <RiDeleteBin2Line size={18} />
                        </span>
                        <span>{t("delete")}</span>
                      </div>
                    </div>
                  </td>
                )}
                {row.status == "home_tab_r5_h2" && (
                  <td className="d-table-cell align-middle py-3">
                    <div className="d-flex align-items-center gap-3 p-2 bg-white">
                      <div className="d-flex align-items-center gap-1 text-auto">
                        <span>
                          <TbMailForward size={18} />
                        </span>
                        <span>{t("send_copy")}</span>
                      </div>
                      <div className="d-flex align-items-center gap-1 text-auto">
                        <span>
                          <LuBookMinus size={18} />
                        </span>
                        <span>{t("register_land")}</span>
                      </div>
                      <div className="d-flex align-items-center gap-1 text-auto">
                        <span>
                          <RiDeleteBin2Line size={18} />
                        </span>
                        <span>{t("delete")}</span>
                      </div>
                    </div>
                  </td>
                )}
                {row.status == "home_tab_r6_h2" && (
                  <td className="d-table-cell align-middle py-3">
                    <div className="d-flex align-items-center gap-3 p-2 bg-white">
                      <div className="d-flex align-items-center gap-1 text-auto">
                        <span>
                          <TbMailForward size={18} />
                        </span>
                        <span>{t("send_copy")}</span>
                      </div>
                      <div className="d-flex align-items-center gap-1 text-auto">
                        <span>
                          <RiDeleteBin2Line size={18} />
                        </span>
                        <span>{t("delete")}</span>
                      </div>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        show={removeData}
        onClick={() => setRemoveData(false)}
        centered
        className="modal-container"
      >
        <Modal.Header className="border-0 p-3 position-relative mt-4">
          <button
            type="button"
            className="btn-close position-absolute close-btn"
          ></button>
        </Modal.Header>
        <Modal.Body className="text-center p-4">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <img src={successIcon} alt="success icon open" className="" />
          </div>
          <h4 className="text-embed-500 fs-3 font-semibold">
            {t("modal_success")}
          </h4>
          <p className="fs-5 font-semibold pb-3">{t("modal_invoice")}</p>
          <div className="d-flex justify-content-center flex-wrap flex-md-nowrap justify-content-md-between gap-3">
            <button
              className="agent-btn-responsive2 w-50  rounded-pill px-3 py-2 fw-bold shadow-sm"
              onClick={() => setRemoveData(false)}
            >
              {t("modal_no")}
            </button>
            <button className="agent-btn-responsive1 w-50  rounded-pill px-3 py-2 fw-bold shadow-sm text-white">
              {t("modal_yes")}
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <div className="d-md-none">
        {tableData.map((row, index) => {
          const collapseId = `collapse-${index}`;
          console.log("Action Type:", row.actionType);
          return (
            <div
              key={index}
              className="card mb-2 shadow-sm"
              style={{
                borderInlineStart: `6px solid ${
                  borderColors[row.actionType] || "#f87171"
                }`, // fallback color
              }}
            >
              <div className="py-3 px-2 d-flex align-items-end justify-content-between">
                <div className="d-flex align-items-end gap-2_5">
                  <img src={garagedoor} alt="garagedoor" />
                  <div className="flex-grow-1">
                    <p className="mb-1 text-muted">{row.date}</p>
                    <h4 className="fs-6 fw-bold mb-0">{t("home_tab_card")}</h4>
                  </div>
                </div>
                <StatusBadge status={row.status} />

                <div
                  data-bs-toggle="collapse"
                  data-bs-target={`#${collapseId}`}
                  style={{ cursor: "pointer" }}
                >
                  {isRTL ? (
                    <GoChevronLeft style={{ width: "24px", height: "24px" }} />
                  ) : (
                    <GoChevronRight style={{ width: "24px", height: "24px" }} />
                  )}
                </div>
              </div>

              <div id={collapseId} className="collapse px-2 pb-3">
                <p className="mb-0">
                  <strong>Action Type:</strong> {row.actionType}
                </p>
                <p className="mb-0">
                  <strong>Additional Info:</strong>{" "}
                  {row.additionalInfo || "No extra details"}
                </p>
              </div>
            </div>
          );
        })}
        <div className="p-3 bg-white rounded shadow-sm my-2 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center flex-column">
            <div className=" d-flex align-items-center">
              <GoPerson size={24} style={{ color: "#10b981" }} />
              <span className="fs-3 fw-bold text-teal">325</span>
            </div>
            <span className="text-success">לקוחות</span>
          </div>
          <button className="hr_btn rounded-pill fw-semibold px-sm-5 px-3 py-2">
            {" "}
            {t("all_clients")}
          </button>
        </div>
        <div className="p-3 bg-white  rounded shadow-sm my-2 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center flex-column">
            <div className=" d-flex align-items-center">
              <img src={house} alt="garaz door" />
              <span className="fs-3 fw-bold text-teal">123</span>
            </div>
            <span className="text-success">נכסים</span>
          </div>
          <button className="hr_btn rounded-pill fw-semibold px-sm-5 px-3 py-2" onClick={() =>  navigate(`/${i18n.language}/Property`)}>
            {t("all_properties")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeTable;
