import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TbMailForward } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import garagedoor from '../../assets/images/small door.png';
import { GoChevronRight } from "react-icons/go";
import house from '../../assets/images/garage_door.svg';
import { GoPerson } from "react-icons/go";

const tableData = [
    {
        status: "home_tab_r1_h2",
        commission: "20%",
        clients: "home_tab_r1_h4",
        agreementType: "home_tab_r1_h5",    
        date: "06.06.24",
        agreementName: 'home_tab_r1_h7',
        actionType: "genrated",
        icon: <FaWhatsapp />
    },
    {
        status: "home_tab_r2_h2",
        commission: "20%",
        clients: "home_tab_r1_h4",
        agreementType: "home_tab_r1_h5",
        date: "06.06.24",
        agreementName: 'home_tab_r1_h7',
        actionType: "sent",
        icon: <FaWhatsapp />
    },
    {
        status: "home_tab_r3_h2",
        commission: "20%",
        clients: "home_tab_r1_h4",
        agreementType: "home_tab_r1_h5",
        date: "06.06.24",
        agreementName: 'home_tab_r1_h7',
        actionType: "viewd",      
        icon: <FaWhatsapp />
    },
    {
        status: "home_tab_r4_h2",
        commission: "20%",
        clients: "home_tab_r1_h4",
        agreementType: "home_tab_r1_h5",
        date: "06.06.24",
        agreementName: 'home_tab_r1_h7',
        actionType: "signed",
        icon: <FaWhatsapp />
    },
    {
        status: "home_tab_r5_h2",
        commission: "20%",
        clients: "home_tab_r1_h4",
        agreementType: "home_tab_r1_h5",
        date: "06.06.24",
        agreementName: 'home_tab_r1_h7',
        actionType: "Signed and Executed",
    },
    {
        status: "home_tab_r6_h2",
        commission: "20%",
        clients: "home_tab_r1_h4",
        agreementType: "home_tab_r1_h5",
        date: "06.06.24",
        agreementName: 'home_tab_r1_h7',
        actionType: "sent",
    },
];

const ActionButtons = ({ type, icon }) => {
    const { t } = useTranslation();
    return (
        <div className="d-flex align-items-center gap-3 p-2 bg-white">
            {(type === "genrated"  || "sent" || "viewd") && (
                <>
                    <div className="d-flex align-items-center gap-1">
                        <TbMailForward />
                        <span>{t('home_tab_r1_h1_l4')}</span>
                    </div>
                    {icon && ( 
                        <div className="d-flex align-items-center gap-1">
                            {icon}
                            <span>{t("home_tab_r1_h1_l3")}</span>
                        </div>
                    )}
                    <span>{t("home_tab_r1_h1_l2")}</span>
                    <span>{t("home_tab_r1_h1_l1")}</span>
                </>
            )}
        </div>
    );
};

const StatusBadge = ({ status }) => {
    const { t} = useTranslation();

    const statusMap = {
        "Generated": "הופק",
        "Sent": "נשלח",
        "Viewed": "נצפה",
        "Signed": "נחתם",
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

const TableRow = ({ data }) => {
    const { t } = useTranslation();
    const { status, commission, clients, agreementType, date, agreementName, actionType, icon } = data;
    return (
        <tr>
            <td className="d-table-cell align-middle py-3">{t(agreementName)}</td>
            <td className="d-table-cell align-middle py-3">{date}</td>
            <td className="d-table-cell align-middle py-3">{t(agreementType)}</td>
            <td className="d-table-cell align-middle py-3">{t(clients)}</td>
            <td className="d-table-cell align-middle py-3">{commission}</td>
            <td className="d-table-cell align-middle py-3"><StatusBadge status={t(status)} /></td>
            <td className="d-table-cell align-middle py-3"><ActionButtons type={t(actionType)} icon={icon} /></td>
        </tr>
    );
};

const HomeTable = () => {
    const { t } = useTranslation();
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
                            <th className="table-head px-4 py-3">{t("home_tab_h3")}</th>
                            <th className="table-head px-4 py-3">{t("home_tab_h2")}</th>
                            <th className="table-head px-4 py-3">{t("home_tab_h1")}</th>
                        </tr>
                    </thead>
                    <tbody className="border">
                        {tableData.map((row, index) => (
                            <TableRow key={index} data={row} />
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="d-md-none">
                {tableData.map((row, index) => (
                    <div key={index} className="card mb-2 shadow-sm" style={{borderLeft: 
                        row.actionType === 'genrated' ? "6px solid #9ca3af" 
                      : row.actionType === 'viewd' ? "6px solid #dc2626" 
                      : row.actionType === "signed" ? "6px solid #10b981" 
                      : row.actionType === "sent" ? "6px solid #facc15"
                      : row.actionType === "Signed and Executed" ? "6px solid #fdba74"
                      : "none",}}>
                        <div className="p-3 d-flex align-items-center justify-content-between">
                            <img src={garagedoor} alt="garagedoor" className="me-3" />
                            <div className="flex-grow-1">
                                <p className="mb-1 text-muted">{row.date}</p>
                                <h4 className="fs-6 fw-bold mb-0">נורית 22 חיפה | קנייה</h4>
                            </div>
                            <StatusBadge status={row.status} />
                            <GoChevronRight style={{ width: "40px", height: "40px" }} />
                        </div>
                    </div>
                ))}
                <div className="p-3 bg-white rounded shadow-sm my-2 d-flex align-items-center justify-content-between">
                    <button className="hr_btn rounded-pill fw-semibold px-sm-5 px-3 py-2"> For all clients</button>
                    <div className="d-flex align-items-center flex-column">
                        <div className=" d-flex align-items-center">
                            <span className="fs-3 fw-bold text-teal">325</span>
                            <GoPerson size={24} style={{ color: '#10b981' }} />
                        </div>
                        <span className="text-success">לקוחות</span>
                    </div>
                </div>
                <div className="p-3 bg-white  rounded shadow-sm my-2 d-flex align-items-center justify-content-between">
                    <button className="hr_btn rounded-pill fw-semibold px-sm-5 px-3 py-2"> For all clients</button>
                    <div className="d-flex align-items-center flex-column">
                        <div className=" d-flex align-items-center">
                            <span className="fs-3 fw-bold text-teal" >123</span>
                            <img src={house} alt="garaz door" />
                        </div>
                        <span className="text-success">נכסים</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTable;





